import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import LoginPage from '../views/LoginPage.vue'
const routes=[
    {
        path:'/',
        name:'home',
        component:Home
    },
    {
        path:'/login',
        name:'login',
        component:LoginPage

    }
];

const router = createRouter({
    history:createWebHistory('/my-base-url'),
    routes,
})

export default router