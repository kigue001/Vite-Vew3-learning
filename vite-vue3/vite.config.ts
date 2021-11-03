import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@assets', replacement: '/src/assets' },
      { find: '@scss', replacement: '/src/assets/scss' },
      { find: '@components', replacement: '/src/components' },
      { find: '@layouts', replacement: '/src/layouts' },
      { find: '@router', replacement: '/src/router' },
      { find: '@store', replacement: '/src/store' },
      { find: '@views', replacement: '/src/views' },
    ],
  },
  plugins: [vue()],
  server: {
    port: process.env.VITE_PORT,
  },
});
