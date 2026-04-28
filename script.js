// script.js - Bible Verse Design Interactive Controller
// =========================================================

/**
 * Bible Verse Design Generator
 * Features:
 * - Toggle biblical design elements on/off
 * - Smooth animations and transitions
 * - Responsive design
 * - Particle effects
 * - Holy glow and ornamental decorations
 */

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const addDesignBtn = document.getElementById('addDesignBtn');
    const removeDesignBtn = document.getElementById('removeDesignBtn');
    const designElements = document.getElementById('designElements');
    const verseCard = document.getElementById('verseCard');
    const particlesContainer = document.getElementById('particles');

    // State
    let isDesignActive = false;

    /**
     * Toggle Design Elements
     */
    function toggleDesign() {
        isDesignActive = !isDesignActive;
        
        if (isDesignActive) {
            showDesign();
        } else {
            hideDesign();
        }
    }

    /**
     * Show Design Elements with Animation
     */
    function showDesign() {
        designElements.style.display = 'block';
        verseCard.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        
        // Staggered entrance animation
        setTimeout(() => {
            document.querySelector('.holy-glow').style.opacity = '1';
            document.querySelector('.holy-glow').style.transform = 'translate(-50%, -50%) scale(1)';
        }, 200);
        
        setTimeout(() => {
            document.querySelectorAll('.vine-decoration').forEach((vine, index) => {
                vine.style.opacity = '1';
                vine.style.transform = 'scale(1)';
            });
        }, 400);
        
        setTimeout(() => {
            document.querySelector('.dove-symbol').style.opacity = '1';
            document.querySelector('.crown-thorns').style.opacity = '1';
        }, 600);
        
        // Update button states
        addDesignBtn.style.display = 'none';
        removeDesignBtn.style.display = 'flex';
        
        // Start particles
        createParticles();
    }

    /**
     * Hide Design Elements with Animation
     */
    function hideDesign() {
        // Fade out elements
        document.querySelector('.holy-glow').style.opacity = '0';
        document.querySelectorAll('.vine-decoration, .dove-symbol, .crown-thorns').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'scale(0)';
        });
        
        setTimeout(() => {
            designElements.style.display = 'none';
        }, 800);
        
        // Update button states
        addDesignBtn.style.display = 'flex';
        removeDesignBtn.style.display = 'none';
        
        // Clear particles
        particlesContainer.innerHTML = '';
    }

    /**
     * Create Floating Particle Effects
     */
    function createParticles() {
        particlesContainer.innerHTML = '';
        
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 4 + 's';
            particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
            particle.innerHTML = ['✨', '⭐', '⚡', '🌟'][Math.floor(Math.random() * 4)];
            particlesContainer.appendChild(particle);
        }
    }

    /**
     * Event Listeners
     */
    addDesignBtn.addEventListener('click', toggleDesign);
    removeDesignBtn.addEventListener('click', toggleDesign);

    // Add hover effects to verse card
    verseCard.addEventListener('mouseenter', function() {
        if (isDesignActive) {
            this.style.transform = 'translateY(-15px) rotateX(5deg) rotateY(5deg) scale(1.02)';
        }
    });

    verseCard.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(-10px) rotateX(2deg) rotateY(2deg)';
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.code === 'Space') {
            e.preventDefault();
            toggleDesign();
        }
    });

    // Initialize particle styles
    const particleStyle = document.createElement('style');
    particleStyle.textContent = `
        .particle {
            position: absolute;
            top: -10%;
            color: rgba(244, 208, 63, 0.8);
            font-size: 1rem;
            pointer-events: none;
            animation: float-up linear infinite;
            opacity: 0;
        }
        @keyframes float-up {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-120vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(particleStyle);

    console.log('🌟 Bible Verse Design Generator initialized! Press SPACEBAR to toggle design.');
});