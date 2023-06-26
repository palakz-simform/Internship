<template>
  <v-app>
    <SideBar @selectOption="onSelectOption" />

    <v-main>
      <ImageGallery :isWithColor="isWithColor" />
    </v-main>
  </v-app>
</template>

<script setup>
import SideBar from './components/SideBar.vue'
import ImageGallery from './components/ImageGallery.vue'
import { ref } from "vue"

const isWithColor = ref(true)
function onSelectOption(isColor) {
  isWithColor.value = isColor
}
</script>