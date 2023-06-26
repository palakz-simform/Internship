<template>
<select v-model="componentName">
  <option value="Home">Home</option>
  <option value="About">About</option>
</select>

<keep-alive>
  <component :is="componentName"></component>
</keep-alive>
  
<p :class="{blue:isBlue,red:isred}">Hii</p>
</template>

<script >
import Home from './components/Home.vue';
import About from './components/About.vue';
export default{
  name:"App",
  components : {
    Home,
    About,
  },
  data(){
    return{
      componentName: "Home",
      isred:true,
      isBlue:true
    }
   
  }
}
</script>

<style>
.red{
  color:red;
}
.blue{
  background-color:blue;
}
</style>