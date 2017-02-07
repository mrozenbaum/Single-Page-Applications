"use-strict";
// Making a variable for each <select> element in html by ID.
// Connecting JS file to <select> elements in html. 
var breadChoice = document.getElementById("bread");
var meatChoice = document.getElementById("meat");
var cheeseChoice = document.getElementById("cheese");
var condimentsChoice = document.getElementById("condiments");
var veggieChoice = document.getElementById("veggies");
// Variable to hold the final price of sandwich. Default to 0.
var finalSandwichPrice = 0;
// Variable to hold topping that the user selects.
var selectedTopping;

////////////////--BREAD--//////////////////////
// Adding an eventlistener for change event
// and gettting the value of the topping from augmented IIFE
breadChoice.addEventListener("change", function (event) {
  if (event.target.checked === true) {
      // Get the value from html ID in the DOM
  selectedTopping = event.target.id;
  // Determine the price of the topping chosen
  selectedTopping = SandwichMaker.addBread(selectedTopping);
  console.log("The bread price is: $", selectedTopping);
  // Add the topping to the SandwichMaker to increase the total price of sandwich
  SandwichMaker.addTopping(selectedTopping);
  }
});
/////////////////-- MEAT--//////////////////////////
// Adding an eventlistener for change event
// and gettting the value of the topping from augmented IIFE
meatChoice.addEventListener("change", function (event){
  if (event.target.checked === true) {
    // Get the value from html ID in the DOM
    selectedTopping = event.target.id;
   // Determine the price of the meat selected from meat OBJ 
   selectedTopping = SandwichMaker.addMeat(selectedTopping);
   console.log("The meat price is: $", selectedTopping);
   // Add the topping to the SandwichMaker to increase the total price of sandwich
   SandwichMaker.addTopping(selectedTopping);
  }
});
//////////////////--CHEESE--/////////////////////////
// Adding an eventlistener for change event
// and gettting the value of the topping from augmented IIFE
cheeseChoice.addEventListener("change", function (event){
  if (event.target.checked === true) {
    // Get value of chosen cheese in DOM from html ID
    selectedTopping = event.target.id;
    // Determine the price of the cheese selected from cheese OBJ
    selectedTopping = SandwichMaker.addCheese(selectedTopping);
    console.log("The cheese price is: $", selectedTopping);
    // Add the topping to the SandwichMaker to increase the total price of sandwich
    SandwichMaker.addTopping(selectedTopping);
  }
});
///////////////--CONDIMENTS--////////////////////////
// Adding an eventlistener for change event
// and gettting the value of the topping from augmented IIFE
condimentsChoice.addEventListener("change", function (event){
  if (event.target.checked === true) {
    // Get value of chosen cheese in DOM from html ID
    selectedTopping = event.target.id;
    // Determine price of the condiments selected from condiments OBJ.
    selectedTopping = SandwichMaker.addCondiments(selectedTopping);
    console.log("The condiments price is: $", selectedTopping);
    // Add the topping to the SandwichMaker to increase the total price of sandwich
    SandwichMaker.addTopping(selectedTopping);
  }
});
////////////////////--VEGGIES--//////////////////////
// Adding an eventlistener for change event
// and gettting the value of the topping from augmented IIFE
veggieChoice.addEventListener("change", function (event){
  if (event.target.checked === true) {
    // Get value of chosen veggies in DOM from html ID
    selectedTopping = event.target.id;
    // Determine price of the veggies selected from veggies OBJ
    selectedTopping = SandwichMaker.addVeggies(selectedTopping);
    console.log("The veggies price is: $", selectedTopping);
    // Add the topping to the SandWichMaker to increase the total price of sandwich
    SandwichMaker.addTopping(selectedTopping);
  }
});
