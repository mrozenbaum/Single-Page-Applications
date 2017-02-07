"use-strict";
var SandwichMaker = (function() {

  // Private variable to store the price
  var totalPrice = 0;

  // Return the public interface that other code can interact with
  return {
    addTopping: function(toppingPrice) {
      totalPrice += toppingPrice;
      console.log("Total sandwich price is:" + totalPrice);
      document.getElementById("finalSandwich").innerHTML = `<h3>Total Sandwich price is $ ${totalPrice}</h3>`;
    }
  };
})();