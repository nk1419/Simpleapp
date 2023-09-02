document.addEventListener("DOMContentLoaded", function () {
    const outputElement = document.getElementById("output");
    const changeTextButton = document.getElementById("changeTextBtn");

    changeTextButton.addEventListener("click", function () {
        outputElement.innerText = "Text Changed!";
    });
});
