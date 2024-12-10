document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simulação de envio (alert)
        alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Entraremos em contato através do e-mail: ${email}.`);
        
        // Limpa o formulário
        form.reset();
    });
});
