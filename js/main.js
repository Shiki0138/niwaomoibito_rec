// Main JavaScript
console.log('Niwaomoibito Recruitment LP Loaded');

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ================================
// SCROLL ANIMATIONS
// ================================

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
};

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Optionally stop observing after animation
            // animationObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply animations to elements
document.addEventListener('DOMContentLoaded', () => {
    // Section titles - fade up
    document.querySelectorAll('.section-title').forEach(el => {
        el.classList.add('animate-on-scroll');
        animationObserver.observe(el);
    });

    // Section subtitles - fade up
    document.querySelectorAll('.section-subtitle').forEach(el => {
        el.classList.add('animate-on-scroll');
        animationObserver.observe(el);
    });

    // Solution cards - staggered fade up
    document.querySelectorAll('.solution__card').forEach((el, index) => {
        el.classList.add('animate-stagger');
        el.style.transitionDelay = `${index * 0.1}s`;
        animationObserver.observe(el);
    });

    // Company items - staggered fade up
    document.querySelectorAll('.company__item').forEach((el, index) => {
        el.classList.add('animate-stagger');
        el.style.transitionDelay = `${index * 0.15}s`;
        animationObserver.observe(el);
    });

    // Roadmap steps - slide from left
    document.querySelectorAll('.roadmap__step').forEach((el, index) => {
        el.classList.add('animate-slide-left');
        el.style.transitionDelay = `${index * 0.15}s`;
        animationObserver.observe(el);
    });

    // Support items - slide from left
    document.querySelectorAll('.support__item').forEach((el, index) => {
        el.classList.add('animate-slide-left');
        el.style.transitionDelay = `${index * 0.1}s`;
        animationObserver.observe(el);
    });

    // Story content - fade up
    document.querySelectorAll('.story__content').forEach(el => {
        el.classList.add('animate-on-scroll');
        animationObserver.observe(el);
    });

    // Testimonial cards - scale up
    document.querySelectorAll('.testimonial__card').forEach(el => {
        el.classList.add('animate-scale');
        animationObserver.observe(el);
    });

    // Voice cards - staggered fade up
    document.querySelectorAll('.voice__card').forEach((el, index) => {
        el.classList.add('animate-stagger');
        el.style.transitionDelay = `${index * 0.15}s`;
        animationObserver.observe(el);
    });

    // Owner content - slide from right
    document.querySelectorAll('.owner__content').forEach(el => {
        el.classList.add('animate-slide-right');
        animationObserver.observe(el);
    });

    // Conditions table - fade up
    document.querySelectorAll('.conditions__table').forEach(el => {
        el.classList.add('animate-on-scroll');
        animationObserver.observe(el);
    });

    // Target list - fade up
    document.querySelectorAll('.target__list').forEach(el => {
        el.classList.add('animate-on-scroll');
        animationObserver.observe(el);
    });

    // FAQ items - staggered fade up
    document.querySelectorAll('.faq__item').forEach((el, index) => {
        el.classList.add('animate-stagger');
        el.style.transitionDelay = `${index * 0.08}s`;
        animationObserver.observe(el);
    });

    // CTA box - scale up
    document.querySelectorAll('.cta__box').forEach(el => {
        el.classList.add('animate-scale');
        animationObserver.observe(el);
    });
});

// Parallax effect for work-photo section
const parallaxSections = document.querySelectorAll('.work-photo.parallax');

function updateParallax() {
    parallaxSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Only apply effect when section is in viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
            const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
            const offset = (scrollProgress - 0.5) * 100;
            section.style.backgroundPositionY = `${50 + offset * 0.3}%`;
        }
    });
}

// Smooth scroll-linked animations for text content
function updateScrollAnimations() {
    const scrollY = window.pageYOffset;
    const windowHeight = window.innerHeight;

    // Animate story content with subtle float
    document.querySelectorAll('.story__content p').forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight && rect.bottom > 0) {
            const progress = (windowHeight - rect.top) / windowHeight;
            const translateY = Math.max(0, (1 - progress) * 15);
            el.style.transform = `translateY(${translateY}px)`;
            el.style.opacity = Math.min(1, progress * 1.5);
        }
    });

    // Animate solution cards with subtle lift
    document.querySelectorAll('.solution__card').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight && rect.bottom > 0) {
            const progress = (windowHeight - rect.top) / windowHeight;
            const scale = 0.95 + (Math.min(1, progress) * 0.05);
            if (el.classList.contains('is-visible')) {
                el.style.transform = `translateY(0) scale(${scale})`;
            }
        }
    });

    // Animate company items with hover-like float
    document.querySelectorAll('.company__item').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight && rect.bottom > 0) {
            const progress = (windowHeight - rect.top) / windowHeight;
            const translateY = Math.max(-3, (1 - progress) * 20 - 3);
            if (el.classList.contains('is-visible')) {
                el.style.transform = `translateY(${translateY}px)`;
            }
        }
    });

    // Animate testimonial card with gentle rotation
    document.querySelectorAll('.testimonial__card').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight && rect.bottom > 0) {
            const progress = (windowHeight - rect.top) / windowHeight;
            const rotate = (1 - Math.min(1, progress)) * 2;
            if (el.classList.contains('is-visible')) {
                el.style.transform = `scale(1) rotate(${rotate}deg)`;
            }
        }
    });

    // Animate voice cards with subtle wave
    document.querySelectorAll('.voice__card').forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight && rect.bottom > 0) {
            const progress = (windowHeight - rect.top) / windowHeight;
            const offset = Math.sin(progress * Math.PI) * 5;
            if (el.classList.contains('is-visible')) {
                el.style.transform = `translateY(${-offset}px)`;
            }
        }
    });

    // Animate CTA box with subtle pulse
    document.querySelectorAll('.cta__box').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
            const progress = (windowHeight - rect.top) / windowHeight;
            const scale = 1 + Math.sin(progress * Math.PI * 0.5) * 0.02;
            if (el.classList.contains('is-visible')) {
                el.style.transform = `scale(${scale})`;
            }
        }
    });
}

// Throttle scroll events for performance
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            updateParallax();
            updateScrollAnimations();
            ticking = false;
        });
        ticking = true;
    }
});

// Initial call
updateParallax();
updateScrollAnimations();
