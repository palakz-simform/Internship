export default defineEventHandler(async () => {
    const response = await fetch(`https://testapi.io/api/dartya/resource/cardata`)
    const cardata = await response.json()
    return cardata
})