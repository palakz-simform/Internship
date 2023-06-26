import {defineStore} from 'pinia'

export const useCounterStore = defineStore("conter",{
    state: ()=>({       //anonymous function which returns an object
        count:10,
    })
});