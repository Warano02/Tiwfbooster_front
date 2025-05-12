import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Configuration Vite
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: '/',
  alias: {
    '@': '/src', 
  },
  server: {
    host: '0.0.0.0',
    port: 3005,
  }
})