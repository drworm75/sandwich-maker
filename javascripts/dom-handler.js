console.log("JS ready to script")
// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the bread options
var breadChooser = document.getElementById("bread-chooser");
// Get a reference to the <select> element that has all the cheese options
var cheeseChooser = document.getElementById("cheese-chooser");
// Get a reference to the <select> element that has all the condiments options
var mayoChooser = document.getElementById("mayo-chooser");
// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meat-chooser");
// Get a reference to the <select> element that has all the veggies options
var veggieChooser = document.getElementById("veggie-chooser");


// Get a reference to the ingredient list div
var breadSelection = document.getElementById("bread-selection");
var cheeseSelection = document.getElementById("cheese-selection");
var mayoSelection = document.getElementById("mayo-selection");
var meatSelection = document.getElementById("meat-selection");


// document.addEventListener('DOMContentLoaded', function () {
//       document.querySelector('#showAlert').addEventListener('change', changeHandler);
// });

function working() {
}

/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/

breadChooser.addEventListener("change", function(event) {
		var selectedBreads = []
	for (var i = 0; i < breadChooser.childNodes.length; i++) {
		if (breadChooser.childNodes[i].checked === true) {
			selectedBreads.push(breadChooser.childNodes[i].value)
		}
	}
	breadSelection.innerHTML = `will be served on delicious ${selectedBreads} bread `;

  // Determine the price of the topping chosen

  // Add the topping to the SandwichMaker to increase the total price
});

cheeseChooser.addEventListener("change", function(event) {
		var selectedCheeses = []
	for (var i = 0; i < cheeseChooser.childNodes.length; i++) {
		if (cheeseChooser.childNodes[i].checked === true) {
			selectedCheeses.push(cheeseChooser.childNodes[i].value)
		}
	}
	cheeseSelection.innerHTML = `with tangy ${selectedCheeses} cheese `;

  // Determine the price of the topping chosen

  // Add the topping to the SandwichMaker to increase the total price
});

mayoChooser.addEventListener("change", function(event) {
		var selectedMayo = []
	for (var i = 0; i < mayoChooser.childNodes.length; i++) {
		if (mayoChooser.childNodes[i].checked === true) {
			selectedMayo.push(mayoChooser.childNodes[i].value)
		}
	}
	mayoSelection.innerHTML = `and topped with creamy ${selectedMayo} `;

  // Determine the price of the topping chosen

  // Add the topping to the SandwichMaker to increase the total price
});

meatChooser.addEventListener("change", function(event) {
		var selectedMeats = []
  // Get the value chosen from the DOM
  // SandwichMaker.addMeat();
 //  selectedTopping = event.target.value;
	// console.log("Is checked?", event.target.checked);
	// console.log("Value", selectedTopping)
	for (var i = 0; i < meatChooser.childNodes.length; i++) {
		if (meatChooser.childNodes[i].checked === true) {
			selectedMeats.push(meatChooser.childNodes[i].value)
		}
	}

	meatSelection.innerHTML = `Your ${selectedMeats} sandwich`;


  // Determine the price of the topping chosen

  // Add the topping to the SandwichMaker to increase the total price
});

