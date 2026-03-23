import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 8585,
    host: true
  },
  preview: {
    port: 8585,
    host: true,
    allowedHosts: ['fikanepal.com', 'www.fikanepal.com']
  }
})
