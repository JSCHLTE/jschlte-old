let toTop = document.querySelector(".btt");

window.addEventListener("scroll", () =>{
    if(window.scrollY > 200){
        toTop.classList.add("btt-active")
    } else {
        toTop.classList.remove("btt-active")
    }
});