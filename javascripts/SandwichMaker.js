var SandwichMaker = (function() {

  // Private variable to store the price
  var totalPrice = {
  					"breads" : 0,
  					"cheeses" : 0,
  					"condiments" : 0,
  					"meats" : 0,
  					"veggies" : 0	
  };

  // Return the public interface that other code can interact with
  return {
    addTopping: function(toppingKey, toppingTotal) {
    	totalPrice[toppingKey] = toppingTotal;
    	console.log("Here's a total!", totalPrice.breads + totalPrice.cheeses);
 
      console.log("Total" , totalPrice)
    }
  };
})();

