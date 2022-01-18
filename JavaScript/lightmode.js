//Jordan Schulte
let theme = document.querySelector(".theme");
let themeLogo = document.querySelector("#theme-mode");
let lightMode = localStorage.getItem("lightMode");
let icon = document.querySelector("#icon");
const notificationLight = document.querySelector(".notification-light");
const notificationDark = document.querySelector(".notification-dark");
const notiText = document.querySelector("noti-text");

window.addEventListener('DOMContentLoaded', (event) => {
    document.body.style.animation = 'fadeIn 0.5s';
});

theme.addEventListener("click", () => {
    lightMode = localStorage.getItem("lightMode");
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
        themeLogo.className = "fas fa-moon";
        icon.href = "Images/logo-white.jpg";
        localStorage.setItem("lightMode", "enabled");
        themeLogo.classList.toggle("rotateForward");
        notificationDark.classList.remove("notiCall");
        notificationLight.classList.add("notiCall");
    } else {
        themeLogo.className = "fas fa-sun";
        icon.href = "Images/logo.jpg";
        localStorage.setItem("lightMode", null);
        themeLogo.classList.toggle("rotateBackward");
        notificationLight.classList.remove("notiCall");
        notificationDark.classList.add("notiCall");
    }
});

if (lightMode === "enabled") {
    document.body.classList.toggle("light-mode");
    icon.href = "Images/logo-white.jpg";
    themeLogo.className = "fas fa-moon";
}
