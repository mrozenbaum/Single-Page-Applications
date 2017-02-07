"use-strict";

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker){
// Private variable to store the different veggie prices (obj, with two key values.)
var veggiePrices = {
  "lettuce": 0.50,
  "tomato": 0.50,
  "none": 0.00
};
// Private variable to store the different bread prices
maker.addVeggies = function (veggies){
  console.log(veggiePrices[veggies]);
  return veggiePrices[veggies];
};
// Return the new, augmented object with the new method on it
return maker;

})(SandwichMaker);