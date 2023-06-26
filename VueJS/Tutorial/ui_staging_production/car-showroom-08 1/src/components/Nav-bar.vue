<template>
    <div class="title">
        <div class="nav">
            <div>
                <RouterLink to="/" class="heading">
                    <h1>Car Gallery</h1>
                </RouterLink>
            </div>
            <div>
                <RouterLink class="link" to="/">Home</RouterLink>
                <span v-if="login == 'true'">
                    <a class="link" @click="logout">Logout</a>
                </span>
                <template v-else>
                    <RouterLink class="link" to="/login">Login</RouterLink>
                    <RouterLink class="link link-register" to="/register">Register</RouterLink>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import { mapWritableState, mapActions } from "pinia";
import { RouterLink } from "vue-router";
import { useUserStore } from "../stores/user";
export default {
    name: "Nav-bar",

    computed: {
        ...mapWritableState(useUserStore, ["login"]),
    },
    methods: {
        ...mapActions(useUserStore, ["logout"]),
    }
};
</script>

<style >
body {
    margin: 0px;
}

.title {
    text-align: center;
}

hr {
    width: 8%;
    border: 5px solid brown;
    border-radius: 5px;
}

.title h1 {
    color: wheat;
    font-size: 35px;
    text-shadow: 0 0 3px gray;
    margin-left: 40px;
}

.nav {
    height: 60px;
    background-color: rgb(44, 44, 44);
    padding-right: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.link {
    margin-right: 70px;
    color: wheat;
    font-size: 18px;
    font-weight: bold;
    width: 60px;
    text-decoration: none;
}

a.router-link-exact-active {
    font-size: 22px;
}

.link:hover {
    color: rgb(253, 247, 247);
    cursor: pointer;
}

a {
    text-decoration: none;
}

@media (max-width: 750px) {
    .title h1 {
        margin-left: 20px;
        font-size: 25px;
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

@media (max-width: 375px) {
    .title h1 {
        font-size: 20px;
        margin-left: 20px;
    }
}
</style>