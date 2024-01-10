import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
  proxy:{


    '/api': {
      target: 'http://backend.thehomy.in',
      changeOrigin: true,
     
    },
  }
  },
  plugins: [react()],
})
