var hangman = {
	p0: ["MICHAEL JORDAN"],
	p1: ["KOBE BRYANT"],
	p2: ["STEPHEN CURRY"],
	p3: ["HAKEEM OLAJUWON"],
	p4: ["SHAQUILLE O'NEAL"],
	p5: ["LEBRON JAMES"],
	p6: ["TIM DUNCAN"],
	p7: ["RUSSEL WESTBROOK"],
	p8: ["GREGG POPOVICH"],
	p9: ["CHARLES BARKLEY"]
};

//Place holder for current word
var player = "";

var wins = 0;

var losses = 0;

var guessRemain = 6;

var amountPpl = 10;

//The incorrect guesses will be pushed into this array
var wrongGuesses = [];

//pass random (or ordered) word to a string
var wordQueue = "";

//An array containing the letters in a given word as separate components
var wordLetters = [];

//container for the _s, and the letters that replace them
var goodGuesses = [];

var guessTracker = 0;

//Reset after each correctly guess word
function nextRound() {
	//Beginning the queue of people to be hanged
	wordQueue = hangman["p" + wins][0];
	//splitting player names into letters
	wordLetters = wordQueue.split("");
	//Number of underscores
	unguessed = wordLetters.length;
	
	guessRemain = 6;
	guessTracker = 0;
	wrongLetters =[];
	goodGuesses =[];
	wrongGuesses= [];
	//
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
	winVsLoss();

}


//Basic setup for the game
function hangGame() {
	//Beginning the queue of people to be hanged
	wordQueue = hangman["p" + wins][0];
	//splitting player names into letters
	wordLetters = wordQueue.split("");
	//Number of underscores
	unguessed = wordLetters.length;
	
	guessRemain = 6;
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
	// hideThePics();
	// stopDaMusic();
};

//Compares the user's guess to the word
function guessVsWord(userInput) {
	//-1 instead of zero because it won't register the first letter otherwise
	if (wordQueue.indexOf(userInput) > -1) {
		for (var i = 0; i < unguessed; i++) {
			if (wordLetters[i] === userInput) {
				guessTracker++;
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

//Cycles to next player in the object

function winVsLoss() {
	if(guessTracker === unguessed) {
		wins++;
		document.getElementById("wins").innerHTML = wins;
		nextRound();
		// changePic();
	}
	else if(guessRemain === 0) {
		losses++;
		document.getElementById("losses").innerHTML = losses;
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
