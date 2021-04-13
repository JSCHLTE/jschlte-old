//Jordan Schulte
let burger = document.querySelector(".burger");
let navLinks = document.querySelector(".nav-links");
let theme = document.querySelector("#theme-mode");
let lightMode = localStorage.getItem("lightMode");

nav = () =>{
    burger.addEventListener("click", ()=>{
        navLinks.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
    });
}
nav();

theme.addEventListener("click", ()=>{
    lightMode = localStorage.getItem("lightMode");
    document.body.classList.toggle("light-mode");
    if(document.body.classList.contains("light-mode")){
        theme.className = "fas fa-moon";
        localStorage.setItem("lightMode", "enabled");
    }else{
        theme.className = "fas fa-sun";
        localStorage.setItem("lightMode", null);
    }
});

if(lightMode === "enabled"){
    document.body.classList.toggle("light-mode");
    theme.className = "fas fa-moon";
}