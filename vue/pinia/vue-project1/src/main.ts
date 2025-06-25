// main.ts
import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'  // ✅ 引入 pinia

const app = createApp(App)

const pinia = createPinia()         // ✅ 创建 pinia 实例
app.use(pinia)                      // ✅ 挂载 pinia
app.mount('#app')                   // ✅ 再挂载 app
