<template>
<div class="title">
    <h1>Car Gallery</h1>
    <hr>
</div>

<div class="car-card">
    <div v-for="item in cars_info" :key="item.id">
        <gallery_card :data="item" />
    </div>

</div>
</template>

<script>
import gallery_card from "./components/gallery-card.vue"

export default {
    name: "App",
    components: {
        gallery_card,

    },
    data() {
        return {
            cars_info: [{
                    id: 1,
                    name: "Maruti Suzuki Wagon R",
                    image: require("./assets/images/1Maruti.jpg"),
                    desc: "This is the first major update for the Wagon R since this generation was launched in 2019 and sees it get cosmetic updates as well as new engine options. Like we've said earlier",
                    price: "Rs. 3.54 Lakhs"
                },
                {
                    id: 2,
                    name: "BMW 5 Series",
                    image: require("./assets/images/2BMW.jpg"),
                    desc: "Under the hood, the updated BMW 5 Series is offered with a 2.0-litre, four-cylinder petrol engine in the 520d M Sport guise. This engine produces 248bhp and 350Nm of torque. ",
                    price: "Rs. 64.49 Lakhs"
                },
                {
                    id: 3,
                    name: "Audi Q8",
                    image: require("./assets/images/3Audi.jpg"),
                    desc: "If you want an SUV that stands out, drives well, and will never be common place (given its steep pricing), the Q8 is a great option. And not to mention, it is a comfortable option for four adults.",
                    price: "Rs.1.06 Crore"
                },
                {
                    id: 4,
                    name: "Nissan GT-R",
                    image: require("./assets/images/4Ngtr.jpg"),
                    desc: "The Godzilla has finally arrived on the Indian shores. The beast in question is the Nissan GT-R, the Japanese car makers flagship supercar. The GT-R was born to be an everyday supercar ",
                    price: "Rs. 2.12 Crore"
                },
                {
                    id: 5,
                    name: "Toyota Fortuner",
                    image: require("./assets/images/5Toyota.jpg"),
                    desc: "This Toyota Fortuner Legender model isn't a world apart from the standard version, and yet gets a more premium looking face and more features on the inside...",
                    price: "Rs. 36.06 Lakhs"
                },
                {
                    id: 6,
                    name: "Toyota Innova Crystal",
                    image: require("./assets/images/6innova.jpg"),
                    desc: "The Toyota Innova Crysta needs no introduction in the country. It has done everything right that it set out to do, to such an extent that people swear by it. Be it a spacious and practical cabin...",
                    price: "Rs. 22.54 Lakhs"
                },
                {
                    id: 7,
                    name: "Maruti Swift",
                    image: require("./assets/images/7swift.jpg"),
                    desc: "What makes the Maruti Suzuki Swift such a fascinating proposition is that it's not only sporty to drive and look at, but also offers reasonable rear-seat space and equipment. ",
                    price: "Rs. 6.07 Lakhs"
                },
                {
                    id: 8,
                    name: "Maruti Ertiga",
                    image: require("./assets/images/8ertiga.jpg"),
                    desc: "The recently updated Ertiga gets a tweaked engine, new gearbox and newer features that put it in line with other Maruti models. It however continues with the well-accepted...",
                    price: "Rs. 8.35 Lakhs"
                },
                {
                    id: 9,
                    name: "Audi A3 Cabriolet",
                    image: require("./assets/images/9audi a3.jpg"),
                    desc: "If the sight of a convertible ever tugged at your heart, then the Audi A3 Cabriolet is one that can easily lure you, especially in that lip-smacking shade Audi calls ‘Vegas Yellow’. ",
                    price: "Rs. 32.22 Lakhs"
                },
                {
                    id: 10,
                    name: "Nissan Sunny",
                    image: require("./assets/images/10Sunny.jpg"),
                    desc: "The Nissan Sunny is a no-nonsense C-segment sedan that offers a spacious rear seat and a large boot to accommodate plenty of luggage. While it could have done with an improved features list...",
                    price: "Rs. 7.07 Lakhs"
                },
                {
                    id: 11,
                    name: "Honda City",
                    image: require("./assets/images/11Hondacity.jpg"),
                    desc: "The current model of the Honda City, which was introduced in 2020, features a sporty and modern exterior design with a sleek front grille, LED headlights, and sharp lines. It is available... ",
                    price: "Rs. 5.64 Lakhs"
                },

                {
                    id: 12,
                    name: "Hyundai Verna",
                    image: require("./assets/images/12Verna.jpg"),
                    desc: "The current model of the Hyundai Verna, which was introduced in 2020, features a modern and sporty exterior design with a bold front grille, LED headlights, and sharp lines. ",
                    price: "Rs. 7.87 Lakhs"
                },

            ]
        }
    }
}
</script>
   
<style>
.car-card {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.title {
    text-align: center;
}

hr {
    width: 8%;
    border: 5px solid brown;
    border-radius: 5px;
}

.title h1 {
    color: black;
    font-size: 40px;
    text-shadow: 0 0 3px gray;
}

@media (max-width: 800px) {
    .car-card {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
}
</style>
