import { mapActions } from 'pinia'
import { useUserStore } from '../stores/user'
export default {
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
            name: '',
            email: "",
            password: "",
            confirmPassword: '',
            role: '',
            gender: '',
            age: '',
            dob: ''
        }
    },
    methods: {
        ...mapActions(useUserStore, ['logInUser', 'registerUser']),

        getUserData() {
            return {
                email: this.email,
                password: this.password
            }
        },
        login() {
            this.checkEmail(),
                this.checkPassword()
            if (this.checkEmail() && this.checkPassword()) {
                const data = this.getUserData()
                this.logInUser(data)
            }
        },
        checkName() {
            if (this.name === "") {
                const msg = "**Please enter name**"
                this.showError("name", msg)
                return false;
            }
            this.clearError("name")
            return true
        },
        checkEmail() {
            if (this.email === "") {
                const msg = "**Please enter email**"
                this.showError("email", msg)
                return false;
            } else if (this.email !== "") {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(this.email)) {
                    const msg = "**Please enter valid email**"
                    this.showError("email", msg)
                    return false;
                }
                this.clearError("email")
                return true;
            }
            this.clearError("email")
            return true;
        },
        checkPassword() {
            if (this.password === "") {
                const msg = "**Please enter password**"
                this.showError("password", msg)
                return false;
            } else if (this.password !== "") {
                const passRegex = /^(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,12}$/;
                if (!passRegex.test(this.password)) {
                    const msg = "**Password must be 8-12 characters, 1 number, 1 special character**"
                    this.showError("password", msg)
                    return false;
                }
                this.clearError("password")
                return true
            }
            this.clearError("password")
            return true
        },
        checkConfirmPassword() {
            if (this.confirmPassword === "") {
                const msg = "**Please enter the password again to confirm**"
                this.showError("confirmPassword", msg)
                return false;
            } else if (this.confirmPassword !== "") {
                if (this.password !== this.confirmPassword) {
                    const msg = "**Confirm Password does not match the Password field**"
                    this.showError("confirmPassword", msg)
                    return false;
                }
                this.clearError("confirmPassword")
                return true;
            }
            this.clearError("confirmPassword")
            return true;
        },
        checkRole() {
            if (this.role === "") {
                const msg = "**Please choose your role**"
                this.showError("role", msg)
                return false;
            }
            this.clearError("role")
            return true;
        },
        checkGender() {
            if (this.gender === "") {
                const msg = "**Please choose your gender**"
                this.showError("gender", msg)
                return false;
            }
            this.clearError("gender")
            return true
        },
        checkAge() {
            if (this.age === "") {
                const msg = "**Please enter your age**"
                this.showError("age", msg)
                return false;
            } else if (this.age !== "") {
                const age = this.age
                if (typeof this.age != 'number' || age.toString().includes(".")) {
                    const msg = "**Age should be whole number**"
                    this.showError("age", msg)
                    return false
                } else if (this.age < 18 || this.age > 100) {
                    const msg = "**Age should be between 18-100**"
                    this.showError("age", msg)
                    return false
                }
                this.clearError("age")
                return true
            }
            this.clearError("age")
            return true
        },
        checkDOB() {
            if ((this.dob).length == 0) {
                const msg = "**Please choose your Date of Birth**"
                this.showError("dob", msg)
                return false;
            }
            this.clearError("dob")
            return true;
        },
        showError(error, msg) {
            this[`error_msg_${error}`] = msg;
            this.$refs[error].focus();
        },
        clearError(error) {
            this[`error_msg_${error}`] = "";
        },
    }
}