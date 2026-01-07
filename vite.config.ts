import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Set base to './' for relative paths (GitHub Pages compatibility)
  base: './',
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Output to 'dist' directory (GitHub Pages default)
    outDir: 'dist',
    // Generate source maps for debugging
    sourcemap: false,
    // Ensure assets use relative paths
    assetsDir: 'assets',
  },
})