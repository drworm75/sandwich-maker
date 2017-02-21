// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {
  					"Roast Beef" : 1.20,
  					"Turkey" : .90
					};

  // Augment the original object with another method
  maker.addMeat = function() {
    return meatPrices;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);