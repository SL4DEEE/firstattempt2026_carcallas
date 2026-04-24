import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { registerSW } from 'virtual:pwa-register'

// Register service worker for offline support
registerSW()

createApp(App).mount('#app')
