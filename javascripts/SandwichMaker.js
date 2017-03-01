var SandwichMaker = (function() {

  // Private variable to store the price
  var totalPrice = {
  					"breads" : 0,
  					"cheeses" : 0,
  					"condiments" : 0,
  					"meats" : 0,
  					"veggies" : 0	
  };

  var amount = document.getElementById("amount");

  // Return the public interface that other code can interact with
  return {
    addTopping: function(toppingKey, toppingTotal) {
    	totalPrice[toppingKey] = toppingTotal;
    	var finalPrice = totalPrice.breads + totalPrice.cheeses +totalPrice.condiments + totalPrice.meats + totalPrice.veggies;
    	
 
      console.log("Total" , totalPrice)
      amount.innerHTML = finalPrice;
    }
  };
})();

