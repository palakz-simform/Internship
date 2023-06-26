<template>


<component :is="component"></component>
</template>

<script>
import dc1 from './dc1.vue'
import dc2 from './dc2.vue'
    export default {
            name:'dc',
            components:{
                dc1,dc2
            },
            data(){
                return{
                    component:dc2
                }
            }
    }
</script>

<style>

</style>