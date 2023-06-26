<template>
 <h1>Hello</h1>
 {{ store.count }}
 <Counter />
</template>

<script setup>
import { useCounterStore } from '../stores/counter';
import Counter from './Counter.vue'
const store = useCounterStore()
console.log(store.count)

components:{
  Counter;
}
</script>



<style scoped>
</style>
