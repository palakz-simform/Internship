<template>
  <div>
    <button @click="slot1 = true">Slot 1</button>
    <button @click="slot1 = false">Slot 2</button>
  </div>
  <div style="display: flex;">
    <parent v-if="slot1" />
    <parent2 v-else />
  </div>
</template>
<script>
import parent from './components/parent.vue'
import parent2 from './components/parent2.vue'
export default {
  name: 'App',
  components: {
    parent,
    parent2
  },
  data() {
    return {
      slot1: true
    }
  }
}
</script>