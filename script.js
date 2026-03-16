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

