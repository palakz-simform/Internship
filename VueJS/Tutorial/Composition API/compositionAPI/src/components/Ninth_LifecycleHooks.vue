<template>
    <div>
        <br>
        *************Lifecycle Hooks************
        <br><br>
    </div>
</template>

<script>
import { onBeforeMount, onMounted } from 'vue'
export default {
    name: "Ninth",
    setup() {
        onBeforeMount(() => {
            console.log('onBeforeMount')
        })
        onMounted(() => {
            console.log('onMounted')
        })
    }
}
</script>

<style scoped></style>