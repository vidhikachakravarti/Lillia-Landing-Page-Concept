// Lillia Landing Page - Interactive Features v2

document.addEventListener('DOMContentLoaded', function() {

    // ========================================
    // Navigation Scroll Effect
    // ========================================
    const nav = document.getElementById('nav');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // ========================================
    // Mobile Navigation Toggle
    // ========================================
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close menu when clicking a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // ========================================
    // Smooth Scroll for Anchor Links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const navHeight = nav.offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // Solution Tabs
    // ========================================
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // ========================================
    // Intersection Observer for Fade-in Animations
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                fadeObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply fade-in to sections
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        // Skip first section (hero is visible immediately)
        if (index > 0) {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            fadeObserver.observe(section);
        }
    });

    // Apply fade-in to cards
    const cards = document.querySelectorAll('.card, .problem-card, .why-card, .audience-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        fadeObserver.observe(card);
    });

    // ========================================
    // Number Counter Animation for Stats
    // ========================================
    const statNumbers = document.querySelectorAll('.stat-number, .impact-number');

    const countUpObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const text = target.textContent;

                // Only animate if it contains numbers
                if (/\d/.test(text)) {
                    animateNumber(target, text);
                }

                countUpObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        countUpObserver.observe(stat);
    });

    function animateNumber(element, finalText) {
        // Extract number from text
        const match = finalText.match(/[\d,]+/);
        if (!match) return;

        const numberStr = match[0].replace(/,/g, '');
        const number = parseInt(numberStr);

        if (isNaN(number)) return;

        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = number / steps;
        let current = 0;
        let step = 0;

        const timer = setInterval(() => {
            step++;
            current += increment;

            if (step >= steps) {
                clearInterval(timer);
                element.textContent = finalText;
            } else {
                const displayNumber = Math.floor(current);
                const formatted = displayNumber.toLocaleString();
                element.textContent = finalText.replace(/[\d,]+/, formatted);
            }
        }, duration / steps);
    }

    // ========================================
    // Parallax Effect for Background Elements
    // ========================================
    const heroBackground = document.querySelector('.hero-background');

    if (heroBackground) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;
            heroBackground.style.transform = `translateY(${rate}px)`;
        });
    }

    // ========================================
    // Add Hover Effect to Glass Cards
    // ========================================
    const glassCards = document.querySelectorAll('.glass-card');

    glassCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });

    // ========================================
    // Timeline Progress Indicator
    // ========================================
    const timelineItems = document.querySelectorAll('.timeline-item');

    const timelineObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.3 });

    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
        timelineObserver.observe(item);
    });

    // ========================================
    // CTA Button Pulse Effect
    // ========================================
    const ctaButtons = document.querySelectorAll('.btn-glow');

    ctaButtons.forEach(button => {
        setInterval(() => {
            button.style.animation = 'pulse 1.5s ease-in-out';
            setTimeout(() => {
                button.style.animation = '';
            }, 1500);
        }, 5000);
    });

    // ========================================
    // Lazy Load Images (if any are added later)
    // ========================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // ========================================
    // Active Navigation Link Based on Scroll
    // ========================================
    const navLinksItems = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section[id]');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinksItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // ========================================
    // Performance Optimization: Debounce Scroll
    // ========================================
    function debounce(func, wait = 10, immediate = true) {
        let timeout;
        return function() {
            const context = this;
            const args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    // Apply debounce to scroll-heavy functions
    window.addEventListener('scroll', debounce(function() {
        // Heavy scroll operations go here if needed
    }, 15));

    // ========================================
    // Console Welcome Message
    // ========================================
    console.log('%cLillia Health', 'color: #7848FE; font-size: 24px; font-weight: bold;');
    console.log('%cAI-Powered Chronic Care at Scale', 'color: #6B7280; font-size: 14px;');
    console.log('%cBuilt with modern web technologies', 'color: #9CA3AF; font-size: 12px;');
});

// ========================================
// Add CSS for Active Nav Link
// ========================================
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--color-primary);
    }

    .nav-link.active::after {
        width: 100%;
    }

    @media (max-width: 767px) {
        #navLinks {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid var(--color-gray-200);
            padding: 1.5rem;
            flex-direction: column;
            gap: 1rem;
            box-shadow: var(--shadow-lg);
        }

        #navLinks.active {
            display: flex;
        }

        .nav-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translateY(8px);
        }

        .nav-toggle.active span:nth-child(2) {
            opacity: 0;
        }

        .nav-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translateY(-8px);
        }
    }
`;
document.head.appendChild(style);
