<template>
  <p class="abc">App</p>
  <Home />
</template>
<script>
import Home from './components/Home.vue'
import Home1 from './components/Home1.vue'
export default {
  components: {
    Home,
    Home1
  }
}

</script>
<style>
.abc {
  color: rgb(107, 120, 191);
}
</style>