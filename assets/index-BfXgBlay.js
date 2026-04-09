import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{i as t,n,o as r,r as i,t as a}from"./vendor-calendar-gtNYyvFL.js";import{A as o,B as s,C as c,D as l,E as u,F as d,G as f,H as p,I as m,K as h,L as g,M as _,N as v,O as y,P as b,R as x,S,T as C,U as w,V as T,W as E,_ as D,a as O,b as k,c as A,d as j,f as M,g as N,h as P,i as F,j as I,k as L,l as R,m as z,n as B,o as ee,p as te,r as ne,s as V,t as H,u as U,v as W,w as re,x as ie,y as ae,z as oe}from"./vendor-core-DnN2k6LP.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var G=e(r(),1),K=e(h(),1),q=new class extends c{tasks;timeBlocks;notes;settings;constructor(){super(`TimeboxDatabase`),this.version(1).stores({tasks:`id, title, completed, list, date, createdAt`,timeBlocks:`id, taskId, title, startTime, endTime`,notes:`date`,settings:`key`})}},J=te(),se=(0,G.memo)(({task:e,timeBlock:t,toggleTask:n,deleteTask:r,updateTask:i,moveTask:a,moveIcon:o})=>{let[s,c]=(0,G.useState)(!1),[u,d]=(0,G.useState)(!1);(0,G.useEffect)(()=>(s?document.body.classList.add(`picker-open`):document.body.classList.remove(`picker-open`),()=>{document.body.classList.remove(`picker-open`)}),[s]);let{refs:f,floatingStyles:p,context:m}=O({open:s,onOpenChange:c,middleware:[U(10),R(),j()],whileElementsMounted:M,placement:`right-start`}),{refs:h,floatingStyles:_,context:y}=O({open:u,onOpenChange:d,middleware:[U(10),R(),j()],whileElementsMounted:M,placement:`top-start`}),{getReferenceProps:S,getFloatingProps:C}=V([ne(m),F(m)]),{getReferenceProps:w,getFloatingProps:T}=V([ee(y,{delay:0}),A(y,{role:`tooltip`})]),E=t=>{let{r:n,g:r,b:a,a:o}=t.rgb;i(e.id,{color:`rgba(${n}, ${r}, ${a}, ${o})`})};return(0,J.jsx)(`div`,{className:`draggable-task-item task-item-container`,"data-task-id":e.id,"data-title":e.title,"data-color":e.color||`rgba(11, 165, 233, 0.75)`,style:{"--task-accent":e.color||`var(--accent)`},children:(0,J.jsxs)(`div`,{className:`task-item-content`,children:[(0,J.jsx)(`div`,{ref:h.setReference,className:`task-item-drag-handle`,...w(),children:(0,J.jsx)(b,{size:14})}),u&&(0,J.jsx)(B,{children:(0,J.jsx)(`div`,{ref:h.setFloating,style:_,className:`task-tooltip`,...T(),children:e.title})}),(0,J.jsx)(`button`,{className:`task-item-toggle`,onClick:t=>{t.stopPropagation(),n(e.id)},children:e.completed?(0,J.jsx)(oe,{size:18,color:`var(--reward)`,fill:`var(--reward)`,fillOpacity:.2}):(0,J.jsx)(x,{size:18,color:`var(--accent)`})}),(0,J.jsxs)(`div`,{className:`task-item-body`,children:[(0,J.jsx)(`div`,{className:`task-item-title ${e.completed?`completed`:``}`,children:e.title}),t&&(0,J.jsxs)(`div`,{className:`task-item-time`,children:[(0,J.jsx)(g,{size:10,color:`var(--accent)`}),D(new Date(t.startTime),`h:mm a`)]})]}),(0,J.jsxs)(`div`,{className:`task-actions`,onClick:e=>e.stopPropagation(),children:[(0,J.jsxs)(`div`,{className:`relative-container`,children:[(0,J.jsx)(`button`,{ref:f.setReference,...S({onClick(e){e.stopPropagation()}}),title:`Change color`,className:`action-btn`,children:(0,J.jsx)(v,{size:14})}),s&&(0,J.jsx)(B,{children:(0,J.jsx)(`div`,{ref:f.setFloating,style:{...p,zIndex:99999},...C({onClick(e){e.stopPropagation()}}),children:(0,J.jsx)(z,{color:e.color||`rgba(11, 165, 233, 0.75)`,onChange:E,disableAlpha:!1})})})]}),(0,J.jsx)(`button`,{className:`action-btn`,onClick:e=>{e.stopPropagation(),a()},title:`Move task`,children:o}),(0,J.jsx)(`button`,{className:`action-btn`,onClick:t=>{t.stopPropagation(),r(e.id)},title:`Delete task`,children:(0,J.jsx)(l,{size:14})})]})]})})}),Y=({title:e,placeholder:t,tasks:n,timeBlocks:r,type:i,addTask:a,toggleTask:o,deleteTask:s,updateTask:c,moveTaskToList:l})=>{let[u,d]=(0,G.useState)(``),f=e=>{e.preventDefault(),u.trim()&&(a(u.trim(),i),d(``))},m=i===`today`?`later`:`today`,h=i===`today`?p:w,g=[...n].sort((e,t)=>e.completed===t.completed?new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime():e.completed?1:-1);return(0,J.jsxs)(`section`,{className:`task-list-section`,children:[(0,J.jsx)(`h2`,{className:`task-list-header`,children:e}),(0,J.jsx)(`form`,{onSubmit:f,className:`task-input-form`,children:(0,J.jsxs)(`div`,{className:`task-input-wrapper`,children:[(0,J.jsx)(_,{size:16,className:`task-input-icon`}),(0,J.jsx)(`input`,{id:`task-input-${i}`,type:`text`,placeholder:t,value:u,onChange:e=>d(e.target.value),className:`task-input`,autoComplete:`off`})]})}),(0,J.jsx)(`div`,{className:`task-list`,children:g.map(e=>(0,J.jsx)(se,{task:e,timeBlock:r.find(t=>t.taskId===e.id),toggleTask:o,deleteTask:s,updateTask:c,moveTask:()=>l(e.id,m),moveIcon:(0,J.jsx)(h,{size:14})},e.id))})]})},ce=({tasks:e,timeBlocks:t,addTask:n,toggleTask:r,deleteTask:a,updateTask:o,moveTaskToList:s,selectedDate:c})=>{let l=(0,G.useRef)(null),d=(0,G.useRef)(null);(0,G.useEffect)(()=>{if(l.current){let e=new i(l.current,{itemSelector:`.draggable-task-item`,eventData:function(e){let t=e.getAttribute(`data-color`)||`rgba(11, 165, 233, 0.75)`;return{title:e.getAttribute(`data-title`),duration:`01:00`,backgroundColor:t,borderColor:t,extendedProps:{taskId:e.getAttribute(`data-task-id`),styles:{"--fc-event-bg-color":t.replace(/rgba?\((.*?)(?:,\s*[\d.]+)?\)/,`rgba($1, 0.4)`),"--fc-event-border-color":t}}}}});return()=>e.destroy()}},[]);let{setNodeRef:p,isOver:h}=f({id:`sidebar-droppable`}),g=async()=>{try{let e=await ie(q),t=URL.createObjectURL(e),n=document.createElement(`a`);n.href=t,n.download=`timebox-backup-${new Date().toISOString().split(`T`)[0]}.json`,n.click(),URL.revokeObjectURL(t)}catch(e){console.error(`Export failed:`,e),alert(`Backup failed. See console for details.`)}},_=()=>{d.current?.click()},v=async e=>{let t=e.target.files?.[0];if(t)try{await q.delete(),await S(t),window.location.reload()}catch(e){console.error(`Import failed:`,e),alert(`Restore failed. Make sure you selected a valid backup file.`);try{await q.open()}catch{}}},y=e.filter(e=>e.list===`today`&&e.date===c),b=e.filter(e=>e.list===`later`);return(0,J.jsxs)(`aside`,{ref:e=>{p(e),l.current=e},className:`sidebar ${h?`sidebar-droppable-active`:``}`,children:[(0,J.jsxs)(`div`,{className:`sidebar-header`,children:[(0,J.jsx)(`h1`,{className:`sidebar-title`,style:{flex:1},children:`THE SYSTEM`}),(0,J.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`},children:[(0,J.jsx)(`button`,{className:`action-btn`,onClick:g,title:`Export Backup`,children:(0,J.jsx)(u,{size:18})}),(0,J.jsx)(`button`,{className:`action-btn`,onClick:_,title:`Import Restore`,children:(0,J.jsx)(m,{size:18})}),(0,J.jsx)(`input`,{type:`file`,ref:d,onChange:v,style:{display:`none`},accept:`.json`})]})]}),(0,J.jsxs)(`div`,{className:`scrollable sidebar-content`,children:[(0,J.jsx)(Y,{title:`Today`,placeholder:`Add task to today...`,tasks:y,timeBlocks:t,type:`today`,addTask:n,toggleTask:r,deleteTask:a,updateTask:o,moveTaskToList:s}),(0,J.jsx)(Y,{title:`Later`,placeholder:`Brain dump...`,tasks:b,timeBlocks:t,type:`later`,addTask:n,toggleTask:r,deleteTask:a,updateTask:o,moveTaskToList:s})]})]})},le=({selectedDate:e,timeBlocks:r,tasks:i,deleteTimeBlock:o,updateTimeBlock:s,setDate:c,scheduleTask:l,unscheduleTask:u})=>{let d=(0,G.useRef)(null),p=(t=!0)=>{if(d.current&&d.current.getApi()&&k(new Date,new Date(e))){let e=new Date,n=e.getHours()*60+e.getMinutes(),r=Math.max(0,n-60)*(40/15),i=d.current.elRef.current?.querySelector(`.fc-scroller`);i&&i.scrollTo({top:r,behavior:t?`smooth`:`auto`})}};(0,G.useEffect)(()=>{let t=d.current?.getApi();t&&(D(t.getDate(),`yyyy-MM-dd`)!==e&&t.gotoDate(e),setTimeout(()=>p(!1),200))},[e]),(0,G.useEffect)(()=>{let e=setInterval(()=>{p(!0)},6e4);return()=>clearInterval(e)},[e]);let{setNodeRef:m,isOver:h}=f({id:`calendar-droppable`,data:{type:`calendar`}}),g=(0,G.useMemo)(()=>r.filter(t=>D(new Date(t.startTime),`yyyy-MM-dd`)===e).map(e=>{let t=i.find(t=>t.id===e.taskId),n=t?.completed||!1,r=n?`rgba(71, 85, 105, 0.4)`:t?.color||e.color||`rgba(11, 165, 233, 0.75)`;return{id:e.id,title:e.title||`Untitled`,start:e.startTime,end:e.endTime,backgroundColor:r,borderColor:r,className:n?`event-completed`:``,extendedProps:{taskId:e.taskId,completed:n},display:`block`,styles:{"--fc-event-bg-color":r.replace(/rgba?\((.*?)(?:,\s*[\d.]+)?\)/,`rgba($1, 0.4)`),"--fc-event-border-color":r}}}),[r,i,e]);return(0,J.jsxs)(`div`,{ref:m,className:`main-content`,style:{backgroundColor:h?`rgba(11, 165, 233, 0.05)`:`transparent`,transition:`background-color 0.2s ease`,borderRight:`1px solid var(--border)`},children:[(0,J.jsxs)(`header`,{style:{flexShrink:0,height:`70px`,padding:`0 1.5rem`,borderBottom:`1px solid var(--border)`,display:`flex`,justifyContent:`space-between`,alignItems:`center`,backgroundColor:`rgba(15, 23, 42, 0.4)`,zIndex:10,backdropFilter:`blur(8px)`},children:[(0,J.jsx)(`h2`,{style:{fontSize:`1.1rem`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.2em`,color:`var(--text-primary)`,textShadow:`0 0 15px var(--accent)`},children:D(new Date(e),`EEEE, MMMM do`)}),(0,J.jsx)(`input`,{type:`date`,value:e,onChange:e=>{let t=e.target;c(t.value),setTimeout(()=>t.blur(),10)},style:{backgroundColor:`rgba(15, 23, 42, 0.6)`,padding:`0.4rem 0.6rem`,borderRadius:`4px`,fontSize:`0.8rem`,colorScheme:`dark`,border:`1px solid var(--border)`,color:`var(--text-primary)`,fontFamily:`inherit`}})]}),(0,J.jsx)(`div`,{className:`calendar-wrapper`,style:{flex:1},children:(0,J.jsx)(n,{ref:d,plugins:[a,t],initialView:`timeGridDay`,headerToolbar:!1,allDaySlot:!1,slotDuration:`00:15:00`,slotLabelInterval:`01:00`,slotLabelFormat:{hour:`numeric`,minute:`2-digit`,meridiem:`short`,hour12:!0},expandRows:!0,height:`100%`,editable:!0,selectable:!1,droppable:!0,forceEventDuration:!0,events:g,eventChange:e=>{let{event:t}=e;s(t.id,{startTime:t.startStr,endTime:t.endStr})},eventReceive:e=>{let{event:t}=e,n=t.extendedProps.taskId,r=t.startStr;t.remove(),n&&l(n,r)},eventDragStop:e=>{let{jsEvent:t,event:n}=e,r=document.querySelector(`.sidebar`);if(r){let e=r.getBoundingClientRect();t.clientX>=e.left&&t.clientX<=e.right&&t.clientY>=e.top&&t.clientY<=e.bottom&&(n.extendedProps.taskId?u(n.extendedProps.taskId):o(n.id))}},nowIndicator:!0,dayHeaders:!1,themeSystem:`standard`,eventTextColor:`#fff`,eventDisplay:`block`,eventContent:e=>{let{taskId:t,completed:n}=e.event.extendedProps,r=i.find(e=>e.id===t),a=n?`rgba(71, 85, 105, 0.4)`:r?.color||e.event.backgroundColor||`rgba(11, 165, 233, 0.75)`,o=a.replace(/rgba?\((.*?)(?:,\s*[\d.]+)?\)/,`rgba($1, 0.4)`);return(0,J.jsx)(`div`,{className:`fc-event-glass-container ${n?`event-completed`:``}`,style:{"--event-bg":o,"--event-border":a},children:(0,J.jsx)(`div`,{className:`fc-event-title`,children:e.event.title})})}})}),(0,J.jsx)(`style`,{children:`
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
      `})]})},ue=({date:e,note:t,updateNote:n})=>{let[r,i]=(0,G.useState)(t),a=G.useRef(null);return(0,G.useEffect)(()=>{i(t)},[e,t]),(0,J.jsxs)(`div`,{className:`notes-panel`,children:[(0,J.jsx)(`header`,{className:`notes-header`,children:(0,J.jsx)(`h2`,{className:`notes-title`,children:`SYSTEM LOG`})}),(0,J.jsx)(`div`,{className:`notes-content`,children:(0,J.jsx)(`textarea`,{id:`notes-textarea`,ref:a,placeholder:`Start writing... (Brain dump, rough work, planning)`,value:r||``,onChange:e=>i(e.target.value),onBlur:()=>{r!==t&&n(e,r)},onKeyDown:e=>{e.key===`Escape`&&a.current?.blur()},className:`notes-textarea`})})]})},de=({tasks:e})=>{let t=(0,G.useMemo)(()=>{let e=new Date;return W({start:P(e,84),end:e})},[]),n=t=>{let n=D(t,`yyyy-MM-dd`),r=e.filter(e=>e.date===n&&e.completed).length;return r===0?0:r<2?1:r<4?2:3},r=[`rgba(14, 165, 233, 0.05)`,`rgba(14, 165, 233, 0.3)`,`rgba(14, 165, 233, 0.6)`,`rgba(14, 165, 233, 1)`];return(0,J.jsxs)(`div`,{className:`activity-heatmap`,children:[(0,J.jsx)(`h3`,{className:`heatmap-title`,children:`SYSTEM PROGRESS`}),(0,J.jsx)(`div`,{className:`heatmap-grid`,children:t.map(e=>{let t=n(e);return(0,J.jsx)(`div`,{title:D(e,`MMM do`),className:`heatmap-cell`,style:{backgroundColor:r[t]}},e.toISOString())})})]})};function fe(){let[e,t]=(0,G.useState)(()=>D(new Date,`yyyy-MM-dd`)),n=H(()=>q.tasks.toArray(),[])||[],r=H(()=>q.timeBlocks.toArray(),[])||[],i=H(()=>q.notes.toArray(),[])||[],a=(0,G.useMemo)(()=>i.reduce((e,t)=>(e[t.date]=t.content,e),{}),[i]),o=(0,G.useCallback)(async(t,n)=>{let r={id:Math.random().toString(36).substr(2,9),title:t,completed:!1,list:n,color:`rgba(11, 165, 233, 0.75)`,createdAt:new Date().toISOString(),date:n===`today`?e:void 0};await q.tasks.add(r)},[e]),s=(0,G.useCallback)(async(t,n)=>{let r=new Date().getTime(),i=t.map((t,i)=>({id:Math.random().toString(36).substr(2,9),title:t,completed:!1,list:n,color:`rgba(11, 165, 233, 0.75)`,createdAt:new Date(r+i).toISOString(),date:n===`today`?e:void 0}));await q.tasks.bulkAdd(i)},[e]),c=(0,G.useCallback)(async e=>{let t=await q.tasks.get(e);t&&await q.tasks.update(e,{completed:!t.completed})},[]),l=(0,G.useCallback)(async e=>{await q.transaction(`rw`,q.tasks,q.timeBlocks,async()=>{await q.tasks.delete(e),await q.timeBlocks.where(`taskId`).equals(e).delete()})},[]),u=(0,G.useCallback)(async(e,t)=>{await q.transaction(`rw`,q.tasks,q.timeBlocks,async()=>{await q.tasks.update(e,t),t.color&&await q.timeBlocks.where(`taskId`).equals(e).modify({color:t.color})})},[]),d=(0,G.useCallback)(async(e,t)=>{await q.tasks.update(e,{title:t})},[]),f=(0,G.useCallback)(async(t,n)=>{let r=n===`today`?e:void 0;await q.transaction(`rw`,q.tasks,q.timeBlocks,async()=>{await q.tasks.update(t,{list:n,date:r}),n===`later`&&await q.timeBlocks.where(`taskId`).equals(t).delete()})},[e]),p=(0,G.useCallback)(async(e,t,n=60)=>{let r=new Date(t),i=new Date(r.getTime()+n*6e4),a=D(r,`yyyy-MM-dd`);await q.transaction(`rw`,q.tasks,q.timeBlocks,async()=>{let t=await q.tasks.get(e);if(!t)return;await q.tasks.update(e,{list:`today`,date:a});let n={id:Math.random().toString(36).substr(2,9),taskId:e,title:t.title,startTime:r.toISOString(),endTime:i.toISOString(),color:t.color||`rgba(11, 165, 233, 0.75)`};await q.timeBlocks.where(`taskId`).equals(e).delete(),await q.timeBlocks.add(n)})},[]),m=(0,G.useCallback)(async e=>{await q.timeBlocks.where(`taskId`).equals(e).delete()},[]);return{tasks:n,timeBlocks:r,notes:a,selectedDate:e,addTask:o,addTasksBulk:s,toggleTask:c,deleteTask:l,updateTask:u,updateTaskTitle:d,moveTaskToList:f,setDate:(0,G.useCallback)(e=>{t(e)},[]),updateNote:(0,G.useCallback)(async(e,t)=>{await q.notes.put({date:e,content:t})},[]),updateTimeBlock:(0,G.useCallback)(async(e,t)=>{await q.timeBlocks.update(e,t)},[]),deleteTimeBlock:(0,G.useCallback)(async e=>{await q.timeBlocks.delete(e)},[]),scheduleTask:p,bulkScheduleTasks:(0,G.useCallback)(async t=>{await q.transaction(`rw`,q.tasks,q.timeBlocks,async()=>{for(let n of t){let t=await q.tasks.get(n.id);if(!t)continue;let[r,i]=n.start.split(`:`).map(Number),a=r*60+i,o=Math.round(a/15)*15;r=Math.floor(o/60),i=o%60;let s=new Date(e+`T00:00:00`);s.setHours(r,i,0,0);let c=new Date(s.getTime()+n.duration*6e4),l={id:Math.random().toString(36).substr(2,9),taskId:n.id,title:t.title,startTime:s.toISOString(),endTime:c.toISOString(),color:t.color||`rgba(11, 165, 233, 0.75)`};await q.timeBlocks.where(`taskId`).equals(n.id).delete(),await q.timeBlocks.add(l),await q.tasks.update(n.id,{list:`today`,date:e})}})},[e]),unscheduleTask:m}}function pe(e){let[t,n]=(0,G.useState)([]),r=(0,G.useRef)([]),i=(0,G.useCallback)((e,t,r)=>{let i=Math.random().toString(36).substr(2,9);n(n=>[...n,{id:i,type:e,title:t,description:r}])},[]),a=(0,G.useCallback)(e=>{n(t=>t.filter(t=>t.id!==e))},[]),o=(0,G.useCallback)(()=>{n([])},[]);return(0,G.useEffect)(()=>{let t=r.current;t.length>0&&e.forEach(e=>{let n=t.find(t=>t.id===e.id);if(n&&!n.completed&&e.completed){let t=[`XP Gained: +100`,`Skill Point Awarded`,`Fatigue Reduced`,`Level Progress: 15%`],n=t[Math.floor(Math.random()*t.length)];i(`QUEST_CLEARED`,`QUEST CLEARED`,`Task "${e.title}" completed. ${n}`)}}),r.current=e},[e,i]),(0,G.useEffect)(()=>{sessionStorage.getItem(`system_greeted`)||(i(`QUEST_CLEARED`,`SYSTEM INITIALIZED`,`Welcome back, Player. Today's missions are ready.`),sessionStorage.setItem(`system_greeted`,`true`))},[i]),{messages:t,dismissMessage:a,dismissAllMessages:o,addMessage:i}}var me=({messages:e,onDismiss:t})=>(0,J.jsxs)(`div`,{className:`system-notifications-container`,children:[e.map(e=>(0,J.jsx)(he,{message:e,onDismiss:()=>t(e.id)},e.id)),(0,J.jsx)(`style`,{children:`
        .system-notifications-container {
          position: fixed;
          top: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 999999;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          pointer-events: none;
        }
        .system-notification {
          background: rgba(2, 6, 23, 0.9);
          backdrop-filter: blur(12px);
          border: 1px solid var(--accent);
          padding: 1rem 2rem;
          border-radius: 4px;
          min-width: 300px;
          box-shadow: 0 0 30px rgba(14, 165, 233, 0.4);
          display: flex;
          align-items: center;
          gap: 1rem;
          animation: system-slide-down 0.5s cubic-bezier(0.16, 1, 0.3, 1), 
                     system-glow 2s infinite alternate;
          pointer-events: auto;
          cursor: pointer;
        }
        @keyframes system-slide-down {
          from { transform: translateY(-50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes system-glow {
          from { box-shadow: 0 0 20px rgba(14, 165, 233, 0.2); }
          to { box-shadow: 0 0 40px rgba(14, 165, 233, 0.5); }
        }
        .system-notification-icon {
          color: var(--accent);
          filter: drop-shadow(0 0 5px var(--accent));
        }
        .system-notification-content {
          flex: 1;
        }
        .system-notification-title {
          font-family: var(--font-family);
          color: var(--accent);
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
        }
        .system-notification-desc {
          font-family: var(--font-family);
          color: #94a3b8;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
      `})]}),he=({message:e,onDismiss:t})=>((0,G.useEffect)(()=>{let e=setTimeout(t,5e3);return()=>clearTimeout(e)},[t]),(0,J.jsxs)(`div`,{className:`system-notification`,onClick:t,children:[(()=>{switch(e.type){case`LEVEL_UP`:return(0,J.jsx)(y,{className:`system-notification-icon`,size:24});case`SKILL_AWAKENED`:return(0,J.jsx)(re,{className:`system-notification-icon`,size:24});default:return(0,J.jsx)(o,{className:`system-notification-icon`,size:24})}})(),(0,J.jsxs)(`div`,{className:`system-notification-content`,children:[(0,J.jsx)(`div`,{className:`system-notification-title`,children:e.title}),(0,J.jsx)(`div`,{className:`system-notification-desc`,children:e.description})]})]})),ge=({isOpen:e,onClose:t,onSelect:n,tasks:r=[]})=>{let[i,a]=(0,G.useState)(`COMMANDS`),[o,s]=(0,G.useState)(0),[c,l]=(0,G.useState)(``),[u,f]=(0,G.useState)(!1),m=(0,G.useRef)(null),h=[{id:`expand`,label:`Expand Tasks (AI)`,icon:(0,J.jsx)(L,{size:14})},{id:`brief`,label:`Brief Task (AI)`,icon:(0,J.jsx)(d,{size:14})},{id:`plan`,label:`Strategic Planning (AI)`,icon:(0,J.jsx)(T,{size:14})}],g=r.filter(e=>e.title.toLowerCase().includes(c.toLowerCase())).sort((e,t)=>e.completed===t.completed?new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime():e.completed?1:-1),_=i===`COMMANDS`?h:g;(0,G.useEffect)(()=>{if(!e)return;let t=setTimeout(()=>{if(m.current?.focus(),m.current){let e=m.current.value;m.current.value=``,m.current.value=e}},10);return()=>clearTimeout(t)},[i,e]),(0,G.useEffect)(()=>{e&&(a(`COMMANDS`),l(``),s(0),f(!1))},[e]);let v=async()=>{if(i===`COMMANDS`){let e=h[o];e.id===`brief`?(a(`SELECT_TASK`),l(``),s(0)):e.id===`expand`?n(`expand`):e.id===`plan`?n(`plan`):n(e.id)}else if(i===`SELECT_TASK`){let e=g[o];e&&n(`brief`,{task:e})}};return(0,G.useEffect)(()=>{let n=n=>{!e||u||(n.key===`ArrowDown`&&(i===`COMMANDS`||i===`SELECT_TASK`)?(n.preventDefault(),s(e=>(e+1)%(_.length||1))):n.key===`ArrowUp`&&(i===`COMMANDS`||i===`SELECT_TASK`)?(n.preventDefault(),s(e=>(e-1+(_.length||1))%(_.length||1))):n.key===`Enter`?(n.preventDefault(),v()):n.key===`Escape`&&(i===`SELECT_TASK`?(a(`COMMANDS`),s(0)):t()))};return window.addEventListener(`keydown`,n,!0),()=>window.removeEventListener(`keydown`,n,!0)},[e,o,_,i,u]),e?(0,J.jsxs)(B,{children:[(0,J.jsx)(`div`,{className:`command-palette-overlay`,onClick:t,children:(0,J.jsxs)(`div`,{className:`command-palette glass-panel glow-border`,onClick:e=>e.stopPropagation(),children:[(0,J.jsx)(`div`,{className:`command-palette-search`,children:(0,J.jsx)(`input`,{ref:m,type:`text`,placeholder:i===`COMMANDS`?`Search system commands...`:`Select task to brief...`,value:c,onChange:e=>{l(e.target.value),s(0)}})}),(0,J.jsx)(`div`,{className:`command-list scrollable-palette`,children:_.length>0?_.map((e,t)=>(0,J.jsxs)(`button`,{className:`command-item ${t===o?`selected`:``}`,onClick:()=>{s(t),v()},onMouseEnter:()=>s(t),children:[i===`COMMANDS`?e.icon:(0,J.jsx)(`div`,{className:`task-dot`,style:{background:e.color}}),(0,J.jsx)(`span`,{className:`truncate`,children:i===`COMMANDS`?e.label:e.title}),i===`COMMANDS`&&e.id!==`expand`&&e.id!==`plan`&&(0,J.jsx)(p,{size:12,className:`ml-auto opacity-50`})]},e.id)):(0,J.jsx)(`div`,{className:`no-results`,children:`No matches found.`})})]})}),(0,J.jsx)(`style`,{children:`
        .command-palette-overlay {
          position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 1000000;
          display: flex; justify-content: center; padding-top: 15vh;
          background: rgba(2, 6, 23, 0.4); backdrop-filter: blur(2px);
        }
        .command-palette {
          width: 90%; max-width: 500px; height: fit-content; max-height: 500px;
          border-radius: 8px; box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
          background: rgba(15, 23, 42, 0.98); overflow: hidden; border: 1px solid var(--border);
          display: flex; flex-direction: column;
        }
        .command-palette-search { padding: 12px 16px; border-bottom: 1px solid var(--border); flex-shrink: 0; }
        .command-palette-search input {
          width: 100%; font-family: var(--font-family); color: var(--accent);
          font-size: 1rem; letter-spacing: 0.05em; background: transparent; border: none; outline: none;
        }
        .scrollable-palette { overflow-y: auto; padding: 8px; }
        .command-item {
          width: 100%; display: flex; align-items: center; gap: 12px; padding: 10px 16px;
          border-radius: 4px; text-align: left; font-family: var(--font-family); font-size: 0.9rem;
          color: var(--text-primary); transition: all 0.1s ease; background: transparent; border: 1px solid transparent;
        }
        .command-item.selected { background: rgba(14, 165, 233, 0.2); text-shadow: 0 0 8px var(--accent); border-color: var(--border); }
        .command-item span { letter-spacing: 0.05em; }
        .truncate { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; flex: 1; }
        .task-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
        .no-results { padding: 20px; text-align: center; color: var(--text-secondary); font-family: var(--font-family); font-size: 0.8rem; text-transform: uppercase; }
        .instruction-stage, .planning-stage { padding: 16px; overflow-y: auto; }
        .stage-header { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; }
        .stage-header h3 { font-family: var(--font-family); font-size: 1rem; letter-spacing: 0.2em; color: var(--reward); }
        .planning-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
        .planning-field label { display: block; font-size: 0.7rem; text-transform: uppercase; color: var(--text-secondary); margin-bottom: 8px; letter-spacing: 0.1em; }
        .planning-field.full { grid-column: span 2; }
        .system-slider { width: 100%; accent-color: var(--reward); }
        .system-time-input { width: 100%; background: rgba(2, 6, 23, 0.5); border: 1px solid var(--border); border-radius: 4px; padding: 8px; color: var(--text-primary); font-family: var(--font-family); color-scheme: dark; }
        .task-preview { margin-bottom: 12px; font-family: var(--font-family); font-size: 0.8rem; display: flex; gap: 8px; }
        .task-preview .label { color: var(--text-secondary); text-transform: uppercase; }
        .task-preview .task-name { color: var(--accent); font-weight: bold; }
        .palette-textarea {
          width: 100%; height: 80px; background: rgba(2, 6, 23, 0.5); border: 1px solid var(--border);
          border-radius: 4px; padding: 12px; color: var(--text-primary); font-family: var(--font-family);
          font-size: 0.9rem; resize: none; outline: none;
        }
        .palette-textarea:focus { border-color: var(--accent); }
        .palette-footer { text-align: center; }
        .action-btn-large {
          width: 100%; display: flex; align-items: center; justify-content: center; gap: 10px;
          background: rgba(14, 165, 233, 0.1); border: 1px solid var(--accent); padding: 12px;
          border-radius: 4px; color: var(--accent); font-family: var(--font-family);
          text-transform: uppercase; letter-spacing: 0.2em; transition: all 0.3s ease;
        }
        .action-btn-large:hover:not(:disabled) { background: rgba(14, 165, 233, 0.2); box-shadow: 0 0 20px rgba(14, 165, 233, 0.4); }
        .action-btn-large:disabled { opacity: 0.3; cursor: not-allowed; }
        .kb-hint { font-size: 0.65rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em; }
        .mt-4 { margin-top: 1rem; }
        .mt-2 { margin-top: 0.5rem; }
        .instruction-stage.no-scroll { overflow-y: hidden; }
        .expand-section { margin-bottom: 12px; }
        .section-label { display: block; font-size: 0.65rem; text-transform: uppercase; color: var(--text-secondary); margin-bottom: 4px; letter-spacing: 0.1em; }
        .payload-preview.large {
          max-height: 180px; overflow-y: auto; background: rgba(14, 165, 233, 0.05);
          border: 1px solid rgba(14, 165, 233, 0.2); border-radius: 4px; padding: 10px;
          font-size: 0.7rem; color: var(--accent); white-space: pre-wrap;
          opacity: 0.9; font-family: var(--font-family); line-height: 1.4;
        }
        .empty-hint { font-style: italic; opacity: 0.5; }
        .ml-auto { margin-left: auto; }
        .opacity-50 { opacity: 0.5; }
        .spin { animation: spin 1s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `})]}):null},X={BASE_URL:`http://localhost:1234/v1/chat/completions`,MODEL:`local-model`,DEFAULT_TEMPERATURE:.7};async function _e(e,t=X.DEFAULT_TEMPERATURE){try{let n=await fetch(X.BASE_URL,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({model:X.MODEL,messages:e,temperature:t})});if(!n.ok)throw Error(`AI Request failed: ${n.statusText}`);return(await n.json()).choices[0].message.content.trim()}catch(e){throw console.error(`AI API Error:`,e),e}}async function Z(e){return _e([{role:`user`,content:e}])}async function ve(e){return Z(e)}async function ye(e){return Z(e)}var Q=({onClose:e,onSuccess:t})=>{let[n,r]=(0,G.useState)(5),i=e=>`### Universal Task Deconstruction Instructions
1. **Objective**: Analyze the provided input (which may be an idea, goal, milestone, complex task, or event) and deconstruct it into exactly ${e} sequential, actionable tasks.
2. **Context Adaptation**:
   - If a **Goal/Idea**: Provide the first ${e} steps to move from concept to reality.
   - If an **Event**: Provide ${e} logistical tasks required to execute it.
   - If a **Complex Task**: Break it into ${e} smaller, manageable sub-tasks.
   - If a **Milestone**: List ${e} requirements to achieve it.
3. **Actionability Rule**: Every line must start with a strong action verb and represent a completion-oriented "To-Do" item.
4. **Formatting Rules (Strict)**:
   - Output ONLY the tasks.
   - Format: - [Task Description]
   - No introductory text, no "Here are your steps," and no summary.
   - Exactly ${e} lines total.

### Input to Expand:
- `,[a,o]=(0,G.useState)(()=>i(5)),[c,l]=(0,G.useState)(!1),[u,d]=(0,G.useState)(!1),f=(0,G.useRef)(null);(0,G.useEffect)(()=>{setTimeout(()=>f.current?.focus(),50);let t=t=>{t.key===`Escape`&&e()};return window.addEventListener(`keydown`,t),()=>window.removeEventListener(`keydown`,t)},[e]);let p=e=>{r(e),u||o(i(e))},m=async()=>{if(a.trim()){l(!0);try{o(await ve(a)),d(!0),setTimeout(()=>f.current?.focus(),50)}catch{alert(`Failed to expand tasks. Make sure LM Studio is running at localhost:1234`)}finally{l(!1)}}},h=()=>{let n=a.split(`
`).map(e=>e.trim()).filter(e=>e.startsWith(`-`)).map(e=>e.replace(/^-\s*/,``).trim()).filter(e=>e.length>0);n.length>0?(t(n),e()):alert(`No valid tasks found. Each task must start with "- "`)},g=e=>{e.preventDefault(),u?h():m()};return(0,J.jsxs)(`div`,{className:`modal-overlay`,onClick:e,children:[(0,J.jsxs)(`div`,{className:`modal-content glass-panel glow-border`,onClick:e=>e.stopPropagation(),children:[(0,J.jsxs)(`header`,{className:`modal-header`,children:[(0,J.jsxs)(`div`,{className:`title-group`,children:[(0,J.jsx)(L,{size:18,className:`title-icon`}),(0,J.jsx)(`h2`,{className:`modal-title h-glow`,children:u?`Review Quests`:`Expand Mission`})]}),(0,J.jsx)(`button`,{onClick:e,className:`close-btn`,children:(0,J.jsx)(C,{size:20})})]}),(0,J.jsxs)(`div`,{className:`modal-body`,children:[!u&&(0,J.jsxs)(`div`,{className:`count-selector`,children:[(0,J.jsx)(`label`,{className:`section-label`,children:`Number of Tasks:`}),(0,J.jsx)(`input`,{type:`number`,className:`count-input`,value:n,onChange:e=>p(parseInt(e.target.value)||1),min:`1`,max:`20`})]}),(0,J.jsxs)(`form`,{onSubmit:g,className:`instruction-form`,children:[(0,J.jsx)(`label`,{className:`section-label`,children:u?`Tactical Actions (Editable):`:`Mission Instructions & Plans:`}),(0,J.jsx)(`textarea`,{ref:f,className:`instruction-input`,placeholder:u?``:`Type your goals, appointments, or instructions here...`,value:a,onChange:e=>o(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.metaKey||e.ctrlKey)&&g(e)}}),(0,J.jsxs)(`div`,{className:`modal-footer`,children:[(0,J.jsx)(`div`,{className:`kb-hint`,children:u?`Review and edit bullet points`:`Press ⌘+Enter to expand`}),(0,J.jsxs)(`button`,{type:`submit`,className:`send-btn ${c?`loading`:``} ${u?`success`:``}`,disabled:c||!a.trim(),children:[u?(0,J.jsx)(s,{size:18}):(0,J.jsx)(L,{size:18}),(0,J.jsx)(`span`,{children:c?`Processing...`:u?`Create Tasks`:`Generate Tasks`})]})]})]})]})]}),(0,J.jsx)(`style`,{children:`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(2, 6, 23, 0.85);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000000;
        }
        .modal-content {
          width: 90%;
          max-width: 600px;
          padding: 1.5rem;
          background: rgba(15, 23, 42, 0.95);
          border: 1px solid var(--border);
          box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
        }
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        .title-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .title-icon {
          color: var(--accent);
        }
        .modal-title {
          font-family: var(--font-family);
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--accent);
          margin: 0;
        }
        .h-glow {
          text-shadow: 0 0 15px var(--accent);
        }
        .close-btn {
          color: var(--text-secondary);
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        .close-btn:hover {
          color: var(--urgent);
          transform: rotate(90deg);
        }
        .section-label {
          display: block;
          font-family: var(--font-family);
          font-size: 0.7rem;
          text-transform: uppercase;
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
          letter-spacing: 0.1em;
        }
        .count-selector {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border);
        }
        .count-selector .section-label {
          margin-bottom: 0;
        }
        .count-input {
          width: 60px;
          background: rgba(2, 6, 23, 0.5);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 4px 8px;
          color: var(--accent);
          font-family: var(--font-family);
          font-size: 0.9rem;
          outline: none;
          transition: all 0.3s;
        }
        .count-input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 10px rgba(14, 165, 233, 0.2);
        }
        .instruction-input {
          width: 100%;
          height: 250px;
          background: rgba(2, 6, 23, 0.5);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 1rem;
          color: var(--text-primary);
          font-family: var(--font-family);
          font-size: 0.9rem;
          line-height: 1.6;
          resize: none;
          margin-bottom: 1.5rem;
          transition: all 0.3s ease;
          outline: none;
        }
        .instruction-input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 15px rgba(14, 165, 233, 0.15);
        }
        .modal-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .kb-hint {
          font-size: 0.65rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .send-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(14, 165, 233, 0.1);
          border: 1px solid var(--accent);
          padding: 10px 24px;
          border-radius: 4px;
          color: var(--accent);
          font-family: var(--font-family);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-size: 0.85rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .send-btn:hover:not(:disabled) {
          background: rgba(14, 165, 233, 0.2);
          box-shadow: 0 0 20px var(--accent);
        }
        .send-btn.success {
          border-color: var(--reward);
          color: var(--reward);
          background: rgba(34, 197, 94, 0.1);
        }
        .send-btn.success:hover:not(:disabled) {
          background: rgba(34, 197, 94, 0.2);
          box-shadow: 0 0 20px var(--reward);
        }
        .send-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
      `})]})},be=({onClose:e,onSuccess:t,initialContent:n})=>{let[r,i]=(0,G.useState)(5),a=(e,t)=>`### Task Decomposition Instructions
1. **Objective**: Deconstruct the provided complex task into exactly ${e} smaller, manageable sub-tasks.
2. **Logic**: Identify ${e} distinct steps required to fully complete the input task from start to finish.
3. **Execution**: Every line must begin with a strong action verb.
4. **Formatting (Strict)**:
   - Output ONLY the ${e} sub-tasks.
   - Start each line with "- ".
   - Use plain text only.
   - DO NOT use bolding (**text**).
   - DO NOT use italics (*text*).
   - DO NOT use tables.
   - Do not include any introductory or concluding text.

### Task to Deconstruct:
${t}`,[o,c]=(0,G.useState)(()=>a(5,n)),[l,u]=(0,G.useState)(!1),[f,p]=(0,G.useState)(!1),m=(0,G.useRef)(null);(0,G.useEffect)(()=>{setTimeout(()=>m.current?.focus(),50);let t=t=>{t.key===`Escape`&&e()};return window.addEventListener(`keydown`,t),()=>window.removeEventListener(`keydown`,t)},[e]);let h=e=>{i(e),f||c(a(e,n))},g=async()=>{if(o.trim()){u(!0);try{c(await ye(o)),p(!0),setTimeout(()=>m.current?.focus(),50)}catch{alert(`Failed to generate brief. Make sure LM Studio is running at localhost:1234`)}finally{u(!1)}}},_=()=>{o.trim()&&(t(o),e())},v=e=>{e.preventDefault(),f?_():g()};return(0,J.jsxs)(`div`,{className:`modal-overlay`,onClick:e,children:[(0,J.jsxs)(`div`,{className:`modal-content glass-panel glow-border`,onClick:e=>e.stopPropagation(),children:[(0,J.jsxs)(`header`,{className:`modal-header`,children:[(0,J.jsxs)(`div`,{className:`title-group`,children:[(0,J.jsx)(d,{size:18,className:`title-icon`}),(0,J.jsx)(`h2`,{className:`modal-title h-glow`,children:f?`Review Brief`:`Mission Briefing`})]}),(0,J.jsx)(`button`,{onClick:e,className:`close-btn`,children:(0,J.jsx)(C,{size:20})})]}),(0,J.jsxs)(`div`,{className:`modal-body`,children:[!f&&(0,J.jsxs)(`div`,{className:`count-selector`,children:[(0,J.jsx)(`label`,{className:`section-label`,children:`Number of Sub-Tasks:`}),(0,J.jsx)(`input`,{type:`number`,className:`count-input`,value:r,onChange:e=>h(parseInt(e.target.value)||1),min:`1`,max:`20`})]}),(0,J.jsxs)(`form`,{onSubmit:v,className:`instruction-form`,children:[(0,J.jsx)(`label`,{className:`section-label`,children:f?`Briefing Result (Editable):`:`Mission Inquiry:`}),(0,J.jsx)(`textarea`,{ref:m,className:`instruction-input`,placeholder:f?``:`Ask what information you want about this task...`,value:o,onChange:e=>c(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.metaKey||e.ctrlKey)&&v(e)}}),(0,J.jsxs)(`div`,{className:`modal-footer`,children:[(0,J.jsx)(`div`,{className:`kb-hint`,children:f?`Review and edit briefing`:`Press ⌘+Enter to brief`}),(0,J.jsxs)(`button`,{type:`submit`,className:`send-btn ${l?`loading`:``} ${f?`success`:``}`,disabled:l||!o.trim(),children:[l||f?(0,J.jsx)(s,{size:18}):(0,J.jsx)(I,{size:18}),(0,J.jsx)(`span`,{children:l?`Processing...`:f?`Append to Log`:`Generate Brief`})]})]})]})]})]}),(0,J.jsx)(`style`,{children:`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(2, 6, 23, 0.85);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000000;
        }
        .modal-content {
          width: 90%;
          max-width: 600px;
          padding: 1.5rem;
          background: rgba(15, 23, 42, 0.95);
          border: 1px solid var(--border);
          box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
        }
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        .title-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .title-icon {
          color: var(--accent);
        }
        .modal-title {
          font-family: var(--font-family);
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--accent);
          margin: 0;
        }
        .h-glow {
          text-shadow: 0 0 15px var(--accent);
        }
        .close-btn {
          color: var(--text-secondary);
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        .close-btn:hover {
          color: var(--urgent);
          transform: rotate(90deg);
        }
        .section-label {
          display: block;
          font-family: var(--font-family);
          font-size: 0.7rem;
          text-transform: uppercase;
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
          letter-spacing: 0.1em;
        }
        .count-selector {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border);
        }
        .count-selector .section-label {
          margin-bottom: 0;
        }
        .count-input {
          width: 60px;
          background: rgba(2, 6, 23, 0.5);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 4px 8px;
          color: var(--accent);
          font-family: var(--font-family);
          font-size: 0.9rem;
          outline: none;
          transition: all 0.3s;
        }
        .count-input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 10px rgba(14, 165, 233, 0.2);
        }
        .instruction-input {
          width: 100%;
          height: 250px;
          background: rgba(2, 6, 23, 0.5);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 1rem;
          color: var(--text-primary);
          font-family: var(--font-family);
          font-size: 0.9rem;
          line-height: 1.6;
          resize: none;
          margin-bottom: 1.5rem;
          transition: all 0.3s ease;
          outline: none;
        }
        .instruction-input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 15px rgba(14, 165, 233, 0.15);
        }
        .modal-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .kb-hint {
          font-size: 0.65rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .send-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(14, 165, 233, 0.1);
          border: 1px solid var(--accent);
          padding: 10px 24px;
          border-radius: 4px;
          color: var(--accent);
          font-family: var(--font-family);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-size: 0.85rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .send-btn:hover:not(:disabled) {
          background: rgba(14, 165, 233, 0.2);
          box-shadow: 0 0 20px var(--accent);
        }
        .send-btn.success {
          border-color: var(--reward);
          color: var(--reward);
          background: rgba(34, 197, 94, 0.1);
        }
        .send-btn.success:hover:not(:disabled) {
          background: rgba(34, 197, 94, 0.2);
          box-shadow: 0 0 20px var(--reward);
        }
        .send-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
      `})]})};function xe(e){let t=e.split(`
`),n=[],r=/\b((?:[01]?\d|2[0-3]):[0-5]\d(?::[0-5]\d)?\s?(?:[AaPp][Mm])?)\b/g;for(let e of t){let t=e.match(r);if(t&&t.length>=2){let e=t[0],r=t[1],i=$(e),a=$(r);i&&a&&Se(i,a)&&n.push({start:i,end:a})}}return n}function $(e){let t=e.trim().toLowerCase();for(let e of[`H:mm`,`HH:mm`,`h:mm a`,`hh:mm a`,`h:mma`,`hh:mma`,`H:mm:ss`,`HH:mm:ss`,`h:mm:ss a`,`hh:mm:ss a`]){let n=N(t,e,new Date);if(ae(n))return D(n,`HH:mm`)}return null}function Se(e,t){let[n,r]=e.split(`:`).map(Number),[i,a]=t.split(`:`).map(Number);if(n>=24||i>=24)return!1;let o=n*60+r;return i*60+a>o}function Ce(e,t){let[n,r]=e.split(`:`).map(Number),[i,a]=t.split(`:`).map(Number);return i*60+a-(n*60+r)}var we=({onClose:e,onSuccess:t,unfinishedTasks:n,unscheduledTasks:r})=>{let[i,a]=(0,G.useState)(r.length>0?`unscheduled`:`all`),o=i===`unscheduled`?r:n,c=o.length,[l,u]=(0,G.useState)(()=>{let e=new Date,t=Math.ceil(e.getMinutes()/15)*15;return e.setMinutes(t),e.setSeconds(0),`${String(e.getHours()).padStart(2,`0`)}:${String(e.getMinutes()).padStart(2,`0`)}`}),[d,f]=(0,G.useState)(60),[p,m]=(0,G.useState)(15),[h,g]=(0,G.useState)(``),[_,v]=(0,G.useState)(!1),y=(0,G.useRef)(null);(0,G.useEffect)(()=>{_&&y.current?.focus();let t=t=>{t.key===`Escape`&&e()};return window.addEventListener(`keydown`,t),()=>window.removeEventListener(`keydown`,t)},[_,e]);let b=()=>{let e=0,[t,n]=l.split(`:`).map(Number);e=t*60+n;let r=[];for(let t=0;t<c;t++){let t=Math.floor(e/60),n=e%60,i=e+d,a=Math.floor(i/60),o=i%60;if(t>=24)break;let s=(e,t)=>`${String(e).padStart(2,`0`)}:${String(t).padStart(2,`0`)}`;r.push(`- ${s(t,n)} ${s(a,o)}`),e=i+p}g(r.join(`
`)),v(!0)},x=()=>{let n=xe(h);n.length>0?(t(n,o.map(e=>e.id)),e()):alert(`No valid time ranges found. Expected format: "- HH:mm HH:mm"`)};return(0,J.jsxs)(`div`,{className:`modal-overlay`,onClick:e,children:[(0,J.jsxs)(`div`,{className:`modal-content glass-panel glow-border`,onClick:e=>e.stopPropagation(),children:[(0,J.jsxs)(`header`,{className:`modal-header`,children:[(0,J.jsxs)(`div`,{className:`title-group`,children:[(0,J.jsx)(T,{size:18,className:`title-icon`}),(0,J.jsx)(`h2`,{className:`modal-title h-glow`,children:_?`Review Timeline`:`Strategic Planning`})]}),(0,J.jsx)(`button`,{onClick:e,className:`close-btn`,children:(0,J.jsx)(C,{size:20})})]}),(0,J.jsxs)(`div`,{className:`modal-body`,children:[_?(0,J.jsxs)(`div`,{className:`instruction-form`,children:[(0,J.jsx)(`label`,{className:`section-label`,children:`Calculated Timeline (Editable):`}),(0,J.jsx)(`textarea`,{ref:y,className:`instruction-input`,value:h,onChange:e=>g(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.metaKey||e.ctrlKey)&&x()}})]}):(0,J.jsxs)(`div`,{className:`planning-params`,children:[(0,J.jsxs)(`div`,{className:`scope-selector`,children:[(0,J.jsxs)(`button`,{className:`scope-btn ${i===`unscheduled`?`active`:``}`,onClick:()=>a(`unscheduled`),children:[`Unscheduled (`,r.length,`)`]}),(0,J.jsxs)(`button`,{className:`scope-btn ${i===`all`?`active`:``}`,onClick:()=>a(`all`),children:[`All (`,n.length,`)`]})]}),(0,J.jsxs)(`div`,{className:`param-grid`,children:[(0,J.jsxs)(`div`,{className:`param-item`,children:[(0,J.jsx)(`label`,{className:`section-label`,children:`Start Time:`}),(0,J.jsx)(`input`,{type:`time`,className:`count-input time-input`,value:l,onChange:e=>u(e.target.value)})]}),(0,J.jsxs)(`div`,{className:`param-item`,children:[(0,J.jsx)(`label`,{className:`section-label`,children:`Duration (m):`}),(0,J.jsx)(`input`,{type:`number`,className:`count-input`,value:d,onChange:e=>f(parseInt(e.target.value)||0),min:`1`})]}),(0,J.jsxs)(`div`,{className:`param-item`,children:[(0,J.jsx)(`label`,{className:`section-label`,children:`Break (m):`}),(0,J.jsx)(`input`,{type:`number`,className:`count-input`,value:p,onChange:e=>m(parseInt(e.target.value)||0),min:`0`})]})]})]}),(0,J.jsxs)(`div`,{className:`modal-footer`,children:[(0,J.jsx)(`div`,{className:`kb-hint`,children:_?`Review and edit time slots`:`Press Enter to generate`}),(0,J.jsxs)(`button`,{onClick:e=>{e.preventDefault(),_?x():b()},className:`send-btn ${_?`success`:``}`,disabled:!_&&!l,children:[_?(0,J.jsx)(s,{size:18}):(0,J.jsx)(T,{size:18}),(0,J.jsx)(`span`,{children:_?`Sync Timeline`:`Generate Schedule`})]})]})]})]}),(0,J.jsx)(`style`,{children:`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(2, 6, 23, 0.85);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000000;
        }
        .modal-content {
          width: 90%;
          max-width: 600px;
          padding: 1.5rem;
          background: rgba(15, 23, 42, 0.95);
          border: 1px solid var(--border);
          box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
        }
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        .title-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .title-icon {
          color: var(--accent);
        }
        .modal-title {
          font-family: var(--font-family);
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--accent);
          margin: 0;
        }
        .h-glow {
          text-shadow: 0 0 15px var(--accent);
        }
        .close-btn {
          color: var(--text-secondary);
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        .close-btn:hover {
          color: var(--urgent);
          transform: rotate(90deg);
        }
        .section-label {
          display: block;
          font-family: var(--font-family);
          font-size: 0.7rem;
          text-transform: uppercase;
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
          letter-spacing: 0.1em;
        }
        .planning-params {
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
        }
        .scope-selector {
          display: flex;
          gap: 8px;
          margin-bottom: 1.2rem;
        }
        .scope-btn {
          flex: 1;
          padding: 6px;
          font-size: 0.7rem;
          text-transform: uppercase;
          border: 1px solid var(--border);
          border-radius: 4px;
          color: var(--text-secondary);
          background: rgba(15, 23, 42, 0.4);
          transition: all 0.2s;
        }
        .scope-btn.active {
          color: var(--reward);
          border-color: var(--reward);
          background: rgba(250, 204, 21, 0.1);
          box-shadow: 0 0 10px rgba(250, 204, 21, 0.1);
        }
        .param-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-top: 0.5rem;
        }
        .param-item .section-label {
          margin-bottom: 0.5rem;
          font-size: 0.6rem;
        }
        .count-input {
          width: 100%;
          background: rgba(2, 6, 23, 0.5);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 6px 10px;
          color: var(--accent);
          font-family: var(--font-family);
          font-size: 0.9rem;
          outline: none;
          transition: all 0.3s;
        }
        .time-input {
          color-scheme: dark;
        }
        .count-input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 10px rgba(14, 165, 233, 0.2);
        }
        .instruction-input {
          width: 100%;
          height: 200px;
          background: rgba(2, 6, 23, 0.5);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 1rem;
          color: var(--text-primary);
          font-family: var(--font-family);
          font-size: 0.9rem;
          line-height: 1.6;
          resize: none;
          margin-bottom: 1.5rem;
          transition: all 0.3s ease;
          outline: none;
        }
        .instruction-input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 15px rgba(14, 165, 233, 0.15);
        }
        .modal-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .kb-hint {
          font-size: 0.65rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .send-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(14, 165, 233, 0.1);
          border: 1px solid var(--accent);
          padding: 10px 24px;
          border-radius: 4px;
          color: var(--accent);
          font-family: var(--font-family);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-size: 0.85rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .send-btn:hover:not(:disabled) {
          background: rgba(14, 165, 233, 0.2);
          box-shadow: 0 0 20px var(--accent);
        }
        .send-btn.success {
          border-color: var(--reward);
          color: var(--reward);
          background: rgba(34, 197, 94, 0.1);
        }
        .send-btn.success:hover:not(:disabled) {
          background: rgba(34, 197, 94, 0.2);
          box-shadow: 0 0 20px var(--reward);
        }
        .send-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
      `})]})};function Te(){let{tasks:e,timeBlocks:t,notes:n,selectedDate:r,addTask:i,addTasksBulk:a,toggleTask:o,deleteTask:s,updateTask:c,moveTaskToList:l,setDate:u,updateNote:d,updateTimeBlock:f,deleteTimeBlock:p,scheduleTask:m,bulkScheduleTasks:h,unscheduleTask:g}=fe(),{messages:_,dismissMessage:v,dismissAllMessages:y,addMessage:b}=pe(e),x=e.filter(e=>e.list===`today`&&e.date===r),S=x.filter(e=>!e.completed).sort((e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()),C=new Set(t.map(e=>e.taskId)),w=S.filter(e=>!C.has(e.id)),[T,D]=(0,G.useState)(!1),[O,k]=(0,G.useState)(!1),[A,j]=(0,G.useState)(!1),[M,N]=(0,G.useState)(!1),[P,F]=(0,G.useState)(null),I=n[r]||``,L=(0,G.useCallback)(async e=>{e.length>0&&(await a(e,`today`),b(`QUEST_CLEARED`,`SYSTEM EXPANDED`,`${e.length} new tasks synchronized to your log.`))},[a,b]),R=(0,G.useCallback)(async e=>{let t=I.trim();await d(r,t?`${t}\n\n${e.trim()}`:e.trim()),b(`QUEST_CLEARED`,`SYSTEM UPDATED`,`Mission briefing appended to SYSTEM LOG.`)},[I,r,d,b]),z=(0,G.useCallback)(async(e,t)=>{let n=[];for(let r=0;r<Math.min(e.length,t.length);r++){let i=e[r],a=t[r];n.push({id:a,start:i.start,duration:Ce(i.start,i.end)})}n.length>0&&(await h(n),b(`QUEST_CLEARED`,`PLAN SYNCHRONIZED`,`${n.length} missions scheduled to your timeline.`))},[h,b]),B=(0,G.useCallback)(async(e,t)=>{e===`expand`?(D(!1),k(!0)):e===`brief`?(D(!1),F(t?.task||null),j(!0)):e===`plan`&&(D(!1),N(!0))},[]);return(0,G.useEffect)(()=>{let e=e=>{let t=document.activeElement,n=t instanceof HTMLTextAreaElement,r=t instanceof HTMLInputElement&&(t.type===`text`||t.type===`number`||t.type===`password`),i=n||r;e.key===`/`&&!T&&(i||(e.preventDefault(),t instanceof HTMLElement&&t.blur(),D(!0))),!i&&!T&&(e.key===`n`?(e.preventDefault(),document.getElementById(`notes-textarea`)?.focus()):e.key===`t`?(e.preventDefault(),document.getElementById(`task-input-today`)?.focus()):e.key===`l`&&(e.preventDefault(),document.getElementById(`task-input-later`)?.focus())),e.key===`Escape`&&(T?D(!1):O?k(!1):A?(j(!1),F(null)):M?N(!1):(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&t.blur(),y())};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[T,O,A,M,y]),(0,J.jsx)(E,{children:(0,J.jsxs)(`div`,{className:`app-container`,children:[(0,J.jsx)(me,{messages:_,onDismiss:v}),(0,J.jsx)(ge,{isOpen:T,onClose:()=>D(!1),onSelect:B,tasks:x}),O&&(0,J.jsx)(Q,{onClose:()=>k(!1),onSuccess:L}),A&&(0,J.jsx)(be,{onClose:()=>{j(!1),F(null)},onSuccess:R,initialContent:P?.title||``}),M&&(0,J.jsx)(we,{onClose:()=>N(!1),onSuccess:z,unfinishedTasks:S,unscheduledTasks:w}),(0,J.jsx)(`div`,{className:`app-sidebar-column`,children:(0,J.jsx)(ce,{tasks:e,timeBlocks:t,addTask:i,toggleTask:o,deleteTask:s,updateTask:c,moveTaskToList:l,selectedDate:r})}),(0,J.jsx)(le,{selectedDate:r,timeBlocks:t,tasks:e,deleteTimeBlock:p,updateTimeBlock:f,setDate:u,scheduleTask:m,unscheduleTask:g}),(0,J.jsxs)(`div`,{className:`app-notes-column`,children:[(0,J.jsx)(ue,{date:r,note:I,updateNote:d}),(0,J.jsx)(de,{tasks:e})]})]})})}K.createRoot(document.getElementById(`root`)).render((0,J.jsx)(G.StrictMode,{children:(0,J.jsx)(Te,{})}));