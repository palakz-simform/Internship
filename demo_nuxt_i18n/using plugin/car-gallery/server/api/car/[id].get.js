
export default defineEventHandler(async (event) => {
    const { id } = event.context.params
    const response = await fetch(`https://testapi.io/api/dartya/resource/cardata/${id}`)
    const cardata = await response.json()
    return cardata
})