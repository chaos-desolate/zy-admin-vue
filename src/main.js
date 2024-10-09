import { createApp } from 'vue'
import App from './App.vue'
import { setupCores } from '@/core'

const app = createApp(App)
setupCores(app)
app.mount('#app')
