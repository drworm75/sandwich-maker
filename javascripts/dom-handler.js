// console.log("JS ready to script")
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
var veggieSelection = document.getElementById("veggie-selection");

breadChooser.addEventListener("change", function(event) {
		var selectedBreads = []
		var selectedBreadsHtml = []
		var toppingPriceTotals = [];
		var toppingTotal = 0;
		var toppingKey = "breads";

	for (var i = 0; i < breadChooser.childNodes.length; i++) {
		if (breadChooser.childNodes[i].checked === true) {
			selectedBreads.push(breadChooser.childNodes[i].value)
			selectedBreadsHtml.push(breadChooser.childNodes[i].nextSibling.data)
			console.log(selectedBreadsHtml);
		}
	}
	for (var j = 0; j < selectedBreads.length; j++) {
		toppingPriceTotals.push(SandwichMaker.addBread(selectedBreads[j]));
		// console.log(SandwichMaker.addBread(selectedBreads[j]));
    }
	for (var k = 0; k < toppingPriceTotals.length; k++) {
		console.log(toppingTotal += toppingPriceTotals[k]);
	}
	SandwichMaker.addTopping(toppingKey, toppingTotal);
	breadSelection.innerHTML = `will be served on delicious ${selectedBreadsHtml} bread `;
});

cheeseChooser.addEventListener("change", function(event) {
		var selectedCheeses = []
		var selectedCheesesHtml = [];
		var toppingPriceTotals = [];
		var toppingTotal = 0;
		var toppingKey = "cheeses";

	for (var i = 0; i < cheeseChooser.childNodes.length; i++) {
		if (cheeseChooser.childNodes[i].checked === true) {
			selectedCheeses.push(cheeseChooser.childNodes[i].value)
			selectedCheesesHtml.push(cheeseChooser.childNodes[i].nextSibling.data)
			console.log(selectedCheesesHtml);
		}
	}
	for (var j = 0; j < selectedCheeses.length; j++) {
		toppingPriceTotals.push(SandwichMaker.addCheese(selectedCheeses[j]));
		console.log(selectedCheeses);

    }
	for (var k = 0; k < toppingPriceTotals.length; k++) {
		// console.log(toppingPriceTotals);
		toppingTotal += toppingPriceTotals[k];
	}
	SandwichMaker.addTopping(toppingKey, toppingTotal);
	cheeseSelection.innerHTML = `with tangy ${selectedCheesesHtml} cheese `;
});

mayoChooser.addEventListener("change", function(event) {
		var selectedMayos = []
		var toppingPriceTotals = [];
		var toppingTotal = 0;
		var toppingKey = "condiments";

	for (var i = 0; i < mayoChooser.childNodes.length; i++) {
		if (mayoChooser.childNodes[i].checked === true) {
			selectedMayos.push(mayoChooser.childNodes[i].value)
		}
	}
	for (var j = 0; j < selectedMayos.length; j++) {
		toppingPriceTotals.push(SandwichMaker.addMayo(selectedMayos[j]));
		console.log(selectedMayos);

    }
	for (var k = 0; k < toppingPriceTotals.length; k++) {
		toppingTotal += toppingPriceTotals[k];
		console.log(toppingPriceTotals);
	}
	SandwichMaker.addTopping(toppingKey, toppingTotal);
	mayoSelection.innerHTML = `topped with creamy ${selectedMayos}`;
});

meatChooser.addEventListener("change", function(event) {
		var selectedMeats = []
		var toppingPriceTotals = [];
		var toppingTotal = 0;
		var toppingKey = "meats";

	for (var i = 0; i < meatChooser.childNodes.length; i++) {
		if (meatChooser.childNodes[i].checked === true) {
			selectedMeats.push(meatChooser.childNodes[i].value)
		}
	}
	for (var j = 0; j < selectedMeats.length; j++) {
		toppingPriceTotals.push(SandwichMaker.addMeat(selectedMeats[j]));
		console.log(selectedMeats);

    }
	for (var k = 0; k < toppingPriceTotals.length; k++) {
		toppingTotal += toppingPriceTotals[k];
		console.log(toppingPriceTotals);
	}
	SandwichMaker.addTopping(toppingKey, toppingTotal);
	meatSelection.innerHTML = `Your ${selectedMeats} sandwich`;
});

veggieChooser.addEventListener("change", function(event) {
		var selectedVeggies = []
		var toppingPriceTotals = [];
		var toppingTotal = 0;
		var toppingKey = "veggies";

	for (var i = 0; i < veggieChooser.childNodes.length; i++) {
		if (veggieChooser.childNodes[i].checked === true) {
			selectedVeggies.push(veggieChooser.childNodes[i].value)
		}
	}
	for (var j = 0; j < selectedVeggies.length; j++) {
		toppingPriceTotals.push(SandwichMaker.addVeggie(selectedVeggies[j]));
		console.log(selectedVeggies);

    }
	for (var k = 0; k < toppingPriceTotals.length; k++) {
		toppingTotal += toppingPriceTotals[k];
		console.log(toppingPriceTotals);
	}
	SandwichMaker.addTopping(toppingKey, toppingTotal);
	veggieSelection.innerHTML = `& garden fresh ${selectedVeggies}!`;
});




