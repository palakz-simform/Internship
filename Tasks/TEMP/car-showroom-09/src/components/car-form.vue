<template>
    <!-- Car Form for Edit and Add Car -->
    <div class="form-add-edit-car">
        <div class="modal">
            <div class="heading">
                <h1>{{ title }}</h1>
                <!-- Button to click when the user wants to close the form -->
                <button class="button" @click="showModalx">x</button>
            </div>
            <!-- Car Add/Edit Form -->
            <div class="form">
                <div class="row">
                    <label>Name:</label>
                    <input type="text" v-model="form.name" ref="name" @input="checkName">
                    <div v-show="error_msg_name" class="error">{{ error_msg_name }}</div>
                </div>
                <div class="row">
                    <label>Image:</label>
                    <input type="url" v-model="form.image" ref="image" @input="checkImage">
                    <div v-show="error_msg_image" class="error">{{ error_msg_image }}</div>
                </div>
                <div class="row">
                    <label>Description:</label>
                    <textarea v-model="form.description" ref="description" @input="checkDescription"></textarea>
                    <div v-show="error_msg_description" class="error">{{ error_msg_description }}</div>
                </div>
                <div class="row">
                    <label>Price:</label>
                    <input type="number" v-model.number="form.price" ref="price"
                        onkeydown="return (event.keyCode !== 107 && event.keyCode !== 109 && event.keyCode !== 69);"
                        @input="checkPrice">
                    <!-- Prevent the user from pressing key : +,-,e -->
                    <div v-show="error_msg_price" class="error">{{ error_msg_price }}</div>
                </div>
                <button @click="submit" class="submit">{{ addForm === true ? 'Submit' : 'Edit' }}</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapWritableState } from 'pinia';
import { useCarStore } from '../stores/car';
export default {
    name: "car-form",
    props: ["carData"],
    emits: ['show-model'],
    computed: {
        ...mapWritableState(useCarStore, ['showModal', 'cardata', 'title', 'addForm', 'editForm']),
        form() {
            // set this data when form is Add Car Data        
            if (this.addForm == true) {
                return {
                    name: '',
                    image: '',
                    description: '',
                    price: ''
                }
            }
            // Set this data when the form is Edit Car Data
            else if (this.editForm == true) {
                return {
                    id: this.cardata.id,
                    name: this.cardata.name,
                    image: this.cardata.image,
                    description: this.cardata.description,
                    price: this.cardata.price
                }
            }
        }
    },
    data() {
        return {
            error_msg_name: "",
            error_msg_image: "",
            error_msg_description: "",
            error_msg_price: "",
        }
    },
    methods: {
        ...mapActions(useCarStore, ['setdata', 'editCarData']),
        showModalx() {
            this.showModal = false;
        },
        clearError(error) {
            this[`error_msg_${error}`] = "";
        },
        submit() {
            // Form validation  
            this.checkName(), this.checkImage(), this.checkDescription(), this.checkPrice()
            if (this.checkName() && this.checkImage() && this.checkDescription() && this.checkPrice()) {
                this.clearError()
                //  Execute if Add Car
                if (this.addForm == true) {
                    this.alertData()
                    this.setdata(this.form)
                }
                // Execute id Edit Car
                else if (this.editForm == true) {
                    this.alertData()
                    this.editCarData(this.form)
                }
            }
        },
        checkName() {
            // Checking that name is not empty and is a string
            if (this.form.name === "" || typeof this.form.name != 'string') {
                const msg = "**Please enter name**"
                this.showError("name", msg)
                return false
            }
            this.clearError("name")
            return true
        },
        checkImage() {
            this.clearError()
            // Checking that image is not empty 
            if (this.form.image === "") {
                const msg = "**Please enter image URL**"
                this.showError("image", msg)
                return false
            }
            // If image is not empty, checking that the input is an URL
            else if (this.form.image != "") {
                const url = this.form.image;
                const regex = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i;
                if (!regex.test(url)) {
                    const msg = "**Please enter valid image URL**"
                    this.showError("image", msg)
                    return false
                }
                this.clearError("image")
                return true
            }
            this.clearError("image")
            return true
        },
        checkDescription() {
            this.clearError()
            // Checking that the description is not empty
            if (this.form.description === "") {
                const msg = "**Please enter description**"
                this.showError("description", msg)
                return false
            }
            // If the description is not empty, checking that the no. of characters is between 30-120
            else if (this.form.description.length < 30 || this.form.description.length > 120 || typeof this.form.description != 'string') {
                const msg = "**Description must be 30-120 characters long**"
                this.showError("description", msg)
                return false
            }
            this.clearError("description")
            return true
        },
        checkPrice() {
            this.clearError()
            // checking that the price is not empty
            if (this.form.price === "") {
                const msg = "**Please enter price**"
                this.showError("price", msg)
                return false
            }
            this.clearError("price")
            return true
        },
        // function to alert data after submitting the form
        alertData() {
            alert((this.addForm == true ? 'Created' : 'Edited') + ' data: \n\nName: ' + this.form.name + '\n\nImage:' + this.form.image + '\n\nDescription :' + this.form.description + '\n\nPrice Rs.:' + this.form.price)
        },
        showError(error, msg) {
            this[`error_msg_${error}`] = msg;
            this.$refs[error].focus();
        }
    },

};
</script>

