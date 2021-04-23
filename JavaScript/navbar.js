let burger = document.querySelector(".burger");
let navLinks = document.querySelector(".nav-links");
const sections = document.querySelectorAll("section");
const navbar = document.querySelector("nav");

nav = () => {
    burger.addEventListener("click", () => {
        navLinks.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
    });
}
nav();

window.addEventListener("scroll", () =>{
    if(pageYOffset > 200){
        navbar.classList.add("active");
    } else{
        navbar.classList.remove("active");
    }
});