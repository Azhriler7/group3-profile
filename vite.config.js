import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Use repository name as base so assets resolve on GitHub Pages
  base: '/group3-profile/',
  plugins: [react()],
})
