import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth',{
    state: () => ({
        isauthenticated: true,
        user:{
            name:"Palak",
            email:"palak@simform.com"
        }
    })
})