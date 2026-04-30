import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{i as t,n,o as r,r as i,t as a}from"./vendor-calendar-DXTmhCw3.js";import{$ as o,A as s,B as c,C as l,D as u,E as d,F as f,G as p,H as m,I as h,J as g,K as _,L as v,M as y,N as b,O as x,P as S,Q as C,R as w,S as ee,T,U as E,V as D,W as O,X as k,Y as A,Z as j,_ as M,a as N,at as P,b as F,c as I,ct as L,d as R,dt as z,et as B,f as V,ft as te,g as H,h as U,i as ne,it as W,j as re,k as ie,l as ae,lt as G,m as oe,mt as se,n as ce,nt as le,o as ue,ot as de,p as fe,pt as pe,q as me,r as K,rt as he,s as ge,st as _e,t as ve,tt as ye,u as be,ut as xe,v as Se,w as Ce,x as q,y as we,z as Te}from"./vendor-core-dzMAFQwr.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var Ee=e(se(),1),J=e(r(),1),Y=H(),De=(0,J.memo)(({task:e,timeBlock:t,toggleTask:n,deleteTask:r,updateTask:i,moveTask:a,moveIcon:o})=>{let[l,u]=(0,J.useState)(!1),[d,f]=(0,J.useState)(!1);(0,J.useEffect)(()=>(l?document.body.classList.add(`picker-open`):document.body.classList.remove(`picker-open`),()=>{document.body.classList.remove(`picker-open`)}),[l]);let{refs:p,floatingStyles:m,context:h}=I({open:l,onOpenChange:u,middleware:[fe(10),V(),oe()],whileElementsMounted:U,placement:`right-start`}),{refs:g,floatingStyles:_,context:v}=I({open:d,onOpenChange:f,middleware:[fe(10),V(),oe()],whileElementsMounted:U,placement:`top-start`}),{getReferenceProps:y,getFloatingProps:b}=be([ue(h),ge(h)]),{getReferenceProps:x,getFloatingProps:S}=be([ae(v,{delay:0}),R(v,{role:`tooltip`})]),C=t=>{let{r:n,g:r,b:a,a:o}=t.rgb;i(e.id,{color:`rgba(${n}, ${r}, ${a}, ${o})`})};return(0,Y.jsx)(`div`,{className:`draggable-task-item task-item-container`,"data-task-id":e.id,"data-title":e.title,"data-color":e.color||`rgba(11, 165, 233, 0.75)`,style:{"--task-accent":e.color||`var(--accent)`},children:(0,Y.jsxs)(`div`,{className:`task-item-content`,children:[(0,Y.jsx)(`div`,{ref:g.setReference,className:`task-item-drag-handle`,...x(),children:(0,Y.jsx)(A,{size:14})}),d&&(0,Y.jsx)(N,{children:(0,Y.jsx)(`div`,{ref:g.setFloating,style:_,className:`task-tooltip`,...S(),children:e.title})}),(0,Y.jsx)(`button`,{className:`task-item-toggle`,onClick:t=>{t.stopPropagation(),n(e.id)},children:e.completed?(0,Y.jsx)(_e,{size:18,color:`var(--reward)`,fill:`var(--reward)`,fillOpacity:.2}):(0,Y.jsx)(P,{size:18,color:`var(--accent)`})}),(0,Y.jsxs)(`div`,{className:`task-item-body`,children:[(0,Y.jsx)(`div`,{className:`task-item-title ${e.completed?`completed`:``}`,children:e.title}),t&&(0,Y.jsxs)(`div`,{className:`task-item-time`,children:[(0,Y.jsx)(W,{size:10,color:`var(--accent)`}),q(new Date(t.startTime),`h:mm a`)]})]}),(0,Y.jsxs)(`div`,{className:`task-actions`,onClick:e=>e.stopPropagation(),children:[(0,Y.jsxs)(`div`,{className:`relative-container`,children:[(0,Y.jsx)(`button`,{ref:p.setReference,...y({onClick(e){e.stopPropagation()}}),title:`Change color`,className:`action-btn`,children:(0,Y.jsx)(c,{size:14})}),l&&(0,Y.jsx)(N,{children:(0,Y.jsx)(`div`,{ref:p.setFloating,style:{...m,zIndex:99999},...b({onClick(e){e.stopPropagation()}}),children:(0,Y.jsx)(M,{color:e.color||`rgba(11, 165, 233, 0.75)`,onChange:C,disableAlpha:!1})})})]}),(0,Y.jsx)(`button`,{className:`action-btn`,onClick:e=>{e.stopPropagation(),a()},title:`Move task`,children:o}),(0,Y.jsx)(`button`,{className:`action-btn`,onClick:t=>{t.stopPropagation(),r(e.id)},title:`Delete task`,children:(0,Y.jsx)(s,{size:14})})]})]})})}),Oe=({title:e,placeholder:t,tasks:n,timeBlocks:r,type:i,addTask:a,toggleTask:o,deleteTask:s,updateTask:c,moveTaskToList:l})=>{let[u,d]=(0,J.useState)(``),f=e=>{e.preventDefault(),u.trim()&&(a(u.trim(),i),d(``))},p=i===`today`?`later`:`today`,m=i===`today`?xe:z,h=[...n].sort((e,t)=>e.completed===t.completed?new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime():e.completed?1:-1);return(0,Y.jsxs)(`section`,{className:`task-list-section`,children:[(0,Y.jsx)(`h2`,{className:`task-list-header`,children:e}),(0,Y.jsx)(`form`,{onSubmit:f,className:`task-input-form`,children:(0,Y.jsxs)(`div`,{className:`task-input-wrapper`,children:[(0,Y.jsx)(Te,{size:16,className:`task-input-icon`}),(0,Y.jsx)(`input`,{id:`task-input-${i}`,type:`text`,placeholder:t,value:u,onChange:e=>d(e.target.value),className:`task-input`,autoComplete:`off`})]})}),(0,Y.jsx)(`div`,{className:`task-list`,children:h.map(e=>(0,Y.jsx)(De,{task:e,timeBlock:r.find(t=>t.taskId===e.id),toggleTask:o,deleteTask:s,updateTask:c,moveTask:()=>l(e.id,p),moveIcon:(0,Y.jsx)(m,{size:14})},e.id))})]})},ke=({tasks:e,timeBlocks:t,addTask:n,toggleTask:r,deleteTask:a,updateTask:o,moveTaskToList:s,selectedDate:c})=>{let l=(0,J.useRef)(null);(0,J.useEffect)(()=>{if(l.current){let e=new i(l.current,{itemSelector:`.draggable-task-item`,eventData:function(e){let t=e.getAttribute(`data-color`)||`rgba(11, 165, 233, 0.75)`;return{title:e.getAttribute(`data-title`),duration:`00:30`,backgroundColor:t,borderColor:t,extendedProps:{taskId:e.getAttribute(`data-task-id`),styles:{"--fc-event-bg-color":t.replace(/rgba?\((.*?)(?:,\s*[\d.]+)?\)/,`rgba($1, 0.4)`),"--fc-event-border-color":t}}}}});return()=>e.destroy()}},[]);let{setNodeRef:u,isOver:d}=pe({id:`sidebar-droppable`}),f=e.filter(e=>e.list===`today`&&e.date===c),p=e.filter(e=>e.list===`later`);return(0,Y.jsx)(`aside`,{ref:e=>{u(e),l.current=e},className:`sidebar ${d?`sidebar-droppable-active`:``}`,children:(0,Y.jsxs)(`div`,{className:`scrollable sidebar-content`,children:[(0,Y.jsx)(Oe,{title:`Today`,placeholder:`Add task to today...`,tasks:f,timeBlocks:t,type:`today`,addTask:n,toggleTask:r,deleteTask:a,updateTask:o,moveTaskToList:s}),(0,Y.jsx)(Oe,{title:`Later`,placeholder:`Brain dump...`,tasks:p,timeBlocks:t,type:`later`,addTask:n,toggleTask:r,deleteTask:a,updateTask:o,moveTaskToList:s})]})})},Ae=({selectedDate:e,timeBlocks:r,tasks:i,deleteTimeBlock:o,updateTimeBlock:s,setDate:c,scheduleTask:l,unscheduleTask:u})=>{let d=(0,J.useRef)(null),f=(0,J.useRef)(null),p=(t=!0)=>{if(d.current&&d.current.getApi()&&Ce(new Date,new Date(e))){let e=new Date,n=e.getHours()*60+e.getMinutes(),r=Math.max(0,n-60)*(40/15),i=d.current.elRef.current?.querySelector(`.fc-scroller`);i&&i.scrollTo({top:r,behavior:t?`smooth`:`auto`})}};(0,J.useEffect)(()=>{let t=d.current?.getApi();t&&(q(t.getDate(),`yyyy-MM-dd`)!==e&&t.gotoDate(e),setTimeout(()=>p(!1),200))},[e]),(0,J.useEffect)(()=>{let e=setInterval(()=>{p(!0)},6e4);return()=>clearInterval(e)},[e]);let{setNodeRef:m,isOver:h}=pe({id:`calendar-droppable`,data:{type:`calendar`}}),g=(0,J.useMemo)(()=>r.filter(t=>q(new Date(t.startTime),`yyyy-MM-dd`)===e).map(e=>{let t=i.find(t=>t.id===e.taskId),n=t?.completed||!1,r=n?`rgba(71, 85, 105, 0.4)`:t?.color||e.color||`rgba(11, 165, 233, 0.75)`;return{id:e.id,title:e.title||`Untitled`,start:e.startTime,end:e.endTime,backgroundColor:r,borderColor:r,className:n?`event-completed`:``,extendedProps:{taskId:e.taskId,completed:n},display:`block`,styles:{"--fc-event-bg-color":r.replace(/rgba?\((.*?)(?:,\s*[\d.]+)?\)/,`rgba($1, 0.4)`),"--fc-event-border-color":r}}}),[r,i,e]);return(0,Y.jsxs)(`div`,{ref:m,className:`main-content`,style:{backgroundColor:h?`rgba(11, 165, 233, 0.05)`:`transparent`,transition:`background-color 0.2s ease`,borderRight:`1px solid var(--border)`},children:[(0,Y.jsxs)(`header`,{className:`schedule-header`,children:[(0,Y.jsxs)(`div`,{className:`header-left`,children:[(0,Y.jsxs)(`div`,{className:`date-picker-trigger`,onClick:()=>f.current?.showPicker(),children:[(0,Y.jsx)(G,{size:14,className:`calendar-icon-blue`}),(0,Y.jsx)(`input`,{type:`date`,ref:f,value:e,onChange:e=>c(e.target.value),className:`hidden-date-input`})]}),(0,Y.jsx)(`h2`,{className:`schedule-date-text`,children:q(new Date(e),`EEEE, MMMM do`)})]}),(0,Y.jsxs)(`div`,{className:`header-nav`,children:[(0,Y.jsx)(`button`,{className:`nav-text-btn`,onClick:()=>{c(q(we(new Date(e),1),`yyyy-MM-dd`))},children:`<`}),(0,Y.jsx)(`button`,{className:`nav-text-btn today-btn`,onClick:()=>{c(q(new Date,`yyyy-MM-dd`)),setTimeout(()=>p(!0),100)},children:`TODAY`}),(0,Y.jsx)(`button`,{className:`nav-text-btn`,onClick:()=>{c(q(T(new Date(e),1),`yyyy-MM-dd`))},children:`>`})]})]}),(0,Y.jsx)(`div`,{className:`calendar-wrapper`,style:{flex:1},children:(0,Y.jsx)(n,{ref:d,plugins:[a,t],initialView:`timeGridDay`,headerToolbar:!1,allDaySlot:!1,defaultTimedEventDuration:`00:30`,slotDuration:`00:15:00`,slotLabelInterval:`01:00`,slotLabelFormat:{hour:`numeric`,minute:`2-digit`,meridiem:`short`,hour12:!0},expandRows:!0,height:`100%`,editable:!0,selectable:!1,droppable:!0,forceEventDuration:!0,events:g,eventChange:e=>{let{event:t}=e;s(t.id,{startTime:t.startStr,endTime:t.endStr})},eventReceive:e=>{let{event:t}=e,n=t.extendedProps.taskId,r=t.startStr;t.remove(),n&&l(n,r)},eventDragStop:e=>{let{jsEvent:t,event:n}=e,r=document.querySelector(`.sidebar`);if(r){let e=r.getBoundingClientRect();t.clientX>=e.left&&t.clientX<=e.right&&t.clientY>=e.top&&t.clientY<=e.bottom&&(n.extendedProps.taskId?u(n.extendedProps.taskId):o(n.id))}},nowIndicator:!0,dayHeaders:!1,themeSystem:`standard`,eventTextColor:`#fff`,eventDisplay:`block`,eventContent:e=>{let{taskId:t,completed:n}=e.event.extendedProps,r=i.find(e=>e.id===t),a=n?`rgba(71, 85, 105, 0.4)`:r?.color||e.event.backgroundColor||`rgba(11, 165, 233, 0.75)`,o=a.replace(/rgba?\((.*?)(?:,\s*[\d.]+)?\)/,`rgba($1, 0.4)`);return(0,Y.jsx)(`div`,{className:`fc-event-glass-container ${n?`event-completed`:``}`,style:{"--event-bg":o,"--event-border":a},children:(0,Y.jsx)(`div`,{className:`fc-event-title`,children:e.event.title})})}})}),(0,Y.jsx)(`style`,{children:`
        .schedule-header {
          flex-shrink: 0;
          height: 50px;
          padding: 0 1.5rem;
          border-bottom: 1px solid var(--border);
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: rgba(15, 23, 42, 0.4);
          z-index: 10;
          backdrop-filter: blur(8px);
        }
        .header-left {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .date-picker-trigger {
          position: relative;
          display: flex;
          align-items: center;
          cursor: pointer;
          transition: transform 0.2s;
        }
        .date-picker-trigger:hover {
          transform: scale(1.1);
        }
        .calendar-icon-blue {
          color: var(--accent);
          filter: drop-shadow(0 0 5px var(--accent));
        }
        .hidden-date-input {
          position: absolute;
          opacity: 0;
          width: 0;
          height: 0;
          pointer-events: none;
          color-scheme: dark;
        }
        .schedule-date-text {
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-primary);
          text-shadow: 0 0 15px var(--accent);
          margin: 0;
        }
        .header-nav {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .nav-text-btn {
          background: none;
          border: none;
          color: var(--text-primary);
          text-shadow: 0 0 15px var(--accent);
          font-family: var(--font-family);
          font-size: 0.9rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.2s;
          padding: 4px 8px;
          letter-spacing: 0.1em;
        }
        .nav-text-btn:hover {
          color: var(--accent);
          text-shadow: 0 0 20px var(--accent);
          transform: scale(1.1);
        }
        .today-btn {
          letter-spacing: 0.2em;
        }
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
      `})]})},X=[`backlog`,`habits`,`maintenance`,`recharge`],Z=[`observation`,`tracking`,`other`],je={backlog:(0,Y.jsx)(me,{size:16}),habits:(0,Y.jsx)(w,{size:16}),maintenance:(0,Y.jsx)(x,{size:16}),recharge:(0,Y.jsx)(d,{size:16}),observation:(0,Y.jsx)(D,{size:16}),tracking:(0,Y.jsx)(E,{size:16}),other:(0,Y.jsx)(g,{size:16})},Me=({date:e,notes:t,updateNote:n,addTasksBulk:r,addMessage:i,getNotesInRange:a})=>{let[o,s]=(0,J.useState)(`observation`),[c,l]=(0,J.useState)(``),[d,f]=(0,J.useState)(!1),[m,h]=(0,J.useState)(!1),g=(0,J.useRef)(null),[_,v]=(0,J.useState)(e),[y,b]=(0,J.useState)(e),[x,S]=(0,J.useState)([`observation`,`tracking`,`other`]);(0,J.useEffect)(()=>{m&&(v(e),b(e))},[m,e]);let w=((e,n)=>(t[e]||{})[X.includes(e)?`global`:n]||``)(o,e);(0,J.useEffect)(()=>{l(w)},[o,e,w]);let T=()=>{c!==w&&n(o,X.includes(o)?`global`:e,c)},E=e=>{e.key===`Escape`&&(g.current?.blur(),h(!1))},D=()=>{navigator.clipboard.writeText(c),f(!0),setTimeout(()=>f(!1),2e3)},O=()=>{if(!c.trim())return;let e=c.split(`
`).map(e=>e.trim()).filter(e=>e.length>0).map(e=>e.startsWith(`- `)?e.substring(2):e);e.length>0&&(r(e,`today`),i(`QUEST_CLEARED`,`SYSTEM SYNCHRONIZED`,`${e.length} tasks extracted from log.`))},k=e=>{S(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])};return(0,Y.jsxs)(`div`,{className:`notes-panel relative-container`,children:[(0,Y.jsx)(`header`,{className:`notes-header`,children:(0,Y.jsxs)(`div`,{className:`notes-header-content`,children:[(0,Y.jsxs)(`div`,{className:`notes-type-icons`,children:[X.map(e=>(0,Y.jsx)(`button`,{className:`note-type-btn persistent ${o===e?`active`:``}`,onClick:()=>s(e),title:e.toUpperCase(),children:je[e]},e)),(0,Y.jsx)(`div`,{className:`type-separator`}),Z.map(e=>(0,Y.jsx)(`button`,{className:`note-type-btn transient ${o===e?`active`:``}`,onClick:()=>s(e),title:e.toUpperCase(),children:je[e]},e))]}),(0,Y.jsx)(`div`,{className:`type-separator`}),(0,Y.jsxs)(`div`,{className:`notes-utility-icons`,children:[(0,Y.jsx)(`button`,{className:`note-type-btn`,onClick:D,title:`Copy to Clipboard`,disabled:!c,style:{opacity:c?1:.3},children:d?(0,Y.jsx)(L,{size:18,color:`#22c55e`}):(0,Y.jsx)(le,{size:18})}),(0,Y.jsx)(`button`,{className:`note-type-btn ${m?`active`:``}`,onClick:()=>h(!m),title:`Export Logs`,children:(0,Y.jsx)(C,{size:18})}),(0,Y.jsx)(`button`,{className:`note-type-btn`,onClick:O,title:`Convert to Tasks`,disabled:!c,style:{opacity:c?1:.3},children:(0,Y.jsx)(p,{size:18})})]})]})}),m&&(0,Y.jsxs)(`div`,{className:`export-menu glow-border`,children:[(0,Y.jsxs)(`div`,{className:`export-menu-header`,children:[(0,Y.jsx)(`span`,{children:`EXPORT SYSTEM LOGS`}),(0,Y.jsx)(`button`,{onClick:()=>h(!1),children:(0,Y.jsx)(u,{size:14})})]}),(0,Y.jsxs)(`div`,{className:`export-menu-section`,children:[(0,Y.jsx)(`label`,{className:`export-label`,children:`DATA TYPES`}),(0,Y.jsx)(`div`,{className:`export-checkbox-group`,children:Z.map(e=>(0,Y.jsxs)(`label`,{className:`export-checkbox-item`,children:[(0,Y.jsx)(`input`,{type:`checkbox`,checked:x.includes(e),onChange:()=>k(e)}),(0,Y.jsx)(`span`,{children:e.toUpperCase()})]},e))})]}),(0,Y.jsxs)(`div`,{className:`export-menu-section`,children:[(0,Y.jsx)(`label`,{className:`export-label`,children:`TEMPORAL RANGE`}),(0,Y.jsxs)(`div`,{className:`export-date-group`,children:[(0,Y.jsxs)(`div`,{className:`export-date-item`,children:[(0,Y.jsx)(`span`,{children:`START`}),(0,Y.jsx)(`input`,{type:`date`,value:_,onChange:e=>v(e.target.value),className:`export-date-input`})]}),(0,Y.jsxs)(`div`,{className:`export-date-item`,children:[(0,Y.jsx)(`span`,{children:`END`}),(0,Y.jsx)(`input`,{type:`date`,value:y,onChange:e=>b(e.target.value),className:`export-date-input`})]})]})]}),(0,Y.jsx)(`button`,{className:`export-submit-btn`,onClick:async()=>{try{let e=(await a(_,y)).filter(e=>x.includes(e.type)),t={};e.forEach(e=>{t[e.date]||(t[e.date]=[]),t[e.date].push(e)});let n=`# SYSTEM LOG EXPORT
`;n+=`Period: ${_} to ${y}\n`,n+=`Generated: ${new Date().toLocaleString()}\n\n`,n+=`---

`;let r=ee({start:Se(_),end:Se(y)});r.forEach(e=>{let r=t[q(e,`yyyy-MM-dd`)];r&&r.length>0&&(n+=`## ${q(e,`EEEE, MMMM do, yyyy`)}\n\n`,[...r].sort((e,t)=>Z.indexOf(e.type)-Z.indexOf(t.type)).forEach(e=>{n+=`### ${e.type.toUpperCase()}\n`,n+=`${e.content}\n\n`}),n+=`---

`)});let o=new Blob([n],{type:`text/markdown`}),s=URL.createObjectURL(o),c=document.createElement(`a`);c.href=s,c.download=`timebox-logs-${_}-to-${y}.md`,c.click(),URL.revokeObjectURL(s),h(!1),i(`QUEST_CLEARED`,`EXPORT COMPLETE`,`Markdown log generated for ${r.length} days.`)}catch(e){console.error(`Export failed:`,e),alert(`Export failed. Check console for details.`)}},disabled:x.length===0,children:`GENERATE MARKDOWN`})]}),(0,Y.jsx)(`div`,{className:`notes-content`,children:(0,Y.jsx)(`textarea`,{id:`notes-textarea`,ref:g,placeholder:X.includes(o)?`Name: ${o.toUpperCase()}\nDate Specific: False`:`Name: ${o.toUpperCase()}\nDate: ${e}`,value:c||``,onChange:e=>l(e.target.value),onBlur:T,onKeyDown:E,className:`notes-textarea`})})]})},Q=new class extends ne{tasks;timeBlocks;systemNotes;settings;constructor(){super(`TimeboxDatabase`),this.version(1).stores({tasks:`id, title, completed, list, date, createdAt`,timeBlocks:`id, taskId, title, startTime, endTime`,notes:`date`,settings:`key`}),this.version(2).stores({notes:null,systemNotes:`++id, type, date, [type+date]`})}},Ne={provider:`ollama`,baseUrl:`http://localhost:11434/v1`,model:`gemma4:e4b`},Pe={startTime:`06:00`,endTime:`00:00`};function $(){let[e,t]=(0,J.useState)(()=>q(new Date,`yyyy-MM-dd`)),n=K(()=>Q.tasks.toArray(),[])||[],r=K(()=>Q.timeBlocks.toArray(),[])||[],i=K(()=>Q.systemNotes.toArray(),[])||[],a=K(()=>Q.settings.toArray(),[])||[],o=(0,J.useMemo)(()=>a.find(e=>e.key===`aiConfig`)?.value||Ne,[a]),s=(0,J.useMemo)(()=>a.find(e=>e.key===`energyConfig`)?.value||Pe,[a]),c=(0,J.useCallback)(async e=>{let t={...o,...e};await Q.settings.put({key:`aiConfig`,value:t})},[o]),l=(0,J.useCallback)(async e=>{let t={...s,...e};await Q.settings.put({key:`energyConfig`,value:t})},[s]),u=(0,J.useMemo)(()=>i.reduce((e,t)=>(e[t.type]||(e[t.type]={}),e[t.type][t.date]=t.content,e),{}),[i]),d=(0,J.useCallback)(async(t,n)=>{let r={id:Math.random().toString(36).substr(2,9),title:t,completed:!1,list:n,color:`rgba(11, 165, 233, 0.75)`,createdAt:new Date().toISOString(),date:n===`today`?e:void 0};await Q.tasks.add(r)},[e]),f=(0,J.useCallback)(async(t,n)=>{let r=new Date().getTime(),i=t.map((t,i)=>({id:Math.random().toString(36).substr(2,9),title:t,completed:!1,list:n,color:`rgba(11, 165, 233, 0.75)`,createdAt:new Date(r+i).toISOString(),date:n===`today`?e:void 0}));await Q.tasks.bulkAdd(i)},[e]),p=(0,J.useCallback)(async e=>{let t=await Q.tasks.get(e);t&&await Q.tasks.update(e,{completed:!t.completed})},[]),m=(0,J.useCallback)(async e=>{await Q.transaction(`rw`,Q.tasks,Q.timeBlocks,async()=>{await Q.tasks.delete(e),await Q.timeBlocks.where(`taskId`).equals(e).delete()})},[]),h=(0,J.useCallback)(async(e,t)=>{await Q.transaction(`rw`,Q.tasks,Q.timeBlocks,async()=>{await Q.tasks.update(e,t),t.color&&await Q.timeBlocks.where(`taskId`).equals(e).modify({color:t.color})})},[]),g=(0,J.useCallback)(async(e,t)=>{await Q.tasks.update(e,{title:t})},[]),_=(0,J.useCallback)(async(t,n)=>{let r=n===`today`?e:void 0;await Q.transaction(`rw`,Q.tasks,Q.timeBlocks,async()=>{await Q.tasks.update(t,{list:n,date:r}),n===`later`&&await Q.timeBlocks.where(`taskId`).equals(t).delete()})},[e]),v=(0,J.useCallback)(async(e,t,n=30)=>{let r=new Date(t),i=new Date(r.getTime()+n*6e4),a=q(r,`yyyy-MM-dd`);await Q.transaction(`rw`,Q.tasks,Q.timeBlocks,async()=>{let t=await Q.tasks.get(e);if(!t)return;await Q.tasks.update(e,{list:`today`,date:a});let n={id:Math.random().toString(36).substr(2,9),taskId:e,title:t.title,startTime:r.toISOString(),endTime:i.toISOString(),color:t.color||`rgba(11, 165, 233, 0.75)`};await Q.timeBlocks.where(`taskId`).equals(e).delete(),await Q.timeBlocks.add(n)})},[]),y=(0,J.useCallback)(async e=>{await Q.timeBlocks.where(`taskId`).equals(e).delete()},[]);return{tasks:n,timeBlocks:r,notes:u,selectedDate:e,addTask:d,addTasksBulk:f,toggleTask:p,deleteTask:m,updateTask:h,updateTaskTitle:g,moveTaskToList:_,setDate:(0,J.useCallback)(e=>{t(e)},[]),updateNote:(0,J.useCallback)(async(e,t,n)=>{let r=await Q.systemNotes.where({type:e,date:t}).first();r?await Q.systemNotes.update(r.id,{content:n}):await Q.systemNotes.add({type:e,date:t,content:n})},[]),updateTimeBlock:(0,J.useCallback)(async(e,t)=>{await Q.timeBlocks.update(e,t)},[]),deleteTimeBlock:(0,J.useCallback)(async e=>{await Q.timeBlocks.delete(e)},[]),scheduleTask:v,bulkScheduleTasks:(0,J.useCallback)(async t=>{await Q.transaction(`rw`,Q.tasks,Q.timeBlocks,async()=>{for(let n of t){let t=await Q.tasks.get(n.id);if(!t)continue;let[r,i]=n.start.split(`:`).map(Number),a=r*60+i,o=Math.round(a/15)*15;r=Math.floor(o/60),i=o%60;let s=new Date(e+`T00:00:00`);s.setHours(r,i,0,0);let c=new Date(s.getTime()+n.duration*6e4),l={id:Math.random().toString(36).substr(2,9),taskId:n.id,title:t.title,startTime:s.toISOString(),endTime:c.toISOString(),color:t.color||`rgba(11, 165, 233, 0.75)`};await Q.timeBlocks.where(`taskId`).equals(n.id).delete(),await Q.timeBlocks.add(l),await Q.tasks.update(n.id,{list:`today`,date:e})}})},[e]),unscheduleTask:y,aiSettings:o,updateAISettings:c,energyConfig:s,updateEnergyConfig:l,getNotesInRange:(0,J.useCallback)(async(e,t,n)=>{let r=Q.systemNotes.where(`date`).between(e,t,!0,!0);return n&&(r=r.filter(e=>e.type===n)),await r.toArray()},[])}}function Fe(e){let[t,n]=(0,J.useState)([]),r=(0,J.useRef)([]),i=(0,J.useCallback)((e,t,r)=>{let i=Math.random().toString(36).substr(2,9);n(n=>[...n,{id:i,type:e,title:t,description:r}])},[]),a=(0,J.useCallback)(e=>{n(t=>t.filter(t=>t.id!==e))},[]),o=(0,J.useCallback)(()=>{n([])},[]);return(0,J.useEffect)(()=>{let t=r.current;t.length>0&&e.forEach(e=>{let n=t.find(t=>t.id===e.id);n&&!n.completed&&e.completed&&i(`QUEST_CLEARED`,`QUEST CLEARED`,`Task "${e.title}" completed. XP GAINED: +100`)}),r.current=e},[e,i]),(0,J.useEffect)(()=>{sessionStorage.getItem(`system_greeted`)||(i(`QUEST_CLEARED`,`SYSTEM INITIALIZED`,`Welcome back, Player. Today's missions are ready.`),sessionStorage.setItem(`system_greeted`,`true`))},[i]),{messages:t,dismissMessage:a,dismissAllMessages:o,addMessage:i}}var Ie=({messages:e,onDismiss:t})=>(0,Y.jsxs)(`div`,{className:`system-notifications-container`,children:[e.map(e=>(0,Y.jsx)(Le,{message:e,onDismiss:()=>t(e.id)},e.id)),(0,Y.jsx)(`style`,{children:`
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
      `})]}),Le=({message:e,onDismiss:t})=>((0,J.useEffect)(()=>{let e=setTimeout(t,5e3);return()=>clearTimeout(e)},[t]),(0,Y.jsxs)(`div`,{className:`system-notification`,onClick:t,children:[(()=>{switch(e.type){case`LEVEL_UP`:return(0,Y.jsx)(re,{className:`system-notification-icon`,size:24});case`SKILL_AWAKENED`:return(0,Y.jsx)(d,{className:`system-notification-icon`,size:24});default:return(0,Y.jsx)(S,{className:`system-notification-icon`,size:24})}})(),(0,Y.jsxs)(`div`,{className:`system-notification-content`,children:[(0,Y.jsx)(`div`,{className:`system-notification-title`,children:e.title}),(0,Y.jsx)(`div`,{className:`system-notification-desc`,children:e.description})]})]})),Re=({isOpen:e,onClose:t,onSelect:n,tasks:r=[]})=>{let[i,a]=(0,J.useState)(`COMMANDS`),[o,s]=(0,J.useState)(0),[c,l]=(0,J.useState)(``),[u,d]=(0,J.useState)(!1),f=(0,J.useRef)(null),p=[{id:`expand`,label:`Generate Tasks (AI)`,icon:(0,Y.jsx)(b,{size:14})},{id:`brief`,label:`Breakdown Task (AI)`,icon:(0,Y.jsx)(j,{size:14})},{id:`ask`,label:`Ask AI (AI)`,icon:(0,Y.jsx)(b,{size:14})},{id:`plan`,label:`Auto-schedule`,icon:(0,Y.jsx)(G,{size:14})}],m=r.filter(e=>e.title.toLowerCase().includes(c.toLowerCase())).sort((e,t)=>e.completed===t.completed?new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime():e.completed?1:-1),h=i===`COMMANDS`?p:m;(0,J.useEffect)(()=>{if(!e)return;let t=setTimeout(()=>{if(f.current?.focus(),f.current){let e=f.current.value;f.current.value=``,f.current.value=e}},10);return()=>clearTimeout(t)},[i,e]),(0,J.useEffect)(()=>{e&&(a(`COMMANDS`),l(``),s(0),d(!1))},[e]);let g=async()=>{if(i===`COMMANDS`){let e=p[o];e.id===`brief`?(a(`SELECT_TASK`),l(``),s(0)):e.id===`expand`?n(`expand`):e.id===`plan`?n(`plan`):n(e.id)}else if(i===`SELECT_TASK`){let e=m[o];e&&n(`brief`,{task:e})}};return(0,J.useEffect)(()=>{let n=n=>{!e||u||(n.key===`ArrowDown`&&(i===`COMMANDS`||i===`SELECT_TASK`)?(n.preventDefault(),s(e=>(e+1)%(h.length||1))):n.key===`ArrowUp`&&(i===`COMMANDS`||i===`SELECT_TASK`)?(n.preventDefault(),s(e=>(e-1+(h.length||1))%(h.length||1))):n.key===`Enter`?(n.preventDefault(),g()):n.key===`Escape`&&(i===`SELECT_TASK`?(a(`COMMANDS`),s(0)):t()))};return window.addEventListener(`keydown`,n,!0),()=>window.removeEventListener(`keydown`,n,!0)},[e,o,h,i,u]),e?(0,Y.jsxs)(N,{children:[(0,Y.jsx)(`div`,{className:`command-palette-overlay`,onClick:t,children:(0,Y.jsxs)(`div`,{className:`command-palette glass-panel glow-border`,onClick:e=>e.stopPropagation(),children:[(0,Y.jsx)(`div`,{className:`command-palette-search`,children:(0,Y.jsx)(`input`,{ref:f,type:`text`,placeholder:i===`COMMANDS`?`Search system commands...`:`Select task to breakdown...`,value:c,onChange:e=>{l(e.target.value),s(0)}})}),(0,Y.jsx)(`div`,{className:`command-list scrollable-palette`,children:h.length>0?h.map((e,t)=>(0,Y.jsxs)(`button`,{className:`command-item ${t===o?`selected`:``}`,onClick:()=>{s(t),g()},onMouseEnter:()=>s(t),children:[i===`COMMANDS`?e.icon:(0,Y.jsx)(`div`,{className:`task-dot`,style:{background:e.color}}),(0,Y.jsx)(`span`,{className:`truncate`,children:i===`COMMANDS`?e.label:e.title}),i===`COMMANDS`&&e.id!==`expand`&&e.id!==`plan`&&(0,Y.jsx)(xe,{size:12,className:`ml-auto opacity-50`})]},e.id)):(0,Y.jsx)(`div`,{className:`no-results`,children:`No matches found.`})})]})}),(0,Y.jsx)(`style`,{children:`
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
      `})]}):null};function ze(){let{aiSettings:e}=$();async function t(t,n=.7){let{baseUrl:r,model:i,apiKey:a}=e,o=r.trim();o.endsWith(`/chat/completions`)||(o=`${o.replace(/\/$/,``)}/chat/completions`);let s={"Content-Type":`application/json`};a&&(s.Authorization=`Bearer ${a}`);try{let e=await fetch(o,{method:`POST`,headers:s,body:JSON.stringify({model:i,messages:t,temperature:n})});if(!e.ok){let t=await e.text(),n=`AI Request failed: ${e.statusText}`;try{n=JSON.parse(t).error?.message||n}catch{}throw Error(n)}return(await e.json()).choices[0].message.content.trim()}catch(e){throw console.error(`AI API Error:`,e),e}}function n(e){try{let t=e.match(/(\{.*\}|\[.*\])/s),n=t?t[0]:e;return JSON.parse(n)}catch{return console.error(`Failed to parse AI response as JSON:`,e),null}}async function r(e){return t([{role:`user`,content:e}])}async function i(e){return r(e)}async function a(e){let t=await r(e),i=t.split(`
`).map(e=>e.trim()).filter(e=>e.startsWith(`-`)).map(e=>e.replace(/^-\s*/,``).trim()).filter(e=>e.length>0);if(i.length===0){let e=n(t);if(Array.isArray(e))return e.filter(e=>typeof e==`string`);throw Error(`INVALID_FORMAT`)}return i}async function o(e){return r(e)}return{fetchRawAIResponse:r,fetchTaskExpansionText:i,fetchTaskExpansion:a,fetchTaskBriefing:o}}var Be=({onClose:e,onSuccess:t})=>{let{fetchTaskExpansionText:n}=ze(),[r,i]=(0,J.useState)(5),a=e=>`### Universal Task Deconstruction Instructions
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
- `,[o,s]=(0,J.useState)(()=>a(5)),[c,l]=(0,J.useState)(!1),[d,f]=(0,J.useState)(!1),p=(0,J.useRef)(null);(0,J.useEffect)(()=>{setTimeout(()=>p.current?.focus(),50);let t=t=>{t.key===`Escape`&&e()};return window.addEventListener(`keydown`,t),()=>window.removeEventListener(`keydown`,t)},[e]);let m=e=>{i(e),d||s(a(e))},h=async()=>{if(o.trim()){l(!0);try{s(await n(o)),f(!0),setTimeout(()=>p.current?.focus(),50)}catch{alert(`Failed to generate tasks. Make sure LM Studio is running at localhost:1234`)}finally{l(!1)}}},g=()=>{let n=o.split(`
`).map(e=>e.trim()).filter(e=>e.startsWith(`-`)).map(e=>e.replace(/^-\s*/,``).trim()).filter(e=>e.length>0);n.length>0?(t(n),e()):alert(`No valid tasks found. Each task must start with "- "`)},_=e=>{e.preventDefault(),d?g():h()};return(0,Y.jsxs)(`div`,{className:`modal-overlay`,onClick:e,children:[(0,Y.jsxs)(`div`,{className:`modal-content glass-panel glow-border`,onClick:e=>e.stopPropagation(),children:[(0,Y.jsxs)(`header`,{className:`modal-header`,children:[(0,Y.jsxs)(`div`,{className:`title-group`,children:[(0,Y.jsx)(b,{size:18,className:`title-icon`}),(0,Y.jsx)(`h2`,{className:`modal-title h-glow`,children:d?`Review Quests`:`Generate Tasks`})]}),(0,Y.jsx)(`button`,{onClick:e,className:`close-btn`,children:(0,Y.jsx)(u,{size:20})})]}),(0,Y.jsxs)(`div`,{className:`modal-body`,children:[!d&&(0,Y.jsxs)(`div`,{className:`count-selector`,children:[(0,Y.jsx)(`label`,{className:`section-label`,children:`Number of Tasks:`}),(0,Y.jsx)(`input`,{type:`number`,className:`count-input`,value:r,onChange:e=>m(parseInt(e.target.value)||1),min:`1`,max:`20`})]}),(0,Y.jsxs)(`form`,{onSubmit:_,className:`instruction-form`,children:[(0,Y.jsx)(`label`,{className:`section-label`,children:d?`Tactical Actions (Editable):`:`Mission Instructions & Plans:`}),(0,Y.jsx)(`textarea`,{ref:p,className:`instruction-input`,placeholder:d?``:`Type your goals, appointments, or instructions here...`,value:o,onChange:e=>s(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.metaKey||e.ctrlKey)&&_(e)}}),(0,Y.jsxs)(`div`,{className:`modal-footer`,children:[(0,Y.jsx)(`div`,{className:`kb-hint`,children:d?`Review and edit bullet points`:`Press ⌘+Enter to expand`}),(0,Y.jsxs)(`button`,{type:`submit`,className:`send-btn ${c?`loading`:``} ${d?`success`:``}`,disabled:c||!o.trim(),children:[d?(0,Y.jsx)(L,{size:18}):(0,Y.jsx)(b,{size:18}),(0,Y.jsx)(`span`,{children:c?`Processing...`:d?`Create Tasks`:`Generate Tasks`})]})]})]})]})]}),(0,Y.jsx)(`style`,{children:`
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
      `})]})},Ve=({onClose:e,onSuccess:t,initialContent:n})=>{let{fetchTaskBriefing:r}=ze(),[i,a]=(0,J.useState)(5),o=(e,t)=>`### Task Decomposition Instructions
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
${t}`,[s,c]=(0,J.useState)(()=>o(5,n)),[l,d]=(0,J.useState)(!1),[f,p]=(0,J.useState)(!1),m=(0,J.useRef)(null);(0,J.useEffect)(()=>{setTimeout(()=>m.current?.focus(),50);let t=t=>{t.key===`Escape`&&e()};return window.addEventListener(`keydown`,t),()=>window.removeEventListener(`keydown`,t)},[e]);let g=e=>{a(e),f||c(o(e,n))},_=async()=>{if(s.trim()){d(!0);try{c(await r(s)),p(!0),setTimeout(()=>m.current?.focus(),50)}catch{alert(`Failed to generate brief. Make sure LM Studio is running at localhost:1234`)}finally{d(!1)}}},v=()=>{s.trim()&&(t(s),e())},y=e=>{e.preventDefault(),f?v():_()};return(0,Y.jsxs)(`div`,{className:`modal-overlay`,onClick:e,children:[(0,Y.jsxs)(`div`,{className:`modal-content glass-panel glow-border`,onClick:e=>e.stopPropagation(),children:[(0,Y.jsxs)(`header`,{className:`modal-header`,children:[(0,Y.jsxs)(`div`,{className:`title-group`,children:[(0,Y.jsx)(j,{size:18,className:`title-icon`}),(0,Y.jsx)(`h2`,{className:`modal-title h-glow`,children:f?`Review Brief`:`Breakdown Task`})]}),(0,Y.jsx)(`button`,{onClick:e,className:`close-btn`,children:(0,Y.jsx)(u,{size:20})})]}),(0,Y.jsxs)(`div`,{className:`modal-body`,children:[!f&&(0,Y.jsxs)(`div`,{className:`count-selector`,children:[(0,Y.jsx)(`label`,{className:`section-label`,children:`Number of Sub-Tasks:`}),(0,Y.jsx)(`input`,{type:`number`,className:`count-input`,value:i,onChange:e=>g(parseInt(e.target.value)||1),min:`1`,max:`20`})]}),(0,Y.jsxs)(`form`,{onSubmit:y,className:`instruction-form`,children:[(0,Y.jsx)(`label`,{className:`section-label`,children:f?`Briefing Result (Editable):`:`Mission Inquiry:`}),(0,Y.jsx)(`textarea`,{ref:m,className:`instruction-input`,placeholder:f?``:`Ask what information you want about this task...`,value:s,onChange:e=>c(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.metaKey||e.ctrlKey)&&y(e)}}),(0,Y.jsxs)(`div`,{className:`modal-footer`,children:[(0,Y.jsx)(`div`,{className:`kb-hint`,children:f?`Review and edit briefing`:`Press ⌘+Enter to breakdown`}),(0,Y.jsxs)(`button`,{type:`submit`,className:`send-btn ${l?`loading`:``} ${f?`success`:``}`,disabled:l||!s.trim(),children:[l||f?(0,Y.jsx)(L,{size:18}):(0,Y.jsx)(h,{size:18}),(0,Y.jsx)(`span`,{children:l?`Processing...`:f?`Append to Log`:`Generate Brief`})]})]})]})]})]}),(0,Y.jsx)(`style`,{children:`
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
      `})]})};function He(e){let t=e.split(`
`),n=[],r=/\b((?:[01]?\d|2[0-3]):[0-5]\d(?::[0-5]\d)?\s?(?:[AaPp][Mm])?)\b/g;for(let e of t){let t=e.match(r);if(t&&t.length>=2){let e=t[0],r=t[1],i=Ue(e),a=Ue(r);i&&a&&We(i,a)&&n.push({start:i,end:a})}}return n}function Ue(e){let t=e.trim().toLowerCase();for(let e of[`H:mm`,`HH:mm`,`h:mm a`,`hh:mm a`,`h:mma`,`hh:mma`,`H:mm:ss`,`HH:mm:ss`,`h:mm:ss a`,`hh:mm:ss a`]){let n=F(t,e,new Date);if(l(n))return q(n,`HH:mm`)}return null}function We(e,t){let[n,r]=e.split(`:`).map(Number),[i,a]=t.split(`:`).map(Number);if(n>=24||i>=24)return!1;let o=n*60+r;return i*60+a>o}function Ge(e,t){let[n,r]=e.split(`:`).map(Number),[i,a]=t.split(`:`).map(Number);return i*60+a-(n*60+r)}var Ke=({onClose:e,onSuccess:t,unfinishedTasks:n,unscheduledTasks:r})=>{let[i,a]=(0,J.useState)(r.length>0?`unscheduled`:`all`),o=i===`unscheduled`?r:n,s=o.length,[c,l]=(0,J.useState)(()=>{let e=new Date,t=Math.ceil(e.getMinutes()/15)*15;return e.setMinutes(t),e.setSeconds(0),`${String(e.getHours()).padStart(2,`0`)}:${String(e.getMinutes()).padStart(2,`0`)}`}),[d,f]=(0,J.useState)(30),[p,m]=(0,J.useState)(15),[h,g]=(0,J.useState)(``),[_,v]=(0,J.useState)(!1),y=(0,J.useRef)(null);(0,J.useEffect)(()=>{_&&y.current?.focus();let t=t=>{t.key===`Escape`&&e()};return window.addEventListener(`keydown`,t),()=>window.removeEventListener(`keydown`,t)},[_,e]);let b=()=>{let e=0,[t,n]=c.split(`:`).map(Number);e=t*60+n;let r=[];for(let t=0;t<s;t++){let t=Math.floor(e/60),n=e%60,i=e+d,a=Math.floor(i/60),o=i%60;if(t>=24)break;let s=(e,t)=>`${String(e).padStart(2,`0`)}:${String(t).padStart(2,`0`)}`;r.push(`- ${s(t,n)} ${s(a,o)}`),e=i+p}g(r.join(`
`)),v(!0)},x=()=>{let n=He(h);n.length>0?(t(n,o.map(e=>e.id)),e()):alert(`No valid time ranges found. Expected format: "- HH:mm HH:mm"`)};return(0,Y.jsxs)(`div`,{className:`modal-overlay`,onClick:e,children:[(0,Y.jsxs)(`div`,{className:`modal-content glass-panel glow-border`,onClick:e=>e.stopPropagation(),children:[(0,Y.jsxs)(`header`,{className:`modal-header`,children:[(0,Y.jsxs)(`div`,{className:`title-group`,children:[(0,Y.jsx)(G,{size:18,className:`title-icon`}),(0,Y.jsx)(`h2`,{className:`modal-title h-glow`,children:_?`Review Timeline`:`Auto-schedule`})]}),(0,Y.jsx)(`button`,{onClick:e,className:`close-btn`,children:(0,Y.jsx)(u,{size:20})})]}),(0,Y.jsxs)(`div`,{className:`modal-body`,children:[_?(0,Y.jsxs)(`div`,{className:`instruction-form`,children:[(0,Y.jsx)(`label`,{className:`section-label`,children:`Calculated Timeline (Editable):`}),(0,Y.jsx)(`textarea`,{ref:y,className:`instruction-input`,value:h,onChange:e=>g(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.metaKey||e.ctrlKey)&&x()}})]}):(0,Y.jsxs)(`div`,{className:`planning-params`,children:[(0,Y.jsxs)(`div`,{className:`scope-selector`,children:[(0,Y.jsxs)(`button`,{className:`scope-btn ${i===`unscheduled`?`active`:``}`,onClick:()=>a(`unscheduled`),children:[`Unscheduled (`,r.length,`)`]}),(0,Y.jsxs)(`button`,{className:`scope-btn ${i===`all`?`active`:``}`,onClick:()=>a(`all`),children:[`All (`,n.length,`)`]})]}),(0,Y.jsxs)(`div`,{className:`param-grid`,children:[(0,Y.jsxs)(`div`,{className:`param-item`,children:[(0,Y.jsx)(`label`,{className:`section-label`,children:`Start Time:`}),(0,Y.jsx)(`input`,{type:`time`,className:`count-input time-input`,value:c,onChange:e=>l(e.target.value)})]}),(0,Y.jsxs)(`div`,{className:`param-item`,children:[(0,Y.jsx)(`label`,{className:`section-label`,children:`Duration (m):`}),(0,Y.jsx)(`input`,{type:`number`,className:`count-input`,value:d,onChange:e=>f(parseInt(e.target.value)||0),min:`1`})]}),(0,Y.jsxs)(`div`,{className:`param-item`,children:[(0,Y.jsx)(`label`,{className:`section-label`,children:`Break (m):`}),(0,Y.jsx)(`input`,{type:`number`,className:`count-input`,value:p,onChange:e=>m(parseInt(e.target.value)||0),min:`0`})]})]})]}),(0,Y.jsxs)(`div`,{className:`modal-footer`,children:[(0,Y.jsx)(`div`,{className:`kb-hint`,children:_?`Review and edit time slots`:`Press Enter to generate`}),(0,Y.jsxs)(`button`,{onClick:e=>{e.preventDefault(),_?x():b()},className:`send-btn ${_?`success`:``}`,disabled:!_&&!c,children:[_?(0,Y.jsx)(L,{size:18}):(0,Y.jsx)(G,{size:18}),(0,Y.jsx)(`span`,{children:_?`Sync Timeline`:`Generate Schedule`})]})]})]})]}),(0,Y.jsx)(`style`,{children:`
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
      `})]})},qe={ollama:{baseUrl:`http://localhost:11434/v1`,model:`gemma4:e4b`},lmstudio:{baseUrl:`http://localhost:1234/v1`,model:`local-model`},openai:{baseUrl:`https://api.openai.com/v1`,model:`gpt-3.5-turbo`}},Je=({onClose:e})=>{let{aiSettings:t,updateAISettings:n}=$(),[r,i]=(0,J.useState)(t),[a,o]=(0,J.useState)(!1);(0,J.useEffect)(()=>{let t=t=>{t.key===`Escape`&&e()};return window.addEventListener(`keydown`,t),()=>window.removeEventListener(`keydown`,t)},[e]);let s=e=>{i({...r,provider:e,...qe[e]})};return(0,Y.jsxs)(`div`,{className:`modal-overlay`,onClick:e,children:[(0,Y.jsxs)(`div`,{className:`modal-content glass-panel glow-border`,onClick:e=>e.stopPropagation(),children:[(0,Y.jsxs)(`header`,{className:`modal-header`,children:[(0,Y.jsxs)(`div`,{className:`title-group`,children:[(0,Y.jsx)(f,{size:18,className:`title-icon`}),(0,Y.jsx)(`h2`,{className:`modal-title h-glow`,children:`System Settings`})]}),(0,Y.jsx)(`button`,{onClick:e,className:`close-btn`,children:(0,Y.jsx)(u,{size:20})})]}),(0,Y.jsxs)(`form`,{onSubmit:async t=>{t.preventDefault(),await n(r),o(!0),setTimeout(()=>{o(!1),e()},1e3)},className:`modal-body`,children:[(0,Y.jsxs)(`section`,{className:`settings-section`,children:[(0,Y.jsx)(`label`,{className:`section-label`,children:`AI Intelligence Provider`}),(0,Y.jsx)(`div`,{className:`provider-grid`,children:[`lmstudio`,`ollama`,`openai`].map(e=>(0,Y.jsxs)(`button`,{type:`button`,className:`provider-card ${r.provider===e?`active`:``}`,onClick:()=>s(e),children:[e===`lmstudio`&&(0,Y.jsx)(ye,{size:20}),e===`ollama`&&(0,Y.jsx)(B,{size:20}),e===`openai`&&(0,Y.jsx)(k,{size:20}),(0,Y.jsx)(`span`,{className:`provider-name`,children:e.toUpperCase()})]},e))})]}),(0,Y.jsxs)(`section`,{className:`settings-section`,children:[(0,Y.jsxs)(`div`,{className:`input-group`,children:[(0,Y.jsx)(`label`,{className:`input-label`,children:`Base URL`}),(0,Y.jsx)(`input`,{type:`text`,className:`settings-input`,value:r.baseUrl,onChange:e=>i({...r,baseUrl:e.target.value}),placeholder:`http://localhost:11434/v1`})]}),(0,Y.jsxs)(`div`,{className:`input-group`,children:[(0,Y.jsx)(`label`,{className:`input-label`,children:`Model Name`}),(0,Y.jsx)(`input`,{type:`text`,className:`settings-input`,value:r.model,onChange:e=>i({...r,model:e.target.value}),placeholder:`llama3`})]}),r.provider===`openai`&&(0,Y.jsxs)(`div`,{className:`input-group`,children:[(0,Y.jsx)(`label`,{className:`input-label`,children:`API Key`}),(0,Y.jsx)(`input`,{type:`password`,className:`settings-input`,value:r.apiKey||``,onChange:e=>i({...r,apiKey:e.target.value}),placeholder:`sk-...`})]})]}),(0,Y.jsxs)(`div`,{className:`modal-footer`,children:[(0,Y.jsx)(`div`,{className:`kb-hint`,children:`Press ESC to cancel`}),(0,Y.jsxs)(`button`,{type:`submit`,className:`save-btn ${a?`success`:``}`,disabled:a,children:[a?(0,Y.jsx)(L,{size:18}):(0,Y.jsx)(v,{size:18}),(0,Y.jsx)(`span`,{children:a?`Settings Saved`:`Save Configuration`})]})]})]})]}),(0,Y.jsx)(`style`,{children:`
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
          max-width: 500px;
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
        .settings-section {
          margin-bottom: 2rem;
        }
        .section-label {
          display: block;
          font-family: var(--font-family);
          font-size: 0.7rem;
          text-transform: uppercase;
          color: var(--text-secondary);
          margin-bottom: 1rem;
          letter-spacing: 0.1em;
        }
        .provider-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .provider-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 12px;
          background: rgba(15, 23, 42, 0.4);
          border: 1px solid var(--border);
          border-radius: 4px;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s;
        }
        .provider-card:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: rgba(14, 165, 233, 0.05);
        }
        .provider-card.active {
          border-color: var(--accent);
          color: var(--accent);
          background: rgba(14, 165, 233, 0.1);
          box-shadow: 0 0 15px rgba(14, 165, 233, 0.1);
        }
        .provider-name {
          font-family: var(--font-family);
          font-size: 0.6rem;
          letter-spacing: 0.1em;
        }
        .input-group {
          margin-bottom: 1.2rem;
        }
        .input-label {
          display: block;
          font-family: var(--font-family);
          font-size: 0.6rem;
          text-transform: uppercase;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
          letter-spacing: 0.05em;
        }
        .settings-input {
          width: 100%;
          background: rgba(2, 6, 23, 0.5);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 8px 12px;
          color: var(--text-primary);
          font-family: var(--font-family);
          font-size: 0.9rem;
          outline: none;
          transition: all 0.3s;
        }
        .settings-input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 10px rgba(14, 165, 233, 0.1);
        }
        .modal-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1rem;
        }
        .kb-hint {
          font-size: 0.65rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .save-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(14, 165, 233, 0.1);
          border: 1px solid var(--accent);
          padding: 8px 20px;
          border-radius: 4px;
          color: var(--accent);
          font-family: var(--font-family);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-size: 0.8rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .save-btn:hover:not(:disabled) {
          background: rgba(14, 165, 233, 0.2);
          box-shadow: 0 0 20px var(--accent);
        }
        .save-btn.success {
          border-color: var(--reward);
          color: var(--reward);
          background: rgba(34, 197, 94, 0.1);
        }
        .save-btn:disabled {
          opacity: 0.8;
          cursor: default;
        }
      `})]})},Ye=({onClose:e})=>(0,Y.jsx)(`div`,{className:`modal-overlay`,children:(0,Y.jsxs)(`div`,{className:`glass-panel glow-border`,style:{width:`400px`,padding:`2rem`,position:`relative`,background:`rgba(2, 6, 23, 0.9)`},children:[(0,Y.jsx)(`button`,{onClick:e,className:`action-btn`,style:{position:`absolute`,top:`1rem`,right:`1rem`},children:(0,Y.jsx)(u,{size:20})}),(0,Y.jsx)(`h2`,{className:`holographic-text`,style:{margin:`0 0 1.5rem 0`,fontSize:`1.2rem`,textAlign:`center`,letterSpacing:`0.1em`},children:`SYSTEM MANUAL`}),(0,Y.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[{key:`.`,description:`Show Status / Import & Export`,icon:(0,Y.jsx)(_,{size:16})},{key:`,`,description:`Configure AI settings`,icon:(0,Y.jsx)(f,{size:16})},{key:`/`,description:`Generate / Breakdown / Ask AI`,icon:(0,Y.jsx)(he,{size:16})},{key:`T`,description:`Focus Today's Task input`,icon:(0,Y.jsx)(y,{size:16})},{key:`L`,description:`Focus Later Task input`,icon:(0,Y.jsx)(O,{size:16})},{key:`N`,description:`Focus Notes input`,icon:(0,Y.jsx)(j,{size:16})},{key:`Esc`,description:`Exit input focus or close`,icon:(0,Y.jsx)(de,{size:16})}].map(e=>(0,Y.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,paddingBottom:`0.5rem`,borderBottom:`1px solid var(--border)`},children:[(0,Y.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.75rem`,color:`var(--text-secondary)`},children:[e.icon,(0,Y.jsx)(`span`,{style:{fontSize:`0.85rem`},children:e.description})]}),(0,Y.jsx)(`kbd`,{style:{background:`rgba(14, 165, 233, 0.1)`,color:`var(--accent)`,padding:`0.2rem 0.6rem`,borderRadius:`4px`,fontSize:`0.8rem`,border:`1px solid var(--border)`,boxShadow:`0 0 5px rgba(14, 165, 233, 0.2)`},children:e.key})]},e.key))})]})}),Xe=({tasks:e})=>{let t=(0,J.useMemo)(()=>{let e=new Date;return ee({start:we(e,84),end:e})},[]),n=t=>{let n=q(t,`yyyy-MM-dd`),r=e.filter(e=>e.date===n&&e.completed).length;return r===0?0:r<2?1:r<4?2:3},r=[`rgba(14, 165, 233, 0.05)`,`rgba(14, 165, 233, 0.3)`,`rgba(14, 165, 233, 0.6)`,`rgba(14, 165, 233, 1)`];return(0,Y.jsx)(`div`,{className:`activity-heatmap`,children:(0,Y.jsx)(`div`,{className:`heatmap-grid`,children:t.map(e=>{let t=n(e);return(0,Y.jsx)(`div`,{title:q(e,`MMM do`),className:`heatmap-cell`,style:{backgroundColor:r[t]}},e.toISOString())})})})},Ze=({config:e})=>{let[t,n]=(0,J.useState)(0);return(0,J.useEffect)(()=>{let t=()=>{let t=new Date,r=t.getHours()*60+t.getMinutes(),[i,a]=e.startTime.split(`:`).map(Number),[o,s]=e.endTime.split(`:`).map(Number),c=i*60+a,l=o*60+s;l<=c&&(l+=1440);let u=l-c,d=r<c?r+1440:r,f=0;f=d>=c&&d<=l?d-c:d>l?u:0;let p=100-f/u*100;n(Math.max(0,Math.min(100,p)))};t();let r=setInterval(t,6e4);return()=>clearInterval(r)},[e]),(0,Y.jsx)(`div`,{className:`energy-bar-container`,children:(0,Y.jsx)(`div`,{className:`energy-bar-fill`,style:{width:`${t}%`}})})},Qe=({onClose:e,tasks:t})=>{let{energyConfig:n,updateEnergyConfig:r}=$(),[i,a]=(0,J.useState)(n),[s,c]=(0,J.useState)(!1);return(0,J.useEffect)(()=>{a(n)},[n]),(0,Y.jsxs)(`div`,{className:`modal-overlay`,onClick:e,children:[(0,Y.jsx)(`div`,{className:`modal-content glass-panel glow-border status-panel-content`,onClick:e=>e.stopPropagation(),style:{padding:`2rem 2rem 0 2rem`},children:(0,Y.jsxs)(`div`,{className:`modal-body`,style:{display:`flex`,flexDirection:`column`},children:[(0,Y.jsx)(`section`,{className:`status-section`,style:{margin:0,padding:`1rem 0 1.5rem 0`},children:(0,Y.jsx)(Ze,{config:n})}),(0,Y.jsx)(`section`,{className:`status-section`,style:{margin:`1.5rem 0 1rem 0`},children:(0,Y.jsx)(Xe,{tasks:t})}),(0,Y.jsx)(`section`,{className:`status-section`,style:{margin:`1rem 0 0 0`},children:(0,Y.jsxs)(`div`,{className:`status-actions-minimal`,children:[(0,Y.jsx)(`button`,{className:`minimal-icon-btn`,onClick:async()=>{try{let e=await ve(Q),t=URL.createObjectURL(e),n=document.createElement(`a`);n.href=t,n.download=`timebox-backup-${new Date().toISOString().split(`T`)[0]}.json`,n.click(),URL.revokeObjectURL(t)}catch(e){console.error(`Export failed:`,e)}},title:`Export`,children:(0,Y.jsx)(ie,{size:20})}),(0,Y.jsx)(`button`,{className:`minimal-icon-btn`,onClick:()=>{let e=document.createElement(`input`);e.type=`file`,e.accept=`.json`,e.onchange=async e=>{let t=e.target.files?.[0];if(t)try{await Q.delete(),await ce(t),window.location.reload()}catch(e){console.error(`Import failed:`,e),window.location.reload()}},e.click()},title:`Import`,children:(0,Y.jsx)(o,{size:20})})]})}),(0,Y.jsx)(`div`,{className:`settings-ghost-wrapper`,children:(0,Y.jsx)(`form`,{onSubmit:async e=>{e.preventDefault(),await r(i),c(!0),setTimeout(()=>{c(!1)},2e3)},className:`hover-settings`,children:(0,Y.jsxs)(`div`,{className:`time-fields`,children:[(0,Y.jsxs)(`div`,{className:`status-input-wrapper`,children:[(0,Y.jsx)(`input`,{type:`time`,value:i.startTime,onChange:e=>a({...i,startTime:e.target.value}),className:`status-time-input`}),(0,Y.jsx)(W,{size:14,className:`input-icon-right`})]}),(0,Y.jsxs)(`div`,{className:`status-input-wrapper`,children:[(0,Y.jsx)(`input`,{type:`time`,value:i.endTime,onChange:e=>a({...i,endTime:e.target.value}),className:`status-time-input`}),(0,Y.jsx)(W,{size:14,className:`input-icon-right`})]}),(0,Y.jsx)(`button`,{type:`submit`,className:`minimal-icon-btn ${s?`success`:``}`,children:s?(0,Y.jsx)(L,{size:18}):(0,Y.jsx)(v,{size:18})})]})})})]})}),(0,Y.jsx)(`style`,{children:`
        .status-panel-content {
          max-width: 420px;
          width: 95%;
          background: rgba(2, 6, 23, 0.9);
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
        }
        .settings-ghost-wrapper {
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hover-settings {
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          width: 100%;
          justify-content: center;
          padding: 10px 0 0 0;
        }
        .settings-ghost-wrapper:hover .hover-settings {
          opacity: 1;
        }
        .status-divider {
          height: 1px;
          background: var(--accent);
          width: 100%;
          opacity: 0.2;
        }
        .status-section .activity-heatmap {
          border-bottom: none;
          padding: 1rem 0;
        }
        .time-fields {
          display: flex;
          align-items: center;
        }
        .status-input-wrapper {
          display: flex;
          align-items: center;
          background: rgba(15, 23, 42, 0.6);
          padding: 6px 10px;
          border-radius: 4px;
          width: 105px;
        }
        .status-time-input {
          background: none;
          border: none;
          color: var(--text-primary);
          font-family: var(--font-family);
          font-size: 0.85rem;
          outline: none;
          color-scheme: dark;
          width: 100%;
          -webkit-appearance: none;
        }
        .status-time-input::-webkit-calendar-picker-indicator {
          display: none;
          -webkit-appearance: none;
        }
        .input-icon-right {
          color: var(--bg-primary);
          filter: brightness(3);
          opacity: 0.5;
          margin-left: 4px;
        }
        .minimal-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          padding: 10px;
          border-radius: 4px;
          color: var(--accent);
          transition: all 0.2s;
          cursor: pointer;
        }
        .minimal-icon-btn:hover {
          background: rgba(14, 165, 233, 0.1);
          box-shadow: 0 0 10px rgba(14, 165, 233, 0.2);
        }
        .minimal-icon-btn.success {
          color: var(--reward);
        }
        .status-actions-minimal {
          display: flex;
          justify-content: center;
          gap: 2rem;
        }
      `})]})},$e=`# persona


# task


# context


# format

`,et=({onClose:e})=>{let[t,n]=(0,J.useState)($e),[r,i]=(0,J.useState)(``),[a,o]=(0,J.useState)(!1),[c,l]=(0,J.useState)(!1),{fetchRawAIResponse:d}=ze(),f=(0,J.useRef)(null);return(0,J.useEffect)(()=>{let t=t=>{t.key===`Escape`&&e()};return window.addEventListener(`keydown`,t),()=>window.removeEventListener(`keydown`,t)},[e]),(0,Y.jsxs)(`div`,{className:`modal-overlay`,onClick:e=>e.stopPropagation(),children:[(0,Y.jsxs)(`div`,{className:`modal-content glass-panel glow-border ask-ai-modal`,onClick:e=>e.stopPropagation(),children:[(0,Y.jsxs)(`header`,{className:`modal-header`,children:[(0,Y.jsxs)(`div`,{className:`title-group`,children:[(0,Y.jsx)(b,{size:18,className:`title-icon`}),(0,Y.jsx)(`h2`,{className:`modal-title h-glow`,children:`Ask AI`})]}),(0,Y.jsx)(`button`,{onClick:e,className:`close-btn`,children:(0,Y.jsx)(u,{size:20})})]}),(0,Y.jsxs)(`div`,{className:`modal-body`,children:[(0,Y.jsxs)(`div`,{className:`input-section`,children:[(0,Y.jsx)(`textarea`,{ref:f,className:`ai-textarea prompt-area`,value:t,onChange:e=>n(e.target.value),placeholder:`Enter your prompt here...`,spellCheck:!1}),(0,Y.jsxs)(`div`,{className:`textarea-footer`,children:[(0,Y.jsx)(`button`,{className:`minimal-icon-btn`,onClick:()=>{n(``),f.current?.focus()},title:`Clear Prompt`,children:(0,Y.jsx)(s,{size:18})}),(0,Y.jsx)(`button`,{className:`minimal-icon-btn highlight`,onClick:async()=>{if(!(!t.trim()||a)){o(!0);try{i(await d(t))}catch(e){console.error(`AI Error:`,e),i(`[SYSTEM ERROR]: ${e instanceof Error?e.message:`Unknown failure`}`)}finally{o(!1)}}},disabled:a||!t.trim(),title:`Generate`,children:a?(0,Y.jsx)(m,{size:18,className:`spin`}):(0,Y.jsx)(h,{size:18})})]})]}),r&&(0,Y.jsxs)(`div`,{className:`response-section`,style:{marginTop:`1.5rem`},children:[(0,Y.jsx)(`textarea`,{className:`ai-textarea response-area`,value:r,onChange:e=>i(e.target.value),placeholder:`AI response will appear here...`,spellCheck:!1}),(0,Y.jsx)(`div`,{className:`textarea-footer`,style:{justifyContent:`flex-end`},children:(0,Y.jsx)(`button`,{className:`minimal-icon-btn`,onClick:()=>{navigator.clipboard.writeText(r),l(!0),setTimeout(()=>l(!1),2e3)},title:`Copy to Clipboard`,children:c?(0,Y.jsx)(L,{size:18,color:`#22c55e`}):(0,Y.jsx)(le,{size:18})})})]})]})]}),(0,Y.jsx)(`style`,{children:`
        .ask-ai-modal {
          max-width: 600px;
          width: 90%;
          background: rgba(2, 6, 23, 0.9);
          padding: 1.5rem;
          /* Advanced Containment to prevent background flashing */
          contain: content;
          isolation: isolate;
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
        .ai-textarea {
          width: 100%;
          background: rgba(2, 6, 23, 0.5);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 1rem;
          color: var(--text-primary);
          font-family: var(--font-family);
          font-size: 0.9rem;
          line-height: 1.5;
          resize: vertical;
          outline: none;
          transition: border-color 0.2s;
          /* Performance Fixes: Prevent repaint flashes during scroll */
          overscroll-behavior: contain;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        .ai-textarea:focus {
          border-color: var(--accent);
        }
        .prompt-area {
          min-height: 150px;
        }
        .response-area {
          min-height: 200px;
          background: rgba(14, 165, 233, 0.05);
        }
        .textarea-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
        }
        .minimal-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          padding: 8px;
          border-radius: 4px;
          color: var(--text-secondary);
          transition: all 0.2s;
          cursor: pointer;
        }
        .minimal-icon-btn:hover:not(:disabled) {
          color: var(--text-primary);
          background: rgba(14, 165, 233, 0.1);
        }
        .minimal-icon-btn.highlight {
          color: var(--accent);
        }
        .minimal-icon-btn.highlight:hover:not(:disabled) {
          background: rgba(14, 165, 233, 0.15);
          box-shadow: 0 0 15px rgba(14, 165, 233, 0.2);
        }
        .minimal-icon-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        .spin { animation: spin 1s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `})]})};function tt(){let{tasks:e,timeBlocks:t,notes:n,selectedDate:r,addTask:i,addTasksBulk:a,toggleTask:o,deleteTask:s,updateTask:c,moveTaskToList:l,setDate:u,updateNote:d,updateTimeBlock:f,deleteTimeBlock:p,scheduleTask:m,bulkScheduleTasks:h,unscheduleTask:g,getNotesInRange:_}=$(),{messages:v,dismissMessage:y,dismissAllMessages:b,addMessage:x}=Fe(e),S=e.filter(e=>e.list===`today`&&e.date===r),C=S.filter(e=>!e.completed).sort((e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()),w=new Set(t.map(e=>e.taskId)),ee=C.filter(e=>!w.has(e.id)),[T,E]=(0,J.useState)(!1),[D,O]=(0,J.useState)(!1),[k,A]=(0,J.useState)(!1),[j,M]=(0,J.useState)(!1),[N,P]=(0,J.useState)(!1),[F,I]=(0,J.useState)(!1),[L,R]=(0,J.useState)(!1),[z,B]=(0,J.useState)(!1),[V,H]=(0,J.useState)(null),U=(0,J.useCallback)(async e=>{e.length>0&&(await a(e,`today`),x(`QUEST_CLEARED`,`SYSTEM EXPANDED`,`${e.length} new tasks synchronized to your log.`))},[a,x]),ne=(0,J.useCallback)(async e=>{let t=((n.other||{})[r]||``).trim();await d(`other`,r,t?`${t}\n\n${e.trim()}`:e.trim()),x(`QUEST_CLEARED`,`SYSTEM UPDATED`,`Mission briefing appended to OTHER.`)},[n,r,d,x]),W=(0,J.useCallback)(async(e,t)=>{let n=[];for(let r=0;r<Math.min(e.length,t.length);r++){let i=e[r],a=t[r];n.push({id:a,start:i.start,duration:Ge(i.start,i.end)})}n.length>0&&(await h(n),x(`QUEST_CLEARED`,`PLAN SYNCHRONIZED`,`${n.length} missions scheduled to your timeline.`))},[h,x]),re=(0,J.useCallback)(async(e,t)=>{e===`expand`?(E(!1),O(!0)):e===`brief`?(E(!1),H(t?.task||null),A(!0)):e===`plan`?(E(!1),M(!0)):e===`ask`&&(E(!1),B(!0))},[]);return(0,J.useEffect)(()=>{let e=e=>{let t=document.activeElement,n=t instanceof HTMLTextAreaElement,r=t instanceof HTMLInputElement&&(t.type===`text`||t.type===`number`||t.type===`password`),i=n||r;e.key===`?`&&!T&&(i||(e.preventDefault(),t instanceof HTMLElement&&t.blur(),I(e=>!e))),e.key===`/`&&!T&&!F&&(i||(e.preventDefault(),t instanceof HTMLElement&&t.blur(),E(!0))),e.key===`,`&&!N&&!F&&(i||(e.preventDefault(),t instanceof HTMLElement&&t.blur(),P(!0))),e.key===`.`&&!L&&!F&&(i||(e.preventDefault(),t instanceof HTMLElement&&t.blur(),R(!0))),!i&&!T&&!F&&(e.key===`n`?(e.preventDefault(),document.getElementById(`notes-textarea`)?.focus()):e.key===`t`?(e.preventDefault(),document.getElementById(`task-input-today`)?.focus()):e.key===`l`&&(e.preventDefault(),document.getElementById(`task-input-later`)?.focus())),e.key===`Escape`&&(T?E(!1):D?O(!1):k?(A(!1),H(null)):j?M(!1):N?P(!1):F?I(!1):L?R(!1):z?B(!1):(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&t.blur(),b())};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[T,D,k,j,N,F,L,z,b]),(0,Y.jsx)(te,{children:(0,Y.jsxs)(`div`,{className:`app-container`,children:[(0,Y.jsx)(Ie,{messages:v,onDismiss:y}),(0,Y.jsx)(Re,{isOpen:T,onClose:()=>E(!1),onSelect:re,tasks:S}),D&&(0,Y.jsx)(Be,{onClose:()=>O(!1),onSuccess:U}),k&&(0,Y.jsx)(Ve,{onClose:()=>{A(!1),H(null)},onSuccess:ne,initialContent:V?.title||``}),j&&(0,Y.jsx)(Ke,{onClose:()=>M(!1),onSuccess:W,unfinishedTasks:C,unscheduledTasks:ee}),N&&(0,Y.jsx)(Je,{onClose:()=>P(!1)}),F&&(0,Y.jsx)(Ye,{onClose:()=>I(!1)}),z&&(0,Y.jsx)(et,{onClose:()=>B(!1)}),L&&(0,Y.jsx)(Qe,{onClose:()=>R(!1),tasks:e}),(0,Y.jsx)(`div`,{className:`app-sidebar-column`,children:(0,Y.jsx)(ke,{tasks:e,timeBlocks:t,addTask:i,toggleTask:o,deleteTask:s,updateTask:c,moveTaskToList:l,selectedDate:r})}),(0,Y.jsx)(Ae,{selectedDate:r,timeBlocks:t,tasks:e,deleteTimeBlock:p,updateTimeBlock:f,setDate:u,scheduleTask:m,unscheduleTask:g}),(0,Y.jsx)(`div`,{className:`app-notes-column`,children:(0,Y.jsx)(Me,{date:r,notes:n,updateNote:d,addTasksBulk:a,addMessage:x,getNotesInRange:_})})]})})}var nt=`modulepreload`,rt=function(e){return`/Timebox-v2/`+e},it={},at=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=rt(t,n),t in it)return;it[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:nt,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},ot=`true`,st=`false`,ct=ot===`true`,lt=st===`true`;function ut(e={}){let{immediate:t=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:i,onRegisteredSW:a,onRegisterError:o}=e,s,c,l,u=async(e=!0)=>{await c,ct||l?.()};async function d(){if(`serviceWorker`in navigator){if(s=await at(async()=>{let{Workbox:e}=await import(`./workbox-window.prod.es5-BLxbIXbq.js`);return{Workbox:e}},[]).then(({Workbox:e})=>new e(`/Timebox-v2/sw.js`,{scope:`/Timebox-v2/`,type:`classic`})).catch(e=>{o?.(e)}),!s)return;if(l=()=>{s?.messageSkipWaiting()},!lt)if(ct)s.addEventListener(`activated`,e=>{(e.isUpdate||e.isExternal)&&window.location.reload()}),s.addEventListener(`installed`,e=>{e.isUpdate||r?.()});else{let e=!1,t=()=>{e=!0,s?.addEventListener(`controlling`,e=>{e.isUpdate&&window.location.reload()}),n?.()};s.addEventListener(`installed`,n=>{n.isUpdate===void 0?n.isExternal===void 0?!e&&r?.():n.isExternal?t():!e&&r?.():n.isUpdate||r?.()}),s.addEventListener(`waiting`,t)}s.register({immediate:t}).then(e=>{a?a(`/Timebox-v2/sw.js`,e):i?.(e)}).catch(e=>{o?.(e)})}}return c=d(),u}ut({immediate:!0}),Ee.createRoot(document.getElementById(`root`)).render((0,Y.jsx)(J.StrictMode,{children:(0,Y.jsx)(tt,{})}));