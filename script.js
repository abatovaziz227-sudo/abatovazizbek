// Dark / Light mode
const toggle = document.querySelector('.theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light');
    toggle.textContent = '☀️';
}

toggle.addEventListener('click', () => {
    body.classList.toggle('light');
    if (body.classList.contains('light')) {
        toggle.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    } else {
        toggle.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    }
});
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Forma yuborish (hozircha faqat alert)
document.getElementById('contact-form') ? .addEventListener('submit', e => {
    e.preventDefault();
    alert('Xabaringiz uchun rahmat! Tez orada javob beraman.');
    e.target.reset();
});
