<!-- Topics - Transition -->
<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>
<template>
  <nav>
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    <RouterLink :to="{ name: 'about' }">About</RouterLink>
    <RouterLink :to="{ name: 'contact' }">Contact</RouterLink>
    <RouterLink :to="{ name: 'posts' }">Posts</RouterLink>
  </nav>
  <!-- App Level Transition Route -->
  <RouterView v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <Component :is="Component" />
    </Transition>
  </RouterView>

  <!-- Route Level Transition Route -->
  <!-- <RouterView v-slot="{ Component, route }">
    <Transition :name="route.meta.transition || 'fade'" mode="out-in">
      <Component :is="Component" />
    </Transition>
  </RouterView> -->
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

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

/* Slide Left and Slide Right */
@keyframes slide-right {
  from {
    margin-left: -100%;
  }
  to {
    margin-left: 0%;
  }
}
@keyframes slide-left {
  from {
    margin-left: 100%;
  }
  to {
    margin-left: 0%;
  }
}
.slide-left-enter-from,
.slide-left-enter-active {
  animation: 2s slide-left;
}

.slide-right-enter-from,
.slide-right-enter-active {
  animation: 2s slide-right;
}
</style>
