import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'  

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(), 
    vue(),
    react()
    ],
})
