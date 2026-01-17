// Slideshow automático para categorias
document.addEventListener('DOMContentLoaded', () => {
    const categoryCards = document.querySelectorAll('.category-card[data-category]');
    
    categoryCards.forEach(card => {
        const images = card.querySelectorAll('.category-img');
        if (images.length === 0) return;
        
        let currentIndex = 0;
        let intervalId = null;
        let isHovered = false;
        
        // Função para trocar imagem
        function nextImage() {
            if (isHovered) return;
            
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }
        
        // Carregar imagens
        images.forEach((img, index) => {
            if (img.complete) {
                img.classList.add('loaded');
            } else {
                img.addEventListener('load', () => {
                    img.classList.add('loaded');
                });
                img.addEventListener('error', () => {
                    // Fallback para placeholder se a imagem falhar
                    console.warn('Erro ao carregar imagem:', img.src);
                    img.style.display = 'none';
                });
            }
        });
        
        // Iniciar slideshow após um delay inicial
        setTimeout(() => {
            intervalId = setInterval(nextImage, 3000); // Troca a cada 3 segundos
        }, 2000);
        
        // Pausar no hover
        card.addEventListener('mouseenter', () => {
            isHovered = true;
            if (intervalId) {
                clearInterval(intervalId);
            }
        });
        
        // Retomar ao sair do hover
        card.addEventListener('mouseleave', () => {
            isHovered = false;
            intervalId = setInterval(nextImage, 3000);
        });
        
        // Limpar intervalo quando o card sair da viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    if (intervalId) {
                        clearInterval(intervalId);
                        intervalId = null;
                    }
                } else {
                    if (!intervalId && !isHovered) {
                        intervalId = setInterval(nextImage, 3000);
                    }
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(card);
    });
});
