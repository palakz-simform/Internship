<template>
    <div>
        <button @click = "store.increment">+</button>
        Count value : {{ store.count }}
        <button @click = "store.decrement">-</button>
        <br>
        Counter moved to {{ store.countDigitLength }} length
    </div>
</template>

<script setup>
 import { useCounterStore } from '../stores/counter';
 import {computed} from "@vue/runtime-core"
 const store = useCounterStore()



// const countDigitLength = store.count.toString().length
</script>