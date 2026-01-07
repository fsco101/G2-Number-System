import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

function getPagesBase(): string {
  // When building on GitHub Actions for GitHub Pages, this env var is available.
  // Format: "owner/repo"
  const repo = process.env.GITHUB_REPOSITORY
  if (!repo) return './'

  const [owner, repoName] = repo.split('/')

  // User/Org Pages (repo is "<owner>.github.io") are hosted at the domain root.
  if (owner && repoName === `${owner}.github.io`) return '/'

  // Project Pages are hosted under "/<repoName>/"
  return `/${repoName}/`
}

export default defineConfig(({ command }) => ({
  // Only set GitHub Pages base during build; keep dev server at '/'
  base: command === 'build' ? getPagesBase() : '/',
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
}))