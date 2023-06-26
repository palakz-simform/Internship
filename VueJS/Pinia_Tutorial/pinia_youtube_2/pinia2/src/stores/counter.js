import {defineStore} from 'pinia'

export const useCounterStore = defineStore('counter',{
    // state:()=>({
    //     count:1
    // }),
    state:()=>{
        return{
            count:1,
            name:'Sonam',
            items:['Java']
        }
    },
    getters:{
        doubleCount : state => state.count*2
    },
    actions:{
        increment(){
            this.count++;
            console.log(this.count)
        },
    }
})