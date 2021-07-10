var buttonTranslate = document.querySelector("#button-translate");
var textInput = document.querySelector("#txt-input");
var ouputText = document.querySelector("#output-txt");

function clickHandler() {
    ouputText.innerText = "afswgvawfwaf " + textInput.value;
};

buttonTranslate.addEventListener("click", clickHandler); 