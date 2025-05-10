// Wait for the DOM to fully load before running any scripts
document.addEventListener('DOMContentLoaded', function () {

    // Select all boxes
    const boxes = document.querySelectorAll('.box');

    // Function to reveal boxes with animation
    function revealBoxes() {
        boxes.forEach((box, index) => {
            // Delay each box reveal to create suspense
            setTimeout(() => {
                box.classList.add('revealed');
            }, index * 500); // Delay increases for each box (500ms between each)
        });
    }

    // Trigger box reveal when the page is loaded
    revealBoxes();

    // Optionally: Trigger the reveal again when user scrolls down to a box
    window.addEventListener('scroll', function () {
        boxes.forEach((box) => {
            const boxPosition = box.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Check if the box is in the visible area of the screen
            if (boxPosition < windowHeight - 50) {
                box.classList.add('revealed');
            }
        });
    });

});