<style scoped>
div.modal {
    background-color: black;
    border: 1px solid rgb(35, 177, 172);
    border-radius: 15px;
    box-shadow: 8px 10px 5px 0 rgb(35, 177, 172, 0.7);
}

h1 {
    text-align: center;
    color: rgb(35, 177, 172)
}

button {
    color: white
}

div.row {
    height: 80px;
    margin-top: 0px;
}

.heading {
    display: flex;
    justify-content: space-between;
    padding: 1px 10px 5px 130px;
}

.button {
    height: 20px;
    margin-top: 10px;
    font-weight: bold;
    background-color: transparent;
    border: none;
    font-size: 18px;
}

label {
    padding-left: 40px;
    font-size: 18px;
    color: white
}

.error {
    color: rgb(220, 73, 73);
    padding-left: 40px;
    margin-top: 4px;
    margin-bottom: 0px;

}

.row {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    margin-top: 10px;
}

input,
textarea {
    margin-left: 40px;
    margin-top: 10px;
    margin-right: 40px;
    height: 28px;
    padding-left: 5px;
    background-color: black;
    border: 0px;
    border-bottom: 1px solid rgb(255, 255, 255, 0.5);
    color: white;
    font-size: 15px;

}

textarea {
    height: 23px;
    padding-top: 8px;
}

textarea:focus,
input:focus {
    outline: none !important;
    border: 0px;
    border-bottom: 1px;
    box-shadow: 0px 2px 0px rgb(255, 255, 255);
    opacity: 1;
}

.submit {
    width: 100px;
    height: 35px;
    background-color: rgb(35, 177, 172);
    color: rgb(0, 0, 0);
    font-weight: bold;
    border: none;
    border-radius: 10px;
    font-size: 15px;
    margin-top: 25px;
    margin-left: 140px;

}

.submit:hover {
    background-color: transparent;
    color: rgb(35, 177, 172);
    border: 3px solid rgb(35, 177, 172);
}

.modal {
    width: 100%;
    max-width: 400px;
    background-color: #fff;
    border-radius: 5px;
    height: 600px;

}

.form-add-edit-car {
    position: fixed;
    top: 15%;
    left: 0;
    right: 0;
    bottom: 10;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media (max-width: 400px) {
    .modal {
        max-width: 300px;
    }

    .heading {
        padding: 1px 10px 5px 90px;
    }

    .submit {
        margin-left: 100px;
    }
}
</style>
