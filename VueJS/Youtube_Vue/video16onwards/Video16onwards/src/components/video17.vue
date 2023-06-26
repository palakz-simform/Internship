<template>
<h1>Ref in Vue</h1>
<input type="text" ref="input"/>
<button @click="getData()">Click</button>

</template>
<script>

export default{
    name:"video17",
    methods:{
        getData(){
            this.$refs.input.focus()
            let val =  this.$refs.input.value
            console.log(val)
            this.$refs.input.style.color="red"
        }
    }
}
</script>