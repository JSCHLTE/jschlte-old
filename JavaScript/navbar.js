let burger = document.querySelector(".burger");
let navLinks = document.querySelector(".nav-links");
const sections = document.querySelectorAll("section");
const navbar = document.querySelector("nav");
const body = document.querySelector("body");
const navItems = document.querySelectorAll(".nav-item");

nav = () => {
    burger.addEventListener("click", () => {
        navLinks.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
        body.classList.toggle("fixed-position");
        navbar.classList.remove("active");
    });
}
nav();

window.addEventListener("scroll", () =>{
    if(pageYOffset > 100){
        navbar.classList.add("active");
    } else{
        navbar.classList.remove("active");
    }
});

navItems.forEach(navItem=> {
    navItem.addEventListener("click", () =>{
      navLinks.classList.remove("nav-active");
      burger.classList.remove("toggle");
      body.classList.remove("fixed-position");
    });
  });