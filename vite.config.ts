import { fileURLToPath, URL } from 'node:url' // 路径处理

import { defineConfig } from 'vite' // Vite配置对象
import vue from '@vitejs/plugin-vue' // Vite插件 - 用于处理SFC(Vue单文件组件)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },

    extensions: ['.js', '.ts', '.vue', '.json', '.md', ''] // 在这里添加空字符串
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/global.scss";`
      }
    }
  }
})
