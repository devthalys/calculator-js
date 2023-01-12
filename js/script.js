const clickButton = document.querySelector("#buttons-container");

clickButton.addEventListener("click", function (event) {
    event.preventDefault();
    const element = event.target;
    console.log(">>>", element.textContent);
});
