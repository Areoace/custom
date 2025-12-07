// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Mobile menu toggle
const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
btn?.addEventListener('click', () => {
  menu.classList.toggle('open');
});

// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// Fake contact form submission
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');
form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  statusEl.textContent = 'Sending…';
  await new Promise(r => setTimeout(r, 800));
  statusEl.textContent = 'Thanks! I will get back to you shortly.';
  form.reset();
});