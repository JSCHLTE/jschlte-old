//Jordan Schulte
let burger = document.querySelector(".burger");
let navLinks = document.querySelector(".nav-links");
let theme = document.querySelector("#theme-mode");
let lightMode = localStorage.getItem("lightMode");
let icon = document.querySelector("#icon");

nav = () => {
    burger.addEventListener("click", () => {
        navLinks.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
    });
}
nav();

theme.addEventListener("click", () => {
    lightMode = localStorage.getItem("lightMode");
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
        theme.className = "fas fa-moon";
        icon.href = "Images/logo-white.jpg";
        localStorage.setItem("lightMode", "enabled");
        theme.classList.toggle("rotateForward");
    } else {
        theme.className = "fas fa-sun";
        icon.href = "Images/logo.jpg";
        localStorage.setItem("lightMode", null);
        theme.classList.toggle("rotateBackward");
    }
});

if (lightMode === "enabled") {
    document.body.classList.toggle("light-mode");
    icon.href = "Images/logo-white.jpg";
    theme.className = "fas fa-moon";
}