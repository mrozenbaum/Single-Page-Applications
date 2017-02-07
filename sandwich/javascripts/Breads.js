"use-strict";

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker){
// Private variable to store the different bread prices (obj, with two key values.)
  var breadPrices = {
    "white": 2.00,
    "wheat": 2.00,
    "none": 0.00
};
// Private variable to store the different bread prices
maker.addBread = function (bread){
  console.log(breadPrices[bread]);
  return breadPrices[bread];
};
// Return the new, augmented object with the new method on it
return maker;

})(SandwichMaker);