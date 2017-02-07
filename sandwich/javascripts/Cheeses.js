"use-strict";

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker){
// Private variable to store the different cheese prices (obj, with two key values.)
  var cheesePrices = {
  "chedder": 1.00,
  "swiss": 1.00,
  "none": 0.00
};
// Private variable to store the different bread prices
maker.addCheese = function (cheese){
  console.log(cheesePrices[cheese]);
  return cheesePrices[cheese];
};
// Return the new, augmented object with the new method on it
return maker;

})(SandwichMaker);