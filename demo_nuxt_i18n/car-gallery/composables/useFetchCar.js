export default async (id) => {

    const { data } = await useFetch(`/api/car/${id}`)
    // if (error.value) {
    //     throw createError({
    //         statusCode: 404,
    //         statusMessage: `Car not Found with id ${id}`,
    //     })
    // }
    return data
}