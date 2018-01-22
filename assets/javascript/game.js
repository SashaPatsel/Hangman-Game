var hangman = {
	p1: ["MICHAEL JORDAN"],
	p2: ["KOBE BRYANT"],
	p3: ["STEPHEN CURRY"],
	p4: ["HAKEEM OLAJUWON"],
	p5: ["SHAQUILLE O'NEAL"],
	p6: ["LEBRON JAMES"],
	p7: ["TIM DUNCAN"],
	p8: ["RUSSEL WESTBROOK"],
	p9: ["GREGG POPOVICH"],
	p10: ["CHARLES BARKLEY"]
};
//Place holder for current word
var player = "";

var wins = 0;

var losses = 0;

var startingPerson = 1;

var guessRemain = 10;

var amountPpl = 10;

var wrongGuesses = [];

var wordQueue = "";

var wordLetters = [];

var goodGuesses = [];

var guessTracker = 0;

function nextRound() {
	//Beginning the queue of people to be hanged
	//Need to add a startingPerson++
	wordQueue = hangman["p" + startingPerson][0];
	//splitting player names into letters
	wordLetters = wordQueue.split('');
	//Number of underscores
	unguessed = wordLetters.length;
	
	guessRemain = 10;
	wrongLetters =[];
	goodGuesses =[];
	possAnswers = ["a","b","c",
					  "d","e","f",
					  "g","h","i",
					  "j","k","l",
					  "m","n","o",
					  "p","q","r",
					  "s","t","u",
					  "v","w","x",
					  "y","z","'", " "];
	hangGame();
}


//Basic setup for the game
function hangGame() {
	//Beginning the queue of people to be hanged
	//Need to add a startingPerson++
	wordQueue = hangman["p" + startingPerson][0];
	//splitting player names into letters
	wordLetters = wordQueue.split('');
	//Number of underscores
	unguessed = wordLetters.length;
	
	guessRemain = 10;
	wrongLetters =[];
	goodGuesses =[];
	possAnswers = ["a","b","c",
					  "d","e","f",
					  "g","h","i",
					  "j","k","l",
					  "m","n","o",
					  "p","q","r",
					  "s","t","u",
					  "v","w","x",
					  "y","z","'", " "];


	for(var i = 0; i< unguessed; i++) {
		goodGuesses.push("_");
		document.getElementById("the-word").innerHTML = goodGuesses;
	}
	document.getElementById("the-word").innerHTML = goodGuesses.join(" ");
	document.getElementById("guesses-remain").innerHTML = guessRemain;
	document.getElementById("wins").innerHTML = wins;
	document.getElementById("losses").innerHTML = losses;
	document.getElementById("user-guesses").innerHTML = wrongGuesses;
};

//Compares the user's guess to the word
function guessVsWord(userInput) {
	if (wordQueue.indexOf(userInput) > -1) {
		for (var i = 0; i < unguessed; i++) {
			if (wordLetters[i] === userInput) {
				guessTracker++
				goodGuesses[i] = userInput;
				document.getElementById('the-word').innerHTML = goodGuesses.join(" ");
			}	
		}
	}
	else {
		wrongGuesses.push(" " + userInput);
		guessRemain --;
		document.getElementById("guesses-remain").innerHTML = guessRemain;
		document.getElementById("user-guesses").innerHTML = wrongGuesses;
	}
					
};

//Cycles to next round
function nextPerson() {
	if(startingPerson <= amountPpl) {
		startingPerson++;
	}
};


function winVsLoss() {
	if(guessTracker === unguessed) {
		wins++;
		document.getElementById('wins').innerHTML = wins;
		nextPerson();
		nextRound();
	}
	else if(guessRemain === 0) {
		losses++;
		document.getElementById('losses').innerHTML = losses;
		nextRound();
	}
};

hangGame();

document.onkeyup = function(event) {
	var userGuess = event.key;
	for(var i = 0; i < possAnswers.length; i++) {	
		if(userGuess === possAnswers[i]) {
			var wordParts = possAnswers.splice(i,1);
			guessVsWord(userGuess.toUpperCase());
			winVsLoss();
		};
	};		
		
};

if (wins++) {
	nextPerson();
}



// function reloadInfo(){
// 	var scoreHtml = "<p>SCORE: " + score + "</p>"
// 	document.querySelector("#scorePlace").innerHTML = scoreHtml;
	 
// 	var questionHtml = quiz["p"+ startingQuestion][0]
// 	document.querySelector("#questionPlace").innerHTML = questionHtml;
// }


//Notes:


// var hangman = {
// 	p1: ["Michael Jordan", "_ _ _ _ _ _ _   _ _ _ _ _ _"],
// 	p2: ["Kobe Bryant", "_ _ _ _   _ _ _ _ _ _"],
// 	p3: ["Stephen Curry", "_ _ _ _ _ _ _   _ _ _ _ _"],
// 	p4: ["Hakeem Olajuwon", "_ _ _ _ _ _   _ _ _ _ _ _ _ _"],
// 	p5: ["Shaquille O'Neal", "_ _ _ _ _ _ _ _ _   _ _ _ _ _ _"],
// 	p6: ["LeBron James", "_ _ _ _ _ _   _ _ _ _ _"],
// 	p7: ["Tim Duncan", "_ _ _   _ _ _ _ _ _"],
// 	p8: ["Russel Westbrook", "_ _ _ _ _ _   _ _ _ _ _ _ _ _ _"],
// 	p9: ["Gregg Popovich", "_ _ _ _ _   _ _ _ _ _ _ _ _"],
// 	p10: ["Charles Barkley", "_ _ _ _ _ _ _   _ _ _ _ _ _ _"]
// };