import { defineStore } from 'pinia'

// useNuxtApp().$axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
let headers = ""
if (process.client) {
    headers = {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
}

export const useCarStore = defineStore('car', {
    state: () => {
        return {
            cars_info: [],
            showModal: false,
            addForm: false,
            editForm: false,
            cardata: {},
            title: "",
            carDetail: {}
        }
    },
    getters: {
        carCardInfo(state) {
            return state.cars_info
        },
        carDetailInfo(state) {
            return state.carDetail
        }
    },
    actions: {
        // fetching data
        async getData() {
            // const data = await useFetchCars()
            // console.log(data.value.data)
            // this.cars_info = data.value.data

            useNuxtApp().$axios.get("https://testapi.io/api/dartya/resource/cardata",
                { headers }).then((response) => {
                    this.cars_info = response.data.data
                })
        },
        addCar() {
            this.showModal = true
            this.title = 'Add Car'
            this.addForm = true
        },
        // Add Car data
        setdata(formdata) {
            this.showModal = false;
            useNuxtApp().$axios.post('https://testapi.io/api/dartya/resource/cardata/', {
                name: formdata.name,
                image: formdata.image,
                details: formdata.description,
                price: formdata.price
            }, { headers }).then((res) => {
                if (res.status === 201) {
                    this.getData()
                } else {
                    alert("Error!!")
                }
                this.addForm = false
            }).catch(error => {
                alert("Error : " + error)
            });
        },

        showEdit(data) {
            this.editForm = true;
            this.addForm = false;
            this.cardata = data;
            this.title = this.cardata.title;
            this.showModal = true;

        },
        //Edit Car Data
        editCarData(data) {
            this.showModal = false;
            useNuxtApp().$axios.put('https://testapi.io/api/dartya/resource/cardata/' + data.id, {
                name: data.name,
                image: data.image,
                details: data.description,
                price: data.price
            }, { headers }).then((res) => {
                if (res.status === 200) {
                    this.getData()
                } else {
                    alert("Error!!")
                }
                this.editForm = false

            }).catch(error => {
                alert("Error : " + error)
            });

        },
        //Delete Car
        deleteCar(data) {
            if (confirm("Do you want to delete this car data ?") == true) {
                useNuxtApp().$axios.delete('https://testapi.io/api/dartya/resource/cardata/' + data.id, { headers }).then((res) => {
                    if (res.status === 204) {
                        this.getData()
                        alert("Car : " + data.name + " deleted successuflly!")
                    } else {
                        alert("Error!!")
                    }
                }).catch(error => {
                    alert("Error : " + error)
                })
            }
        },
        getCarDetail(id) {
            useNuxtApp().$axios.get(`https://testapi.io/api/dartya/resource/cardata/${id}`, { headers }).then((response) => {
                this.carDetail = response.data
                console.log("in car")
            }).catch(() => {
                // navigateTo('/error')
                // const { error } = getContext(); // Get Nuxt context using getContext
                // throw error(createError(400, 'Item cannot be empty.'));
            })
        },

    }
})