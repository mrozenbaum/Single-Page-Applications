"use-strict";

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
// Private variable to store the different meat prices (obj, with two key values.)
var meatPrices = {
    "turkey": 2.00,
    "ham": 2.00,
    "none": 0.00
};

// Private variable to store the different bread prices
maker.addMeat = function (meat){
  console.log(meatPrices[meat])
  return meatPrices[meat];
};
// Return the new, augmented object with the new method on it
return maker;

})(SandwichMaker);
