// JS for Crystal Collector game using jQuery - Homework #4 

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



//creating all variables needed to run game
var randomNum;
var total = 0;
var loss;
var win;

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
	console.log("total before: " + total);
	total = total + crystNum1;
	console.log("total after: " + total);
	// sum and display current total in DOM
	$("#score").html(total);
});

$("#crystal2").on("click", function() {
	console.log("total before: " + total);
	total = total + crystNum2;
	console.log("total after: " + total);
	// sum and display current total in DOM
	$("#score").html(total);
});

$("#crystal3").on("click", function() {
	console.log("total before: " + total);
	total = total + crystNum3;
	console.log("total after: " + total);
	// sum and display current total in DOM
	$("#score").html(total);
});

$("#crystal4").on("click", function() {
	console.log("total before: " + total);
	total = total + crystNum4;
	console.log("total after: " + total);
	// sum and display current total in DOM
	$("#score").html(total);
});




// take above concept and implement in single on click function for all 4 buttons
// $("#crystals").on("click", function() {
// 	console.log("total before: " + total);
// 	total = total + fourCrystals;
// 	console.log("total after: " + total);
// });


