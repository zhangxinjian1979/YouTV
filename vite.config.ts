import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    // 确保输出格式正确
    target: 'es2020',
    // 如果是 ESM 模块，确保使用 esbuild 或 rollup 正确处理
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
