<template>
    <div>
        <form autocomplete="off">
            <div class="login-form">
                <div class="form-heading">
                    <h1>Login Form</h1>
                </div>
                <!-- Car Add/Edit Form -->
                <div class="form">
                    <div class="row">
                        <label for="email">Email:</label>
                        <input type="email" v-model="email" id="email" ref="email" @input="checkEmail">
                        <div v-show="error_msg_email" class="error">{{ error_msg_email }}</div>
                    </div>
                    <div class="row row-password">
                        <label for="password">Password:</label>
                        <input type="password" v-model="password" id="password" ref="password" @input="checkPassword">
                        <div v-show="error_msg_password" class="error">{{ error_msg_password }}</div>
                    </div>
                    <div class="row row-button">
                        <button @click.prevent="login()" class="submit">Login</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
useHead({
    title: "Car Gallery | Login Page",
    meta: [
        {
            name: 'description',
            content: 'This page is the Login Page of Car Gallery.',
        }
    ]
})

</script>
<script>
import validation from '~/mixins/validation';
export default {
    name: 'Login',
    mixins: [validation]
}
</script>

<style scoped src="../public/style.css"></style>