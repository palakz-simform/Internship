<script setup>
import {useCounterStore} from '../stores/counter';
// import {storeToRefs} from 'pinia'
const store = useCounterStore();
// DESTRUCTURE
// const {count,doubleCount} = storeToRefs(store)
// const {increment} = store
store.count = 5
// Resetting State
function resetState(){
    store.$reset()
}

// Mutating state passing object
// store.$patch({
//     count: store.count+10,
//     name:"Raj",
// })

// Mutating state passing function
// store.$patch((state)=>{
//     state.items.push("Vue3");
//     state.count=30;
// })

// Replacing state  
store.$state={count:50}  //$patch is called internally

</script>

<template>
<h1>A Component</h1>
<h2>Count : {{ store.count }}</h2>
<h2>Double Count : {{ store.doubleCount }}</h2>
<button @click="store.increment">Increment</button>

<h2>Name:{{ store.name }}</h2>
<h2>Items:{{ store.items }}</h2>
<!-- Resetting state -->
<button @click="resetState">Reset State</button>

<!-- <h2>Count : {{ count }}</h2>
<h2>Double Count : {{ doubleCount }}</h2>
<button @click="increment">Increment</button> -->
</template>


<style>

</style>