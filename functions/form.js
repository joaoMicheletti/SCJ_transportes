// funç~oes para envio de formulário:

// Envio via WhatsApp
const whats = document.querySelector("#sendWhatsApp");

whats.addEventListener("click", function () {

    const nomeEmpresa = document.querySelector("#nomeEmpresa").value.trim();
    const numeroContato = document.querySelector("#numeroContato").value.trim();
    const emailContato = document.querySelector("#emailContato").value.trim();
    const segmento = document.querySelector("#segmento").value.trim();
    const txtArea = document.querySelector("#txtArea").value.trim();

    // Verifica se algum campo está vazio
    if (
        !nomeEmpresa ||
        !numeroContato ||
        !emailContato ||
        !segmento ||
        !txtArea
    ) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Monta a mensagem
    const mensagem = `
Olá, vim através do site e gostaria de solicitar seus serviços.

Segue meus dados abaixo:

🏢 Empresa: ${nomeEmpresa}
📞 Contato: ${numeroContato}
📧 E-mail: ${emailContato}
📦 Segmento: ${segmento}

📝 Necessidade:
${txtArea}

Aguardo o contato da equipe SJC. Obrigado!
`;

    // Codifica a mensagem para URL
    const mensagemFormatada = encodeURIComponent(mensagem);

    // Cria o link do WhatsApp
    const linkWhatsApp = `https://wa.me/5511943774029?text=${mensagemFormatada}`;

    // Abre o WhatsApp
    window.open(linkWhatsApp, "_blank");
});



const email = document.querySelector("#sendEmail");

email.addEventListener("click", function () {

    const nomeEmpresa = document.querySelector("#nomeEmpresa").value.trim();
    const numeroContato = document.querySelector("#numeroContato").value.trim();
    const emailContato = document.querySelector("#emailContato").value.trim();
    const segmento = document.querySelector("#segmento").value.trim();
    const txtArea = document.querySelector("#txtArea").value.trim();

    // Verifica se algum campo está vazio
    if (
        !nomeEmpresa ||
        !numeroContato ||
        !emailContato ||
        !segmento ||
        !txtArea
    ) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // E-mail que receberá a solicitação
    const destinatario = "contato@sjctransportes.com.br";

    // Título / assunto do e-mail
    const assunto = "Solicitação de Serviços - SJC Transportes";

    // Corpo do e-mail
    const corpo = `
Olá, vim através do site e gostaria de solicitar os serviços da SJC Transportes.

Segue meus dados abaixo:

Empresa: ${nomeEmpresa}
Contato: ${numeroContato}
E-mail: ${emailContato}
Segmento: ${segmento}

Necessidade:
${txtArea}

Aguardo o contato da equipe SJC.

Obrigado!
`;

    // Codifica assunto e corpo para a URL
    const assuntoFormatado = encodeURIComponent(assunto);
    const corpoFormatado = encodeURIComponent(corpo);

    // Cria o link mailto
    const linkEmail =
        `mailto:${destinatario}?subject=${assuntoFormatado}&body=${corpoFormatado}`;

    // Abre o aplicativo de e-mail
    window.location.href = linkEmail;
});