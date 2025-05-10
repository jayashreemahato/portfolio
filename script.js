// Smooth Scroll Effect for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default anchor behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        const targetSection = document.getElementById(targetId); // Get the section element
        window.scrollTo({
            top: targetSection.offsetTop - 60, // Scroll to the section, accounting for the nav bar height
            behavior: 'smooth' // Smooth scrolling animation
        });
    });
});

// Case File Reveal Effect (Suspense Style)
const caseFiles = document.querySelectorAll('.case-file');

caseFiles.forEach(file => {
    file.style.opacity = 0; // Start with hidden files
    file.style.transition = "opacity 1s ease-in-out"; // Fade-in transition

    file.addEventListener('mouseover', () => {
        file.style.opacity = 1; // Reveal the case file when hovered
    });

    file.addEventListener('mouseout', () => {
        file.style.opacity = 0; // Hide the case file when not hovered
    });
});
