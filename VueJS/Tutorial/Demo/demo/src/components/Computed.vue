<template>
    <h1 @click="methodc">{{ method }}</h1>
<h1 @click="computeb">{{ compute }}</h1>
</template>

<script>
    export default {
        name:'Computed',
        data(){
    return{
     method:"a",
     compute:"b"
    }
  },
  methods:{
    methoda(){
      console.log("Called everytime")
    },
    computea(){
      this.compute='c'
      console.log("Called everytime")
    },
    methodc(){
  
      console.log("called")
    }
 
  },
  computed:{
      computeb(){

        console.log("not called")
      }

    }
}

</script>

<style scoped>

</style>