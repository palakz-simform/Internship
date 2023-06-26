const vm = Vue.createApp({
    data(){
        return{
            firstName:"John",
            lastName : "Doe",
            middleName: "",
            // Binding Attributes
            url : "https://google.com",

            //Outputting raw HTML
            raw_url:"<a href='https://google.com' target='_blank'>Google</a>",
            age:20,

            // Binding class 
            ispurple:false,
                // Binding Class
            selectedColor: '',
            size:150,
            mode:1,
            // List rendering 
            birds:['Pigeon','Eagles','Doves','Parrots'],
            people:[
                {
                    name:"abc",
                    age:30
                },
                {
                    name:"def",
                    age:31
                },
                {
                    name:"ghi",
                    age:33
                }
            ]

        }
    },
    methods:{
        fullName(){
      
            return   `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        },

        // Listening to events
        increament(){
            this.age++
        },
        //refer forms
        updateLastName(msg,event){
           
          //  console.log(msg)
            this.lastName = event.target.value
        },
        updateMiddleName(event){
            this.middleName = event.target.value
        },

    

     
    },
    // Computed
    computed:{
        fullName2(){
            console.log("Full name 2 called")
            this.age
            return   `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        },
        circle_classes(){
            return {purple: this.ispurple}
        }
    },
    //Watchers
    watch: {
        age(newVal, oldVal){
            setTimeout(()=>{
                this.age = 20
            },3000)
        }
    },

 
}).mount("#app") 

// setTimeout(()=>{
//     vm.firstName = 'Bob';
// },2000)