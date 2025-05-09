// =============================
// Smooth Scrolling
// =============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// =============================
// Form Submission Alert
// =============================
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevents the form from refreshing the page
  alert("Thank you for reaching out! I'll get back to you soon.");
  form.reset(); // Clears the form fields after submission
});
