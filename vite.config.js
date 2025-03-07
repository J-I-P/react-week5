import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react-week5/',
  build: {
    outDir: 'dist', // 確保這是正確的輸出目錄
  }
})
