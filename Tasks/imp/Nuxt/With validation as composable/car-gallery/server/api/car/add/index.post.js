let token = ""
if (process.client) {
    token = localStorage.getItem('token')
}

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        const response = await fetch('https://testapi.io/api/dartya/resource/cardata/', {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + token
            }
        });


        if (response.status === 201) {
            return true
        }
        else {
            return false
        }

    } catch (error) {
        console.error(error);
    }
});