<template>
    <div>
        <br>
        *****************Props**************
        <br><br>
        <h1>{{ title }}</h1>
        <h3>Parent</h3>
        <Child title="props data test" heading="no data" @newTitle="changeTitle" />
    </div>
</template>

<script>
import { ref } from 'vue'
import Child from './Seventh_Child.vue'
export default {
    name: 'Parent',
    components: {
        Child
    },
    setup() {
        const title = ref("Title")
        const changeTitle = (val) => {
            title.value = val
        }
        return {
            title,
            changeTitle
        }
    }
}
</script>

<style scoped></style>