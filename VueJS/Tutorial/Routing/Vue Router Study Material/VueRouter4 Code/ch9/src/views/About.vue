<script setup>
import { onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";
onBeforeRouteLeave((to, from) => {
  console.log("About Component - onBeforeRouteLeave Called");
  // console.log("From: ", from);
  // console.log("To: ", to);
});
onBeforeRouteUpdate((to, from) => {
  console.log("About Component - onBeforeRouteUpdate Called");
  // console.log("From: ", from);
  // console.log("To: ", to);
});
</script>
<template>
  <h1>About Page</h1>
</template>
<style></style>
