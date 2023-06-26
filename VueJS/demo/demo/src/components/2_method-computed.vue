<template>
    <br>
    <p @click="fullname">Hii</p>
    <p @click="flname">hello</p>
</template>
<script>
export default {
    name: "methodcomputed",
    data() {
        return {
            fname: "xyz",
            lname: "abc",
            other: "ggg"
        }
    },
    methods: {
        fullname() {
            console.log("always exectued")
        }
    },
    computed: {
        flname() {
            console.log("not executed")
        }
    }
}
</script>