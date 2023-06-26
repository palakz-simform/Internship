<script setup>
const props = defineProps(["id"]);
console.log(props);
</script>
<template>
  <!-- Access Params in Template -->
  <h1>Post Detail Page Props: {{ props }}</h1>
  <h1>Post Detail Page ID: {{ props.id }}</h1>
</template>
<style></style>
