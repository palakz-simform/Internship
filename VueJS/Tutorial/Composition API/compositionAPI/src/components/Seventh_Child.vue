<template>
    <div>
        <h3>Child</h3>
        <p>{{ title }}</p>
        <p> {{ mytest }}</p>
        <button @click="newTitle">Click me</button>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'Child',
    props: {
        title: {
            require: true
        },
        heading: {
            require: true
        }
    },
    setup(props, context) {
        const mytest = ref(props.title)
        const newTitle = () => {
            context.emit("newTitle", "Newww")
            mytest.value = 'Anything'
        }
        return {
            mytest,
            newTitle
        }
    }

}
</script>

<style scoped></style>