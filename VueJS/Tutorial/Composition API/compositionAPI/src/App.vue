<template>
  <div>
    <First />
    <Third />
    <fourthMethod />
    <fifth />
    <sixthhhh />
    <Seventh />
    <Eighth />
    <Ninth />
    <Tenth />
  </div>
</template>

<script>
import First from './components/First.vue'
import Third from './components/Third.vue'
import fourthMethod from './components/Fourth_Method.vue'
import fifth from './components/Fifth_Computed.vue'
import sixthhhh from './components/Sixth_Watcher.vue'
import Seventh from './components/Seventh_Parent.vue'
import Eighth from './components/Eighth_TemplateRef.vue'
import Ninth from './components/Ninth_LifecycleHooks.vue'
import Tenth from './components/Tenth_emit.vue'

export default {
  name: "App",
  components: {
    First,
    Third,
    fourthMethod,
    fifth,
    sixthhhh,
    Seventh,
    Eighth,
    Ninth,
    Tenth
  }
}
</script>

<style scoped></style>