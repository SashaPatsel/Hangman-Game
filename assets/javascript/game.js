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
alert("Don't forget that spaces count too!")
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
	// wordQueue = hangman[Math.floor(Math.random() * hangman.length)];
	// wordQueue = hangman["p" + startingPerson][0];
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
	// nextSong();
	// stopDaMusic();
	console.log("nextRound");
}


//Basic setup for the game
function hangGame() {
	//Beginning the queue of people to be hanged
	// wordQueue = hangman[Math.floor(Math.random() * hangman.length)];
	// wordQueue = hangman["p" + startingPerson][0];
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

// function changePic() {

// 	// if (wins === 1) {
// 	steph.style.display = "none";
// 	lbj.style.display = "none";
// 	shaq.style.display = "none";
// 	kd.style.display = "block";
// 	ai.style.display = "block";
// 	mike.style.display = "block";
// 	// }

// }

// function hideThePics() {
// 	var steph = document.getElementById("steph");
// 	var lbj = document.getElementById("lbj");
// 	var shaq = document.getElementById("shaq");
// 	var kd = document.getElementById("kd");
// 	var ai = document.getElementById("ai");
// 	var mike = document.getElementById("mike");
// 	var brodie = document.getElementById("brodie");
// 	var mamba = document.getElementById("mamba");
// 	var beard = document.getElementById("beard");
// 	kd.style.display = "none";
// 	ai.style.display = "none";
// 	mike.style.display = "none";
// 	brodie.style.display = "none";
// 	mamba.style.display = "none";
// 	beard.style.display = "none"
// }

// function picNext {
// 	if (wins === 1) {
// 		changePic();
// 	}
// };

// function stopDaMusic() {
// 	var song1 = document.getElementById("#song1");
// 	var song2 = document.getElementById("#song2");
// 	var song3 = document.getElementById("#song3");
// 	var song4 = document.getElementById("#song4");
// 	var song5 = document.getElementById("#song5");
// 	var song6 = document.getElementById("#song6");
// 	var song7 = document.getElementById("#song7");
// 	var song8 = document.getElementById("#song8");
// 	var song9 = document.getElementById("#song9");
// 	var song10 = document.getElementById("#song10");
// 	song1.play();
// 	song2.pause();
// 	song2.style.display = "none";
// 	song3.pause();
// 	song3.style.display = "none";
// 	song4.pause();
// 	song4.style.display = "none";
// 	song5.pause();
// 	song5.style.display = "none";
// 	song6.pause();
// 	song6.style.display = "none";
// 	song7.pause();
// 	song7.style.display = "none";
// 	song8.pause();
// 	song8.style.display = "none";
// 	song9.pause();
// 	song9.style.display = "none";
// 	song10.pause();
// 	song10.style.display = "none";

// };

// function nextSong() {
// 	var song1 = document.getElementById("#song1");
// 	var song2 = document.getElementById("#song2");
// 	var song3 = document.getElementById("#song3");
// 	var song4 = document.getElementById("#song4");
// 	var song5 = document.getElementById("#song5");
// 	var song6 = document.getElementById("#song6");
// 	var song7 = document.getElementById("#song7");
// 	var song8 = document.getElementById("#song8");
// 	var song9 = document.getElementById("#song9");
// 	var song10 = document.getElementById("#song10");
// 		if (wins === 1) {
// 		song1.pause();
// 		song2.play();
// 		song2.style.display = "block";

// 	};
// 		if (wins === 2) {
// 		song2.pause();
// 		song3.play();
// 		song3.style.display = "block";
// 	};

// }
// 		if else (wins === 3) {
// 		song3.pause();
// 		song4.play();
// 		song4.style.display = "block";
// 	};
// 		if else (wins === 4) {
// 		song4.pause();
// 		song5.play();
// 		song5.style.display = "block";
// 	};

// 		if else (wins === 5) {
// 		song5.pause();
// 		song6.play();
// 		song6.style.display = "block";
// 	};
// 		if else (wins === 6) {
// 		song6.pause();
// 		song7.play();
// 		song7.style.display = "block";
// 	};
// 		if else (wins === 7) {
// 		song7.pause();
// 		song8.play();
// 		song8.style.display = "block";
// 	};
// 		if else (wins === 8) {
// 		song8.pause();
// 		song9.play();
// 		song9.style.display = "block";
// 	};
// 		if else (wins === 9) {
// 		song9.pause();
// 		song10.play();
// 		song10.style.display = "block";
// 	};
	
// 		if else (wins === 10) {
// 			alert("Your record is " + wins + " - " + losses);

// 	};
// }

// this code could potentially eliminate the need for users to push the space bar.	

// function checkArray(){
// wordQueue = hangman["p" + startingPerson][0];
//    for(var i=0 ; i < wordQueue.length ; i++){
//        if(wordQueue[i] === " ")   
//           return false;
//    }
//    return true;
// };





