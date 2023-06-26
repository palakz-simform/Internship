<template>
  <!-- <Student name="Palak"/>
  <Teacher name="Peter" /> -->

  <Student :name="name"/>
  <Teacher :name="name" />
  <!-- Pass data from Child to parent -->
  <User :getUser="getUserName"/>
  <h2>{{ childUser }}</h2>
  <!-- Vide 17 ref -->
  <video17 />
  <!-- Video18 simple forms -->
  <video18 />
  <!-- Video 25 form modifiers -->
  <video25 />
  <!-- Video 26 non props data -->
  <video26 data="somedata" xyz="user-cmp"/>

</template>
<script >
import Student from './components/Student.vue'
import Teacher from './components/Teacher.vue'
import User from './components/User.vue'
import video17 from './components/video17.vue'
import video18 from './components/video18.vue'
import video25 from './components/video25.vue'
import video26 from './components/video26.vue'
export default{
  name:"App",
  components:{
    Student,
    Teacher,
    User,
    video17,
    video18,
    video25,
    video26
  },
  data(){
    return{
      name:"Bruce",
      userName:"Peter",
      childUser:""
    }
  },
  methods:{
    //  Pass data from Child to parent 
    getUserName(name){
      this.childUser = name
    }
  }
}
</script>



<style scoped>

</style>
