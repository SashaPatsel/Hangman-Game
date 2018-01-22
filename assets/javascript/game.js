var hangman = {
	p1: ["Michael Jordan"],
	p2: ["Kobe Bryant"],
	p3: ["Stephen Curry"],
	p4: ["Hakeem Olajuwon"],
	p5: ["Shaquille O'Neal"],
	p6: ["LeBron James"],
	p7: ["Tim Duncan"],
	p8: ["Russel Westbrook"],
	p9: ["Gregg Popovich"],
	p10: ["Charles Barkley"]
};
//Place holder for current word
var player = "";

var wins = 0;

var losses = 0;

var startingPerson = 1;

var guessRemain = 10;

var wrongGuesses = [];

var wordQueue = "";

var wordLetters = [];

var goodGuesses = [];

function hangGame() {
	//Beginning the queue of people to be hanged
	wordQueue = hangman["p"+ startingPerson][0];
	//splitting player names into letters
	wordLetters = wordQueue.split('');
	//Number of underscores
	unguessed = wordLetters.length;
	
	guessRemain = 10;
	wrongLetters =[];
	goodGuesses =[];
	possAnswers = ['a','b','c',
					  'd','e','f',
					  'g','h','i',
					  'j','k','l',
					  'm','n','o',
					  'p','q','r',
					  's','t','u',
					  'v','w','x',
					  'y','z'];


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


function guessVsWord(userInput) {
	if(wordQueue.indexOf(userInput) > -1) {
		for(var i = 0; i < unguessed; i++) {
			if(wordLetters[i].toLowerCase() === userInput) {
				wins++;
				goodGuesses[i] = userInput;
				document.getElementById('the-word').innerHTML = goodGuesses.join(' ');
			}	
		}
	}
	else {
		wrongLetters.push(userInput);
		guessRemain --;
		document.getElementById("guesses-remain").innerHTML = guessRemain;
		document.getElementById("user-guesses").innerHTML = wrongGuesses;
	}
			
			
		
};

function winVsLoss() {
	if(wins === unguessed) {
		wins++;
		document.getElementById('wins').innerHTML = wins;
	}
	else if(guessRemain === 0) {
		losses++;
		document.getElementById('losses').innerHTML = losses;
	}
};

hangGame();

document.onkeyup = function(event) {
	var userGuess = event.key;
	for(var i = 0; i < possAnswers.length; i++) {	
		if(userGuess === possAnswers[i]) {
			var wordParts = possAnswers.splice(i,1);
			guessVsWord(userGuess);
			winVsLoss();
		}
	}		
		
};



// //Displays incorrectly guessed letter on screen
// function usedLetters() {
// 	var userGuess = event.key

// 	if (userGuess !== player.toLowerCase().indexOf( String.fromCharCode( e.which )) {
// 		document.getElementById("user-guesses").innerHTML = userGuess
// 	}
// }

// function playerName() {
// 	for (var i = 0 ; i < hangman.p1[0].length ; i++) {
// 		console.log(i);
// 	}
// };

// function checkAnswer(userInput){
// 	if (quiz["q"+ startingQuestion][1]===userInput){
// 		score = score + 1;

// 		nextPerson()
// 		reloadInfo()
// 	}else{
// 		nextPerson()
// 		reloadInfo()
// 	}
// }

// function reloadInfo(){
// 	var scoreHtml = "<p>SCORE: " + score + "</p>"
// 	document.querySelector("#scorePlace").innerHTML = scoreHtml;
	 
// 	var questionHtml = quiz["p"+ startingQuestion][0]
// 	document.querySelector("#questionPlace").innerHTML = questionHtml;
// }

// function nextPerson(){
// 	if(startingPerson <= amountPeople){
// 		startingPerson++;
// 	}
	// else{

	// 	var scoreHtml = "<h1>GAME OVER</h1>"
	// 	document.querySelector("#scorePlace").innerHTML = scoreHtml;
	// 	document.querySelector("#questionPlace").innerHTML = questionHtml;
	// }
	
// };

//Notes:



//Will need to use toLowerCase()

// if (correct guess) {
// 	wins++
// }

// else {
// 	function for adding guessed letters to list
// }
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