import { createApp } from 'vue'
import App from './App.vue'
import NavBar from './components/Nav-bar.vue'
import router from './router'

const app = createApp(App)

app.mount('#app')
app.component('NavBar',NavBar)
app.use(router)