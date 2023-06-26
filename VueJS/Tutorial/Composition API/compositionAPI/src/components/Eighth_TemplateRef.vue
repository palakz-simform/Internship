<template>
    <div>
        <br>
        *************Template refs************
        <br><br>
        <h3>Template refs</h3>
        <input type="text" ref="nameRef">
        <button @click="getInfo">Get</button>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name: "Eighth",
    setup() {
        const nameRef = ref(null)
        const getInfo = () => {
            nameRef.value.focus();
            console.log(nameRef.value)
        }
        return {
            nameRef, getInfo
        }
    }
}
</script>

<style scoped></style>