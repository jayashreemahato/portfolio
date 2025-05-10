// Scroll Animation
const boxes = document.querySelectorAll('.box');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

boxes.forEach(box => {
    observer.observe(box);
});

// Modal Logic
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const closeBtn = document.querySelector('.close');

boxes.forEach(box => {
    box.addEventListener('click', () => {
        modal.style.display = 'block';
        modalContent.querySelector('.modal-title').innerText = box.querySelector('h3').innerText;
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
