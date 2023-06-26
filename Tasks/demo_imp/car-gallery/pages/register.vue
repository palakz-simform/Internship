<template>
    <div>
        <form>
            <div class="login-form">
                <div class="form-heading">
                    <h1>Registration Form</h1>
                </div>
                <!-- Car Add/Edit Form -->

                <div class="form">
                    <!-- Name -->
                    <div class="row">
                        <label>Name:</label>
                        <input type="text" v-model="name" ref="name" @input="checkName">
                        <div v-show="error_msg_name" class="error">{{ error_msg_name }} </div>
                    </div>
                    <!-- Email -->
                    <div class="row">
                        <label>Email:</label>
                        <input type="email" v-model="email" ref="email" @input="checkEmail">
                        <div v-show="error_msg_email" class="error">{{ error_msg_email }} </div>
                    </div>
                    <!-- Password -->
                    <div class="row">
                        <label>Password:</label>
                        <input type="password" v-model="password" ref="password" @input="checkPassword">
                        <div v-show="error_msg_password" class="error">{{ error_msg_password }} </div>
                    </div>
                    <!-- Confirm Password -->
                    <div class="row">
                        <label>Confirm Password:</label>
                        <input type="password" v-model="confirmPassword" ref="confirmPassword"
                            @input="checkConfirmPassword">
                        <div v-show="error_msg_confirmPassword" class="error">{{ error_msg_confirmPassword }} </div>
                    </div>
                    <!-- Role -->
                    <div class="row">
                        <label>Role:</label>
                        <select v-model="role" ref="role" @change="checkRole">
                            <option value="Admin">Admin</option>
                            <option value="Employee">Employee</option>
                            <option value="Customer">Customer</option>
                        </select>
                        <div v-show="error_msg_role" class="error">{{ error_msg_role }} </div>
                    </div>
                    <!-- Gender -->
                    <div class="gender-class">
                        <div class="row-gender row ">
                            <label>Gender:</label>
                            <div class="gender">
                                <div class="male">
                                    <input type="radio" value="male" id="male" name="gender" v-model="gender" ref="gender"
                                        @change="checkGender" />
                                    <label for="male">Male</label>
                                </div>
                                <div class="female">
                                    <input type="radio" value="female" id="female" name="gender" v-model="gender"
                                        ref="gender" @change="checkGender" />
                                    <label for="female">Female</label>
                                </div>
                            </div>
                        </div>
                        <div v-show="error_msg_gender" class="error">{{ error_msg_gender }} </div>
                    </div>
                    <!-- Age -->
                    <div class="row">
                        <label>Age:</label>
                        <input type="number" v-model.number="age" ref="age"
                            onkeydown="return (event.keyCode !== 107 && event.keyCode !== 109 && event.keyCode !== 69);"
                            @input="checkAge">
                        <!-- Prevent the user from pressing key : +,-,e -->
                        <div v-show="error_msg_age" class="error">{{ error_msg_age }}</div>
                    </div>
                    <!-- DOB -->
                    <div class="row">
                        <label>Date of Birth:</label>
                        <input type="date" v-model="dob" ref="dob" :max="$dateToday" min="1923-01-01" @change="checkDOB"
                            onkeydown="return false;">
                        <div v-show="error_msg_dob" class="error">{{ error_msg_dob }}</div>
                    </div>
                    <div class="row row-button">
                        <button class="submit" @click.prevent="submit">Register</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script setup>
useHead({
    title: "Car Gallery | Resgistration Page",
    meta: [
        {
            name: 'description',
            content: 'This page is the Registration Page of Car Gallery.',
        }
    ]
})
</script>
<script>
import validation from '~/mixins/validation';
export default {
    name: 'Register',
    mixins: [validation],
    methods: {
        async submit() {
            this.checkName(), this.checkEmail(), this.checkPassword(), this.checkConfirmPassword(), this.checkRole(), this.checkGender(), this.checkAge(), this.checkDOB()
            if (this.checkName() && this.checkEmail() && this.checkPassword() && this.checkConfirmPassword() && this.checkRole() && this.checkGender() && this.checkAge() && this.checkDOB()) {
                const data = {
                    name: this.name,
                    email: this.email,
                    role: this.role,
                    password: this.password,
                    age: this.age,
                    dob: this.dob,
                    gender: this.gender
                }
                try {
                    const res = await useFetch("/api/user/add", {
                        method: "post",
                        body: data
                    })
                    if (res.data.value) {
                        alert(' User added Successfully: \n\nName: ' + data.name + '\nEmail: ' + data.email + '\nRole :' + data.role + '\nGender:' + data.gender + '\nAge:' + data.age + '\nDate of Birth:' + data.dob)
                        navigateTo('/login')
                    }
                }
                catch (err) {
                    console.log(err)
                }
                // With using store
                // userStore.registerUser(data)
            }
        }
    }
}
</script>

<style scoped src="../public/style.css"></style>