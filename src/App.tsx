import { Sidebar } from './components/sidebar/Sidebar';
import { Schedule } from './components/schedule/Schedule';
import { Notes } from './components/notes/Notes';
import { ActivityHeatmap } from './components/heatmap/ActivityHeatmap';
import { useStore } from './hooks/useStore';
import { useSystemAI } from './hooks/useSystemAI';
import { SystemNotifications } from './components/SystemNotifications';
import { CommandPalette } from './components/CommandPalette';
import { ExpandModal } from './components/ExpandModal';
import { BriefModal } from './components/BriefModal';
import { PlanModal } from './components/PlanModal';
import { DndContext } from '@dnd-kit/core';
import { useState, useCallback, useEffect } from 'react';
import { calculateDuration } from './hooks/usePlanningUtils';
import type { TimeRange } from './hooks/usePlanningUtils';
import type { Task } from './types';

function App() {
  const store = useStore();
  const { 
    tasks, timeBlocks, notes, selectedDate,
    addTask, addTasksBulk, toggleTask, deleteTask, updateTask, moveTaskToList,
    setDate, updateNote, updateTimeBlock, deleteTimeBlock,
    scheduleTask, bulkScheduleTasks, unscheduleTask
  } = store;

  const { messages, dismissMessage, dismissAllMessages, addMessage } = useSystemAI(tasks);

  // Filter and sort tasks for the currently selected date (Today list only)
  const todayTasksForDate = tasks.filter(t => t.list === 'today' && t.date === selectedDate);
  const unfinishedTasks = todayTasksForDate
    .filter(t => !t.completed)
    .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());

  // Identify which of those are not yet scheduled
  const scheduledTaskIds = new Set(timeBlocks.map(b => b.taskId));
  const unscheduledTasks = unfinishedTasks.filter(t => !scheduledTaskIds.has(t.id));

  // Modal States
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isExpandModalOpen, setIsExpandModalOpen] = useState(false);
  const [isBriefModalOpen, setIsBriefModalOpen] = useState(false);
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [selectedTaskForBrief, setSelectedTaskForBrief] = useState<Task | null>(null);

  const currentNote = notes[selectedDate] || '';

  const handleExpandSuccess = useCallback(async (newTasks: string[]) => {
    if (newTasks.length > 0) {
      await addTasksBulk(newTasks, 'today');
      addMessage('QUEST_CLEARED', 'SYSTEM EXPANDED', `${newTasks.length} new tasks synchronized to your log.`);
    }
  }, [addTasksBulk, addMessage]);

  const handleBriefSuccess = useCallback(async (brief: string) => {
    const trimmedNote = currentNote.trim();
    const updatedNote = trimmedNote ? `${trimmedNote}\n\n${brief.trim()}` : brief.trim();
    await updateNote(selectedDate, updatedNote);
    addMessage('QUEST_CLEARED', 'SYSTEM UPDATED', `Mission briefing appended to SYSTEM LOG.`);
  }, [currentNote, selectedDate, updateNote, addMessage]);

  const handlePlanSuccess = useCallback(async (timeRanges: TimeRange[], targetTaskIds: string[]) => {
    const planned: { id: string, start: string, duration: number }[] = [];
    
    // Sequentially assign ranges to the targeted tasks
    for (let i = 0; i < Math.min(timeRanges.length, targetTaskIds.length); i++) {
      const range = timeRanges[i];
      const taskId = targetTaskIds[i];
      
      planned.push({
        id: taskId,
        start: range.start,
        duration: calculateDuration(range.start, range.end)
      });
    }

    if (planned.length > 0) {
      await bulkScheduleTasks(planned);
      addMessage('QUEST_CLEARED', 'PLAN SYNCHRONIZED', `${planned.length} missions scheduled to your timeline.`);
    }
  }, [bulkScheduleTasks, addMessage]);

  const handleCommandSelect = useCallback(async (command: string, data?: any) => {
    if (command === 'expand') {
      setIsCommandPaletteOpen(false);
      setIsExpandModalOpen(true);
    } else if (command === 'brief') {
      setIsCommandPaletteOpen(false);
      setSelectedTaskForBrief(data?.task || null);
      setIsBriefModalOpen(true);
    } else if (command === 'plan') {
      setIsCommandPaletteOpen(false);
      setIsPlanModalOpen(true);
    }
  }, []);

  // Global key listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeEl = document.activeElement;
      const isTextArea = activeEl instanceof HTMLTextAreaElement;
      const isStandardInput = activeEl instanceof HTMLInputElement && 
                             (activeEl.type === 'text' || activeEl.type === 'number' || activeEl.type === 'password');
      
      // We block / if we are in a text-entry field, but allow it for other elements like date pickers
      const isTyping = isTextArea || isStandardInput;

      if (e.key === '/' && !isCommandPaletteOpen) {
        if (!isTyping) {
          e.preventDefault();
          if (activeEl instanceof HTMLElement) activeEl.blur();
          setIsCommandPaletteOpen(true);
        }
      }

      if (!isTyping && !isCommandPaletteOpen) {
        if (e.key === 'n') {
          e.preventDefault();
          document.getElementById('notes-textarea')?.focus();
        } else if (e.key === 't') {
          e.preventDefault();
          document.getElementById('task-input-today')?.focus();
        } else if (e.key === 'l') {
          e.preventDefault();
          document.getElementById('task-input-later')?.focus();
        }
      }

      if (e.key === 'Escape') {
        if (isCommandPaletteOpen) {
          setIsCommandPaletteOpen(false);
        } else if (isExpandModalOpen) {
          setIsExpandModalOpen(false);
        } else if (isBriefModalOpen) {
          setIsBriefModalOpen(false);
          setSelectedTaskForBrief(null);
        } else if (isPlanModalOpen) {
          setIsPlanModalOpen(false);
        } else if (activeEl instanceof HTMLInputElement || activeEl instanceof HTMLTextAreaElement) {
          activeEl.blur();
        }
        dismissAllMessages();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCommandPaletteOpen, isExpandModalOpen, isBriefModalOpen, isPlanModalOpen, dismissAllMessages]);

  return (
    <DndContext>
      <div className="app-container">
        <SystemNotifications messages={messages} onDismiss={dismissMessage} />
        
        <CommandPalette 
          isOpen={isCommandPaletteOpen}
          onClose={() => setIsCommandPaletteOpen(false)}
          onSelect={handleCommandSelect}
          tasks={todayTasksForDate}
        />

        {isExpandModalOpen && (
          <ExpandModal
            onClose={() => setIsExpandModalOpen(false)}
            onSuccess={handleExpandSuccess}
          />
        )}

        {isBriefModalOpen && (
          <BriefModal
            onClose={() => {
              setIsBriefModalOpen(false);
              setSelectedTaskForBrief(null);
            }}
            onSuccess={handleBriefSuccess}
            initialContent={selectedTaskForBrief?.title || ''}
          />
        )}

        {isPlanModalOpen && (
          <PlanModal
            onClose={() => setIsPlanModalOpen(false)}
            onSuccess={handlePlanSuccess}
            unfinishedTasks={unfinishedTasks}
            unscheduledTasks={unscheduledTasks}
          />
        )}

        <div className="app-sidebar-column">
          <Sidebar
            tasks={tasks}
            timeBlocks={timeBlocks}
            addTask={addTask}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            updateTask={updateTask}
            moveTaskToList={moveTaskToList}
            selectedDate={selectedDate}
          />
        </div>

        <Schedule
          selectedDate={selectedDate}
          timeBlocks={timeBlocks}
          tasks={tasks}
          deleteTimeBlock={deleteTimeBlock}
          updateTimeBlock={updateTimeBlock}
          setDate={setDate}
          scheduleTask={scheduleTask}
          unscheduleTask={unscheduleTask}
        />

        <div className="app-notes-column">
          <Notes
            date={selectedDate}
            note={currentNote}
            updateNote={updateNote}
          />
          <ActivityHeatmap tasks={tasks} />
        </div>
      </div>
    </DndContext>
  );
}

export default App;
