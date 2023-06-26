<template>
<br><br>
<h1>Video 25 Form Modifiers</h1>
<!-- <input type="text" v-model.lazy="data" />  -->
<!-- <input type="number" v-model.trim="data" />  -->
<!-- <input type="number" v-model.number="data" />  -->
<input type="number" v-model.lazy.number="data" /> 
<h2>Data is : {{ typeof(data) }}</h2>
<h2>Data is : {{data}}</h2>
</template>

<script>
export default{
    name:'video25.vue',
    data(){
        return{
            data:''
        }
    }
}
</script>