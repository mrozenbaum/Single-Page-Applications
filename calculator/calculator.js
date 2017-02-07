"use-strict";

// var for first num the user provides. 'firstNum' is ID of input in html.
var firstNum = document.getElementById("firstNum");
// var for second num the user provides. 'secondNum' is ID of input in html.
var secondNum= document.getElementById("secondNum");
// var answer is for 'output' ID in html (answer shows in html) 
var answer = document.getElementById("output");
//////////////////--BUTTONS--/////////////////////////////////
// 'add' is ID of add button in html
var addButton = document.getElementById("add");
// firstNum + secondNum are ID of input in html. 'value' is the two num's user provides. 
add.addEventListener("click", function(event){
    var sum = parseInt(firstNum.value) + parseInt(secondNum.value);
    answer.innerHTML = sum;
 })   
// 'subtract' is ID of subrtact button in html
var subButton = document.getElementById("subtract");
subtract.addEventListener("click", function(event){
    var sum = parseInt(firstNum.value) - parseInt(secondNum.value);
    answer.innerHTML = sum;
})
// 'subtract' is ID of subtract button in html
var multButton = document.getElementById("divide");
divide.addEventListener("click", function(event){
    var sum = parseInt(firstNum.value) / parseInt(secondNum.value);
    answer.innerHTML = sum;
})
// 'multiply' is ID of multiply button in html
var divButton = document.getElementById("multiply");
multiply.addEventListener("click", function(event){
    var sum = parseInt(firstNum.value) * parseInt(secondNum.value);
    answer.innerHTML = sum;
  })