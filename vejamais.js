document.addEventListener("DOMContentLoaded", () => {
    const socialLinks = document.querySelectorAll('.social-link');

    socialLinks.forEach((link, index) => {
        link.style.animationDelay = `${index * 0.2}s`;

        link.addEventListener('mouseover', () => {
            link.style.transform = 'scale(1.2)';
            link.style.transition = 'transform 0.3s';
        });

        link.addEventListener('mouseout', () => {
            link.style.transform = 'scale(1)';
        });
    });
});
