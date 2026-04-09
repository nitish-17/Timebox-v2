import Dexie, { type Table } from 'dexie';
import type { Task, TimeBlock } from '../types';

export interface DailyNote {
  date: string;
  content: string;
}

export interface Setting {
  key: string;
  value: any;
}

export class TimeboxDatabase extends Dexie {
  tasks!: Table<Task>;
  timeBlocks!: Table<TimeBlock>;
  notes!: Table<DailyNote>;
  settings!: Table<Setting>;

  constructor() {
    super('TimeboxDatabase');
    this.version(1).stores({
      tasks: 'id, title, completed, list, date, createdAt',
      timeBlocks: 'id, taskId, title, startTime, endTime',
      notes: 'date',
      settings: 'key'
    });
  }
}

export const db = new TimeboxDatabase();
