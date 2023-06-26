import { createApp } from 'vue'
import App from './App.vue'
import MyFirstPlugin from './MyFirstPlugin'

import './assets/main.css'

createApp(App).use(MyFirstPlugin).mount('#app')
