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


.title h1 {
    color: rgb(255, 255, 255);
    font-size: 35px;
    text-shadow: 0 0 3px gray;
    margin-left: 40px;
}

.nav {
    height: 70px;
    background-color: rgb(0, 0, 0);
    padding-right: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* width: 100%; */
    margin: 0 auto;
    box-shadow: 0px 1px 30px 1px rgba(255, 255, 255, 0.75);
    /* box-shadow: 3px 5px 8px 0px rgba(255, 255, 255, 0.75); */
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