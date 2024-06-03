import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'


export default defineConfig({
  plugins: [vue()],
  target: 'es2015',
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.js'),
      name: 'xui',
      // the proper extensions will be added
      fileName: 'xui',
      formats: ['es']
    },
    rollupOptions: {
      context: 'globalThis',
      preserveEntrySignatures: 'strict',
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})