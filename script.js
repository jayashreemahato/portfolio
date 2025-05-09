document.querySelector('.cta-button').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#work').scrollIntoView({ behavior: 'smooth' });
});
