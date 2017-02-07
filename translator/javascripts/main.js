//////////////////////////////////////////////////////////////
//We may have to change some of these functions to IIFEs later
//////////////////////////////////////////////////////////////

var showOutput = document.getElementById("showMe");

var translateId = document.getElementById("translate");  //this is the submit button
translateId.addEventListener("click", selectLanguage);

function selectLanguage() {
	var selectBox = document.getElementById("language");
	var textArea = document.getElementById("area").value;
	if (selectBox.value === "french") {
		frenchTranslate(textArea);
	} else if (selectBox.value === "italian") {
		italianTranslate(textArea);
	} else if (selectBox.value === "spanish") {
		spanishTranslate(textArea);
	};
};

var answer;

function frenchTranslate(textArea) {
	var splitTextArea = textArea.toLowerCase().split(" ");
	showOutput.innerHTML = Translator.translateFrench(splitTextArea);
};

function italianTranslate(textArea) {
	var splitTextArea = textArea.toLowerCase().split(" ");
	showOutput.innerHTML = Translator.translateItalian(splitTextArea);
};

function spanishTranslate(textArea) {
	var splitTextArea = textArea.toLowerCase().split(" ");
	showOutput.innerHTML = Translator.translateSpanish(splitTextArea);
};



