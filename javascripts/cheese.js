// Let's augment the SandWichMaker IIFE
var SandwichMaker = (function(maker) {
  // Private variable to store the different cheese prices
  var cheesePrices = {
  					"cheesewhiz" : .75,
  					"government" : .00,
            "squeezy" : .95,
            "velveeta" : 1.00
          }      
  // Augment the original object with another method. Call with SandwichMaker.addCheese().          
  maker.addCheese = function(cheeseType) {
      //When called, this function returns the price of the key passed through. 
    	return cheesePrices[cheeseType];
  };
  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);