<script setup>
import { RouterLink, RouterView } from "vue-router";
const posts = [
  { id: 1, title: "How to Learn Vue JS" },
  { id: 2, title: "Learn React in 2 minutes" },
  { id: 3, title: "Learn Core Java Easy Way" },
  { id: 4, title: "Python Topic you should learn" },
];
</script>
<template>
  <h1>Posts Page - All Posts</h1>
  <div v-for="post in posts" :key="post.id">
    <RouterLink :to="`/posts/${post.id}`">
      <h2>{{ post.title }}</h2>
    </RouterLink>

    <!-- Named Route -->
    <!-- <RouterLink :to="{ name: 'postdetail', params: { id: post.id } }">
      <h2>{{ post.title }}</h2>
    </RouterLink> -->
  </div>
  <RouterView />
</template>
<style></style>
