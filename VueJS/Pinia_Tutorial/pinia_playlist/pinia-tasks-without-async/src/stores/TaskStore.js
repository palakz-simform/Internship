import {defineStore} from 'pinia'

export const useTaskStore = defineStore('taskStore',{  //return value of defineStore is function
    state: ()=>({
        // tasks:[
        //     {id:1,title:"buy some milk",isFav:false},
        //     {id:2,title:"play with friends",isFav:true}
        // ],
        tasks:[],
        loading:false


    }),
    getters:{
        favs(){
            return this.tasks.filter(t => t.isFav)
            
        },
        favCount(){          //instead of using this u can take state as parameter and use state.
            return this.tasks.reduce((previous,current)=>{
                return current.isFav ? previous+1:previous
            },0)
        },
        totalCount:(state)=>{
            return state.tasks.length
        }
    },
    actions:{
        async getTasks(){
            this.loading=true
             const res = await fetch('http://localhost:3000/tasks')
             const data = await res.json()

             this.tasks = data
             this.loading=false
        },
        addTask(task){      //task similar to state
            this.tasks.push(task)
        },
        deleteTask(id){
       
            this.tasks = this.tasks.filter(t => t.id!==id)
        },
        toggleFav(id){
            const task = this.tasks.find(t => t.id===id)
            task.isFav = !task.isFav
        }
    }
})