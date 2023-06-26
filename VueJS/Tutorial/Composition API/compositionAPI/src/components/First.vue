<!-- ref reactive isREf, isReactive -->
<template>
    <div>
        <h1>First</h1>
        <h3>{{ title }}</h3>
        <h4>{{ topic }} --- {{ topic_new }}</h4>
        <p>{{ formData.email }}={{ age }}</p>
        <p>{{ emailId }}</p>
    </div>
</template>

<script>
import { ref, reactive, isRef, isReactive, toRefs } from 'vue'
export default {
    name: "First",
    setup() {
        const topic = ref("Test Composition")

        console.log(isRef(topic))

        const topic_new = ref("New Test Composition")
        const formData = reactive({
            firstname: "Demo",
            email: "aa@aa.aa",
            age: 11
        })
        console.log(isReactive(formData))
        setTimeout(() => {
            topic.value = "Changed Test Composition"
            formData.email = "xyz@gmail.com"
        }, 2000)
        let newData = toRefs(formData)
        return {
            topic, topic_new, formData, age: formData.age, emailId: newData.email
        }
    },
    data() {
        return {
            title: "xyz"
        }
    }
}


const abc = computed(() => {
    return firstname + lastname
})
</script>

<style scoped></style>