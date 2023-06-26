<template>
  <h3>Hey!</h3>
  <Greetings :age="age"></Greetings>
  <User :age="age" @age-change="updateAge" :ageChangeFn="updateAgeCB"></User>
</template>

<script >
import Greetings from "@/components/Greetings.vue";
import User from "@/components/User.vue";
export default{
  name: 'App',
  components:{
    Greetings,
    User
  },
  data(){
    return{
      age:20
    }
  },
  methods:{
    updateAge(num){
      this.age+=num
    },
    updateAgeCB(num){
      this.age+=num
    }
  } 
}
</script>

