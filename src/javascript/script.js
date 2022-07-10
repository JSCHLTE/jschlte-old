//Navbar
const navLinks = document.querySelector(".nav-links"),
	burger = document.querySelector(".burger"),
	sections = document.querySelectorAll("section"),
	navbar = document.querySelector("nav"),
	body = document.querySelector("body"),
	navItems = document.querySelectorAll(".nav-item");

nav = () => {
	burger.addEventListener("click", () => {
		navLinks.classList.toggle("nav-active");
		burger.classList.toggle("toggle");
		body.classList.toggle("fixed-position");
		navbar.classList.remove("active");
	});
};
nav();

window.addEventListener("scroll", () => {
	if (pageYOffset > 100) {
		navbar.classList.add("active");
	} else {
		navbar.classList.remove("active");
	}
});

navItems.forEach(navItem => {
	navItem.addEventListener("click", () => {
		navLinks.classList.remove("nav-active");
		burger.classList.remove("toggle");
		body.classList.remove("fixed-position");
	});
});
//Navbar

//Light-mode
const theme = document.querySelector(".theme"),
	themeLogo = document.querySelector("#theme-mode"),
	notificationLight = document.querySelector(".notification-light"),
	notificationDark = document.querySelector(".notification-dark"),
	notiText = document.querySelector("noti-text");

let lightMode = localStorage.getItem("lightMode");

window.addEventListener("DOMContentLoaded", event => {
	document.body.style.animation = "fadeIn 0.5s";
});

theme.addEventListener("click", () => {
	lightMode = localStorage.getItem("lightMode");
	document.body.classList.toggle("light-mode");
	if (document.body.classList.contains("light-mode")) {
		themeLogo.className = "fas fa-moon";
		localStorage.setItem("lightMode", "enabled");
		themeLogo.classList.toggle("rotateForward");
		notificationDark.classList.remove("notiCall");
		notificationLight.classList.add("notiCall");
	} else {
		themeLogo.className = "fas fa-sun";
		localStorage.setItem("lightMode", null);
		themeLogo.classList.toggle("rotateBackward");
		notificationLight.classList.remove("notiCall");
		notificationDark.classList.add("notiCall");
	}
});

if (lightMode === "enabled") {
	document.body.classList.toggle("light-mode");
	themeLogo.className = "fas fa-moon";
}
//Light-mode

//To-top
const toTop = document.querySelector(".btt");
window.addEventListener("scroll", () => {
	if (window.scrollY > 200) {
		toTop.classList.add("btt-active");
	} else {
		toTop.classList.remove("btt-active");
	}
});
//To-top
