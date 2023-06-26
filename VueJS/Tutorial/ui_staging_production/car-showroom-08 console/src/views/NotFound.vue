<template>
    <div class="not-found">
        <h1>Page Not Found!!</h1>
        <p>Please <RouterLink :to="{ name: 'home' }"> <span>click</span> </RouterLink> here to access the home page</p>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
    name: 'NotFound'
}
</script>

<style scoped>
.not-found {
    text-align: center;
}

h1 {
    color: maroon;
}

p {
    font-size: 20px;
}

span {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}
</style>
