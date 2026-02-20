const form = document.getElementById('contact-form');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thanks! Your message was captured locally.');
    form.reset();
  });
}
