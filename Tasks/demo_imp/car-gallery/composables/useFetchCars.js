export default async () => {
    const { data } = await useFetch(`/api/car`)
    return data
}