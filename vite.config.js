import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    // Force PostCSS-only transformer, disables lightningcss
    transformer: 'postcss'
  },
  optimizeDeps: {
    exclude: ['lightningcss'] // explicitly exclude LightningCSS
  }
})
