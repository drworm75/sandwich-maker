// Let's augment the SandWichMaker IIFE
var SandwichMaker = (function(maker) {
  // Private variable to store the different mayo prices
  var mayoPrices = {
  					"mayo" : .75,
  					"doublemayo" : .85,
            "triplemayo" : .95,
            "miriclewhip" : 1.00
					}
  // Augment the original object with another method
  maker.addMayo = function(mayoType) {
      //When called, this function returns the price of the key passed through. 
    	return mayoPrices[mayoType];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);