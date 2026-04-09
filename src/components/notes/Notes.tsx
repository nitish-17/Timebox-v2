import React, { useState, useEffect } from 'react';

interface NotesProps {
  date: string;
  note: string;
  updateNote: (date: string, content: string) => void;
}

export const Notes: React.FC<NotesProps> = ({ date, note, updateNote }) => {
  const [localNote, setLocalNote] = useState(note);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  // Sync local state when date changes or store note changes from outside
  useEffect(() => {
    setLocalNote(note);
  }, [date, note]);

  const handleBlur = () => {
    if (localNote !== note) {
      updateNote(date, localNote);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      textareaRef.current?.blur();
    }
  };

  return (
    <div className="notes-panel">
      <header className="notes-header">
        <h2 className="notes-title">SYSTEM LOG</h2>
      </header>
      <div className="notes-content">
        <textarea
          id="notes-textarea"
          ref={textareaRef}
          placeholder="Start writing... (Brain dump, rough work, planning)"
          value={localNote || ''}
          onChange={(e) => setLocalNote(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="notes-textarea"
        />
      </div>
    </div>
  );
};
