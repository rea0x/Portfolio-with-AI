// ===== ADVANCED CUSTOM CURSOR MODULE =====

class CursorManager {
    constructor() {
        this.cursor = document.querySelector('.cursor');
        this.cursorFollower = document.querySelector('.cursor-follower');
        
        // Check if elements exist
        if (!this.cursor || !this.cursorFollower) {
            console.warn('Cursor elements not found in DOM');
            return;
        }
        
        this.mouseX = 0;
        this.mouseY = 0;
        this.followerX = 0;
        this.followerY = 0;
        this.isTouch = this.detectTouchDevice();
        this.animationFrameId = null;
        
        if (!this.isTouch) {
            this.init();
        }
    }
    
    detectTouchDevice() {
        return window.matchMedia("(pointer:coarse)").matches;
    }
    
    init() {
        this.bindEvents();
        this.animateFollower();
    }
    
    bindEvents() {
        document.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        document.addEventListener('mouseleave', () => this.handleMouseLeave());
        document.addEventListener('mouseenter', () => this.handleMouseEnter());
        
        this.setupHoverElements();
    }
    
    handleMouseMove(e) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
        
        // Move main cursor
        this.cursor.style.left = (this.mouseX - 10) + 'px';
        this.cursor.style.top = (this.mouseY - 10) + 'px';
    }
    
    animateFollower = () => {
        // Smooth follower animation
        this.followerX += (this.mouseX - this.followerX - 20) * 0.12;
        this.followerY += (this.mouseY - this.followerY - 20) * 0.12;
        
        this.cursorFollower.style.left = this.followerX + 'px';
        this.cursorFollower.style.top = this.followerY + 'px';
        
        this.animationFrameId = requestAnimationFrame(() => this.animateFollower());
    }
    
    setupHoverElements() {
        const interactiveElements = document.querySelectorAll(
            'button, a, input, select, textarea, .btn, .card, .hover-grow'
        );
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => this.onHoverEnter());
            el.addEventListener('mouseleave', () => this.onHoverLeave());
        });
    }
    
    onHoverEnter() {
        if (!this.cursor || !this.cursorFollower) return;
        
        this.cursor.classList.add('cursor-hover');
        this.cursorFollower.classList.add('cursor-follower-hover');
    }
    
    onHoverLeave() {
        if (!this.cursor || !this.cursorFollower) return;
        
        this.cursor.classList.remove('cursor-hover');
        this.cursorFollower.classList.remove('cursor-follower-hover');
    }
    
    handleMouseLeave() {
        if (!this.cursor || !this.cursorFollower) return;
        
        this.cursor.style.opacity = '0';
        this.cursorFollower.style.opacity = '0';
    }
    
    handleMouseEnter() {
        if (!this.cursor || !this.cursorFollower) return;
        
        this.cursor.style.opacity = '1';
        this.cursorFollower.style.opacity = '0.7';
    }
    
    destroy() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
    }
}

// Initialize cursor when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new CursorManager();
    });
} else {
    new CursorManager();
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new CursorManager();
    });
} else {
    new CursorManager();
}

export default CursorManager;
