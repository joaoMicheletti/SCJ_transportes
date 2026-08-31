const heroSlides = [

    {
        subtitle: "ARMAZENAGEM",

        title: "SEU ESTOQUE EM BOAS MÃOS.",

        description:
            "Estrutura, organização e segurança para armazenar seus produtos com eficiência e controle.",

        background:
            "../assets/armazenagem.webp"
    },

    {
        subtitle: "FULFILLMENT",

        title: "AGILIDADE EM CADA MOVIMENTO.",

        description:
            "Operações de separação, conferência e movimentação realizadas com precisão, segurança e eficiência.",

        background:
            "../assets/fulfilmetbg.webp"
    },

    {
        subtitle: "TRANSPORTE",

        title: "SUA CARGA, NOSSA RESPONSABILIDADE.",

        description:
            "Transporte integrado para conectar sua operação ao destino com segurança, agilidade e rastreabilidade.",

        background:
            "../assets/transportes.webp"
    },

    {
        subtitle: "NOVO GALPÃO",

        title: "MAIS ESPAÇO, MAIS EFICIÊNCIA.",

        description:
            "Estrutura moderna e localização estratégica para levar ainda mais qualidade e agilidade para a sua operação.",

        background:
            "../assets/novogp.webp"
    },

];


let heroIndex = 0;

const heroBg = document.querySelector(".hero-bg");

const heroSubtitle = document.querySelector("#heroSubtitle");
const heroTitle = document.querySelector("#heroTitle");
const heroDescription = document.querySelector("#heroDescription");


// Define o primeiro background
heroBg.style.backgroundImage =
    `url("${heroSlides[0].background}")`;


// Troca o slide
function atualizarHero() {

    heroIndex++;

    if (heroIndex >= heroSlides.length) {
        heroIndex = 0;
    }

    const slide = heroSlides[heroIndex];


    // Primeiro deixa o background desaparecer
    heroBg.style.opacity = "0";


    // Espera a transição acontecer
    setTimeout(() => {

        // Troca a imagem enquanto ela está invisível
        heroBg.style.backgroundImage =
            `url("${slide.background}")`;


        // Volta a aparecer suavemente
        heroBg.style.opacity = "1";


        // Atualiza os textos
        heroSubtitle.textContent = slide.subtitle;

        heroTitle.textContent = slide.title;

        heroDescription.textContent = slide.description;

    }, 600);
}


// Troca a cada 5 segundos
setInterval(atualizarHero, 8000);