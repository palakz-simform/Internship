
<template>
      <HelloWorld/>
</template>
<script setup>
import HelloWorld from './components/HelloWorld.vue'
import {useAuthStore} from './stores/auth'

const authSTore = useAuthStore()
</script>
<style scoped>

</style>
