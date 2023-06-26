<template>
<!-- Navigation Global Component -->
<NavBar />
<RouterView/>
</template>

<script>
import { RouterView } from "vue-router";
import NavBar from "./components/Nav-bar";
// import HomePage from './views/Home.vue'

export default{
    name:"App",
    components:{
        NavBar,
        // HomePage
    }
}
</script>
