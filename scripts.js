document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('cta-button');
    const contactForm = document.getElementById('contact-form');
    const feedbackMessage = document.querySelector('.feedback-message');

    // Redireciona para a página de agendamento
    ctaButton.addEventListener('click', () => {
        window.location.href = 'formulario.html'; 
    });

    // Validação do formulário
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        feedbackMessage.textContent = ''; // Limpa mensagens anteriores

        if (!name || !email) {
            feedbackMessage.textContent = 'Por favor, preencha todos os campos obrigatórios.';
            feedbackMessage.style.color = 'red';
            return;
        }

        // Regex para validar o e-mail
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            feedbackMessage.textContent = 'Por favor, insira um e-mail válido.';
            feedbackMessage.style.color = 'red';
            return;
        }

        // Validação de telefone
        if (phone && !/^\d{10,15}$/.test(phone)) {
            feedbackMessage.textContent = 'Por favor, insira um número de telefone válido (10 a 15 dígitos).';
            feedbackMessage.style.color = 'red';
            return;
        }

        feedbackMessage.textContent = `Obrigado por entrar em contato, ${name}! Nós responderemos em breve.`;
        feedbackMessage.style.color = 'green';
        contactForm.reset(); // Limpa o formulário após o envio
    });

    // Animação de fade-in para as seções
    const sections = document.querySelectorAll('section');
    setTimeout(() => {
        sections.forEach(section => {
            section.classList.add('visible');
        });
    }, 100);

    // Ativar abas
    const tabs = document.querySelectorAll('.nav-link');

    tabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            event.preventDefault();
            const target = document.querySelector(tab.getAttribute('href'));
            // Ocultar todas as abas
            document.querySelectorAll('.tab-pane').forEach(pane => {
                pane.classList.remove('show', 'active');
            });
            // Mostrar a aba selecionada
            target.classList.add('show', 'active');
        });
    });
});
