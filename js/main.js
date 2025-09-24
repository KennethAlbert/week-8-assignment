document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Animate images when they enter viewport
    const images = document.querySelectorAll('img');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    images.forEach(img => observer.observe(img));

    // Animate text (h1, h2, h3, p, ul, label) when in viewport
    const animatedEls = document.querySelectorAll('h1, h2, h3, p, ul, label, .service-item');
    animatedEls.forEach(el => {
        observer.observe(el);
    });

    // Button click animation (optional, for feedback)
    document.querySelectorAll('.cta-button, button[type="submit"]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            btn.style.transform = 'scale(0.97)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 150);
        });
    });

    // Form submission animation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Show success message
            let msg = document.createElement('div');
            msg.className = 'form-success';
            msg.textContent = 'Message sent successfully!';
            form.appendChild(msg);
            setTimeout(() => {
                msg.remove();
                form.reset();
            }, 2000);
        });
    });
});