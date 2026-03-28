import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/advansed-frontend-app/' : '/',
  plugins: [svgr({ exportAsDefault: true }), react()],
  resolve: { alias: [{ find: '@', replacement: '/src' }] },
  define: {
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify('https://advansed-frontend-app-xry5.vercel.app'),
    __PROJECT__: JSON.stringify('frontend'),
  },
});
