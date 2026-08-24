const menuButton = document.getElementById("menu");
const menu = document.querySelector(".mobileMenu");

// Variáveis responsáveis pelos elementos do menu

menuButton.addEventListener("click", function () {

    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }

});

const encolhermenu = document.querySelector(".upseta");

encolhermenu.addEventListener("click", function () {
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    }
});