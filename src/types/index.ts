export interface Task {
  id: string;
  title: string;
  completed: boolean;
  list: 'today' | 'later';
  createdAt: string;
  date?: string; // YYYY-MM-DD for tasks assigned to a specific day
  color?: string;
}

export interface TimeBlock {
  id: string;
  taskId: string | null;
  title?: string;
  startTime: string; // ISO string for the specific day/time
  endTime: string;
  color?: string;
}

export type AIProvider = 'ollama' | 'lmstudio' | 'openai';

export interface AISettings {
  provider: AIProvider;
  baseUrl: string;
  model: string;
  apiKey?: string;
}

export interface AppState {
  tasks: Task[];
  timeBlocks: TimeBlock[];
  notes: Record<string, string>; // date -> content
  selectedDate: string; // YYYY-MM-DD
  aiSettings: AISettings;
}
