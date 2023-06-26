<template>
    <ul v-for="user in users" :key="user.id">
        <div v-if="user.loggedIn">
            <li>{{ user.name }}</li>
        </div>

    </ul>
</template>

<script>
export default {
    name: "forif",
    data() {
        return {
            users: [
                {
                    id: 1,
                    name: "xyz",
                    loggedIn: true
                },
                {
                    id: 2,
                    name: "abc",
                    loggedIn: false
                },
                {
                    id: 3,
                    name: "def",
                    loggedIn: true
                }
            ]


        }
    }


}
</script>