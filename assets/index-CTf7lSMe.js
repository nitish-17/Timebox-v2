import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{i as t,n,o as r,r as i,t as a}from"./vendor-calendar-DXTmhCw3.js";import{A as o,B as s,C as c,D as l,E as u,F as d,G as f,H as p,I as m,K as h,L as g,M as _,N as v,O as y,P as b,R as x,S,T as C,U as w,V as T,W as E,_ as D,a as O,b as k,c as A,d as j,f as M,g as N,h as P,i as F,j as I,k as L,l as R,m as z,n as B,o as ee,p as te,q as ne,r as re,s as V,t as H,u as U,v as ie,w as ae,x as oe,y as se,z as ce}from"./vendor-core-Cj2lyCNU.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var W=e(r(),1),le=e(ne(),1),G=new class extends ae{tasks;timeBlocks;notes;settings;constructor(){super(`TimeboxDatabase`),this.version(1).stores({tasks:`id, title, completed, list, date, createdAt`,timeBlocks:`id, taskId, title, startTime, endTime`,notes:`date`,settings:`key`})}},K=te(),ue=(0,W.memo)(({task:e,timeBlock:t,toggleTask:n,deleteTask:r,updateTask:i,moveTask:a,moveIcon:o})=>{let[c,l]=(0,W.useState)(!1),[u,f]=(0,W.useState)(!1);(0,W.useEffect)(()=>(c?document.body.classList.add(`picker-open`):document.body.classList.remove(`picker-open`),()=>{document.body.classList.remove(`picker-open`)}),[c]);let{refs:p,floatingStyles:m,context:h}=O({open:c,onOpenChange:l,middleware:[U(10),R(),j()],whileElementsMounted:M,placement:`right-start`}),{refs:g,floatingStyles:_,context:v}=O({open:u,onOpenChange:f,middleware:[U(10),R(),j()],whileElementsMounted:M,placement:`top-start`}),{getReferenceProps:S,getFloatingProps:C}=V([re(h),F(h)]),{getReferenceProps:w,getFloatingProps:T}=V([ee(v,{delay:0}),A(v,{role:`tooltip`})]),E=t=>{let{r:n,g:r,b:a,a:o}=t.rgb;i(e.id,{color:`rgba(${n}, ${r}, ${a}, ${o})`})};return(0,K.jsx)(`div`,{className:`draggable-task-item task-item-container`,"data-task-id":e.id,"data-title":e.title,"data-color":e.color||`rgba(11, 165, 233, 0.75)`,style:{"--task-accent":e.color||`var(--accent)`},children:(0,K.jsxs)(`div`,{className:`task-item-content`,children:[(0,K.jsx)(`div`,{ref:g.setReference,className:`task-item-drag-handle`,...w(),children:(0,K.jsx)(d,{size:14})}),u&&(0,K.jsx)(B,{children:(0,K.jsx)(`div`,{ref:g.setFloating,style:_,className:`task-tooltip`,...T(),children:e.title})}),(0,K.jsx)(`button`,{className:`task-item-toggle`,onClick:t=>{t.stopPropagation(),n(e.id)},children:e.completed?(0,K.jsx)(s,{size:18,color:`var(--reward)`,fill:`var(--reward)`,fillOpacity:.2}):(0,K.jsx)(ce,{size:18,color:`var(--accent)`})}),(0,K.jsxs)(`div`,{className:`task-item-body`,children:[(0,K.jsx)(`div`,{className:`task-item-title ${e.completed?`completed`:``}`,children:e.title}),t&&(0,K.jsxs)(`div`,{className:`task-item-time`,children:[(0,K.jsx)(x,{size:10,color:`var(--accent)`}),D(new Date(t.startTime),`h:mm a`)]})]}),(0,K.jsxs)(`div`,{className:`task-actions`,onClick:e=>e.stopPropagation(),children:[(0,K.jsxs)(`div`,{className:`relative-container`,children:[(0,K.jsx)(`button`,{ref:p.setReference,...S({onClick(e){e.stopPropagation()}}),title:`Change color`,className:`action-btn`,children:(0,K.jsx)(b,{size:14})}),c&&(0,K.jsx)(B,{children:(0,K.jsx)(`div`,{ref:p.setFloating,style:{...m,zIndex:99999},...C({onClick(e){e.stopPropagation()}}),children:(0,K.jsx)(z,{color:e.color||`rgba(11, 165, 233, 0.75)`,onChange:E,disableAlpha:!1})})})]}),(0,K.jsx)(`button`,{className:`action-btn`,onClick:e=>{e.stopPropagation(),a()},title:`Move task`,children:o}),(0,K.jsx)(`button`,{className:`action-btn`,onClick:t=>{t.stopPropagation(),r(e.id)},title:`Delete task`,children:(0,K.jsx)(y,{size:14})})]})]})})}),q=({title:e,placeholder:t,tasks:n,timeBlocks:r,type:i,addTask:a,toggleTask:o,deleteTask:s,updateTask:c,moveTaskToList:l})=>{let[u,d]=(0,W.useState)(``),f=e=>{e.preventDefault(),u.trim()&&(a(u.trim(),i),d(``))},p=i===`today`?`later`:`today`,m=i===`today`?w:E,h=[...n].sort((e,t)=>e.completed===t.completed?new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime():e.completed?1:-1);return(0,K.jsxs)(`section`,{className:`task-list-section`,children:[(0,K.jsx)(`h2`,{className:`task-list-header`,children:e}),(0,K.jsx)(`form`,{onSubmit:f,className:`task-input-form`,children:(0,K.jsxs)(`div`,{className:`task-input-wrapper`,children:[(0,K.jsx)(v,{size:16,className:`task-input-icon`}),(0,K.jsx)(`input`,{id:`task-input-${i}`,type:`text`,placeholder:t,value:u,onChange:e=>d(e.target.value),className:`task-input`,autoComplete:`off`})]})}),(0,K.jsx)(`div`,{className:`task-list`,children:h.map(e=>(0,K.jsx)(ue,{task:e,timeBlock:r.find(t=>t.taskId===e.id),toggleTask:o,deleteTask:s,updateTask:c,moveTask:()=>l(e.id,p),moveIcon:(0,K.jsx)(m,{size:14})},e.id))})]})},de=({tasks:e,timeBlocks:t,addTask:n,toggleTask:r,deleteTask:a,updateTask:o,moveTaskToList:s,selectedDate:u})=>{let d=(0,W.useRef)(null),f=(0,W.useRef)(null);(0,W.useEffect)(()=>{if(d.current){let e=new i(d.current,{itemSelector:`.draggable-task-item`,eventData:function(e){let t=e.getAttribute(`data-color`)||`rgba(11, 165, 233, 0.75)`;return{title:e.getAttribute(`data-title`),duration:`00:30`,backgroundColor:t,borderColor:t,extendedProps:{taskId:e.getAttribute(`data-task-id`),styles:{"--fc-event-bg-color":t.replace(/rgba?\((.*?)(?:,\s*[\d.]+)?\)/,`rgba($1, 0.4)`),"--fc-event-border-color":t}}}}});return()=>e.destroy()}},[]);let{setNodeRef:p,isOver:m}=h({id:`sidebar-droppable`}),_=async()=>{try{let e=await S(G),t=URL.createObjectURL(e),n=document.createElement(`a`);n.href=t,n.download=`timebox-backup-${new Date().toISOString().split(`T`)[0]}.json`,n.click(),URL.revokeObjectURL(t)}catch(e){console.error(`Export failed:`,e),alert(`Backup failed. See console for details.`)}},v=()=>{f.current?.click()},y=async e=>{let t=e.target.files?.[0];if(t)try{await G.delete(),await c(t),window.location.reload()}catch(e){console.error(`Import failed:`,e),alert(`Restore failed. Make sure you selected a valid backup file.`);try{await G.open()}catch{}}},b=e.filter(e=>e.list===`today`&&e.date===u),x=e.filter(e=>e.list===`later`);return(0,K.jsxs)(`aside`,{ref:e=>{p(e),d.current=e},className:`sidebar ${m?`sidebar-droppable-active`:``}`,children:[(0,K.jsxs)(`div`,{className:`sidebar-header`,children:[(0,K.jsx)(`h1`,{className:`sidebar-title`,style:{flex:1},children:`THE SYSTEM`}),(0,K.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`},children:[(0,K.jsx)(`button`,{className:`action-btn`,onClick:_,title:`Export Backup`,children:(0,K.jsx)(l,{size:18})}),(0,K.jsx)(`button`,{className:`action-btn`,onClick:v,title:`Import Restore`,children:(0,K.jsx)(g,{size:18})}),(0,K.jsx)(`input`,{type:`file`,ref:f,onChange:y,style:{display:`none`},accept:`.json`})]})]}),(0,K.jsxs)(`div`,{className:`scrollable sidebar-content`,children:[(0,K.jsx)(q,{title:`Today`,placeholder:`Add task to today...`,tasks:b,timeBlocks:t,type:`today`,addTask:n,toggleTask:r,deleteTask:a,updateTask:o,moveTaskToList:s}),(0,K.jsx)(q,{title:`Later`,placeholder:`Brain dump...`,tasks:x,timeBlocks:t,type:`later`,addTask:n,toggleTask:r,deleteTask:a,updateTask:o,moveTaskToList:s})]})]})},fe=({selectedDate:e,timeBlocks:r,tasks:i,deleteTimeBlock:o,updateTimeBlock:s,setDate:c,scheduleTask:l,unscheduleTask:u})=>{let d=(0,W.useRef)(null),f=(t=!0)=>{if(d.current&&d.current.getApi()&&k(new Date,new Date(e))){let e=new Date,n=e.getHours()*60+e.getMinutes(),r=Math.max(0,n-60)*(40/15),i=d.current.elRef.current?.querySelector(`.fc-scroller`);i&&i.scrollTo({top:r,behavior:t?`smooth`:`auto`})}};(0,W.useEffect)(()=>{let t=d.current?.getApi();t&&(D(t.getDate(),`yyyy-MM-dd`)!==e&&t.gotoDate(e),setTimeout(()=>f(!1),200))},[e]),(0,W.useEffect)(()=>{let e=setInterval(()=>{f(!0)},6e4);return()=>clearInterval(e)},[e]);let{setNodeRef:p,isOver:m}=h({id:`calendar-droppable`,data:{type:`calendar`}}),g=(0,W.useMemo)(()=>r.filter(t=>D(new Date(t.startTime),`yyyy-MM-dd`)===e).map(e=>{let t=i.find(t=>t.id===e.taskId),n=t?.completed||!1,r=n?`rgba(71, 85, 105, 0.4)`:t?.color||e.color||`rgba(11, 165, 233, 0.75)`;return{id:e.id,title:e.title||`Untitled`,start:e.startTime,end:e.endTime,backgroundColor:r,borderColor:r,className:n?`event-completed`:``,extendedProps:{taskId:e.taskId,completed:n},display:`block`,styles:{"--fc-event-bg-color":r.replace(/rgba?\((.*?)(?:,\s*[\d.]+)?\)/,`rgba($1, 0.4)`),"--fc-event-border-color":r}}}),[r,i,e]);return(0,K.jsxs)(`div`,{ref:p,className:`main-content`,style:{backgroundColor:m?`rgba(11, 165, 233, 0.05)`:`transparent`,transition:`background-color 0.2s ease`,borderRight:`1px solid var(--border)`},children:[(0,K.jsxs)(`header`,{style:{flexShrink:0,height:`50px`,padding:`0 1.5rem`,borderBottom:`1px solid var(--border)`,display:`flex`,justifyContent:`space-between`,alignItems:`center`,backgroundColor:`rgba(15, 23, 42, 0.4)`,zIndex:10,backdropFilter:`blur(8px)`},children:[(0,K.jsx)(`h2`,{style:{fontSize:`1.0rem`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.2em`,color:`var(--text-primary)`,textShadow:`0 0 15px var(--accent)`},children:D(new Date(e),`EEEE, MMMM do`)}),(0,K.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.4rem`},children:[(0,K.jsx)(`button`,{onClick:()=>{c(D(P(new Date(e),1),`yyyy-MM-dd`))},"aria-label":`Previous day`,style:{background:`none`,border:`none`,color:`var(--text-secondary)`,cursor:`pointer`,padding:`0.3rem`,display:`flex`,alignItems:`center`,justifyContent:`center`,transition:`all 0.2s`,borderRadius:`4px`},onMouseEnter:e=>{e.currentTarget.style.color=`var(--accent)`,e.currentTarget.style.backgroundColor=`rgba(11, 165, 233, 0.1)`},onMouseLeave:e=>{e.currentTarget.style.color=`var(--text-secondary)`,e.currentTarget.style.backgroundColor=`transparent`},children:(0,K.jsx)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,K.jsx)(`polyline`,{points:`15 18 9 12 15 6`})})}),(0,K.jsx)(`input`,{type:`date`,value:e,onChange:e=>{let t=e.target;c(t.value),setTimeout(()=>t.blur(),10)},style:{backgroundColor:`rgba(15, 23, 42, 0.6)`,padding:`0.4rem 0.6rem`,borderRadius:`4px`,fontSize:`0.8rem`,colorScheme:`dark`,border:`1px solid var(--border)`,color:`var(--text-primary)`,fontFamily:`inherit`}}),(0,K.jsx)(`button`,{onClick:()=>{c(D(oe(new Date(e),1),`yyyy-MM-dd`))},"aria-label":`Next day`,style:{background:`none`,border:`none`,color:`var(--text-secondary)`,cursor:`pointer`,padding:`0.3rem`,display:`flex`,alignItems:`center`,justifyContent:`center`,transition:`all 0.2s`,borderRadius:`4px`},onMouseEnter:e=>{e.currentTarget.style.color=`var(--accent)`,e.currentTarget.style.backgroundColor=`rgba(11, 165, 233, 0.1)`},onMouseLeave:e=>{e.currentTarget.style.color=`var(--text-secondary)`,e.currentTarget.style.backgroundColor=`transparent`},children:(0,K.jsx)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,K.jsx)(`polyline`,{points:`9 18 15 12 9 6`})})})]})]}),(0,K.jsx)(`div`,{className:`calendar-wrapper`,style:{flex:1},children:(0,K.jsx)(n,{ref:d,plugins:[a,t],initialView:`timeGridDay`,headerToolbar:!1,allDaySlot:!1,defaultTimedEventDuration:`00:30`,slotDuration:`00:15:00`,slotLabelInterval:`01:00`,slotLabelFormat:{hour:`numeric`,minute:`2-digit`,meridiem:`short`,hour12:!0},expandRows:!0,height:`100%`,editable:!0,selectable:!1,droppable:!0,forceEventDuration:!0,events:g,eventChange:e=>{let{event:t}=e;s(t.id,{startTime:t.startStr,endTime:t.endStr})},eventReceive:e=>{let{event:t}=e,n=t.extendedProps.taskId,r=t.startStr;t.remove(),n&&l(n,r)},eventDragStop:e=>{let{jsEvent:t,event:n}=e,r=document.querySelector(`.sidebar`);if(r){let e=r.getBoundingClientRect();t.clientX>=e.left&&t.clientX<=e.right&&t.clientY>=e.top&&t.clientY<=e.bottom&&(n.extendedProps.taskId?u(n.extendedProps.taskId):o(n.id))}},nowIndicator:!0,dayHeaders:!1,themeSystem:`standard`,eventTextColor:`#fff`,eventDisplay:`block`,eventContent:e=>{let{taskId:t,completed:n}=e.event.extendedProps,r=i.find(e=>e.id===t),a=n?`rgba(71, 85, 105, 0.4)`:r?.color||e.event.backgroundColor||`rgba(11, 165, 233, 0.75)`,o=a.replace(/rgba?\((.*?)(?:,\s*[\d.]+)?\)/,`rgba($1, 0.4)`);return(0,K.jsx)(`div`,{className:`fc-event-glass-container ${n?`event-completed`:``}`,style:{"--event-bg":o,"--event-border":a},children:(0,K.jsx)(`div`,{className:`fc-event-title`,children:e.event.title})})}})}),(0,K.jsx)(`style`,{children:`
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
      `})]})},pe=({date:e,note:t,updateNote:n})=>{let[r,i]=(0,W.useState)(t),a=W.useRef(null);return(0,W.useEffect)(()=>{i(t)},[e,t]),(0,K.jsxs)(`div`,{className:`notes-panel`,children:[(0,K.jsx)(`header`,{className:`notes-header`,children:(0,K.jsx)(`h2`,{className:`notes-title`,children:`NOTES`})}),(0,K.jsx)(`div`,{className:`notes-content`,children:(0,K.jsx)(`textarea`,{id:`notes-textarea`,ref:a,placeholder:`Start writing... (Brain dump, rough work, planning)`,value:r||``,onChange:e=>i(e.target.value),onBlur:()=>{r!==t&&n(e,r)},onKeyDown:e=>{e.key===`Escape`&&a.current?.blur()},className:`notes-textarea`})})]})},me=({tasks:e})=>{let t=(0,W.useMemo)(()=>{let e=new Date;return ie({start:P(e,84),end:e})},[]),n=t=>{let n=D(t,`yyyy-MM-dd`),r=e.filter(e=>e.date===n&&e.completed).length;return r===0?0:r<2?1:r<4?2:3},r=[`rgba(14, 165, 233, 0.05)`,`rgba(14, 165, 233, 0.3)`,`rgba(14, 165, 233, 0.6)`,`rgba(14, 165, 233, 1)`];return(0,K.jsxs)(`div`,{className:`activity-heatmap`,children:[(0,K.jsx)(`h3`,{className:`heatmap-title`,children:`SYSTEM PROGRESS`}),(0,K.jsx)(`div`,{className:`heatmap-grid`,children:t.map(e=>{let t=n(e);return(0,K.jsx)(`div`,{title:D(e,`MMM do`),className:`heatmap-cell`,style:{backgroundColor:r[t]}},e.toISOString())})})]})};function he(){let[e,t]=(0,W.useState)(()=>D(new Date,`yyyy-MM-dd`)),n=H(()=>G.tasks.toArray(),[])||[],r=H(()=>G.timeBlocks.toArray(),[])||[],i=H(()=>G.notes.toArray(),[])||[],a=(0,W.useMemo)(()=>i.reduce((e,t)=>(e[t.date]=t.content,e),{}),[i]),o=(0,W.useCallback)(async(t,n)=>{let r={id:Math.random().toString(36).substr(2,9),title:t,completed:!1,list:n,color:`rgba(11, 165, 233, 0.75)`,createdAt:new Date().toISOString(),date:n===`today`?e:void 0};await G.tasks.add(r)},[e]),s=(0,W.useCallback)(async(t,n)=>{let r=new Date().getTime(),i=t.map((t,i)=>({id:Math.random().toString(36).substr(2,9),title:t,completed:!1,list:n,color:`rgba(11, 165, 233, 0.75)`,createdAt:new Date(r+i).toISOString(),date:n===`today`?e:void 0}));await G.tasks.bulkAdd(i)},[e]),c=(0,W.useCallback)(async e=>{let t=await G.tasks.get(e);t&&await G.tasks.update(e,{completed:!t.completed})},[]),l=(0,W.useCallback)(async e=>{await G.transaction(`rw`,G.tasks,G.timeBlocks,async()=>{await G.tasks.delete(e),await G.timeBlocks.where(`taskId`).equals(e).delete()})},[]),u=(0,W.useCallback)(async(e,t)=>{await G.transaction(`rw`,G.tasks,G.timeBlocks,async()=>{await G.tasks.update(e,t),t.color&&await G.timeBlocks.where(`taskId`).equals(e).modify({color:t.color})})},[]),d=(0,W.useCallback)(async(e,t)=>{await G.tasks.update(e,{title:t})},[]),f=(0,W.useCallback)(async(t,n)=>{let r=n===`today`?e:void 0;await G.transaction(`rw`,G.tasks,G.timeBlocks,async()=>{await G.tasks.update(t,{list:n,date:r}),n===`later`&&await G.timeBlocks.where(`taskId`).equals(t).delete()})},[e]),p=(0,W.useCallback)(async(e,t,n=30)=>{let r=new Date(t),i=new Date(r.getTime()+n*6e4),a=D(r,`yyyy-MM-dd`);await G.transaction(`rw`,G.tasks,G.timeBlocks,async()=>{let t=await G.tasks.get(e);if(!t)return;await G.tasks.update(e,{list:`today`,date:a});let n={id:Math.random().toString(36).substr(2,9),taskId:e,title:t.title,startTime:r.toISOString(),endTime:i.toISOString(),color:t.color||`rgba(11, 165, 233, 0.75)`};await G.timeBlocks.where(`taskId`).equals(e).delete(),await G.timeBlocks.add(n)})},[]),m=(0,W.useCallback)(async e=>{await G.timeBlocks.where(`taskId`).equals(e).delete()},[]);return{tasks:n,timeBlocks:r,notes:a,selectedDate:e,addTask:o,addTasksBulk:s,toggleTask:c,deleteTask:l,updateTask:u,updateTaskTitle:d,moveTaskToList:f,setDate:(0,W.useCallback)(e=>{t(e)},[]),updateNote:(0,W.useCallback)(async(e,t)=>{await G.notes.put({date:e,content:t})},[]),updateTimeBlock:(0,W.useCallback)(async(e,t)=>{await G.timeBlocks.update(e,t)},[]),deleteTimeBlock:(0,W.useCallback)(async e=>{await G.timeBlocks.delete(e)},[]),scheduleTask:p,bulkScheduleTasks:(0,W.useCallback)(async t=>{await G.transaction(`rw`,G.tasks,G.timeBlocks,async()=>{for(let n of t){let t=await G.tasks.get(n.id);if(!t)continue;let[r,i]=n.start.split(`:`).map(Number),a=r*60+i,o=Math.round(a/15)*15;r=Math.floor(o/60),i=o%60;let s=new Date(e+`T00:00:00`);s.setHours(r,i,0,0);let c=new Date(s.getTime()+n.duration*6e4),l={id:Math.random().toString(36).substr(2,9),taskId:n.id,title:t.title,startTime:s.toISOString(),endTime:c.toISOString(),color:t.color||`rgba(11, 165, 233, 0.75)`};await G.timeBlocks.where(`taskId`).equals(n.id).delete(),await G.timeBlocks.add(l),await G.tasks.update(n.id,{list:`today`,date:e})}})},[e]),unscheduleTask:m}}function ge(e){let[t,n]=(0,W.useState)([]),r=(0,W.useRef)([]),i=(0,W.useCallback)((e,t,r)=>{let i=Math.random().toString(36).substr(2,9);n(n=>[...n,{id:i,type:e,title:t,description:r}])},[]),a=(0,W.useCallback)(e=>{n(t=>t.filter(t=>t.id!==e))},[]),o=(0,W.useCallback)(()=>{n([])},[]);return(0,W.useEffect)(()=>{let t=r.current;t.length>0&&e.forEach(e=>{let n=t.find(t=>t.id===e.id);if(n&&!n.completed&&e.completed){let t=[`XP Gained: +100`,`Skill Point Awarded`,`Fatigue Reduced`,`Level Progress: 15%`],n=t[Math.floor(Math.random()*t.length)];i(`QUEST_CLEARED`,`QUEST CLEARED`,`Task "${e.title}" completed. ${n}`)}}),r.current=e},[e,i]),(0,W.useEffect)(()=>{sessionStorage.getItem(`system_greeted`)||(i(`QUEST_CLEARED`,`SYSTEM INITIALIZED`,`Welcome back, Player. Today's missions are ready.`),sessionStorage.setItem(`system_greeted`,`true`))},[i]),{messages:t,dismissMessage:a,dismissAllMessages:o,addMessage:i}}var _e=({messages:e,onDismiss:t})=>(0,K.jsxs)(`div`,{className:`system-notifications-container`,children:[e.map(e=>(0,K.jsx)(ve,{message:e,onDismiss:()=>t(e.id)},e.id)),(0,K.jsx)(`style`,{children:`
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
      `})]}),ve=({message:e,onDismiss:t})=>((0,W.useEffect)(()=>{let e=setTimeout(t,5e3);return()=>clearTimeout(e)},[t]),(0,K.jsxs)(`div`,{className:`system-notification`,onClick:t,children:[(()=>{switch(e.type){case`LEVEL_UP`:return(0,K.jsx)(L,{className:`system-notification-icon`,size:24});case`SKILL_AWAKENED`:return(0,K.jsx)(C,{className:`system-notification-icon`,size:24});default:return(0,K.jsx)(I,{className:`system-notification-icon`,size:24})}})(),(0,K.jsxs)(`div`,{className:`system-notification-content`,children:[(0,K.jsx)(`div`,{className:`system-notification-title`,children:e.title}),(0,K.jsx)(`div`,{className:`system-notification-desc`,children:e.description})]})]})),ye=({isOpen:e,onClose:t,onSelect:n,tasks:r=[]})=>{let[i,a]=(0,W.useState)(`COMMANDS`),[s,c]=(0,W.useState)(0),[l,u]=(0,W.useState)(``),[d,f]=(0,W.useState)(!1),h=(0,W.useRef)(null),g=[{id:`expand`,label:`Expand Tasks (AI)`,icon:(0,K.jsx)(o,{size:14})},{id:`brief`,label:`Brief Task (AI)`,icon:(0,K.jsx)(m,{size:14})},{id:`plan`,label:`Auto-schedule`,icon:(0,K.jsx)(p,{size:14})}],_=r.filter(e=>e.title.toLowerCase().includes(l.toLowerCase())).sort((e,t)=>e.completed===t.completed?new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime():e.completed?1:-1),v=i===`COMMANDS`?g:_;(0,W.useEffect)(()=>{if(!e)return;let t=setTimeout(()=>{if(h.current?.focus(),h.current){let e=h.current.value;h.current.value=``,h.current.value=e}},10);return()=>clearTimeout(t)},[i,e]),(0,W.useEffect)(()=>{e&&(a(`COMMANDS`),u(``),c(0),f(!1))},[e]);let y=async()=>{if(i===`COMMANDS`){let e=g[s];e.id===`brief`?(a(`SELECT_TASK`),u(``),c(0)):e.id===`expand`?n(`expand`):e.id===`plan`?n(`plan`):n(e.id)}else if(i===`SELECT_TASK`){let e=_[s];e&&n(`brief`,{task:e})}};return(0,W.useEffect)(()=>{let n=n=>{!e||d||(n.key===`ArrowDown`&&(i===`COMMANDS`||i===`SELECT_TASK`)?(n.preventDefault(),c(e=>(e+1)%(v.length||1))):n.key===`ArrowUp`&&(i===`COMMANDS`||i===`SELECT_TASK`)?(n.preventDefault(),c(e=>(e-1+(v.length||1))%(v.length||1))):n.key===`Enter`?(n.preventDefault(),y()):n.key===`Escape`&&(i===`SELECT_TASK`?(a(`COMMANDS`),c(0)):t()))};return window.addEventListener(`keydown`,n,!0),()=>window.removeEventListener(`keydown`,n,!0)},[e,s,v,i,d]),e?(0,K.jsxs)(B,{children:[(0,K.jsx)(`div`,{className:`command-palette-overlay`,onClick:t,children:(0,K.jsxs)(`div`,{className:`command-palette glass-panel glow-border`,onClick:e=>e.stopPropagation(),children:[(0,K.jsx)(`div`,{className:`command-palette-search`,children:(0,K.jsx)(`input`,{ref:h,type:`text`,placeholder:i===`COMMANDS`?`Search system commands...`:`Select task to brief...`,value:l,onChange:e=>{u(e.target.value),c(0)}})}),(0,K.jsx)(`div`,{className:`command-list scrollable-palette`,children:v.length>0?v.map((e,t)=>(0,K.jsxs)(`button`,{className:`command-item ${t===s?`selected`:``}`,onClick:()=>{c(t),y()},onMouseEnter:()=>c(t),children:[i===`COMMANDS`?e.icon:(0,K.jsx)(`div`,{className:`task-dot`,style:{background:e.color}}),(0,K.jsx)(`span`,{className:`truncate`,children:i===`COMMANDS`?e.label:e.title}),i===`COMMANDS`&&e.id!==`expand`&&e.id!==`plan`&&(0,K.jsx)(w,{size:12,className:`ml-auto opacity-50`})]},e.id)):(0,K.jsx)(`div`,{className:`no-results`,children:`No matches found.`})})]})}),(0,K.jsx)(`style`,{children:`
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
      `})]}):null},J={BASE_URL:`http://localhost:1234/v1/chat/completions`,MODEL:`local-model`,DEFAULT_TEMPERATURE:.7};async function be(e,t=J.DEFAULT_TEMPERATURE){try{let n=await fetch(J.BASE_URL,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({model:J.MODEL,messages:e,temperature:t})});if(!n.ok)throw Error(`AI Request failed: ${n.statusText}`);return(await n.json()).choices[0].message.content.trim()}catch(e){throw console.error(`AI API Error:`,e),e}}async function Y(e){return be([{role:`user`,content:e}])}async function xe(e){return Y(e)}async function Se(e){return Y(e)}var Ce=({onClose:e,onSuccess:t})=>{let[n,r]=(0,W.useState)(5),i=e=>`### Universal Task Deconstruction Instructions
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
- `,[a,s]=(0,W.useState)(()=>i(5)),[c,l]=(0,W.useState)(!1),[d,f]=(0,W.useState)(!1),p=(0,W.useRef)(null);(0,W.useEffect)(()=>{setTimeout(()=>p.current?.focus(),50);let t=t=>{t.key===`Escape`&&e()};return window.addEventListener(`keydown`,t),()=>window.removeEventListener(`keydown`,t)},[e]);let m=e=>{r(e),d||s(i(e))},h=async()=>{if(a.trim()){l(!0);try{s(await xe(a)),f(!0),setTimeout(()=>p.current?.focus(),50)}catch{alert(`Failed to expand tasks. Make sure LM Studio is running at localhost:1234`)}finally{l(!1)}}},g=()=>{let n=a.split(`
`).map(e=>e.trim()).filter(e=>e.startsWith(`-`)).map(e=>e.replace(/^-\s*/,``).trim()).filter(e=>e.length>0);n.length>0?(t(n),e()):alert(`No valid tasks found. Each task must start with "- "`)},_=e=>{e.preventDefault(),d?g():h()};return(0,K.jsxs)(`div`,{className:`modal-overlay`,onClick:e,children:[(0,K.jsxs)(`div`,{className:`modal-content glass-panel glow-border`,onClick:e=>e.stopPropagation(),children:[(0,K.jsxs)(`header`,{className:`modal-header`,children:[(0,K.jsxs)(`div`,{className:`title-group`,children:[(0,K.jsx)(o,{size:18,className:`title-icon`}),(0,K.jsx)(`h2`,{className:`modal-title h-glow`,children:d?`Review Quests`:`Expand Mission`})]}),(0,K.jsx)(`button`,{onClick:e,className:`close-btn`,children:(0,K.jsx)(u,{size:20})})]}),(0,K.jsxs)(`div`,{className:`modal-body`,children:[!d&&(0,K.jsxs)(`div`,{className:`count-selector`,children:[(0,K.jsx)(`label`,{className:`section-label`,children:`Number of Tasks:`}),(0,K.jsx)(`input`,{type:`number`,className:`count-input`,value:n,onChange:e=>m(parseInt(e.target.value)||1),min:`1`,max:`20`})]}),(0,K.jsxs)(`form`,{onSubmit:_,className:`instruction-form`,children:[(0,K.jsx)(`label`,{className:`section-label`,children:d?`Tactical Actions (Editable):`:`Mission Instructions & Plans:`}),(0,K.jsx)(`textarea`,{ref:p,className:`instruction-input`,placeholder:d?``:`Type your goals, appointments, or instructions here...`,value:a,onChange:e=>s(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.metaKey||e.ctrlKey)&&_(e)}}),(0,K.jsxs)(`div`,{className:`modal-footer`,children:[(0,K.jsx)(`div`,{className:`kb-hint`,children:d?`Review and edit bullet points`:`Press ⌘+Enter to expand`}),(0,K.jsxs)(`button`,{type:`submit`,className:`send-btn ${c?`loading`:``} ${d?`success`:``}`,disabled:c||!a.trim(),children:[d?(0,K.jsx)(T,{size:18}):(0,K.jsx)(o,{size:18}),(0,K.jsx)(`span`,{children:c?`Processing...`:d?`Create Tasks`:`Generate Tasks`})]})]})]})]})]}),(0,K.jsx)(`style`,{children:`
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
      `})]})},we=({onClose:e,onSuccess:t,initialContent:n})=>{let[r,i]=(0,W.useState)(5),a=(e,t)=>`### Task Decomposition Instructions
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
${t}`,[o,s]=(0,W.useState)(()=>a(5,n)),[c,l]=(0,W.useState)(!1),[d,f]=(0,W.useState)(!1),p=(0,W.useRef)(null);(0,W.useEffect)(()=>{setTimeout(()=>p.current?.focus(),50);let t=t=>{t.key===`Escape`&&e()};return window.addEventListener(`keydown`,t),()=>window.removeEventListener(`keydown`,t)},[e]);let h=e=>{i(e),d||s(a(e,n))},g=async()=>{if(o.trim()){l(!0);try{s(await Se(o)),f(!0),setTimeout(()=>p.current?.focus(),50)}catch{alert(`Failed to generate brief. Make sure LM Studio is running at localhost:1234`)}finally{l(!1)}}},v=()=>{o.trim()&&(t(o),e())},y=e=>{e.preventDefault(),d?v():g()};return(0,K.jsxs)(`div`,{className:`modal-overlay`,onClick:e,children:[(0,K.jsxs)(`div`,{className:`modal-content glass-panel glow-border`,onClick:e=>e.stopPropagation(),children:[(0,K.jsxs)(`header`,{className:`modal-header`,children:[(0,K.jsxs)(`div`,{className:`title-group`,children:[(0,K.jsx)(m,{size:18,className:`title-icon`}),(0,K.jsx)(`h2`,{className:`modal-title h-glow`,children:d?`Review Brief`:`Mission Briefing`})]}),(0,K.jsx)(`button`,{onClick:e,className:`close-btn`,children:(0,K.jsx)(u,{size:20})})]}),(0,K.jsxs)(`div`,{className:`modal-body`,children:[!d&&(0,K.jsxs)(`div`,{className:`count-selector`,children:[(0,K.jsx)(`label`,{className:`section-label`,children:`Number of Sub-Tasks:`}),(0,K.jsx)(`input`,{type:`number`,className:`count-input`,value:r,onChange:e=>h(parseInt(e.target.value)||1),min:`1`,max:`20`})]}),(0,K.jsxs)(`form`,{onSubmit:y,className:`instruction-form`,children:[(0,K.jsx)(`label`,{className:`section-label`,children:d?`Briefing Result (Editable):`:`Mission Inquiry:`}),(0,K.jsx)(`textarea`,{ref:p,className:`instruction-input`,placeholder:d?``:`Ask what information you want about this task...`,value:o,onChange:e=>s(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.metaKey||e.ctrlKey)&&y(e)}}),(0,K.jsxs)(`div`,{className:`modal-footer`,children:[(0,K.jsx)(`div`,{className:`kb-hint`,children:d?`Review and edit briefing`:`Press ⌘+Enter to brief`}),(0,K.jsxs)(`button`,{type:`submit`,className:`send-btn ${c?`loading`:``} ${d?`success`:``}`,disabled:c||!o.trim(),children:[c||d?(0,K.jsx)(T,{size:18}):(0,K.jsx)(_,{size:18}),(0,K.jsx)(`span`,{children:c?`Processing...`:d?`Append to Log`:`Generate Brief`})]})]})]})]})]}),(0,K.jsx)(`style`,{children:`
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
      `})]})};function Te(e){let t=e.split(`
