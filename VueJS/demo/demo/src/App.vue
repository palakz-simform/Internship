<template>
  <forif />
  <methodcomponent />
  <my-header>
    <template #title>
      Title
    </template>
    <template #author>
      Author </template>
  </my-header>
  <slotcomp>
    <template #header="{ myname, surname }">{{ myname }} {{ surname }} HEADER</template>
    <template #footer>FOOTER</template>
    AAAA

  </slotcomp>
</template>

<script>
import slotcomp from './components/slot.vue'
import forif from "./components/1_for-if.vue"
import methodcomponent from "./components/2_method-computed.vue"
import { onMounted } from 'vue';
export default {
  name: "App",
  components: {
    forif,
    methodcomponent,
    slotcomp
  }
}


</script>

<script setup>
import axios from 'axios'
import { onMounted } from 'vue'
onMounted(() => {
  getData()
})

function getData() {
  axios.get("https://testapi.io/api/dartya/resource/cardata", {
  }).then((response) => {
    getDetails(2323)
    console.log(response.data.data)
  }).catch((err) => {
    console.log("err in getData()")
  })
}

function getDetails(id) {
  axios.get(`https://testoapi.io/api/dartya/resource/cardata/${id}`).then((response) => {
    console.log(response.data)
  }).catch((err) => {
    console.log("err in getDetails()")
  })
}

</script>