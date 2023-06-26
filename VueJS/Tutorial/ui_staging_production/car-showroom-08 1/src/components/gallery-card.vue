<template>
    <!-- Card of each car -->
    <div class="card-car">
        <div class="heading">
            <h1>{{ name }}</h1>
        </div>
        <div class="image">
            <img :src="image" alt="car-image" />
        </div>
        <div class="description">
            <p>{{ description }}</p>
        </div>
        <div class="btn-car">
            <button class="edit" @click="showeditform()">
                <i class="fa-solid fa-pen"></i>
            </button>
            <RouterLink :to="{ name: 'carDetail', params: { id: id } }"><button class="button-info"
                    :id="this.id">Info</button></RouterLink>
            <button class="delete" @click="deleteData()">
                <i class="fa-sharp fa-solid fa-trash"></i>
            </button>
        </div>
    </div>
</template>

<script>
import { mapActions } from "pinia";
import { RouterLink } from "vue-router";
import { useCarStore } from "../stores/car";
export default {
    name: "gallery_card",
    props: [
        "id",
        "name",
        "image",
        "formtype",
        "description",
        "price",
        "showModalEdit",
    ],
    methods: {
        ...mapActions(useCarStore, ["showEdit", "deleteCar"]),
        // Function to get a particular car data
        getCarData() {
            return {
                id: this.id,
                name: this.name,
                image: this.image,
                description: this.description,
                price: this.price,
                title: "Edit Car",
            };
        },
        // On clicking edit button emit event 'edit-car'
        showeditform() {
            const getData = this.getCarData();
            this.showEdit(getData);
        },
        // On clicking delete button emit event 'delete-car'
        deleteData() {
            const cardata = this.getCarData();
            this.deleteCar(cardata);
        },
    },


};
</script>

<style scoped>
.card-car {
    width: 350px;
    margin: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background-color: rgb(216, 215, 214);
}

.card-car:hover {
    transform: scale(0.95);
    transition: 0.25s;
}

.heading h1 {
    padding-top: 8px;
    margin-top: 0px;
    margin-bottom: 0px;
}

.heading {
    height: 50px;
    text-align: center;
    background-color: rgb(44, 44, 44);
    color: wheat;
    overflow: hidden;
}

.heading h1:hover {
    color: wheat;
}

.image {
    width: 350px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
}

img {
    width: 350px;
    height: 200px;
}

.description p {
    font-weight: bold;
    line-height: 20px;
    padding: 4px;
}

.description {
    height: 100px;
    width: 350px;
    text-align: center;
    overflow: hidden;
}

button:disabled,
button[disabled] {
    cursor: not-allowed;
}

.btn-car {
    width: 350px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.edit,
.delete {
    width: 55px;
    height: 34px;
    margin-left: 10px;
    margin-right: 10px;
    background-color: rgb(44, 44, 44);
    color: wheat;
    font-weight: bolder;
    border-radius: 10px;
    cursor: pointer;
}

.button-info {
    width: 150px;
    height: 34px;
    background-color: rgb(44, 44, 44);
    color: wheat;
    font-weight: bolder;
    border-radius: 10px;
    cursor: pointer;
}

.button-info:hover,
.edit:hover,
.delete:hover {
    background-color: transparent;
    color: rgb(44, 44, 44);
    font-weight: bolder;
    border: 3px solid rgb(44, 44, 44);
}

@media (max-width: 1155px) {
    .card-car {
        width: 300px;
    }

    .heading {
        height: 40px;
        font-size: 10px;
    }

    .image {
        width: 300px;
        height: 175px;
    }

    img {
        width: 300px;
        height: 175px;
    }

    .description p {
        padding: 6px;
    }

    .description {
        height: 120px;
        width: 300px;
        text-align: center;
    }

    .btn-car {
        width: 300px;
    }
}

@media (max-width: 670px) {
    .card-car {
        margin: 5px;
        width: 160px;
    }

    .heading {
        height: 25px;
        font-size: 8px;
    }

    .heading h1 {
        padding-top: 4px;
    }

    .image {
        width: 160px;
        height: 100px;
    }

    img {
        width: 160px;
        height: 100px;
    }

    .description p {
        font-size: 12px;
    }

    .description {
        width: 150px;
        text-align: center;
    }

    .btn-car {
        width: 160px;
    }

    .button-info {
        width: 50px;
        height: 35px;
    }
}
</style>
