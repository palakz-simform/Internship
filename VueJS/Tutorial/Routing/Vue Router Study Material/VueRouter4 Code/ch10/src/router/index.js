import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Posts from '../views/Posts.vue'
import PostDetail from '../views/PostDetail.vue'
import Login from '../views/Login.vue'
import NotFound from '../views/NotFound.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { isAuthenticated: true }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: { isAuthenticated: false }
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: { isAuthenticated: true }
  },
  {
    path: '/posts',
    name: 'posts',
    component: Posts,
    meta: { isAuthenticated: true },
    // beforeEnter: (to, from) => {
    //   if (!to.meta.isAuthenticated && to.name !== 'login') {
    //     return { name: 'login' }
    //   }
    // }
  },

  {
    path: '/posts/:id',
    name: 'postdetail',
    component: PostDetail,
    meta: { isAuthenticated: true }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },
]

const router = createRouter({

  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router