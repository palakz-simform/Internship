<template>
    <div class="home">
        <ClientOnly>
            <!-- Add Car Button -->
            <div class="add-car-button">
                <button class="button" @click="carStore.addCar">{{ $t('addCar') }}</button>
            </div>

            <!-- Style applied when Add/Edit form is displayed -->
            <transition name="fade">
                <div class="modal-overlay" v-if="carStore.showModal"></div>
            </transition>

            <!-- Add/Edit Car Component -->
            <transition name="car-form">
                <CarForm v-if="carStore.showModal"></CarForm>
            </transition>

            <!-- gallery-card.vue component -->
            <div class="car-content">
                <div class="car-card">
                    <transition-group class="car-card" name="car-card" @before-enter="beforeEnter" @enter="enter"
                        @before-leave="beforeLeave" @leave="leave" appear>
                        <div v-for="(item, index) in carStore.carCardInfo" :key="item.id" :data-index="index">
                            <GalleryCard :id="item.id" :name="item.name" :image="item.image" :description="item.details"
                                :price="item.price" />
                        </div>
                    </transition-group>
                </div>

            </div>
            <template #fallback>
                <div style="background-color: white;">Loading</div>
            </template>
        </ClientOnly>
    </div>
</template>

<script setup>
import { useCarStore } from "../stores/car";
import gsap from 'gsap'
import { onMounted } from "vue";
const carStore = useCarStore()

definePageMeta({
    middleware: ['auth']
})
useHead({
    script: [
        { src: "https://kit.fontawesome.com/0c8946a054.js" }
    ],
    title: 'Car Gallery',
    meta: [
        {
            name: 'description',
            content: 'This is the home page of car gallery',
        }
    ]
});
const mounted = ref(true)
onMounted(async () => {
    mounted.value = false
    carStore.getData()

})

function beforeEnter(el) {
    el.style.opacity = 0;
    el.style.transform = 'translateY(100px)'
}
function enter(el, done) {
    gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        onComplete: done,
        delay: el.dataset.index * 0.1
    })
}
function beforeLeave(el) {
    el.style.opacity = 1
}
function leave(el, done) {
    gsap.to(el, {
        opacity: 0,
        x: -250,
        scaleY: 0.01,
        duration: 0.3,
        onComplete: done
    })
}

</script>
<style scoped>
.loader {
    margin: 0 auto;
    margin-top: 200px;
    border: 8px solid #f3f3f3;
    border-radius: 50%;
    border-top: 8px solid rgb(35, 177, 172);
    width: 60px;
    height: 60px;
    -webkit-animation: spin 2s linear infinite;
    /* Safari */
    animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.car-card-enter-from {
    opacity: 0;
    transform: translateY(100px)
}

.car-card-leave-to {
    opacity: 0;
    transform: translatey(-100px);
}

.car-card-leave-active {
    transition: all 0.3s ease-in;
}

.home {
    margin-bottom: 190px;
}

.car-content {
    display: flex;
    justify-content: center;
}

.car-card {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 45px;
}

.add-car-button {
    display: flex;
    justify-content: flex-end;
    padding: 20px;
    margin-right: 30px;

}

button {
    width: 100px;
    height: 35px;
    background-color: rgb(35, 177, 172);
    color: rgb(0, 0, 0);
    font-weight: bold;
    border: none;
    border-radius: 10px;
    font-size: 17px;
}

button:hover {
    background-color: transparent;
    color: rgb(35, 177, 172);
    border: 3px solid rgb(35, 177, 172);
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

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease !important;
}

.car-card-leave-active {
    transition: all 0.5s ease;
    position: absolute;
}

.car-card-move {
    transition: all 0.5s ease;
}

.car-form-enter-active {
    animation: pop 0.5s;
}

.car-form-leave-active {
    animation: pop 0.5s reverse;
}

@keyframes pop {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1);
    }
}

@media (max-width: 1880px) {
    .car-card {
        display: grid;
        grid-template-columns: auto auto auto auto;
        gap: 35px;
    }
}

@media (max-width: 1640px) {
    .car-card {
        grid-template-columns: auto auto auto;
        gap: 40px;
    }
}

@media (max-width: 950px) {
    .car-card {
        grid-template-columns: auto auto;
        gap: 60px;
    }

    .add-car-button {
        margin-right: 0px;
    }
}

@media (max-width:675px) {
    .car-card {
        grid-template-columns: auto auto;
        gap: 40px;
    }

}

@media (max-width:550px) {
    .car-card {
        gap: 15px;
    }
}

@media (max-width:400px) {
    .car-card {
        gap: 10px;
    }
}
</style>
