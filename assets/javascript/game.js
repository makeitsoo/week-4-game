// JS for Crystal Collector game using jQuery - Homework #4 
//////////////////////////////////////////////////////////////////////////////////

// psuedo code the game before beginning real code
// upon start game needs a random number between 19 & 120 displayed in DOM
// game needs 4 crystals
// each crystal needs a random value between 1-12 assigned at game begin
// crystal values should be hidden from user 
// when a crystal is clicked add value to total
// game over when total is equal to or greater than random number
// win counter increments if total = random number
// loss counter increments if total > random number
// game resets random number and total when game over

//////////////////////////////////////////////////////////////////////////////////

window.onload = function() {



//creating all variables for holding data
var randomNum;
var total = 0;
var crystNum1 = 0;
var crystNum2 = 0;
var crystNum3 = 0;
var crystNum4 = 0;
var imageCrystal1;
var imageCrystal2;
var imageCrystal3;
var imageCrystal4;

// game counters
var loss = 0;
var win = 0;


// all code placed inside of this function to enable reset after game over
function startGame() {
	// empties div that contains the crystal image buttons so doesnt duplicate
	$(".crystals").empty();

	// Returns a random integer between 19 & 120 and assigns it to randomNum
	var randomNum = Math.floor(Math.random() * 101 ) + 19;
	console.log("Random Number = " + randomNum);
	// jQuery syntax for grabbing element for random number and displaying on DOM
	$("#start-number").html("Random Number: " + randomNum);

	// dynamically create image elements for crystals as buttons
	// crystal 1
	var imageCrystal1 = $("<img>");
	// First each crystal will be given the class ".crystal-image".
	// This will allow the CSS to take effect. 
	imageCrystal1.addClass("crystal1 crystal-image");
	// Each imageCrystal will be given a src link to the crystal image
	imageCrystal1.attr("src", "assets/images/crystal1.jpg");
	// Each imageCrystal will be given a data attribute called data-crystalValue.
	// This data attribute will be set equal to the array value.
	// imageCrystal1.text(crystNum1);
	// Lastly, each crystal image (with all it classes and attributes) will get added to the page.
	$(".crystals").append(imageCrystal1);

	// repeat above for 3 more crystals
	// crystal 2
	var imageCrystal2 = $("<img>");
	imageCrystal2.addClass("crystal2 crystal-image");
	imageCrystal2.attr("src", "assets/images/crystal2.jpg");
	// imageCrystal2.attr("data-crystalvalue", crystNum2);
	$(".crystals").append(imageCrystal2);

	// crystal 3
	var imageCrystal3 = $("<img>");
	imageCrystal3.addClass("crystal3 crystal-image");
	imageCrystal3.attr("src", "assets/images/crystal3.jpg");
	// imageCrystal3.attr("data-crystalvalue", crystNum3);
	$(".crystals").append(imageCrystal3);

	// crystal 4
	var imageCrystal4 = $("<img>");
	imageCrystal4.addClass("crystal4 crystal-image");
	imageCrystal4.attr("src", "assets/images/crystal4.jpeg");
	// imageCrystal4.attr("data-crystalvalue", crystNum4);
	$(".crystals").append(imageCrystal4);


	// generate and assign random number between 1-12 to each of the crystals
	// first generate random number between 1-12 for a single crystal
	var crystNum1 = Math.floor(Math.random() * 12 ) + 1;
	console.log("crystal1 = " + crystNum1);
	// $("#crystal1").append(crystNum1);

	var crystNum2 = Math.floor(Math.random() * 12 ) + 1;
	console.log("crystal2 = " + crystNum2);
	// $("#crystal2").append(crystNum2);

	var crystNum3 = Math.floor(Math.random() * 12 ) + 1;
	console.log("crystal3 = " + crystNum3);
	// $("#crystal3").append(crystNum3);

	var crystNum4 = Math.floor(Math.random() * 12 ) + 1;
	console.log("crystal4 = " + crystNum4);
	// $("#crystal4").append(crystNum4);


// // could take the above concept and apply to all 4 crystal buttons with loop
// for (var i = 0; i < 4; i++) {
// 	var crystNum = Math.floor(Math.random() * 12 ) + 1;
// 	console.log("crystal" + (i + 1) + " = "+ crystNum);

// 	var fourCrystals = $("<div>");
// 		fourCrystals.attr({
// 			// class: "crystals",
// 			number: "crystNum"
// 	});

// 	$(".crystals").append(crystNum);
// }


// add value of each crystal button to total when a crystal button is clicked
	$(".crystal1").on("click", function() {
		$(".crystal1").text(crystNum1);
		total = total + crystNum1;
		console.log("total after: " + total);
		// sum and display current total in DOM
		$("#score").html(total);
		decision();
	});

	$(".crystal2").on("click", function() {
		$(".crystal2").html(crystNum2);
		total = total + crystNum2;
		console.log("total after: " + total);
		// sum and display current total in DOM
		$("#score").html(total);
		decision();
	});

	$(".crystal3").on("click", function() {
		$(".crystal3").append(crystNum3);
		total = total + crystNum3;
		console.log("total after: " + total);
		// sum and display current total in DOM
		$("#score").html(total);
		decision();
	});

	$(".crystal4").on("click", function() {
		$(".crystal4").append(crystNum4);
		total = total + crystNum4;
		console.log("total after: " + total);
		// sum and display current total in DOM
		$("#score").html(total);
		decision();
	});

	// could take above concept and implement in single on click function for all 4 buttons
	// $("#crystals").on("click", function() {
	// 	console.log("total before: " + total);
	// 	total = total + fourCrystals;
	// 	console.log("total after: " + total);
	// });


	// game over when total is equal to or greater than random number
	// win counter increments if total = random number
	function decision() {
		if (total===randomNum) {
			console.log("you win!")
			alert("You Win!");
			win++;
			console.log("total wins: " + win);
			$("#winCount").html(win);
			startGame();
			// resets user total counter to zero
			total = 0;
		}

	// loss counter increments if total > random number
		else if (total > randomNum) {
			console.log("you're a loser")
			alert("Sorry...Loser");
			loss++;
			console.log("total losses: " + loss);
			$("#lossCount").html(loss);
			startGame();
			// resets user total counter to zero
			total = 0;
		};
	}; //close bracket for decision function

}; // close bracket for startGame function

// game resets random number and crystal values when game over
startGame();





} // close bracket for window.onload function



