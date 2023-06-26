export default defineEventHandler((event) => {

    const { name } = useQuery(event)
    console.log(name)
    return {
        message: `Hello, ${name}`
    }
})