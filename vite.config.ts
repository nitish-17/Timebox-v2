import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Split FullCalendar into its own chunk as it's the largest dependency
          if (id.includes('@fullcalendar')) {
            return 'vendor-calendar';
          }
          // Split core libraries into a separate chunk
          if (
            id.includes('react') || 
            id.includes('dexie') || 
            id.includes('date-fns') || 
            id.includes('@dnd-kit')
          ) {
            return 'vendor-core';
          }
        }
      }
    },
    // Increase the limit to 700 to silence the core vendor warning
    chunkSizeWarningLimit: 700,
  }
});
