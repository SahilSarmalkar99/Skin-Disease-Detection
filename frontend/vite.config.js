import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000, // or whatever you want your frontend to run on
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000', // your Flask backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
