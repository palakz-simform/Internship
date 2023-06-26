<template>
<p v-if="age>25">{{msg}}</p>
<p>You must be 25 years or older</p>
</template>

<script >

export default{
  name: 'Greetings',
  props:["age"],
  data(){
    return {
      msg : "Helloo world"
    }
  } 
}
</script>

<style scoped lang="scss">
p:hover{
    color:darken(#cc4444,15%);
}
</style>