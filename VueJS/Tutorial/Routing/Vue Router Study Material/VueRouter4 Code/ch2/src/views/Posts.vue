<script setup>
import { RouterLink } from "vue-router";
const posts = [
  { id: "1", title: "How to Learn Vue JS" },
  { id: "2", title: "Learn React in 2 minutes" },
  { id: "3", title: "Learn Core Java Easy Way" },
  { id: "4", title: "Python Topic you should learn" },
];
</script>
<template>
  <h1>Posts Page - All Posts</h1>
  <!-- <h2>How to Learn Vue JS 1</h2>
  <h2>Learn React in 2 minutes 2</h2>
  <h2>Learn Core Java Easy Way 3</h2>
  <h2>Python Topic you should learn 4</h2> -->
  <div v-for="post in posts" :key="post.id">
    <RouterLink :to="`posts/${post.id}`">
      <h2>{{ post.title }}</h2>
    </RouterLink>
  </div>
</template>
<style></style>
