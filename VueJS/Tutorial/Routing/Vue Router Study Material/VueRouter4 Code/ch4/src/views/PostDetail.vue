<script setup>
// Accessing Current Route
import { useRoute } from "vue-router";
const route = useRoute();
</script>
<template>
  <!-- Access Params in Template -->
  <h1>Post Detail Page params Object: {{ route.params }}</h1>
  <h1>Post Detail Page ID: {{ route.params.id }}</h1>
</template>
<style></style>
