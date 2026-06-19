document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 40);
    });

    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => observer.observe(el));

    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const inner = item.querySelector('.faq-answer-inner');
        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            faqItems.forEach(i => {
                i.classList.remove('open');
                i.querySelector('.faq-answer').style.maxHeight = null;
            });
            if (!isOpen) {
                item.classList.add('open');
                answer.style.maxHeight = inner.scrollHeight + 'px';
            }
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    document.querySelectorAll('.character-card, .screenshot-row, .feature-card, .pricing-card').forEach(el => {
        el.addEventListener('click', (e) => {
            const link = el.dataset.href;
            if (link) window.location.href = link;
        });
    });
});
