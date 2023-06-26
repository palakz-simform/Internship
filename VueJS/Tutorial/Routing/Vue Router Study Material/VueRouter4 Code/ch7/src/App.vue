<!-- Topics - Programmatic Navigation  -->
<script setup>
import { RouterView, RouterLink, useRouter } from "vue-router";
const router = useRouter();
// console.log("Router: ", router);
</script>
<template>
  <nav>
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    <RouterLink :to="{ name: 'about' }">About</RouterLink>
    <RouterLink :to="{ name: 'contact' }">Contact</RouterLink>
    <RouterLink :to="{ name: 'posts' }">Posts</RouterLink>
    <!-- <button @click="router.push('/')">Home</button> -->
    <!-- <button @click="router.push('/about')">About</button> -->
    <!-- <button @click="router.push({ path: '/about' })">About</button> -->
    <!-- <button @click="router.push({ name: 'about' })">About</button> -->
    <!-- <button @click="router.go(2)">Forward 2</button> -->
  </nav>
  <RouterView />
</template>
<style>
nav {
  width: 100%;
  font-size: 24px;
  border-bottom: 1px solid red;
}

nav a {
  display: inline-block;
  padding: 5px 10px;
  text-decoration: none;
  margin: 10px;
  border-radius: 5px;
}

nav a.router-link-exact-active {
  color: #fff;
  background-color: coral;
}
</style>
