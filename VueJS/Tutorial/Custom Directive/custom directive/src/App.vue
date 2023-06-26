<script setup>
const vColor=(el,binding)=>{
  el.style.color = binding.value;
}
</script>

<template>
  <h1 v-color="'blue'">Palak</h1>
    <h1 v-color="'gold'">Palak</h1>
</template>
