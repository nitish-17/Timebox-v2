import { useState, useCallback, useEffect, useRef } from 'react';
import type { Task } from '../types';
import type { SystemMessage } from '../components/SystemNotifications';

export function useSystemAI(tasks: Task[]) {
  const [messages, setMessages] = useState<SystemMessage[]>([]);
  const prevTasksRef = useRef<Task[]>([]);

  const addMessage = useCallback((type: SystemMessage['type'], title: string, description: string) => {
    const id = Math.random().toString(36).substr(2, 9);
    setMessages((prev) => [...prev, { id, type, title, description }]);
  }, []);

  const dismissMessage = useCallback((id: string) => {
    setMessages((prev) => prev.filter((m) => m.id !== id));
  }, []);

  const dismissAllMessages = useCallback(() => {
    setMessages([]);
  }, []);

  // Detect task completion
  useEffect(() => {
    const prevTasks = prevTasksRef.current;
    if (prevTasks.length > 0) {
      tasks.forEach((task) => {
        const prevTask = prevTasks.find((t) => t.id === task.id);
        if (prevTask && !prevTask.completed && task.completed) {
          // Task was just completed!
          const rewards = [
            "XP Gained: +100",
            "Skill Point Awarded",
            "Fatigue Reduced",
            "Level Progress: 15%",
          ];
          const randomReward = rewards[Math.floor(Math.random() * rewards.length)];
          addMessage('QUEST_CLEARED', 'QUEST CLEARED', `Task "${task.title}" completed. ${randomReward}`);
        }
      });
    }
    prevTasksRef.current = tasks;
  }, [tasks, addMessage]);

  // Initial greeting
  useEffect(() => {
    const hasGreeted = sessionStorage.getItem('system_greeted');
    if (!hasGreeted) {
      addMessage('QUEST_CLEARED', 'SYSTEM INITIALIZED', 'Welcome back, Player. Today\'s missions are ready.');
      sessionStorage.setItem('system_greeted', 'true');
    }
  }, [addMessage]);

  return {
    messages,
    dismissMessage,
    dismissAllMessages,
    addMessage
  };
}
