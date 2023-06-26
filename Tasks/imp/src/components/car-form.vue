<template>
<!-- Car Form for Edit and Add Car -->
<div class="heading">
    <h1>{{ title }}</h1>
    <!-- Button to click when the user wants to close the form -->
    <button class="button" @click="showModalx">x</button>
</div>
<!-- Car Add/Edit Form -->
<div class="form">
    <div class="row">
        <label>Name:</label>
        <input type="text" v-model="form.name" ref="name">
        <div v-show="error_name">
            <p class="error">{{error_msg }}</p>
        </div>
    </div>
    <div class="row">
        <label>Image:</label>
        <input type="url" v-model="form.image" ref="image">
        <div v-if="error_image">
            <p class="error">{{ error_msg }}</p>
        </div>
    </div>
    <div class="row">
        <label>Description:</label>
        <textarea v-model="form.description" ref="description"></textarea>
        <div v-if="error_description">
            <p class="error">{{ error_msg }}</p>
        </div>
    </div>
    <div class="row">
        <label>Price:</label>
        <input type="number" v-model="form.price" ref="price" onkeydown="return (event.keyCode !== 107 && event.keyCode !== 109 && event.keyCode !== 69);">
        <!-- Prevent the user from pressing key : +,-,e -->
        <div v-if="error_price">
            <p class="error">{{ error_msg }}</p>
        </div>
    </div>
    <button @click="submit" class="submit">{{ addForm===true?'Submit':'Edit' }}</button>
</div>
</template>

<script>
export default {
    name: "car-form",
    props: ["showModal", "title", "carData", "addForm", "editForm"],
    emits: ['show-model', 'display-data', 'edit-data'],
    methods: {
        showModalx() {
            this.$emit("show-model")
        },
        submit() {
            // Form validation
            this.error = []
            this.error_name = false,
                this.error_image = false,
                this.error_description = false,
                this.error_price = false

            // Checking that name is not empty and is a string
            if (this.form.name === "" || typeof this.form.name != 'string') {
                this.error_name = true
                this.error_msg = "**Please enter name**";
                this.$refs.name.focus()
                return false
            }
            // Checking that image is not empty 
            if (this.form.image === "") {
                this.error_image = true;
                this.error_msg = "**Please enter image URL**";
                this.$refs.image.focus()
                return false

            }

            // If image is not empty, checking that the input is an URL
            if (this.form.image != "") {
                const url = this.form.image;
                const regex = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i;
                if (!regex.test(url)) {
                    this.error_image = true;
                    this.error_msg = "**Please enter valid image URL**";
                    this.$refs.image.focus()
                    return false
                }
            }

            // Checking that the description is not empty
            if (this.form.description === "") {
                this.error_description = true;
                this.error_msg = "**Please enter description**";
                this.$refs.description.focus()
                return false
            }
            // If the description is not empty, checking that the no. of characters is between 30-120
            else if (this.form.description.length < 30 || this.form.description.length > 120 || typeof this.form.description != 'string') {
                this.error_description = true;
                this.error_msg = "**Description must be 30-120 characters long**"
                this.$refs.description.focus()
                return false
            }
            // checking that the price is not empty
            if (this.form.price === "") {
                this.error_price = true;
                this.error_msg = "**Please enter price**"
                this.$refs.price.focus()
                return false
            }

            // Emit event 'display-data' when the form is Add Car
            if (this.addForm == true) {
                this.alertData()
                this.$emit("display-data", this.form)
            } 
            // Emit event 'edit-data' when the form is Add Car
            else if (this.editForm == true) {
                this.alertData()
                this.$emit("edit-data", this.form)
            }
        },
        // function to alert data after submitting the form
        alertData() {
            alert((this.addForm == true ? 'Created' : 'Edited') + ' data: \n\nName: ' + this.form.name + '\n\nImage:' + this.form.image + '\n\nDescription :' + this.form.description + '\n\nPrice Rs.:' + this.form.price)
        }
    },
    data() {
        // set this data when form is Add Car Data
        if (this.addForm == true) {
            return {
                error_name: false,
                error_image: false,
                error_description: false,
                error_price: false,
                error_msg: "",
                form: {
                    name: '',
                    image: '',
                    description: '',
                    price: ''
                },
            }
        }
        // Set this data when the form is Edit Car Data
        else if (this.editForm == true) {
            return {
                error_name: false,
                error_image: false,
                error_description: false,
                error_price: false,
                error_msg: "",
                form: {
                    id: this.carData.id,
                    name: this.carData.name,
                    image: this.carData.image,
                    description: this.carData.description,
                    price: this.carData.price
                },
            }
        }

    }
};
</script>

<style scoped>
h1 {
    text-align: center;
    color: brown
}

div.row {
    height: 80px;
    margin-top: 0px;
}

.heading {
    display: flex;
    justify-content: space-between;
    padding: 1px 10px 5px 150px;
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
}

.error {
    color: red;
    padding-left: 40px;
    margin-top: 2px;
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
    ;
}

textarea:focus,
input:focus {
    outline: none !important;
    border-color: brown;
    box-shadow: 0 0 10px rgb(196, 105, 105);
}

.submit {
    width: 100px;
    height: 35px;
    background-color: brown;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    font-size: 15px;
    margin-top: 25px;
    margin-left: 140px;

}

.submit:hover {
    background-color: transparent;
    color: brown;
    border: 3px solid brown;
}
</style>
