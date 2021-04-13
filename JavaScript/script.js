//Jordan Schulte
let burger = document.querySelector(".burger");
let navLinks = document.querySelector(".nav-links");
let theme = document.querySelector("#theme-mode");

nav = () =>{
    burger.addEventListener("click", ()=>{
        navLinks.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
    });
}
nav();

theme.addEventListener("click", ()=>{
    document.body.classList.toggle("light-mode");
    if(document.body.classList.contains("light-mode")){
        theme.className = "fas fa-moon"
    }else{
        theme.className = "fas fa-sun"
    }
});