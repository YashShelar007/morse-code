var buttonTranslate = document.querySelector("#button-translate");
var textInput = document.querySelector("#txt-input");
var ouputText = document.querySelector("#output-txt");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
    return  (serverURL + "?" + "text=" + text);
};



function clickHandler() {
    var inputText = textInput.value;

    //server call
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => ouputText.innerText = json.contents.translated)
    .catch(error => {console.log("error occured" + error); 
    alert("something went wrong. Please try again later");}
    );

};

buttonTranslate.addEventListener("click", clickHandler); 