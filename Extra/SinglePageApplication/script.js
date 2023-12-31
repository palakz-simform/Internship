const route = (event) => {
    event = event || window.event;
    event.presentDefault();
    window.history.pushState({},"",event.target.href);
    handleLocation();
};

const routes = {
    404: "/404.html",
    "/": "/index.html",
    "/about": "/about.html",
    "/images": "/images.html",
    "/services": "/services",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data)=>data.text());
    document.getElementById("main-page").innerhtml = html;
};
window.onpopstate = handleLocation;
window.route = route;
handleLocation();
