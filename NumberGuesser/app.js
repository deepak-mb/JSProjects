/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

let min = 1,
    max = 10,
    winningNumber = getRandomNum(min, max),
    guessesLeft = 3; 

const game = document.querySelector('#game');
const guessInput = document.querySelector('#guess-input');
const guessBtn = document.querySelector('#guess-btn');
const minNum = document.querySelector('min-num');
const maxNum = document.querySelector('max-num');
const message = document.querySelector('.message');

guessBtn.addEventListener('click', function(){
    const guess = parseInt(guessInput.value);

    if(isNaN(guess) || guess < min || guess > max){
        showMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    if(guess === winningNumber){
        gameOver(true, `${guess} is the answer. YOU WIN!`);
    }else{
        guessesLeft -= 1;

        if(guessesLeft === 0){
            gameOver(false, `Game over. You lost. The correct number was ${winningNumber}.`);
        }else{
            showMessage(`${guess} is not correct. You have ${guessesLeft} guesses left.`, 'red');
        }
    }
});

function showMessage(msg, color){
    message.textContent = msg;
    guessInput.style.borderColor = color;
    message.style.color = color;
}

guessInput.addEventListener('focus', function(){
    guessInput.style.borderColor = 'black';
    message.textContent = '';
})

function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red'; 
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    message.style.color = color;
    showMessage(msg);
    
    guessBtn.value = 'Play Again?';
    guessBtn.className += 'play-again';
}

game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}