<template>
<!-- Card of each car -->
<div class="card">
    <div class="heading">
        <h1>{{ name }}</h1>
    </div>
    <div class="image">
        <img :src="image" />
    </div>
    <div class="description">
        <p>{{ description }}</p>
    </div>
    <div class="btn">
        <button class="edit" @click="showeditform()"><i class="fa-solid fa-pen"></i></button>
        <button class="button" @click="getPrice" title="Get Price" :disabled="hasPrice">
            {{ price!=0 ? "Info" : "Available Soon" }}
        </button>
        <button class="delete" @click="deleteData()"><i class="fa-sharp fa-solid fa-trash"></i></button>
    </div>
</div>
</template>

<script>
export default {
    name: "gallery_card",
    props: ["id", "name", "image", "formtype", "description", "price", "showModalEdit"],
    emit: ["get-Price-Info", 'edit-car', 'delete-car'],
    methods: {

        // Emitting event to pass the price to the parent component
        getPrice() {
            this.$emit("get-Price-Info", this.price);
        },

        // Function to get a particular car data 
        getCarData() {
            return {
                id: this.id,
                name: this.name,
                image: this.image,
                description: this.description,
                price: this.price,
                title: "Edit Car"
            }
        },
        // On clicking edit button emit event 'edit-car'
        showeditform() {
            const cardata = this.getCarData()
            this.$emit('edit-car', cardata)
        },
        // On clicking delete button emit event 'delete-car'
        deleteData() {
            const cardata = this.getCarData()
            this.$emit('delete-car', cardata)
        }

    },

    computed: {
        // check if the car has price, if not return false and dissable the button
        hasPrice() {
            if (this.price == 0) {
                return true;
            } else {
                return false;
            }
        },
    },
};
</script>

<style scoped>
.card {
    width: 350px;
    margin: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background-color: rgb(216, 215, 214);
}

.card:hover {
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
    height: 80px;
    width: 350px;
    text-align: center;
    overflow: hidden;
}

button:disabled,
button[disabled] {
    cursor: not-allowed;
}

.btn {
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

.button {
    width: 150px;
    height: 34px;
    background-color: rgb(44, 44, 44);
    color: wheat;
    font-weight: bolder;
    border-radius: 10px;
    cursor: pointer;
}

.button:hover,
.edit:hover,
.delete:hover {
    background-color: transparent;
    color: rgb(44, 44, 44);
    font-weight: bolder;
    border: 3px solid rgb(44, 44, 44);
}

@media (max-width: 1155px) {
    .card {
        width: 300px;
        margin: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        background-color: rgb(216, 215, 214);
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

    .btn {
        width: 300px;
        height: 50px;
    }

    .button {
        width: 100px;
        height: 34px;
        background-color: rgb(44, 44, 44);
        color: wheat;
        font-weight: bolder;
        border-radius: 10px;
    }
}

@media (max-width: 670px) {
    .card {
        margin: 5px;
        width: 175px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        background-color: rgb(216, 215, 214);
    }

    .heading {
        height: 25px;
        font-size: 8px;
    }

    .heading h1 {
        padding-top: 4px;
    }

    .image {
        width: 175px;
        height: 100px;
    }

    img {
        width: 175px;
        height: 100px;
    }

    .description p {
        padding: 6px;
        font-size: 12px;
    }

    .description {
        height: 120px;
        width: 175px;
        text-align: center;
    }

    .btn {
        width: 175px;
        height: 50px;
    }

    .button {
        width: 70px;
        height: 35px;
        background-color: rgb(44, 44, 44);
        color: wheat;
        font-weight: bolder;
        border-radius: 8px;
    }
}
</style>
