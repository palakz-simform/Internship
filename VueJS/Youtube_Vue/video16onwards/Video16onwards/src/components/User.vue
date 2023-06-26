<template>
<h2>User component</h2>
<button v-on:click="getUser(userName)">Send User Name</button>
</template>
<script>

export default{
    name:"User",
    data(){
        return {
            userName: "Peeeter"
        }
    },
    props:{
        getUser:Function
    }
}
</script>