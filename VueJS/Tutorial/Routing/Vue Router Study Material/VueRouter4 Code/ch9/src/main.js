import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')

// Global Before Guards
router.beforeEach((to, from) => {
  console.log("Global - beforeEach Called")
  // console.log("From: ", from)
  // console.log("To: ", to)
  // explicitly return false to cancel the navigation
  // return false
  // Redirect
  // if (to.path === '/') {
  //   router.push('/about')
  // }
})

// Global Resolve Guards
router.beforeResolve((to, from) => {
  console.log("Global - beforeResolve Called")
  // console.log("From: ", from)
  // console.log("To: ", to)
})

// Global After Hooks
router.afterEach((to, from) => {
  console.log("Global - afterEach Called")
  // console.log("From: ", from)
  // console.log("To: ", to)
})