<template>
  <div>
    <ClickCounter />
    <HoverCounter />
  </div>
</template>

<script>
import ClickCounter from './components/ClickCounter.vue'
import HoverCounter from './components/HoverCounter.vue'

export default {
  name: "App",
  components: {
    ClickCounter,
    HoverCounter
  }

}
</script>

<style scoped></style>