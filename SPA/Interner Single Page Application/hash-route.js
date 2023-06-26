const pageTitle = "SPA"
const routes = {
    404:{
        template:"/404.html",
        title:"404 | " + pageTitle,
        description:"Page not found"
    },
    "/":{
        template:"/home.html",
        title:"Home | " + pageTitle,
        description:"This is Home Page"
    },
    about:{
        template:"/about.html",
        title:"About | " + pageTitle,
        description:"This is About Page"
    },
    images:{
        template:"/images.html",
        title:"Images | " + pageTitle,
        description:"This is Images Page"
    },
    services:{
        template:"/services.html",
        title:"Services | " + pageTitle,
        description:"This is Service Page"
    }
};

const locationHandler = async () => {
    var location = window.location.hash.replace("#","");
    if(location.length==0){
        location="/"
    }

    const route = routes[location] || routes[404];
    const html = await fetch(route.template).then((response)=>
    response.text()
    );
    document.getElementById("content").innerHTML = html;
    document.title = route.title;
   
    document
    .querySelector(`meta[name="description"]`)
    .setAttribute("content",route.description);
}
window.addEventListener("hashchange",locationHandler)
locationHandler();

// window.addEventListener("load",(e)=>{
//     if(e.target.location.hash=="#images"){
//       console.log()
//       slideshow(0)
//     }
//   });

flag=-1;
function controller(x) {
  flag = flag + x;
  slideshow(flag);
}


function slideshow(num) {
    console.log(num)
  let slides = document.getElementsByClassName("slide");
  console.log(slides)
  if (num == slides.length) {
    flag = 0;
    num = 0;
  }
  if (num < 0) {
    flag = slides.length - 1;
    num = slides.length - 1;
  }
  for (let y of slides) {
    console.log(y)
    y.style.display = "none";
  }
  slides[num].style.display = "block";
}
