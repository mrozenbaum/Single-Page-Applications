
"use strict";
    
var Translator = (function(){
	var spanishWords = {merry: "Feliz", christmas: "Navidad", };
	var translatedText = [];

	return {
		translateSpanish: function(splitTextArea) {
			for (var i = 0; i < splitTextArea.length; i++) {
				translatedText.push(spanishWords[splitTextArea[i]]);
				if (spanishWords[splitTextArea[i]] === undefined) {
					translatedText.pop(spanishWords[splitTextArea[i]]);
				}
			}
		var finished = translatedText.join(" ");
		return finished;	
		}
	}
})();
