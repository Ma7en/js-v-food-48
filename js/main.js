// =========================================
// start loader

let loaderContainer = document.querySelector(".loader-container");

function loader() {
    loaderContainer.classList.add("fade-out");
}

function fadeOut() {
    setInterval(loader, 3000);
}

window.addEventListener("load", fadeOut());


// end loader
// =========================================



// =========================================
// start header

let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let navLis = document.querySelectorAll(".navbar li a");

menu.addEventListener("click", () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
});

window.addEventListener("scroll", () => {

    // start header
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");


    // start scroll
    if(window.scrollY > 60) {
        document.querySelector("#scroll-top").classList.add("active");
    } else {
        document.querySelector("#scroll-top").classList.remove("active");
    }

});

for(let i = 0; i < navLis.length; i++) {
    navLis[i].addEventListener("click", () => {
        menu.classList.remove("fa-times");
        navbar.classList.remove("active");
    });
}


// end header
// =========================================





