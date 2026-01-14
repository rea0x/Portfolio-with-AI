// ===== SCROLL EFFECTS MODULE =====

class ScrollEffects {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupScrollProgress();
        this.setupIntersectionObserver();
        this.setupParallax();
    }
    
    setupScrollProgress() {
        let progressBar = document.querySelector('.scroll-progress');
        
        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.className = 'scroll-progress';
            document.body.prepend(progressBar);
        }
        
        window.addEventListener('scroll', () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (window.scrollY / totalHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        });
    }
    
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'slideInUp 0.8s ease forwards';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe animated elements
        document.querySelectorAll('.card, .stat-card, .project-card, .tech-badge').forEach(el => {
            observer.observe(el);
        });
    }
    
    setupParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            
            document.querySelectorAll('[data-parallax]').forEach(el => {
                const speed = parseFloat(el.getAttribute('data-parallax')) || 0.5;
                el.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }
}

// Initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new ScrollEffects();
    });
} else {
    new ScrollEffects();
}

export default ScrollEffects;
