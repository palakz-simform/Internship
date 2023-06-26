
<template>
    <button @click="logout" v-if="authStore.isauthenticated">Logout</button>
    <button @click="login" v-else>Logout</button>
    
  <HelloWorld />


</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { useAuthStore } from './stores/auth';

const authStore = useAuthStore();

function logout(){
  // authStore.isauthenticated=false
  // authStore.$state = {isauthenticated : false,user:{}}
  authStore.$patch ((state)=>{
    state.isauthenticated=false,
    state.user={}
  });
}
function login(){

  authStore.$patch ((state)=>{
    state.isauthenticated=true,
    state.user={    name:"Ankan",
            email:"palak@simform.com"}
  });

  // authStore.$reset()
}

</script>



<style scoped>
</style>
