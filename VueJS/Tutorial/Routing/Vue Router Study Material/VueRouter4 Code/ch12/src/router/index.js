import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Posts from '../views/Posts.vue'
import PostDetail from '../views/PostDetail.vue'
import NotFound from '../views/NotFound.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/posts',
    name: 'posts',
    component: Posts
  },

  {
    path: '/posts/:id',
    name: 'postdetail',
    component: PostDetail
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    console.log("From: ", from)
    console.log("To: ", to)
    console.log("SavedPosition: ", savedPosition)
    // return { top: 0 }        // Top Page
    // return { el: '#abt' }     // CSS Selector
    // if (savedPosition) {          // Saved Position
    //   return savedPosition
    // }
    // if (to.hash) {              // Scroll to Anchor behavior
    //   return { el: to.hash }
    // }
    // if (to.hash) {     // Scroll to Anchor behavior with smooth
    //   return { el: to.hash, behavior: 'smooth' }
    // }
    // return new Promise((resolve, reject) => {   // Delaying the scroll
    //   setTimeout(() => {
    //     resolve({ left: 0, top: 0 })
    //   }, 5000);
    // })
  }
})

export default router