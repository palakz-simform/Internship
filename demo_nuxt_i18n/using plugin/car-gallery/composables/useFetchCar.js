export default async (id) => {

    const { data } = await useFetch(`/api/car/${id}`)
    return data
}