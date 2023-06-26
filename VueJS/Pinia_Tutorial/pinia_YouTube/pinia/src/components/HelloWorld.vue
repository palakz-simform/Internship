<template>
<br>
<div v-if="isauthenticated">
  User name is:  {{ user.name }}

</div>
 
  <p>From count component</p>
  <Counter :count="store.count"/>
 </template>
 
 <script setup>

 import { useCounterStore } from '../stores/counter';
 import { useAuthStore } from '../stores/auth';
 import Counter from '../components/counter.vue'
import { storeToRefs } from 'pinia';
 const store = useCounterStore()
 const authStore = useAuthStore()  //Creating instance of authstore
// const {isauthenticated,user} = useAuthStore()        //We loose reactivity so use storetoRef() function
const {isauthenticated,user} = storeToRefs(authStore)
console.log(store.count)

 </script>
 
 
 
 <style scoped>
 </style>
 