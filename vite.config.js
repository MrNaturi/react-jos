import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy:{
      '/api': {
        target: "https://422ece93-64b3-498f-8c76-a91877e5b1df-00-15r6s36zbqq7z.worf.replit.dev/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
        
      }
    }
  }
})
