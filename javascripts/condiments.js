// console.log("Menty Fresh!")
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different mayo prices
  var mayoPrices = {
  					mayo : .75,
  					doublemayo : .00,
            triplemayo : .95,
            mirclewhip : 1.00
					}

  // Augment the original object with another method
  maker.addmayo = function(x) {
;    	return mayoPrices;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);