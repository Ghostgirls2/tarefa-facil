// Função para simular o pagamento com PayPal ou Pix
function pagar(tipo) {
    if (tipo === 'paypal') {
        alert("Redirecionando para o PayPal...");
        // Aqui você pode redirecionar o usuário para o PayPal ou integrar via API
        window.location.href = "https://www.paypal.com";
    } else if (tipo === 'pix') {
        alert("Gerando QR Code para pagamento via Pix...");
        // Aqui você pode integrar a funcionalidade do Pix
        // Exemplo: mostrar um QR Code do Pix ou enviar o usuário para uma página de pagamento Pix
    }
}
