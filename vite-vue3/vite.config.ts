import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // 추가 이유 vue에서 이용중인 경로(tsconfig.json > paths)는 vite에 읽어오지 못하기 때문에 별개로 여기에 추가 필수!
    alias: [
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@scss', replacement: path.resolve(__dirname, 'src/assets/scss') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@layouts', replacement: path.resolve(__dirname, 'src/layouts') },
      { find: '@router', replacement: path.resolve(__dirname, 'src/router') },
      { find: '@store', replacement: path.resolve(__dirname, 'src/store') },
      { find: '@views', replacement: path.resolve(__dirname, 'src/views') },
    ],
  },
  plugins: [vue(), Pages(), Layouts()],
  server: {
    port: process.env.VITE_PORT,
  },
});
