<!-- Methods in composition API -->
<template>
    <div>
        <br>
        *****************Method**************
        <br><br>
        <h3>{{ topic }}</h3>
        <button @click="newTitle()">Change</button>
        <button @click="newHeading('Code Improve')">Change2</button>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: "Fourth_Method",
    setup() {
        const topic = ref("Test")
        function newTitle() {
            // alert("hello")
            topic.value = "New Topic"
        }
        const newHeading = (title) => {
            topic.value = title

        }
        return {
            topic,
            newTitle,
            newHeading
        }
    }
}
</script>

<style scoped></style>