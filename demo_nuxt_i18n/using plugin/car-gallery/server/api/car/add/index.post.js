import axios from "axios"
export default defineEventHandler(async (event) => {
    console.log(event)
    const body = await readBody(event)
    console.log(body)
    const response = await axios.post('https://testapi.io/api/dartya/resource/cardata/',
        body
    )
    console.log(response.status)
    if (response.status == 201) {
        return true
    }
    else {
        return false
    }

})