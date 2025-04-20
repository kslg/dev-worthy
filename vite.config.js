import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/dev-worthy/',
  resolve: {
    alias: {
      // Polyfill the 'crypto' module with 'crypto-browserify'
      crypto: path.resolve(__dirname, 'node_modules/crypto-browserify'),
    },
  },
  optimizeDeps: {
    // Ensure polyfill is bundled into the final build
    include: ['crypto-browserify']
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
})