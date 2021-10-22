import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
<<<<<<< HEAD
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // map '@' to './src'
    }
  },
=======

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@assets', replacement: '/src/assets' },
      { find: '@components', replacement: '/src/components' },
      { find: '@layouts', replacement: '/src/layouts' },
      { find: '@routers', replacement: '/src/routers' },
      { find: '@views', replacement: '/src/views' },
    ]
  },
  plugins: [vue()],
>>>>>>> 408ec3d149b52410943aba57c77f4283b2f7f63d
  server:{
    port: 3000
  }
})
