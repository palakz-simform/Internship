import { useUserStore } from "../stores/user"
const userStore = useUserStore()
export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
        if (userStore.isLoggedIn) {
            return
        }
        return navigateTo("/login")
    }
})