const pageTitle = "JS SPA Routing"
const routes ={
    404:{
        template:"./templates/404.html",
        title:"404 | " + pageTitle,
        description:"Page not found"
    },
    "/":{
        template:"./templates/index.html",
        title:"Home | " + pageTitle,
        description:"This is Home Page"
    },
    about:{
        template:"./templates/about.html",
        title:"About | " + pageTitle,
        description:"This is About Page"
    },
    contact:{
        template:"./templates/contact.html",
        title:"Contact | " + pageTitle,
        description:"This is Contact Page"
    }
};

const locationHandler = async () =>{
    
    var location = window.location.hash.replace("#","");
    
    if(location.length == 0){
        location="/"
    }

    //pull url route
    const route = routes[location] || routes[404];
    const html = await fetch(route.template).then((response)=>
    response.text()
    
    );
    
    document.getElementById("content").innerHTML = html;
    document.title = route.title;
    document
    .querySelector(`meta[name="description"]`)
    .setAttribute("content",route.description);

};

window.addEventListener("hashchange",locationHandler)
locationHandler();