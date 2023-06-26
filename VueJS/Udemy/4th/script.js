let vm = Vue.createApp({
    // data(){
    //     return{
    //         message:"Hello world"
    //     }
    // },
    // template: `{{message}}`
    // beforeCreate(){
    //     alert("beforeCreated")
    //     console.log("beforeCreate() function called",this.message)
    // },
    // created(){
    //     alert("created")
    //     console.log("created() function called",this.message)
    // },
    // beforeMount(){
    //     alert("beforemounted")
    //     console.log("beforeMount() function called",this.$el)
    // },
    // mounted(){
    //     alert("mounted")
    //     console.log("mounted() function called",this.$el)
    // },
    // beforeUpdate(){
    //     alert("beforeUpdate")
    //     console.log("beforeUpdate() function called")
    // },
    // updated(){
    //     alert("updated")
    //     console.log("updated() function called")
    // },
    // beforeUnmount(){
    //     alert("beforeUnmount()")
    //     console.log("beforeUnmount() function called")
    // },
    // unmounted(){
    //     alert("unmounted()")
    //     console.log("unmounted() function called")
    // }
     

})
vm.component("hello",{        
    template: `<h1>{{message}}</h1>` ,
    data(){
        return{
            message:"Helloo from component"
        }       
    }  
})
vm.mount("#app")