`),n=[],r=/\b((?:[01]?\d|2[0-3]):[0-5]\d(?::[0-5]\d)?\s?(?:[AaPp][Mm])?)\b/g;for(let e of t){let t=e.match(r);if(t&&t.length>=2){let e=t[0],r=t[1],i=X(e),a=X(r);i&&a&&Ee(i,a)&&n.push({start:i,end:a})}}return n}function X(e){let t=e.trim().toLowerCase();for(let e of[`H:mm`,`HH:mm`,`h:mm a`,`hh:mm a`,`h:mma`,`hh:mma`,`H:mm:ss`,`HH:mm:ss`,`h:mm:ss a`,`hh:mm:ss a`]){let n=N(t,e,new Date);if(se(n))return D(n,`HH:mm`)}return null}function Ee(e,t){let[n,r]=e.split(`:`).map(Number),[i,a]=t.split(`:`).map(Number);if(n>=24||i>=24)return!1;let o=n*60+r;return i*60+a>o}function De(e,t){let[n,r]=e.split(`:`).map(Number),[i,a]=t.split(`:`).map(Number);return i*60+a-(n*60+r)}var Oe=({onClose:e,onSuccess:t,unfinishedTasks:n,unscheduledTasks:r})=>{let[i,a]=(0,W.useState)(r.length>0?`unscheduled`:`all`),o=i===`unscheduled`?r:n,s=o.length,[c,l]=(0,W.useState)(()=>{let e=new Date,t=Math.ceil(e.getMinutes()/15)*15;return e.setMinutes(t),e.setSeconds(0),`${String(e.getHours()).padStart(2,`0`)}:${String(e.getMinutes()).padStart(2,`0`)}`}),[d,f]=(0,W.useState)(30),[m,h]=(0,W.useState)(15),[g,_]=(0,W.useState)(``),[v,y]=(0,W.useState)(!1),b=(0,W.useRef)(null);(0,W.useEffect)(()=>{v&&b.current?.focus();let t=t=>{t.key===`Escape`&&e()};return window.addEventListener(`keydown`,t),()=>window.removeEventListener(`keydown`,t)},[v,e]);let x=()=>{let e=0,[t,n]=c.split(`:`).map(Number);e=t*60+n;let r=[];for(let t=0;t<s;t++){let t=Math.floor(e/60),n=e%60,i=e+d,a=Math.floor(i/60),o=i%60;if(t>=24)break;let s=(e,t)=>`${String(e).padStart(2,`0`)}:${String(t).padStart(2,`0`)}`;r.push(`- ${s(t,n)} ${s(a,o)}`),e=i+m}_(r.join(`
`)),y(!0)},S=()=>{let n=Te(g);n.length>0?(t(n,o.map(e=>e.id)),e()):alert(`No valid time ranges found. Expected format: "- HH:mm HH:mm"`)};return(0,K.jsxs)(`div`,{className:`modal-overlay`,onClick:e,children:[(0,K.jsxs)(`div`,{className:`modal-content glass-panel glow-border`,onClick:e=>e.stopPropagation(),children:[(0,K.jsxs)(`header`,{className:`modal-header`,children:[(0,K.jsxs)(`div`,{className:`title-group`,children:[(0,K.jsx)(p,{size:18,className:`title-icon`}),(0,K.jsx)(`h2`,{className:`modal-title h-glow`,children:v?`Review Timeline`:`Auto-schedule`})]}),(0,K.jsx)(`button`,{onClick:e,className:`close-btn`,children:(0,K.jsx)(u,{size:20})})]}),(0,K.jsxs)(`div`,{className:`modal-body`,children:[v?(0,K.jsxs)(`div`,{className:`instruction-form`,children:[(0,K.jsx)(`label`,{className:`section-label`,children:`Calculated Timeline (Editable):`}),(0,K.jsx)(`textarea`,{ref:b,className:`instruction-input`,value:g,onChange:e=>_(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.metaKey||e.ctrlKey)&&S()}})]}):(0,K.jsxs)(`div`,{className:`planning-params`,children:[(0,K.jsxs)(`div`,{className:`scope-selector`,children:[(0,K.jsxs)(`button`,{className:`scope-btn ${i===`unscheduled`?`active`:``}`,onClick:()=>a(`unscheduled`),children:[`Unscheduled (`,r.length,`)`]}),(0,K.jsxs)(`button`,{className:`scope-btn ${i===`all`?`active`:``}`,onClick:()=>a(`all`),children:[`All (`,n.length,`)`]})]}),(0,K.jsxs)(`div`,{className:`param-grid`,children:[(0,K.jsxs)(`div`,{className:`param-item`,children:[(0,K.jsx)(`label`,{className:`section-label`,children:`Start Time:`}),(0,K.jsx)(`input`,{type:`time`,className:`count-input time-input`,value:c,onChange:e=>l(e.target.value)})]}),(0,K.jsxs)(`div`,{className:`param-item`,children:[(0,K.jsx)(`label`,{className:`section-label`,children:`Duration (m):`}),(0,K.jsx)(`input`,{type:`number`,className:`count-input`,value:d,onChange:e=>f(parseInt(e.target.value)||0),min:`1`})]}),(0,K.jsxs)(`div`,{className:`param-item`,children:[(0,K.jsx)(`label`,{className:`section-label`,children:`Break (m):`}),(0,K.jsx)(`input`,{type:`number`,className:`count-input`,value:m,onChange:e=>h(parseInt(e.target.value)||0),min:`0`})]})]})]}),(0,K.jsxs)(`div`,{className:`modal-footer`,children:[(0,K.jsx)(`div`,{className:`kb-hint`,children:v?`Review and edit time slots`:`Press Enter to generate`}),(0,K.jsxs)(`button`,{onClick:e=>{e.preventDefault(),v?S():x()},className:`send-btn ${v?`success`:``}`,disabled:!v&&!c,children:[v?(0,K.jsx)(T,{size:18}):(0,K.jsx)(p,{size:18}),(0,K.jsx)(`span`,{children:v?`Sync Timeline`:`Generate Schedule`})]})]})]})]}),(0,K.jsx)(`style`,{children:`
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
      `})]})};function ke(){let{tasks:e,timeBlocks:t,notes:n,selectedDate:r,addTask:i,addTasksBulk:a,toggleTask:o,deleteTask:s,updateTask:c,moveTaskToList:l,setDate:u,updateNote:d,updateTimeBlock:p,deleteTimeBlock:m,scheduleTask:h,bulkScheduleTasks:g,unscheduleTask:_}=he(),{messages:v,dismissMessage:y,dismissAllMessages:b,addMessage:x}=ge(e),S=e.filter(e=>e.list===`today`&&e.date===r),C=S.filter(e=>!e.completed).sort((e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()),w=new Set(t.map(e=>e.taskId)),T=C.filter(e=>!w.has(e.id)),[E,D]=(0,W.useState)(!1),[O,k]=(0,W.useState)(!1),[A,j]=(0,W.useState)(!1),[M,N]=(0,W.useState)(!1),[P,F]=(0,W.useState)(null),I=n[r]||``,L=(0,W.useCallback)(async e=>{e.length>0&&(await a(e,`today`),x(`QUEST_CLEARED`,`SYSTEM EXPANDED`,`${e.length} new tasks synchronized to your log.`))},[a,x]),R=(0,W.useCallback)(async e=>{let t=I.trim();await d(r,t?`${t}\n\n${e.trim()}`:e.trim()),x(`QUEST_CLEARED`,`SYSTEM UPDATED`,`Mission briefing appended to SYSTEM LOG.`)},[I,r,d,x]),z=(0,W.useCallback)(async(e,t)=>{let n=[];for(let r=0;r<Math.min(e.length,t.length);r++){let i=e[r],a=t[r];n.push({id:a,start:i.start,duration:De(i.start,i.end)})}n.length>0&&(await g(n),x(`QUEST_CLEARED`,`PLAN SYNCHRONIZED`,`${n.length} missions scheduled to your timeline.`))},[g,x]),B=(0,W.useCallback)(async(e,t)=>{e===`expand`?(D(!1),k(!0)):e===`brief`?(D(!1),F(t?.task||null),j(!0)):e===`plan`&&(D(!1),N(!0))},[]);return(0,W.useEffect)(()=>{let e=e=>{let t=document.activeElement,n=t instanceof HTMLTextAreaElement,r=t instanceof HTMLInputElement&&(t.type===`text`||t.type===`number`||t.type===`password`),i=n||r;e.key===`/`&&!E&&(i||(e.preventDefault(),t instanceof HTMLElement&&t.blur(),D(!0))),!i&&!E&&(e.key===`n`?(e.preventDefault(),document.getElementById(`notes-textarea`)?.focus()):e.key===`t`?(e.preventDefault(),document.getElementById(`task-input-today`)?.focus()):e.key===`l`&&(e.preventDefault(),document.getElementById(`task-input-later`)?.focus())),e.key===`Escape`&&(E?D(!1):O?k(!1):A?(j(!1),F(null)):M?N(!1):(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&t.blur(),b())};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[E,O,A,M,b]),(0,K.jsx)(f,{children:(0,K.jsxs)(`div`,{className:`app-container`,children:[(0,K.jsx)(_e,{messages:v,onDismiss:y}),(0,K.jsx)(ye,{isOpen:E,onClose:()=>D(!1),onSelect:B,tasks:S}),O&&(0,K.jsx)(Ce,{onClose:()=>k(!1),onSuccess:L}),A&&(0,K.jsx)(we,{onClose:()=>{j(!1),F(null)},onSuccess:R,initialContent:P?.title||``}),M&&(0,K.jsx)(Oe,{onClose:()=>N(!1),onSuccess:z,unfinishedTasks:C,unscheduledTasks:T}),(0,K.jsx)(`div`,{className:`app-sidebar-column`,children:(0,K.jsx)(de,{tasks:e,timeBlocks:t,addTask:i,toggleTask:o,deleteTask:s,updateTask:c,moveTaskToList:l,selectedDate:r})}),(0,K.jsx)(fe,{selectedDate:r,timeBlocks:t,tasks:e,deleteTimeBlock:m,updateTimeBlock:p,setDate:u,scheduleTask:h,unscheduleTask:_}),(0,K.jsxs)(`div`,{className:`app-notes-column`,children:[(0,K.jsx)(pe,{date:r,note:I,updateNote:d}),(0,K.jsx)(me,{tasks:e})]})]})})}var Z=`modulepreload`,Ae=function(e){return`/Timebox-v2/`+e},Q={},je=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=Ae(t,n),t in Q)return;Q[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:Z,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Me=`true`,Ne=`false`,$=Me===`true`,Pe=Ne===`true`;function Fe(e={}){let{immediate:t=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:i,onRegisteredSW:a,onRegisterError:o}=e,s,c,l,u=async(e=!0)=>{await c,$||l?.()};async function d(){if(`serviceWorker`in navigator){if(s=await je(async()=>{let{Workbox:e}=await import(`./workbox-window.prod.es5-BLxbIXbq.js`);return{Workbox:e}},[]).then(({Workbox:e})=>new e(`/Timebox-v2/sw.js`,{scope:`/Timebox-v2/`,type:`classic`})).catch(e=>{o?.(e)}),!s)return;if(l=()=>{s?.messageSkipWaiting()},!Pe)if($)s.addEventListener(`activated`,e=>{(e.isUpdate||e.isExternal)&&window.location.reload()}),s.addEventListener(`installed`,e=>{e.isUpdate||r?.()});else{let e=!1,t=()=>{e=!0,s?.addEventListener(`controlling`,e=>{e.isUpdate&&window.location.reload()}),n?.()};s.addEventListener(`installed`,n=>{n.isUpdate===void 0?n.isExternal===void 0?!e&&r?.():n.isExternal?t():!e&&r?.():n.isUpdate||r?.()}),s.addEventListener(`waiting`,t)}s.register({immediate:t}).then(e=>{a?a(`/Timebox-v2/sw.js`,e):i?.(e)}).catch(e=>{o?.(e)})}}return c=d(),u}Fe({immediate:!0}),le.createRoot(document.getElementById(`root`)).render((0,K.jsx)(W.StrictMode,{children:(0,K.jsx)(ke,{})}));