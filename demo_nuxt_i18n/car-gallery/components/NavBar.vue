<template>
    <div class="title">
        <div class="nav">
            <div>
                <NuxtLink to="/" class="nav-heading">
                    <img src="/car-logo.png" alt="logo" />
                    <h1 class="logo-name">{{ $t("car_title") }}</h1>

                </NuxtLink>
            </div>
            <div>
                <span v-if="userStore.isLoggedIn == true">
                    <NuxtLink class="link" to="/">Home</NuxtLink>
                    <a class="link" @click="userStore.logout">Logout</a>
                </span>
                <template v-else>
                    <NuxtLink class="link" to="/login">Login</NuxtLink>
                    <NuxtLink class="link link-register" to="/register">Register</NuxtLink>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useUserStore } from "../stores/user";
const userStore = useUserStore()

</script>

<style >
body {
    margin: 0px;
}

.title {
    text-align: center;
}

.nav-heading {
    display: flex;
}

.nav img {
    height: 60px;
    width: auto;
    margin-left: 30px;
    margin-top: 3px;
}

.logo-name {
    color: rgb(255, 255, 255);
    font-size: 25px;
    text-shadow: 0 0 3px gray;
    margin-left: 10px;
    margin-top: 22px;
}

.nav {
    height: 70px;
    background-color: rgb(0, 0, 0);
    padding-right: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    box-shadow: 0px 1px 30px 1px rgba(255, 255, 255, 0.75);
}

.link {
    margin-right: 70px;
    color: rgb(255, 255, 255);
    font-size: 18px;
    font-weight: bold;
    width: 60px;
    text-decoration: none;
}

a.router-link-exact-active {
    font-size: 22px;
    color: rgb(35, 177, 172);
}

.link:hover {
    color: rgb(35, 177, 172);
    cursor: pointer;
}

a {
    text-decoration: none;
}

@media (max-width: 750px) {
    .title h1 {
        margin-left: 20px;
    }

    .link {
        margin-right: 20px;
        font-size: 15px;
    }

    .link-register {
        margin-right: 0px;
    }

    .nav {
        padding-right: 10px;
    }

    a.router-link-exact-active {
        font-size: 18px;
    }
}

@media (max-width: 600px) {
    .nav img {
        margin-left: 15px;
    }

    .logo-name {
        display: none;
    }
}
</style>