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

// window.onload = function() {

// function startGame() {

//creating all variables needed to run game
var randomNum;
var total = 0;
var loss = 0;
var win = 0;

// function startGame() {
	// Returns a random integer between 19 & 120 and assigns it to randomNum
	var randomNum = Math.floor(Math.random() * 101 ) + 19;

	console.log("Random Number = " + randomNum);

	// jQuery syntax for grabbing element for random number and displaying on DOM
	$("#start-number").html("Random Number: " + randomNum);


	// generate and assign random number between 1-12 to each of the crystals
	// first generate random number between 1-12 for a single crystal

	var crystNum1 = Math.floor(Math.random() * 12 ) + 1;
	console.log("crystal1 = " + crystNum1);
	$("#crystal1").append(crystNum1);

	var crystNum2 = Math.floor(Math.random() * 12 ) + 1;
	console.log("crystal2 = " + crystNum2);
	$("#crystal2").append(crystNum2);

	var crystNum3 = Math.floor(Math.random() * 12 ) + 1;
	console.log("crystal3 = " + crystNum3);
	$("#crystal3").append(crystNum3);

	var crystNum4 = Math.floor(Math.random() * 12 ) + 1;
	console.log("crystal4 = " + crystNum4);
	$("#crystal4").append(crystNum4);


// //take the above concept and apply to all 4 crystal buttons with loop
// for (var i = 0; i < 4; i++) {
// 	var crystNum = Math.floor(Math.random() * 12 ) + 1;
// 	console.log("crystal" + (i + 1) + " = "+ crystNum);

// 	var fourCrystals = $("<button>");
// 		fourCrystals.attr({
// 			// class: "crystals",
// 			number: "crystNum"
// 	});

// 	$(".crystals").append(crystNum);
// }




// add value of each button to total when a crystal button is clicked
	$("#crystal1").on("click", function() {
		// console.log("total before: " + total);
		total = total + crystNum1;
		console.log("total after: " + total);
		// sum and display current total in DOM
		$("#score").html(total);
		decision();
	});

	$("#crystal2").on("click", function() {
		// console.log("total before: " + total);
		total = total + crystNum2;
		console.log("total after: " + total);
		// sum and display current total in DOM
		$("#score").html(total);
		decision();
	});

	$("#crystal3").on("click", function() {
		// console.log("total before: " + total);
		total = total + crystNum3;
		console.log("total after: " + total);
		// sum and display current total in DOM
		$("#score").html(total);
		decision();
	});

	$("#crystal4").on("click", function() {
		// console.log("total before: " + total);
		total = total + crystNum4;
		console.log("total after: " + total);
		// sum and display current total in DOM
		$("#score").html(total);
		decision();
	});

// }; // close bracket for startGame function

// take above concept and implement in single on click function for all 4 buttons
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
		gameOver();
	}

// loss counter increments if total > random number
	else if (total > randomNum) {
		console.log("you're a loser")
		alert("Sorry...Loser");
		loss++;
		console.log("total losses: " + loss);
		$("#lossCount").html(loss);
		gameOver();
	}
}; //close bracket for decision function



// game resets random number and total when game over

function gameOver() {
	randomNum = 0;
	total = 0;
	startGame();
} // close bracket for gameOver function

// startGame();

// } // close bracket for window.onload function



