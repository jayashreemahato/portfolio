// JavaScript for Interactive Features

// Function to toggle the dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}

// Function to show a popup when a section is clicked
function showPopup(section) {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `<div class="popup-content">
                        <span class="close-btn" onclick="closePopup()">×</span>
                        <h2>${section} Details</h2>
                        <p>This section contains more detailed information on ${section}.</p>
                      </div>`;
    document.body.appendChild(popup);
}

// Function to close the popup
function closePopup() {
    const popup = document.querySelector('.popup');
    if (popup) {
        popup.remove();
    }
}

// Function to animate elements as they appear in the viewport
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

// Event listener for scroll to trigger animations
window.addEventListener('scroll', animateOnScroll);

// Event listener for document ready to initialize
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll(); // Initialize animation on load

    // Adding event listeners to sections for popup
    const sections = document.querySelectorAll('.section-title');
    sections.forEach(section => {
        section.addEventListener('click', () => {
            showPopup(section.textContent);
        });
    });
});
