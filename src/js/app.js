// ===== MAIN APP MODULE =====

// Utility: Copy to clipboard
window.copyToClipboard = function(text) {
    navigator.clipboard.writeText(text).then(() => {
        const notification = document.createElement('div');
        notification.className = 'copy-notification';
        notification.textContent = '✓ Copied to clipboard!';
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('Copied: ' + text);
    });
};

class PortfolioApp {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupGitHubProjects();
        this.setupSmoothScroll();
        this.setupNavigation();
    }
    
    // Fetch GitHub Projects with enhanced details
    async setupGitHubProjects() {
        try {
            const projectsGrid = document.getElementById('projectsGrid');
            if (!projectsGrid) return;
            
            const response = await fetch('https://api.github.com/users/rea0x/repos?sort=stars&per_page=12');
            const repos = await response.json();
            
            if (!Array.isArray(repos)) {
                throw new Error('Invalid response');
            }
            
            // Filter out empty repos
            const validRepos = repos.filter(repo => repo.description || repo.name);
            
            projectsGrid.innerHTML = validRepos.map((repo, index) => {
                const language = repo.language || 'Other';
                const stars = repo.stargazers_count > 0 ? `⭐ ${repo.stargazers_count}` : '';
                const topics = repo.topics && repo.topics.length > 0 ? repo.topics.slice(0, 3).join(', ') : '';
                
                return `
                    <div class="project-card card hover-grow" style="animation: slideInUp 0.8s ease ${index * 0.1}s forwards; opacity: 0;">
                        <div class="project-header">
                            <h3>${this.escapeHtml(repo.name)}</h3>
                            ${stars ? `<span class="project-stars">${stars}</span>` : ''}
                        </div>
                        <p class="project-description">${this.escapeHtml(repo.description || 'A custom project by rea0x')}</p>
                        ${topics ? `<p class="project-topics"><small>${this.escapeHtml(topics)}</small></p>` : ''}
                        <p class="project-language"><small>📌 ${this.escapeHtml(language)}</small></p>
                        <div class="project-links">
                            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="btn btn-small">
                                View on GitHub →
                            </a>
                            ${repo.homepage ? `<a href="${repo.homepage}" target="_blank" rel="noopener noreferrer" class="btn btn-small btn-outline">
                                Live Demo →
                            </a>` : ''}
                        </div>
                    </div>
                `;
            }).join('');
            
        } catch (error) {
            console.error('Error fetching GitHub projects:', error);
            const projectsGrid = document.getElementById('projectsGrid');
            if (projectsGrid) {
                projectsGrid.innerHTML = `
                    <div class="project-card card" style="grid-column: 1 / -1; text-align: center;">
                        <p style="color: var(--muted);">Unable to load GitHub projects. Please try again later.</p>
                    </div>
                `;
            }
        }
    }
    
    // Smooth scroll for anchor links
    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    // Setup navigation active state
    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        const updateActiveLink = () => {
            const scrollPosition = window.scrollY + 100;
            
            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                const target = document.querySelector(href);
                
                if (target) {
                    const { offsetTop, offsetHeight } = target;
                    
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        navLinks.forEach(l => l.classList.remove('active'));
                        link.classList.add('active');
                    }
                }
            });
        };
        
        window.addEventListener('scroll', updateActiveLink);
        updateActiveLink();
    }
    
    // Utility: Escape HTML
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new PortfolioApp();
    });
} else {
    new PortfolioApp();
}

// Export for module usage
export default PortfolioApp;
