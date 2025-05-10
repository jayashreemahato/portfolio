// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    
    // --- Typewriter Effect for Header ---
    const headerText = "Crime Thriller Portfolio";
    let index = 0;
    
    function typeWriter() {
        if (index < headerText.length) {
            document.querySelector('header h1').innerHTML += headerText.charAt(index);
            index++;
            setTimeout(typeWriter, 150); // Speed of typing
        }
    }
    typeWriter();

    // --- Reveal Boxes on Scroll ---
    const boxes = document.querySelectorAll('.box');

    function revealBoxes() {
        boxes.forEach((box) => {
            const boxTop = box.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (boxTop < windowHeight - 50) {
                box.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', revealBoxes);

    // Initial call to show boxes if already in view
    revealBoxes();

    // --- Modal Logic ---
    // Create Modal Elements
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h3 class="modal-title">Case Details</h3>
            <p class="modal-description">This is a mysterious case, yet to be uncovered...</p>
        </div>
    `;
    document.body.appendChild(modal);

    // Close Modal Logic
    const closeModal = document.querySelector('.close');
    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // --- Open Modal with Dynamic Content ---
    boxes.forEach((box) => {
        box.addEventListener('click', () => {
            const title = box.querySelector('h3').innerText;
            const description = box.querySelector('p').innerText;
            document.querySelector('.modal-title').innerText = title;
            document.querySelector('.modal-description').innerText = description;
            modal.style.display = "block";
        });
    });
});
