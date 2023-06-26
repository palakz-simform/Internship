<template>
<div class="card">
    <div class="heading">
        <h1>{{data.name}}</h1>
    </div>
    <div class="image">
        <img :src="data.image">
    </div>
    <div class="description">
        <p>{{data.desc}}</p>
    </div>
    <div class="btn">
        <button class="button" v-on:click="getPrice" title="Get Price">Info</button>
    </div>
</div>
</template>

<script>
export default {
    name: "gallery_card",
    props: {
        data: Object
    },
    methods: {
        getPrice() {
            alert("Price of " + this.data.name + " is : " + this.data.price)
        }
    }
}
</script>           

<style scoped>
.card {

    width: 350px;
    margin: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background-color: rgb(216, 215, 214);

}

.card:hover {
    transform: scale(0.9);
    transition: 0.25s;
}

.heading h1 {
    padding-top: 8px;
    ;
}

.heading {
    height: 60px;
    text-align: center;
    background-color: rgb(44, 44, 44);
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
    padding: 4px;
}

.description {

    height: 80px;
    width: 350px;
    text-align: center;
}

.btn {

    width: 350px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

}

.button {

    width: 100px;
    height: 34px;
    background-color: rgb(44, 44, 44);
    color: wheat;
    font-weight: bolder;
    border-radius: 10px;

}

.button:hover {
    cursor: pointer;
    background-color: transparent;
    color: rgb(44, 44, 44);
    font-weight: bolder;
    border: 3px solid rgb(44, 44, 44)
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
        height: 30px;
        background-color: rgb(44, 44, 44);
        color: wheat;
        font-weight: bolder;
        border-radius: 8px;

    }
}
</style>
