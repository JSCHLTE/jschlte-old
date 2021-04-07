//Jordan Schulte
let burger = document.querySelector(".burger");
let navLinks = document.querySelector(".nav-links");

nav = () =>{
    burger.addEventListener("click", ()=>{
        navLinks.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
    });
}
nav();