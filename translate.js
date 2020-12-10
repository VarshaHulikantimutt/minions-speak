var translateButton = document.querySelector("#btn-translate");
var inputText = document.querySelector("#text-input");
var outputText = document.querySelector("#text-output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("There is an Error ", error);
    alert("Something went wrong! Please try again after some time.")
}

function clickHandler(){
    var text = inputText.value; 


    fetch(getTranslationURL(text))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputText.innerText = translatedText;
           })
        .catch(errorHandler)
}

translateButton.addEventListener("click",clickHandler);