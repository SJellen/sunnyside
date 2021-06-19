const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".header-container-right");

function toggleMenu() {
    if (menu.classList.contains("open")) {
        menu.classList.remove("open");
        hamburger.style.opacity = ""
       
    } else {
        menu.classList.add("open");
        hamburger.style.opacity = ".5"
    }
}

hamburger.addEventListener('click', toggleMenu);