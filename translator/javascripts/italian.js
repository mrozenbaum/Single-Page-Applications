"use strict";

var Translator = (function(originalTranslate) {
    var italianWords = {
            merry: "buon",     
            christmas: "natale",
            happy: "felice",    
            new: "nuovo",
            year: "anno",
            thanksgiving: "ringraziamento",
            hanukkah: "hanukkah",
            and: "e"
    };

    originalTranslate.translateItalian = function(input) {
        var newArray = [];
        for (var i = 0; i < input.length; i++) {
            console.log[i];
            newArray.push(italianWords[input[i]]);
            newArray.push(" ");
        }
        var finished = newArray.join("");
        return finished;
    };

    return originalTranslate;

})(Translator);
