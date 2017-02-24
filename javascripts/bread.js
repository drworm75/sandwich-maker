console.log("I am bready!")
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var breadPrices = {
  					bunny : .50,
  					hoho : .60,
            twinkie : .80,
            wonder : .60
					}

  // Augment the original object with another method
  maker.addBread = function(x) {
;    	return breadPrices;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);
