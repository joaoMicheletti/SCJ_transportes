document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       DADOS DAS REGIÕES
    ===================================== */

    const regioes = {

        caieiras: {
            nome: "Caieiras",
            sla: 99.4,
            coordenadas: [-23.3647, -46.7408]
        },

        cajamar: {
            nome: "Cajamar",
            sla: 99.2,
            coordenadas: [-23.3561, -46.8765]
        },

        franciscomorato: {
            nome: "Francisco Morato",
            sla: 98.9,
            coordenadas: [-23.2817, -46.7453]
        },

        francodarocha: {
            nome: "Franco da Rocha",
            sla: 99.1,
            coordenadas: [-23.3229, -46.7261]
        },

        jordanesia: {
            nome: "Jordanésia",
            sla: 99.5,
            coordenadas: [-23.3555, -46.876]
        },

        maripora: {
            nome: "Mairiporã",
            sla: 98.8,
            coordenadas: [-23.3186, -46.5897]
        },

        polvilho: {
            nome: "Polvilho",
            sla: 99.3,
            coordenadas: [-23.3211, -46.8372]
        },

        perus: {
            nome: "Perus",
            sla: 99.0,
            coordenadas: [-23.4044, -46.7533]
        }

    };


    /* =====================================
       CRIA MAPA
    ===================================== */

    const mapa = L.map("mapaSJC", {

        zoomControl: false,

        attributionControl: true

    }).setView(
        [-23.34, -46.76],
        11
    );


    /* =====================================
       MAPA OPEN STREET MAP
    ===================================== */

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            maxZoom: 18,

            attribution:
                '&copy; OpenStreetMap contributors'
        }
    ).addTo(mapa);


    /* =====================================
       ZOOM
    ===================================== */

    L.control.zoom({
        position: "bottomright"
    }).addTo(mapa);


    /* =====================================
       ÍCONE DO MARCADOR
    ===================================== */

    const marcadorIcone = L.divIcon({

        className: "sjc-marker-wrapper",

        html: `
            <div class="sjc-marker"></div>
        `,

        iconSize: [38, 38],

        iconAnchor: [19, 38]

    });


    /* =====================================
       CRIA MARCADORES
    ===================================== */

    const marcadores = {};


    Object.entries(regioes).forEach(
        ([id, regiao]) => {

            const marcador = L.marker(
                regiao.coordenadas,
                {
                    icon: marcadorIcone,

                    opacity: 0
                }
            );

            marcador.addTo(mapa);

            marcadores[id] = marcador;

        }
    );


    /* =====================================
       ELEMENTOS DO POPUP
    ===================================== */

    const popup = document.getElementById(
        "slaPopup"
    );

    const cidade = document.getElementById(
        "slaCidade"
    );

    const valor = document.getElementById(
        "slaValor"
    );

    const barra = document.getElementById(
        "slaBarra"
    );


    /* =====================================
       MOSTRAR SLA
    ===================================== */

    function mostrarSLA(id) {

        const regiao = regioes[id];

        if (!regiao) return;


        /* ativa cidade */

        document
            .querySelectorAll(".cidade-item")
            .forEach(item => {

                item.classList.remove(
                    "active"
                );

            });


        const cidadeItem =
            document.querySelector(
                `[data-city="${id}"]`
            );


        if (cidadeItem) {

            cidadeItem.classList.add(
                "active"
            );

        }


        /* remove marcadores */

        Object.values(marcadores)
            .forEach(marker => {

                marker.setOpacity(0);

            });


        /* marcador selecionado */

        const marcador =
            marcadores[id];


        marcador.setOpacity(1);


        /* dados */

        cidade.textContent =
            regiao.nome;

        valor.textContent =
            regiao.sla
                .toFixed(1)
                .replace(".", ",") + "%";


        barra.style.width =
            regiao.sla + "%";


        /* popup */

        popup.classList.add(
            "show"
        );


        /*
         * Calcula posição do popup
         * baseado no marcador.
         */

        const ponto =
            mapa.latLngToContainerPoint(
                regiao.coordenadas
            );


        const popupWidth =
            popup.offsetWidth;


        const popupHeight =
            popup.offsetHeight;


        let left =
            ponto.x - popupWidth / 2;


        let top =
            ponto.y - popupHeight - 25;


        /*
         * impede popup de sair
         * da área do mapa
         */

        left = Math.max(
            10,
            Math.min(
                left,
                mapa.getContainer()
                    .clientWidth
                    - popupWidth
                    - 10
            )
        );


        top = Math.max(
            70,
            top
        );


        popup.style.left =
            `${left}px`;

        popup.style.top =
            `${top}px`;

    }


    /* =====================================
       ESCONDER SLA
    ===================================== */

    function esconderSLA() {

        popup.classList.remove(
            "show"
        );


        Object.values(marcadores)
            .forEach(marker => {

                marker.setOpacity(0);

            });


        document
            .querySelectorAll(".cidade-item")
            .forEach(item => {

                item.classList.remove(
                    "active"
                );

            });

    }


    /* =====================================
       EVENTOS DAS CIDADES
    ===================================== */

    document
        .querySelectorAll(".cidade-item")
        .forEach(item => {


            const id =
                item.dataset.city;


            /*
             * Desktop
             */

            item.addEventListener(
                "mouseenter",
                () => {

                    mostrarSLA(id);

                }
            );


            item.addEventListener(
                "mouseleave",
                () => {

                    esconderSLA();

                }
            );


            /*
             * Mobile / clique
             */

            item.addEventListener(
                "click",
                () => {

                    mostrarSLA(id);

                }
            );

        });


    /* =====================================
       REDIMENSIONAMENTO
    ===================================== */

    window.addEventListener(
        "resize",
        () => {

            mapa.invalidateSize();

        }
    );

});