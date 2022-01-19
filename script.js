const hamburger = document.getElementById("hamburger");
const menuMobile = document.getElementById("menuMobile");
hamburger.addEventListener("click", toggleHamburger);

let verif = "desativado";

function toggleHamburger() {
    if (verif == "desativado") {
        hamburger.src = "./images/icon-close.svg";
        menuMobile.style.left = "0";
        verif = "ativado";
    } else {
        hamburger.src = "./images/icon-hamburger.svg";
        menuMobile.style.left = "100%";
        verif = "desativado";
    }
}