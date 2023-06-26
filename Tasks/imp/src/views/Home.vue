<template>

<!-- Add Car Button -->
<div class="add-car-button">
    <button class="button" @click="addCar()">Add Car</button>
</div>

<!-- Style applied when Add/Edit form is displayed -->
<div class="modal-overlay" v-if="showModal "></div>

<!-- Add/Edit Car Component -->
<div class="modal" v-if="showModal">
    <carform :title="title" :addForm="addForm" :editForm="editForm" :showModal="showModal" @show-model="showModalx" @display-data="setdata" :carData="carData" @edit-data="editCarData"></carform>
</div>

<!-- gallery-card.vue component -->
<div class="car-card">
    <div v-for="item in cars_info" :key="item.id">
        <gallery_card :id="item.id" :name="item.name" :image="item.image" :description="item.details" :price="item.price" @get-Price-Info="getPrice" @edit-car="getCar" @delete-car="deleteCar" />
    </div>
</div>
</template>

<script>

import carform from "@/components/car-form.vue";
import gallery_card from "@/components/gallery-card.vue";
import axios from 'axios'
export default {
    name: "HomePage",
    mounted() {
        this.getData()

    },
    components: {      
        carform,        
        gallery_card
    },
    data() {
        return {
            showModal: false,
            title: "",
            addForm: false,
            editForm: false,
            carData: {},
            cars_info: [],
        };
    },
    methods: {
        // fetching data
        getData() {
            axios.get("https://testapi.io/api/dartya/resource/cardata").then((response) => {
                this.cars_info = response.data.data
            })
        },

        // Display Add Car form
        addCar() {
            this.showModal = true,
                this.title = 'Add Car',
                this.addForm = true
        },

        // get price of the car
        getPrice(price) {
            alert("Price is : Rs. " + price);
        },

        // Close form when 'x' button is clicked on the form
        showModalx() {
            this.showModal = false;
        },

        // Add Car data
        setdata(formdata) {
            this.showModal = false;
            const id = this.cars_info.length + 1;
            axios.post('https://testapi.io/api/dartya/resource/cardata/', {
                    id: id,
                    name: formdata.name,
                    image: formdata.image,
                    details: formdata.description,
                    price: formdata.price
                }).then(() => {
                    this.getData(),
                        this.addForm = false
                })
                .catch(error => {
                    alert("Error : " + error)
                });
        },

        // Show car data
        getCar(cardata) {
            this.showModal = true
            this.editForm = true
            this.carData = cardata;
            this.title = cardata.title;

        },

        // Edit Car Data
        editCarData(data) {
            this.showModal = false;
            console.log(data.id)
            axios.put('https://testapi.io/api/dartya/resource/cardata/' + data.id, {
                id: data.id,
                name: data.name,
                image: data.image,
                details: data.description,
                price: data.price
            }).then(() => {
                this.editForm = false
                this.getData()
            }).catch(error => {
                alert("Error : " + error)
            });

        },

        // Delete Car Data
        deleteCar(data) {
            if (confirm("Do you want to delete this car data ?") == true) {
                axios.delete('https://testapi.io/api/dartya/resource/cardata/' + data.id).then(() => {
                    this.getData()
                    alert("Car : " + data.name + " deleted successuflly!")
                }).catch(error => {
                    alert("Error : " + error)
                })
            }
        }
    },

};
</script>


<style scoped>
.car-card {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.add-car-button {
    display: flex;
    justify-content: end;
    padding: 20px;
}

button {
    width: 100px;
    height: 35px;
    background-color: brown;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    font-size: 15px;
}

button:hover {
    background-color: transparent;
    color: brown;
    border: 3px solid brown;
}

.modal-overlay {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.6);
}

.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 100%;
    max-width: 400px;
    background-color: #fff;
    border-radius: 5px;
    height: 600px;
}

@media (max-width: 800px) {
    .car-card {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
}
</style>
