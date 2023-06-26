<script setup>
import { RouterLink, useRouter } from "vue-router";
const router = useRouter();
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
    <RouterLink :to="{ name: 'postdetail', params: { id: post.id } }">
      <h2>{{ post.title }}</h2>
    </RouterLink>
    <!-- <RouterLink :to="`/posts/${post.id}`">
      <h2>{{ post.title }}</h2>
    </RouterLink> -->
    <!-- <button @click="router.push(`/posts/${post.id}`)">{{ post.title }}</button> -->
    <!-- <button @click="router.push({ path: `/posts/${post.id}` })">
      {{ post.title }}
    </button> -->
    <!-- <button
      @click="router.push({ name: 'postdetail', params: { id: post.id } })"
    >
      {{ post.title }}
    </button> -->
    <!-- <button
      @click="
        router.push({
          name: 'postdetail',
          params: { id: post.id },
          query: { tag: 'java' },
        })
      "
    >
      {{ post.title }}
    </button> -->
    <!-- <button
      @click="
        router.push({
          name: 'postdetail',
          params: { id: post.id },
          query: { tag: 'java' },
          hash: '#team',
        })
      "
    >
      {{ post.title }}
    </button> -->
  </div>
</template>
<style></style>
