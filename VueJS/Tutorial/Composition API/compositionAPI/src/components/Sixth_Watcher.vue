<template>
    <div>
        <br>
        ****************Watcher****************
        <br> <br>
        <h3>{{ heading }}</h3>
        <h3>{{ topic }}</h3>
        <button @click="topic = 'Test API'">Change topic</button>
        <button @click="heading = 'Blog Page'">Change Heading</button>
        <form>
            Firstname : <input type="text" v-model="firstname"><br>
            Lastname : <input type="text" v-model="lastname"><br>
            Address : <input type="text" v-model="address.city"><br>
        </form>
    </div>
</template>

<script>
import { ref, toRefs, reactive, watch } from 'vue';
import _ from 'lodash'
export default {

    name: 'sixth',
    setup() {
        const topic = ref("Composition API")
        const heading = ref("Home Page")
        const formData = reactive({
            firstname: "",
            lastname: "",
            email: "demo@gmail.com",
            age: 11,
            address: {
                city: "",
                pincode: ""
            }
        });
        // Single watcher
        // watch(topic, (newVal, oldVal) => {
        //     console.log(newVal, "==", oldVal)
        // })


        // Immediate watch : 
        // Watch works when once the value changes
        // But on reload if we want to watch we can use immediate:true
        // watch(topic, (newVal, oldVal) => {
        //     console.log(newVal, "==", oldVal)
        // }, { immediate: true })

        // multiple watcher
        // watch([topic, heading], (newVal, oldVal) => {
        //     console.log(newVal, "==", oldVal)
        // })

        // In case of reactive
        // watch(() => {
        //     return formData.firstname
        //  // return {...formData}
        // }, (newVal, oldVal) => {
        //     console.log(newVal, "==", oldVal)
        // })


        // Deep watcher
        watch(() => {
            return _.cloneDeep(formData.address)
        }, (newVal, oldVal) => {
            console.log(newVal, "==", oldVal)
        }, {
            deep: true
        })
        return {
            ...toRefs(formData),
            topic,
            heading
        }
    }
}
</script>

<style scoped></style>