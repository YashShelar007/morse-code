var buttonTranslate = document.querySelector("#button-translate");
var textInput = document.querySelector("#txt-input");

function clickHandler() {
    console.log("clicked!");
    console.log("The user has entered " + textInput.value);
};

buttonTranslate.addEventListener("click", clickHandler); 