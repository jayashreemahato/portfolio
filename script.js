document.addEventListener("DOMContentLoaded", function () {
    // Select the button (add one in the HTML file)
    const button = document.createElement("button");
    button.textContent = "Click me!";
    document.body.appendChild(button);

    button.addEventListener("click", function () {
        document.body.style.backgroundColor = "lightblue";
    });
});
