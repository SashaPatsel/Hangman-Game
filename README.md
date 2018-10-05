<h1 align="center">🏀 NBA Legends Hangman 🏀</h1>


Test your NBA history knowledge as well as your powers of deduction in this original hangman game.

The ball is in your hands, and it's up to you to make the game-winning shot with only six seconds left on the clock (It means you get six guesses).

<img src="assets/images/hangman.png">

[Play Here](https://sashapatsel.github.io/Hangman-Game/)

### Installing

Feel free to clone this repository! No other installation necessary.


## Built With

#### The Web's bread-n'-butter:

* HTML 
* CSS
* JavaScript

## Code Snippets
```javascript
//Compares the user's guess to the word
function guessVsWord(userInput) {
	//-1 instead of zero because it won't register the first letter otherwise
	if (wordQueue.indexOf(userInput) > -1) {
		for (var i = 0; i < unguessed; i++) {
      // A good guess
			if (wordLetters[i] === userInput) {
				guessTracker++;
				goodGuesses[i] = userInput;
				document.getElementById('the-word').innerHTML = goodGuesses.join(" ");
			}	
		}
  }
  // A wrong guess
	else {
		wrongGuesses.push(" " + userInput);
		guessRemain --;
		document.getElementById("guesses-remain").innerHTML = guessRemain;
		document.getElementById("user-guesses").innerHTML = wrongGuesses;
	}
					
};

```

## Authors

* Sasha Patsel [Website](https://sashapatsel.github.io/portfolio-sp/)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Notes
- This is one of my first-ever projects in javascript! I found hangman to be a great exercise in learning the fundamentals of javascript.

- This project was also one of my first implementations of the bootstrap grid-system.