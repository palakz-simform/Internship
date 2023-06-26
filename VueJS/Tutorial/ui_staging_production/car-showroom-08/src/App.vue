<template>
  <!-- Navigation Global Component -->
  <NavBar />
  <RouterView v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </RouterView>
</template>
  
<script>
import { RouterView } from "vue-router";
import.meta.env
export default {
  name: "App",
  created() {
    console.log(import.meta.env)
    console.log(import.meta.env.VITE_APP_API_URL)
  }
}
</script>


<style scoped>
.route-enter-from {
  opacity: 0;
  transform: translateY(100px)
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translatey(-100px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
