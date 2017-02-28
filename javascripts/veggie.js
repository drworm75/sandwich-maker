// console.log("I am br eady!")
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var veggiePrices = {
            "friedokra" : .50,
            "ketchup" : .60,
            "macandcheese" : .80,
            "zappschips" : .60
          }

  // Augment the original object with another method
  maker.addVeggie = function(veggieType) {
;     return veggiePrices[veggieType];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
