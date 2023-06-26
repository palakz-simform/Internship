<!-- toRefs tutorial -->
<template>
    <div>
        <br>
        ****************isRef****************
        <br> <br>
        <h3>{{ topic }}</h3>
        <p>{{ email }}</p>

    </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
export default {
    name: "Third",
    setup() {
        const topic = ref("Test Composition")
        const formData = reactive({
            firstname: "Demo",
            email: "aa@aa.aa",
            age: 11
        })


        return {
            topic,
            ...toRefs(formData)  //Automatically destructures
        }

    },

}
</script>

<style scoped></style>