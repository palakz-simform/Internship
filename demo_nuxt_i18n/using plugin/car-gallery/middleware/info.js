import { useCarStore } from "../stores/car"
const carStore = useCarStore()
export default defineNuxtRouteMiddleware(async (to, from) => {
    console.log("info")
    const cars = await useFetchCars()
    const carDetailData = cars.value.data.find(data => data.id == to.params.id)
    if (!carDetailData) {
        throw createError({
            statusCode: 404,
            statusMessage: `Car Not Found with id ${to.params.id}`,
            fatal: true
        })
    }


})