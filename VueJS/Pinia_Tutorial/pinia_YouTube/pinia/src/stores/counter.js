import {defineStore} from 'pinia'

export const useCounterStore = defineStore("conter",{
    state:() => ({             //Anonymous Function
        count: 0
    }),
    getters:{   //whenever you have computed related information you can use getter on that
        countDigitLength:(state)=>{
           
            return state.count.toString().length
        }
        // countDigitLength:(store)=>console.log(store)
    },
    actions:{
         increment(){
            this.count++;
        },
         decrement(){
            this.count--;
        }
    }
   });