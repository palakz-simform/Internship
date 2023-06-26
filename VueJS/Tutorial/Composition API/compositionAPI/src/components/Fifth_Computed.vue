<template>
    <div>
        <br>
        ***********Computed, v-model**********
        <br> <br>
        <p>{{ fullName }}</p>
        <form>
            Firstname : <input type="text" v-model="firstname"><br>
            Lastname : <input type="text" v-model="lastname"><br>
        </form>
    </div>
</template>

<script>
import { toRefs, reactive, computed } from 'vue';

export default {
    name: 'fifth',
    setup() {
        const formData = reactive({
            firstname: "",
            lastname: "",
            email: "demo@gmail.com",
            age: 11
        });
        const fullName = computed(() => {
            return formData.firstname + ' ' + formData.lastname
        })
        return {
            ...toRefs(formData),
            fullName
        }
    }
}
</script>

<style scoped></style>