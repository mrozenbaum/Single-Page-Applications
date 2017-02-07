"use-strrict";
console.log("Hello Jquery!");

// Var for create button
var $createButton = $(".createButton");
// Var for delete button
var $deleteButton = $(".deleteButton");
// Var for textarea
var $textArea = $(".textArea");
// Var for new card element
var $newElement = $("<textarea></textarea>").addClass("newElement");
// Event listener for create button
$(".createButton").click (function(){
  // Preventing default behavior of brower
  event.preventDefault();
  console.log($createButton);
  // new element appears when create button is clicked
  $newElement.insertAfter(".textArea");
});
// Event listener for delete button
$(".deleteButton").click(function(){
  // Preventing default behavior of brower
  event.preventDefault();
  console.log($deleteButton);
  // Removing text area
  $textArea.remove(".textArea");

});