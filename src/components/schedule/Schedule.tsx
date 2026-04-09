import React, { useRef, useEffect, useMemo } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { format, isSameDay } from 'date-fns';
import type { TimeBlock, Task } from '../../types';
import { useDroppable } from '@dnd-kit/core';

interface ScheduleProps {
  selectedDate: string;
  timeBlocks: TimeBlock[];
  tasks: Task[];
  deleteTimeBlock: (id: string) => void;
  updateTimeBlock: (id: string, updates: Partial<TimeBlock>) => void;
  setDate: (date: string) => void;
  scheduleTask: (taskId: string, startTime: string, durationMinutes?: number) => void;
  unscheduleTask: (taskId: string) => void;
}

export const Schedule: React.FC<ScheduleProps> = ({
  selectedDate,
  timeBlocks,
  tasks,
  deleteTimeBlock,
  updateTimeBlock,
  setDate,
  scheduleTask,
  unscheduleTask,
}) => {
  const calendarRef = useRef<FullCalendar>(null);

  const scrollToCurrentTime = (smooth = true) => {
    if (!calendarRef.current) return;
    
    const calendarApi = calendarRef.current.getApi();
    if (calendarApi && isSameDay(new Date(), new Date(selectedDate))) {
      const now = new Date();
      const currentMinutes = now.getHours() * 60 + now.getMinutes();
      // Offset by 1 hour (60 mins) from the top
      const scrollMinutes = Math.max(0, currentMinutes - 60);
      
      const pixelsPerMinute = 40 / 15;
      const scrollTop = scrollMinutes * pixelsPerMinute;

      const scroller = (calendarRef.current as any).elRef.current?.querySelector('.fc-scroller');
      if (scroller) {
        scroller.scrollTo({
          top: scrollTop,
          behavior: smooth ? 'smooth' : 'auto'
        });
      }
    }
  };

  useEffect(() => {
    const calendarApi = calendarRef.current?.getApi();
    if (calendarApi) {
      const currentCalDate = format(calendarApi.getDate(), 'yyyy-MM-dd');
      if (currentCalDate !== selectedDate) {
        calendarApi.gotoDate(selectedDate);
      }
      setTimeout(() => scrollToCurrentTime(false), 200);
    }
  }, [selectedDate]);

  useEffect(() => {
    const interval = setInterval(() => {
      scrollToCurrentTime(true);
    }, 60000);
    return () => clearInterval(interval);
  }, [selectedDate]);

  const { setNodeRef, isOver } = useDroppable({
    id: 'calendar-droppable',
    data: {
      type: 'calendar'
    }
  });

  const events = useMemo(() => {
    return timeBlocks
      .filter(block => {
        const blockDate = format(new Date(block.startTime), 'yyyy-MM-dd');
        return blockDate === selectedDate;
      })
      .map(block => {
        const task = tasks.find(t => t.id === block.taskId);
        const isCompleted = task?.completed || false;
        const baseColor = isCompleted ? 'rgba(71, 85, 105, 0.4)' : (task?.color || block.color || 'rgba(11, 165, 233, 0.75)');
        
        return {
          id: block.id,
          title: block.title || 'Untitled',
          start: block.startTime,
          end: block.endTime,
          backgroundColor: baseColor,
          borderColor: baseColor,
          className: isCompleted ? 'event-completed' : '',
          extendedProps: { taskId: block.taskId, completed: isCompleted },
          display: 'block',
          // Use CSS variables for the glassy effect in the style tag
          styles: {
            '--fc-event-bg-color': baseColor.replace(/rgba?\((.*?)(?:,\s*[\d.]+)?\)/, 'rgba($1, 0.4)'), // Force transparency for glass effect
            '--fc-event-border-color': baseColor
          }
        };
      });
  }, [timeBlocks, tasks, selectedDate]);

  const handleEventChange = (info: any) => {
    const { event } = info;
    updateTimeBlock(event.id, {
      startTime: event.startStr,
      endTime: event.endStr
    });
  };

  const handleEventReceive = (info: any) => {
    const { event } = info;
    const taskId = event.extendedProps.taskId;
    const startTime = event.startStr;
    event.remove();
    if (taskId) {
      scheduleTask(taskId, startTime);
    }
  };

  const handleEventDragStop = (info: any) => {
    const { jsEvent, event } = info;
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
      const rect = sidebar.getBoundingClientRect();
      if (
        jsEvent.clientX >= rect.left &&
        jsEvent.clientX <= rect.right &&
        jsEvent.clientY >= rect.top &&
        jsEvent.clientY <= rect.bottom
      ) {
        if (event.extendedProps.taskId) {
          unscheduleTask(event.extendedProps.taskId);
        } else {
          deleteTimeBlock(event.id);
        }
      }
    }
  };

  return (
    <div 
      ref={setNodeRef}
      className="main-content" 
      style={{ 
        backgroundColor: isOver ? 'rgba(11, 165, 233, 0.05)' : 'transparent',
        transition: 'background-color 0.2s ease',
        borderRight: '1px solid var(--border)'
      }}
    >
      <header style={{ 
        flexShrink: 0,
        height: '70px',
        padding: '0 1.5rem', 
        borderBottom: '1px solid var(--border)', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        backgroundColor: 'rgba(15, 23, 42, 0.4)',
        zIndex: 10,
        backdropFilter: 'blur(8px)'
      }}>
        <h2 style={{ 
          fontSize: '1.1rem', 
          fontWeight: 600, 
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          color: 'var(--text-primary)',
          textShadow: '0 0 15px var(--accent)'
        }}>
          {format(new Date(selectedDate), 'EEEE, MMMM do')}
        </h2>
        <input 
          type="date" 
          value={selectedDate} 
          onChange={(e) => {
            const target = e.target;
            setDate(target.value);
            setTimeout(() => target.blur(), 10);
          }}
          style={{ 
            backgroundColor: 'rgba(15, 23, 42, 0.6)', 
            padding: '0.4rem 0.6rem', 
            borderRadius: '4px', 
            fontSize: '0.8rem',
            colorScheme: 'dark',
            border: '1px solid var(--border)',
            color: 'var(--text-primary)',
            fontFamily: 'inherit'
          }}
        />
      </header>

      <div className="calendar-wrapper" style={{ flex: 1 }}>
        <FullCalendar
          ref={calendarRef}
          plugins={[timeGridPlugin, interactionPlugin]}
          initialView="timeGridDay"
          headerToolbar={false}
          allDaySlot={false}
          slotDuration="00:15:00"
          slotLabelInterval="01:00"
          slotLabelFormat={{

            hour: 'numeric',
            minute: '2-digit',
            meridiem: 'short',
            hour12: true
          }}
          expandRows={true}
          height="100%"
          editable={true}
          selectable={false}
          droppable={true}
          forceEventDuration={true}
          events={events}
          eventChange={handleEventChange}
          eventReceive={handleEventReceive}
          eventDragStop={handleEventDragStop}
          nowIndicator={true}
          dayHeaders={false}
          themeSystem="standard"
          eventTextColor="#fff"
          eventDisplay="block"
          eventContent={(arg) => {
            const { taskId, completed } = arg.event.extendedProps;
            const task = tasks.find(t => t.id === taskId);
            
            // Recalculate base color to ensure it's always fresh from the task object
            const baseColor = completed 
              ? 'rgba(71, 85, 105, 0.4)' 
              : (task?.color || arg.event.backgroundColor || 'rgba(11, 165, 233, 0.75)');
            
            const glassColor = baseColor.replace(/rgba?\((.*?)(?:,\s*[\d.]+)?\)/, 'rgba($1, 0.4)');
            
            return (
              <div 
                className={`fc-event-glass-container ${completed ? 'event-completed' : ''}`}
                style={{
                  '--event-bg': glassColor,
                  '--event-border': baseColor,
                } as React.CSSProperties}
              >
                <div className="fc-event-title">{arg.event.title}</div>
              </div>
            );
          }}
        />
      </div>

      <style>{`
        .fc {
          --fc-border-color: var(--grid-line);
          --fc-now-indicator-color: var(--accent);
          --fc-today-bg-color: transparent;
          --fc-page-bg-color: transparent;
          --fc-neutral-bg-color: transparent;
          --fc-list-event-hover-bg-color: var(--bg-tertiary);
          font-family: inherit;
        }
        .fc .fc-timegrid-slot {
          height: 40px !important;
          border-bottom: 0;
          border-top: 1px solid var(--grid-line) !important;
        }
        .fc .fc-timegrid-slot-minor {
          border-top-style: solid !important;
          border-top-color: rgba(14, 165, 233, 0.15) !important;
        }
        .fc-theme-standard td, .fc-theme-standard th {
          border-color: var(--grid-line);
        }
        .fc-theme-standard .fc-scrollgrid {
          border: none;
        }
        .fc-theme-standard td {
          border-right: none !important;
        }
        .fc .fc-timegrid-now-indicator-line {
          border-width: 2px 0 0;
          box-shadow: 0 0 8px var(--accent);
        }
        .fc .fc-timegrid-slot-label {
          vertical-align: top !important;
          overflow: visible !important;
          border-top-color: transparent !important;
        }
        .fc .fc-timegrid-slot-label-cushion {
          display: block !important;
          padding: 0 8px 0 0 !important;
          color: var(--text-primary);
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transform: translateY(-50%);
          opacity: 1;
          text-shadow: 0 0 10px rgba(14, 165, 233, 0.5);
          white-space: nowrap;
          text-align: right;
          width: 65px;
        }
        .fc .fc-timegrid-axis-frame {
          justify-content: flex-end;
          padding: 0 8px 0 0 !important;
          color: var(--text-primary);
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          opacity: 1;
          text-shadow: 0 0 10px rgba(14, 165, 233, 0.5);
          white-space: nowrap;
          text-align: right;
          width: 65px;
          overflow: visible !important;
        }
        .fc-scroller {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        .fc-scroller::-webkit-scrollbar {
          display: none !important;
        }
        .fc-event {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          padding: 0 !important;
        }
        .fc-event-glass-container {
          width: 100%;
          height: 100%;
          border-radius: 4px;
          padding: 4px 6px;
          box-shadow: 0 0 10px rgba(0,0,0,0.3);
          cursor: grab;
          font-size: 0.95rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: var(--event-bg);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .fc-event-glass-container:not(.event-completed) {
          box-shadow: 0 0 12px var(--event-border);
          border-color: var(--event-border);
        }
        .fc-event-glass-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 3px;
          height: 100%;
          background: var(--event-border);
          box-shadow: 0 0 8px var(--event-border);
        }
        .fc-event-glass-container:not(.event-completed):hover {
          transform: scale(1.02);
          box-shadow: 0 0 20px var(--event-border);
          z-index: 5;
        }
        .fc-event:active .fc-event-glass-container {
          cursor: grabbing;
        }
        .event-completed {
          opacity: 0.6;
          box-shadow: none !important;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
        }
        .event-completed::before {
          box-shadow: none;
        }
        .event-completed .fc-event-title,
        .event-completed .fc-event-time {
          color: var(--reward) !important;
          text-shadow: none !important;
        }
        .fc-event-main-glass:not(.event-completed) .fc-event-title,
        .fc-event-main-glass:not(.event-completed) .fc-event-time {
          text-shadow: 0 1px 2px rgba(0,0,0,0.5);
        }
        .fc-timegrid-event .fc-event-title {
          font-weight: 500;
          letter-spacing: 0.02em;
        }
      `}</style>
    </div>
  );
};
;
