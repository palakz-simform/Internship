import { createApp } from "vue";
import { createPinia } from "pinia";
import {auth} from "./includes/firebase"

import App from "./App.vue";
import router from "./router";
import VeeValidatePlugin from "./includes/validation";


import "./assets/base.css";
import "./assets/main.css";

let app;

auth.onAuthStateChanged(()=>{   //method provided by firebase Authentication that is used to listen for changes in the user authenticate state
  
    if(!app){
        app = createApp(App);
        app.use(createPinia());
        app.use(router);
        app.use(VeeValidatePlugin);
        
        app.mount("#app");
    }
    
    
})

