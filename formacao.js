document.addEventListener("DOMContentLoaded", () => {
    const timelineItems = document.querySelectorAll('.timeline-item');

    // Adiciona animação de entrada ao carregar a página
    timelineItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 200); // Cria um pequeno delay para cada item
    });
});
