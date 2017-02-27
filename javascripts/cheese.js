var SandwichMaker = (function(maker) {
  var cheesePrices = {
  					"cheesewhiz" : .75,
  					"government" : .00,
            "squeezy" : .95,
            "velveeta" : 1.00
          }
  var toppingPrice = 0;       

  maker.addCheese = function(cheeseType) {

    	return cheesePrices[cheeseType];
  };
  return maker;
})(SandwichMaker);