//Jordan Schulte
let theme = document.querySelector("#theme-mode");
let lightMode = localStorage.getItem("lightMode");
let icon = document.querySelector("#icon");
const notificationLight = document.querySelector(".notification-light");
const notificationDark = document.querySelector(".notification-dark");
const notiText = document.querySelector("noti-text");

theme.addEventListener("click", () => {
    lightMode = localStorage.getItem("lightMode");
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
        theme.className = "fas fa-moon";
        icon.href = "Images/logo-white.jpg";
        localStorage.setItem("lightMode", "enabled");
        theme.classList.toggle("rotateForward");
        notificationDark.classList.remove("notiCall");
        notificationLight.classList.add("notiCall");
        document.documentElement.style.setProperty('--scroll-bar', '#e4e4e4');
    } else {
        theme.className = "fas fa-sun";
        icon.href = "Images/logo.jpg";
        localStorage.setItem("lightMode", null);
        theme.classList.toggle("rotateBackward");
        notificationLight.classList.remove("notiCall");
        notificationDark.classList.add("notiCall");
        document.documentElement.style.setProperty('--scroll-bar', '#151a21');
    }
});

if (lightMode === "enabled") {
    document.body.classList.toggle("light-mode");
    icon.href = "Images/logo-white.jpg";
    theme.className = "fas fa-moon";
}
