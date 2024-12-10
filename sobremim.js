document.addEventListener("DOMContentLoaded", () => {
    const learnMoreButton = document.getElementById("learn-more");

    learnMoreButton.addEventListener("click", () => {
        alert("Obrigada por querer saber mais sobre mim! Explore o resto do site para conhecer meu trabalho.");
    });

    // Animações de carregamento das barras de progresso
    const progressBars = document.querySelectorAll('.progress');

    progressBars.forEach((bar) => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
});
