<template>
  <h1>Dynamic components</h1>
  <button @click="tab='video31Java'">Load Java</button>
  <button @click="tab='video31Node'">Load Node</button>
  <button @click="tab='video31PHP'">Load PHP</button>

  <component :is="tab"/>
  </template>
  
  <script>
  import video31Java from './components/video31Java.vue'
  import video31Node from './components/video31Node.vue'
  import video31PHP from './components/video31PHP.vue'
  export default {
      name: "video31",
      components:{
          video31Java,
          video31Node,
          video31PHP
  
      },

      data(){
        return{
          tab:'video31Java'
        }
      }
  }
  </script>
  