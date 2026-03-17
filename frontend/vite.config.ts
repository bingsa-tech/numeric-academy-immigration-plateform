import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3001,
    proxy: {
      // Toutes les requêtes commençant par /api iront vers le backend
      '/api': {
        target: 'http://localhost:5555', 
        changeOrigin: true,
        secure: false,
        // Optionnel : enlève /api de l'URL si ton backend ne l'attend pas
        // rewrite: (path) => path.replace(/^\/api/, '') 
      }
    }
  }
})