# Timebox Personal Planner - High-Level System Overview

Timebox is a minimalist, local-first personal planning application designed for deep work and hourly scheduling. It combines task management, calendar visualization, and daily note-taking into a unified, high-performance interface with integrated AI capabilities.

## 1. Project Philosophy & Aesthetic

- **Local-First**: All user data remains in the browser's IndexedDB. No external databases or account systems are required.
- **Terminal Aesthetic**: The UI uses a "Holographic/Terminal" design language, characterized by dark backgrounds, neon accents, and the JetBrains Mono typeface.
- **Minimalist Friction**: Optimized for fast data entry via global keyboard shortcuts and a centralized command palette.

## 2. Core Feature Breadth

### Task Management (Sidebar)

- Dual-list system: **Today** (date-specific) and **Later** (backlog).
- Drag-and-drop support for reordering and calendar scheduling.
- Integrated color-coding and bulk-add capabilities.

### Visual Scheduling (Main Column)

- Driven by **FullCalendar v6**, providing a precision TimeGrid view.
- Real-time synchronization between task cards and calendar time-blocks.
- Automatic scrolling to the current time and "now" indicator.

### Daily Context (Notes Column)

- Markdown-compatible text area for capturing thoughts, plans, and AI-generated briefs.
- Integrated **Activity Heatmap** for visualizing historical productivity.

### AI-Enhanced Workflows

- **Mission Expansion**: Programmatically or AI-assisted deconstruction of complex goals into sequential tasks.
- **Tactical Briefing**: AI-assisted research and "first 15 minutes" guidance for specific tasks.
- **Strategic Planning**: Automated schedule generation based on task counts, durations, and break intervals.

## 3. Technical Architecture

### Frontend Framework

- **React 19 + Vite + TypeScript**: Modern, type-safe development environment with extremely fast builds.
- **Vanilla CSS**: Clean, performant styling using CSS variables for theming and specialized performance-focused container properties.

### Data & State

- **Dexie.js (IndexedDB)**: Robust, reactive local storage. The `useStore` hook acts as the central orchestrator for all database CRUD operations.
- **Live Queries**: Automatic UI updates whenever the underlying database changes, ensuring zero-latency data binding.

### Utilities & Integrations

- **date-fns**: Primary engine for time manipulation, normalization, and range calculations.
- **LM Studio / OpenAI API**: Generic API client in `useAI.ts` that communicates with local or remote LLMs for intelligent processing.
- **Floating UI**: Powers precise positioning for the Command Palette, Tooltips, and Color Pickers.

## 4. Key Implementation Details

- **Performance**: High-density task lists are optimized via `React.memo`, `will-change: transform`, and hardware-accelerated layouts (`translateZ(0)`).
- **Navigation**: Extensive shortcut system (`/` for Hub, `n` for Notes, `t` for Today, `l` for Later, `Esc` for Blur/Close).
- **Portability**: Built-in JSON export/import for full database backup and restoration.

## 5. File System Organization

- `/src/components`: UI components categorized by feature (sidebar, schedule, notes, heatmap).
- `/src/hooks`: Centralized business logic (state management, AI interaction, planning utilities).
- `/src/db`: Database schema definitions and Dexie initialization.
- `/src/types`: Global TypeScript interfaces defining the core domain entities (Task, TimeBlock, AppState).
