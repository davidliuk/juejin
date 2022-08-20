import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';
import { ArcoResolver } from 'unplugin-vue-components/resolvers';
import mdPlugin, { Mode } from 'vite-plugin-markdown';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ArcoResolver()],
    }),
    mdPlugin,
    // md(),
    Components({
      resolvers: [
        ArcoResolver({
          sideEffect: true
        })
      ]
    })
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, 'src')
      }
    ]
  },
  // 添加跨域
  server: {
    open: false, // 自动打开
    base: "./ ", // 生产环境路径
    proxy: { // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
      // 正则表达式写法
      '^/api': {
        target: 'http://localhost:5000', // 后端服务实际地址
        changeOrigin: true, //开启代理
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});