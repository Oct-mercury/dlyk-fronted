import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  // 配置项目的启动端口
  server:{
    host: '0.0.0.0',    // ip地址，代表任意ip都可以访问
    port: 8001,   // 8081端口
    open: false    // 设置服务器启动时是否自动打开浏览器
  }
})
