<template>
    <h1>
        <slot>From slot</slot>
    </h1>
</template>

<script>
export default {
    name: 'slots'
}
</script>
<style>
h1 {
    background-color: rgb(206, 164, 248);
}
</style>