export default defineNuxtRouteMiddleware(async (to, from) => {
    const cars = await useFetchCars()
    const carDetailData = cars.value.data.find(data => data.id == to.params.id)
    if (!carDetailData) {
        return abortNavigation()
    }
})