<template>
    <div>
        <form>
            <div class="login-form">
                <div class="heading">
                    <h1>Registration Form</h1>
                </div>
                <!-- Car Add/Edit Form -->

                <div class="form">
                    <!-- Name -->
                    <div class="row">
                        <label>Name:</label>
                        <input type="text" v-model="form.name" ref="name" @input="checkName">
                        <div v-show="error_msg_name" class="error">{{ error_msg_name }} </div>
                    </div>
                    <!-- Email -->
                    <div class="row">
                        <label>Email:</label>
                        <input type="email" v-model="form.email" ref="email" @input="checkEmail">
                        <div v-show="error_msg_email" class="error">{{ error_msg_email }} </div>
                    </div>
                    <!-- Password -->
                    <div class="row">
                        <label>Password:</label>
                        <input type="password" v-model="form.password" ref="password" @input="checkPassword">
                        <div v-if="error_msg_password" class="error">{{ error_msg_password }} </div>
                    </div>
                    <!-- Confirm Password -->
                    <div class="row">
                        <label>Confirm Password:</label>
                        <input type="password" v-model="form.confirmPassword" ref="confirmPassword"
                            @input="checkConfirmPassword">
                        <div v-if="error_msg_confirmPassword" class="error">{{ error_msg_confirmPassword }} </div>
                    </div>
                    <!-- Role -->
                    <div class="row">
                        <label>Role:</label>
                        <select v-model="form.role" ref="role" @input="checkRole">
                            <option value="Admin">Admin</option>
                            <option value="Employee">Employee</option>
                            <option value="Customer">Customer</option>
                        </select>
                        <div v-if="error_msg_role" class="error">{{ error_msg_role }} </div>
                    </div>
                    <!-- Gender -->
                    <div class="gender-class">
                        <div class="row-gender row ">
                            <label>Gender:</label>
                            <div class="gender">
                                <div class="male">
                                    <input type="radio" value="male" name="gender" v-model="form.gender" ref="gender"
                                        @input="checkGender" />
                                    <label>Male</label>
                                </div>
                                <div class="female">
                                    <input type="radio" value="female" name="gender" v-model="form.gender" ref="gender"
                                        @input="checkGender" />
                                    <label>Female</label>
                                </div>
                            </div>
                        </div>
                        <div v-if="error_msg_gender" class="error">{{ error_msg_gender }} </div>
                    </div>
                    <!-- Age -->
                    <div class="row">
                        <label>Age:</label>
                        <input type="number" v-model.number="form.age" ref="age"
                            onkeydown="return (event.keyCode !== 107 && event.keyCode !== 109 && event.keyCode !== 69);"
                            @input="checkAge">
                        <!-- Prevent the user from pressing key : +,-,e -->
                        <div v-if="error_msg_age" class="error">{{ error_msg_age }}</div>
                    </div>
                    <!-- DOB -->
                    <div class="row">
                        <label>Date of Birth:</label>
                        <input type="date" v-model="form.dob" ref="dob" :max="formattedDate()" min="1923-12-31"
                            @input="checkDOB">
                        <div v-if="error_msg_dob" class="error">{{ error_msg_dob }}</div>
                    </div>
                    <div class="row row-button">
                        <button class="submit" @click.prevent="submit">Register</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import {
    mapActions
} from 'pinia'
import {
    useUserStore
} from '../stores/user'
import router from '../router'
export default {
    name: 'RegisterPage',

    data() {
        return {
            error_msg_name: "",
            error_msg_email: "",
            error_msg_password: "",
            error_msg_confirmPassword: "",
            error_msg_role: "",
            error_msg_gender: "",
            error_msg_age: "",
            error_msg_dob: "",
            form: {
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
                role: '',
                gender: '',
                age: '',
                dob: ''
            },
        }
    },
    methods: {
        ...mapActions(useUserStore, ['registerUser']),

        async submit() {
            // clear error
            this.clearError()

            if (this.checkName() && this.checkEmail() && this.checkPassword() && this.checkConfirmPassword() && this.checkRole() && this.checkGender() && this.checkAge() && this.checkDOB()) {
                const data = {
                    name: this.form.name,
                    email: this.form.email,
                    role: this.form.role,
                    password: this.form.password,
                    age: this.form.age,
                    dob: this.form.dob,
                    gender: this.form.gender
                }
                const result = await this.registerUser(data)
            }
        },
        clearError() {
            this.error_msg_name = "",
                this.error_msg_email = "",
                this.error_msg_password = "",
                this.error_msg_confirmPassword = "",
                this.error_msg_role = "",
                this.error_msg_gender = "",
                this.error_msg_age = "",
                this.error_msg_dob = ""
        },
        checkName() {
            this.clearError()
            if (this.form.name === "") {
                const msg = "**Please enter name**"
                this.showError("name", msg)
                return false;
            }
            return true
        },
        checkEmail() {
            this.clearError()
            if (this.form.email === "") {
                const msg = "**Please enter email**"
                this.showError("email", msg)
                return false;
            } else if (this.form.email !== "") {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(this.form.email)) {
                    const msg = "**Please enter valid email**"
                    this.showError("email", msg)
                    return false;
                }
                return true
            }
            return true;
        },
        checkPassword() {
            this.clearError()
            if (this.form.password === "") {
                const msg = "**Please enter password**"
                this.showError("password", msg)
                return false;
            } else if (this.form.password !== "") {
                const passRegex = /^(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,12}$/;
                if (!passRegex.test(this.form.password)) {
                    const msg = "**Password must be 8-12 characters, 1 number, 1 special character**"
                    this.showError("password", msg)
                    return false;
                }

                return true
            }
            return true
        },
        checkConfirmPassword() {
            this.clearError()
            if (this.form.confirmPassword === "") {
                const msg = "**Please enter the password again to confirm**"
                this.showError("confirmPassword", msg)
                return false;
            } else if (this.form.confirmPassword !== "") {
                if (this.form.password !== this.form.confirmPassword) {
                    const msg = "**Confirm Password does not match the Password field**"
                    this.showError("confirmPassword", msg)
                    return false;
                }
                return true;
            }
            return true;
        },
        checkRole() {
            this.clearError()
            if (this.form.role === "") {
                const msg = "**Please choose your role**"
                this.showError("role", msg)
                return false;
            }
            return true;
        },
        checkGender() {
            this.clearError()
            if (this.form.gender === "") {
                const msg = "**Please choose your gender**"
                this.showError("gender", msg)
                return false;
            }
            return true
        },
        checkAge() {
            this.clearError()
            if (this.form.age === "") {
                const msg = "**Please enter your age**"
                this.showError("age", msg)
                return false;
            } else if (this.form.age !== "") {
                const age = this.form.age
                if (typeof this.form.age != 'number' || age.toString().includes(".")) {
                    const msg = "**Age should be whole number**"
                    this.showError("age", msg)
                    return false
                } else if (this.form.age < 18 || this.form.age > 100) {
                    const msg = "**Age should be between 18-100**"
                    this.showError("age", msg)
                    return false
                }
                return true
            }
            return true
        },
        checkDOB() {
            this.clearError()
            if (this.form.dob === "") {
                const msg = "**Please choose your Date of Birth**"
                this.showError("dob", msg)
                return false;
            }
            return true;
        },
        showError(error, msg) {
            this.clearError()
            this[`error_${error}`] = true;
            this[`error_msg_${error}`] = msg;
            this.$refs[error].focus();
        },
        formattedDate() {
            const today = new Date();
            const year = today.getFullYear();
            const month = (today.getMonth() + 1).toString().padStart(2, '0'); // add 1 to adjust for 0-based indexing
            const day = today.getDate().toString().padStart(2, '0');
            const formattedDate = `${year}-${month}-${day}`;
            return formattedDate
        }

    }

}
</script>

<style src="../../public/style.css" scoped></style>
