document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initial Hero Text Animation
    const heroElements = document.querySelectorAll('.anim-text');
    heroElements.forEach((el, i) => {
        setTimeout(() => {
            el.classList.add('reveal');
        }, 300 * i);
    });

    // 2. Intersection Observer for Project Cards
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                // Optional: Stop observing after it appears
                projectObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        projectObserver.observe(card);
    });
});