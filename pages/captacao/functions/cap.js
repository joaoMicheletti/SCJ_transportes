/* =====================================================
   MENU MOBILE
===================================================== */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

    });


    const mobileLinks =
        mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

        });

    });

}


/* =====================================================
   FORMULÁRIO
===================================================== */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            /* ==========================================
               CAPTURAR DADOS
            ========================================== */

            const nomeEmpresa =
                document
                    .getElementById("nomeEmpresa")
                    .value
                    .trim();


            const numeroContato =
                document
                    .getElementById("numeroContato")
                    .value
                    .trim();


            const emailContato =
                document
                    .getElementById("emailContato")
                    .value
                    .trim();


            const segmento =
                document
                    .getElementById("segmento")
                    .value
                    .trim();


            const txtArea =
                document
                    .getElementById("txtArea")
                    .value
                    .trim();


            /* ==========================================
               VALIDAÇÃO
            ========================================== */

            if (
                !nomeEmpresa ||
                !numeroContato ||
                !emailContato ||
                !segmento ||
                !txtArea
            ) {

                alert(
                    "Por favor, preencha todos os campos."
                );

                return;
            }


            /* ==========================================
               NÚMERO WHATSAPP DA SJC

               IMPORTANTE:
               substituir pelo número oficial
               da empresa.

               Formato:
               5511999999999
            ========================================== */

            const numeroWhatsApp =
                "5511999999999";


            /* ==========================================
               MONTAR MENSAGEM
            ========================================== */

            const mensagem = `
Olá, SJC! 👋

Vim através do site e gostaria de solicitar um orçamento.

*Dados da empresa:*

🏢 *Empresa:* ${nomeEmpresa}

📱 *WhatsApp:* ${numeroContato}

📧 *E-mail:* ${emailContato}

📦 *Segmento:* ${segmento}

📝 *Como podemos ajudar:*
${txtArea}

Aguardo o contato da equipe. Obrigado!
            `.trim();


            /* ==========================================
               CODIFICAR MENSAGEM
            ========================================== */

            const mensagemCodificada =
                encodeURIComponent(mensagem);


            /* ==========================================
               GERAR LINK
            ========================================== */

            const linkWhatsApp =
                `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;


            /* ==========================================
               REDIRECIONAR
            ========================================== */

            window.open(
                linkWhatsApp,
                "_blank"
            );

        }
    );

}


/* =====================================================
   MÁSCARA WHATSAPP
===================================================== */

const telefoneInput =
    document.getElementById("numeroContato");


if (telefoneInput) {

    telefoneInput.addEventListener(
        "input",
        function () {

            let value =
                this.value.replace(/\D/g, "");


            value =
                value.substring(0, 11);


            if (value.length <= 10) {

                value = value.replace(
                    /^(\d{2})(\d)/,
                    "($1) $2"
                );

                value = value.replace(
                    /(\d{4})(\d)/,
                    "$1-$2"
                );

            } else {

                value = value.replace(
                    /^(\d{2})(\d)/,
                    "($1) $2"
                );

                value = value.replace(
                    /(\d{5})(\d)/,
                    "$1-$2"
                );

            }


            this.value = value;

        }
    );

}