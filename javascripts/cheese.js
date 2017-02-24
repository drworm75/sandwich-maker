console.log("Take it cheesy!")
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different cheese prices
  var cheesePrices = {
  					cheesewhiz : .75,
  					government : .00,
            squeezycheese : .95,
            velveeta : 1.00
					}

  // Augment the original object with another method
  maker.addCheese = function(x) {
;    	return cheesePrices;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);