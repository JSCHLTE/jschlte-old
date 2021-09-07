const mainLinks = document.querySelector('.main-links');
const burger = document.querySelector('.burger');
const burgerIcon = document.querySelector('.fa-grip-lines');
const overlay = document.querySelector('.overlay');

burger.addEventListener('click', openMenu);
overlay.addEventListener('click', openMenu);

function openMenu() {
        burgerIcon.classList.toggle('fa-times'); //Makes burger X icon
        mainLinks.classList.toggle('active'); //Applies active class to mainLinks
        mainLinks.style.opacity = `1`;
        overlay.classList.toggle('overlayOn');
}