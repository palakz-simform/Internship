<script setup>
// Accessing Current Route
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
console.log("Route: ", route);
// const {
//   fullPath,
//   hash,
//   matched,
//   meta,
//   name,
//   params,
//   path,
//   query,
//   redirectionFrom,
// } = useRoute();
// console.log("FullPath: ", fullPath);
// console.log("Hash: ", hash);
// console.log("Name: ", name);
// console.log("Params: ", params.id);
// console.log("path: ", path);
// console.log("Query: ", query.tag);

// Access Router
const router = useRouter();
console.log("Router: ", router);

function goBack() {
  router.back();
}
function goForward() {
  router.forward();
}
</script>
<template>
  <!-- Access Params in Template -->
  <h1>Post Detail Page params Object: {{ route.params }}</h1>
  <h1>Post Detail Page ID: {{ route.params.id }}</h1>

  <!-- Access Query -->
  <h1>Post Detail Page Query Object: {{ route.query }}</h1>
  <h1>Post Detail Page Query: {{ route.query.tag }}</h1>

  <!-- Access Hash -->
  <h1>Post Detail Page Hash: {{ route.hash }}</h1>

  <!-- Back and Forward Button -->
  <button @click="goBack">Back</button>
  <button @click="goForward">Forward</button>
</template>
<style></style>
