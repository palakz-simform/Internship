const urlPageTitle = "JS SPA Routing"

document.addEventListener("click",(e)=>{
    
    const {target} = e;
    
    if(!target.matches("nav a")){
        return;
    }
    e.preventDefault();
    urlRoute();
})

//maps url to templates
const urlRoutes ={
    404:{
        template:"/templates/404.html",
        title:"404 | " + urlPageTitle,
        description:"Page not found"
    },
    "/":{
        template:"/templates/index.html",
        title:"Home | " + urlPageTitle,
        description:"This is Home Page"
    },
    "/about":{
        template:"/templates/about.html",
        title:"About | " + urlPageTitle,
        description:"This is About Page"
    },
    "/contact":{
        template:"/templates/contact.html",
        title:"Contact | " + urlPageTitle,
        description:"This is Contact Page"
    }
}

const urlRoute = (event) => {
    
    event = event || window.event;
    //console.log(event);
    event.preventDefault();
    window.history.pushState({},"",event.target.href)
    urlLocationHandler();


}
const urlLocationHandler = async () =>{
    
    const location = window.location.pathname
    
    if(location.length == 0){
        location="/"
    }

    //pull url route
    const route = urlRoutes[location] || urlRoutes[404];
    const html = await fetch(route.template).then((response)=>
    response.text()
    
    );
    
    document.getElementById("content").innerHTML = html;
    document.title = route.title;
    document
    .querySelector(`meta[name="description"]`)
    .setAttribute("content",route.description);

};

window.onpopstate = urlLocationHandler;
//window.route = urlRoute;
urlLocationHandler();

//https://youtu.be/JmSb1VFoP7w

//https://github.com/palakz-simform/JavaScript