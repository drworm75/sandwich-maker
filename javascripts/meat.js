// console.log("Steak me home tonight!")
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {
  					beaver : 1.20,
  					opossum : .90,
  					squirrel : 1.05,
  					mayo : .50
					}

  // Augment the original object with another method
  maker.addMeat = function(x) {
;    	return meatPrices;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);




