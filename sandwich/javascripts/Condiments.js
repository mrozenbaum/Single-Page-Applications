"use-strict";

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
// Private variable to store the different condiments prices (obj, with two key values.)
  var condimentsPrices = {
  "mayo": 0.50,
  "mustard": 0.50,
  "none": 0.00
};
// Private variable to store the different bread prices
maker.addCondiments = function(condiments) {
  console.log(condimentsPrices[condiments]);
  return condimentsPrices[condiments];
};
// Return the new, augmented object with the new method on it
return maker;

})(SandwichMaker);