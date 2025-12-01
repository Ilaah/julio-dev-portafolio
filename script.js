document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Inicializar AOS (Animaciones al scroll)
    AOS.init({
        duration: 800,   // Duración de la animación en ms
        once: true,      // La animación solo ocurre una vez (más elegante)
        offset: 100,     // Empieza un poco antes de llegar al elemento
        easing: 'ease-out-cubic'
    });

    // 2. Inicializar Typed.js (Texto Hero)
    // Solo si existe el elemento para evitar errores
    if(document.querySelector('#typed-text')) {
        new Typed('#typed-text', {
            strings: [
                'Experto en Laravel', 
                'Experto en WordPress', 
                'E-commerce Industrial',
                'Soluciones a Medida'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            cursorChar: '|' // El cursor parpadeante
        });
    }

    // 3. Menú Móvil (Este código se mantiene igual)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            
            // Estilos para el menú móvil desplegado
            if (navLinks.style.display === 'flex') {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.right = '0';
                navLinks.style.background = 'rgba(15, 23, 42, 0.98)'; // Fondo casi sólido
                navLinks.style.width = '100%';
                navLinks.style.padding = '30px';
                navLinks.style.textAlign = 'center';
                navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
            }
        });
    }

    // 4. Smooth Scroll (Se mantiene igual)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target){
                target.scrollIntoView({ behavior: 'smooth' });
                // Cerrar menú móvil al hacer click si está abierto
                if(window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                }
            }
        });
    });
});