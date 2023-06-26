import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Posts from '../views/Posts.vue'
import PostDetail from '../views/PostDetail.vue'
import Products from '../views/Products.vue'
import ProductDetail from '../views/ProductDetail.vue'
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
    path: '/posts/:id(\\d+)',   // id should be number only
    name: 'postdetail',
    component: PostDetail
  },
  // id should be number only and catid should be string only
  // {
  //   path: '/posts/:id(\\d+)/category/:catName([a-z]+$)',
  //   name: 'postdetail',
  //   component: PostDetail
  // },

  // Optional Parameters
  // {
  //   // will match /products and /products/12
  //   path: '/products/:productid?',
  //   name: 'products',
  //   component: Products
  // },
  // {
  //   // will match /products and /products/12 (Number Only)
  //   path: '/products/:productid(\\d+)?',
  //   name: 'products',
  //   component: Products
  // },

  // Same Path different component
  // {
  //   path: '/products/:prod(\\d+)',
  //   name: 'productdetail',
  //   component: ProductDetail
  // },
  // {
  //   path: '/products/:prod',
  //   name: 'products',
  //   component: Products
  // },

  // Repeatable Params
  // {
  //   // matches products/one, products/one/two, products/one/two/three, etc. + means 1 or more
  //   path: '/products/:prod+',
  //   name: 'products',
  //   component: Products
  // },
  // {
  //   // matches products/ products/one, products/one/two, products/one/two/three, etc. * means 0 or more
  //   path: '/products/:prod*',
  //   name: 'products',
  //   component: Products
  // },

  // // sensitive and strict route
  // {
  //   path: '/posts',
  //   name: 'posts',
  //   component: Posts,
  //   // sensitive: true,    // Case Sensitive
  //   // /posts/ wont work, need to remove trailing slash
  //   strict: true
  // },


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