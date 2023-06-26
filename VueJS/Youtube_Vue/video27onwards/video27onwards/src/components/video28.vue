<template>
<h3>{{count}}</h3>
<button v-on:click="count=count+1">+</button>
<button  v-on:click="count=count-1">-</button>
</template>

<script>
export default{
    name:"video28",
    data(){
        return{
            count:0
        }
               
    },
    watch:{
        count(val,prev){   //same name as in data
            if(val>5 && val>prev){
                this.count=0
            }
        }
            
   }
}
</script>

