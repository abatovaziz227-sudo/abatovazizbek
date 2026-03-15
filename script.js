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
document.addEventListener("DOMContentLoaded", function(){
  console.log("1-rus tili video yuklandi");
});
function askAI(){

let input = document.getElementById("userInput").value;
let chat = document.getElementById("chatBox");

chat.innerHTML += "<p><b>Siz:</b> " + input + "</p>";

let answer = "Men rus tili yordamchisiman.";

if(input.includes("salom")){
answer = "Salom! Sizga rus tili bo'yicha qanday yordam beray?";
}

if(input.includes("privet")){
answer = "Privet rus tilida 'salom' degani.";
}

if(input.includes("rahmat")){
answer = "Rahmat rus tilida 'spasibo'.";
}

chat.innerHTML += "<p><b>AI:</b> " + answer + "</p>";

document.getElementById("userInput").value="";
}
