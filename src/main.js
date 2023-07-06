import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'
import './style.css'
import App from './App.vue'

createApp(App).use(plugin, defaultConfig).mount('#app')
