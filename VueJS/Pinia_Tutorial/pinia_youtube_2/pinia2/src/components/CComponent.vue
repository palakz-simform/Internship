<template>
    <h1>C Component</h1>
    <input v-model="count"/>
    <h2>{{count}}</h2>
    <h2>{{ doubleCount }}</h2>
    <button @click="increment">Increment</button>
</template>

<script>

import {useCounterStore} from '../stores/counter'
import {mapWritableState} from 'pinia'
import {mapActions} from 'pinia'
    export default {
        mounted(){
            this.increment()
        },
        name: 'CComponent',
        computed : {
            ...mapWritableState(useCounterStore,['count','doubleCount'])
            // ...mapWritableState(useCounterStore,{
            //     myOwnName : 'count'
            // })
        },
        methods:{
            ...mapActions(useCounterStore,['increment'])
        }
        
    }
</script>

<style>

</style>