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

// funcionalidade de direcionamento na pagina de sobre:

const trabalhe = document.querySelector('#job');

trabalhe.addEventListener("click", function () {
    window.open(
        "https://wa.me/5511943774029?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20saber%20como%20posso%20fazer%20parte%20da%20equipe%20SJC.",
        "_blank"
    );
})

const contato = document.querySelector("#contatoSobre");

contato.addEventListener("click", function(){
    window.open(
        "https://wa.me/5511943774029?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20SJC.",
        "_blank"
    );
})