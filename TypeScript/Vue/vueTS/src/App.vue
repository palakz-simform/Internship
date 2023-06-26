<template>
  <p>{{ name }}-{{ age }}</p>
  <button @click="changeName('sssssss')">Change name</button>
  <button @click="changeAge(34)">Change Age</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const state = reactive({
      name: "Link",
    });
  },
});
</script>
