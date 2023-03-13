let userScore = 0;
let computerScore = 0;
const resetButton = document.querySelector('.reset-button')
const commentary = document.querySelector('.show-winner-2');
const rockButton = document.querySelector('.rock-button');
const paperButton = document.querySelector('.paper-button');
const scissorsButton = document.querySelector('.scissors-button');
let playerFinalScore = document.querySelector('.score-change-1');
let computerFinalScore = document.querySelector('.score-change-2');


// adding event handlers to the button 
rockButton.addEventListener('click', playRock);
paperButton.addEventListener('click', playPaper);
scissorsButton.addEventListener('click', playScissors);
resetButton.addEventListener('click', resetGame)

// get computer selection 
 let choices = ['rock','paper','scissors'];

// declaring the playRock function;
function playRock(){
    let computerSelection = choices[~~(Math.random()*choices.length)]
    if (computerSelection === 'rock'){
        commentary.textContent = "It's a Tie";
    } else if (computerSelection === 'paper'){
        commentary.textContent = "Paper folds Rock, You lose!!!"
        computerScore++;
        
    } else if (computerSelection === 'scissors'){
        commentary.textContent = "Rock Crushes Scissors, You win!!!"
        userScore++;
    }
    playerFinalScore.textContent = userScore;
    computerFinalScore.textContent = computerScore;
    if (userScore == 5 || computerScore == 5){
        stopGame();
    }
}

// declaring playPaper function 
function playPaper() {
    let computerSelection = choices[~~(Math.random()*choices.length)]
    if (computerSelection === 'paper'){
        commentary.textContent = "It's a Tie";
    } else if (computerSelection === 'rock'){
        commentary.textContent = 'Paper folds Rock, You win!!!';
        userScore++;
    } else if (computerSelection === 'scissors'){
        commentary.textContent = 'Scissors cuts Paper, You lose!!!';
        computerScore++;
    }
    playerFinalScore.textContent = userScore;
    computerFinalScore.textContent = computerScore;
    if (userScore == 5 || computerScore == 5){           // if either player or computer score is Five end the game 
        stopGame()
    }
}

// declaring the playScissors function 
function playScissors(){
    let computerSelection = choices[~~(Math.random()*choices.length)]
    if (computerSelection === 'scissors'){
        commentary.textContent = "It's a Tie";
    } else if (computerSelection === 'paper'){
        commentary.textContent = 'Scissors cuts Paper';
        userScore++;
    } else if (computerSelection === 'rock'){
        commentary.textContent = 'Rock crushes Scissors';
        computerScore++;
    }
    playerFinalScore.textContent = userScore;
    computerFinalScore.textContent = computerScore;
    if (userScore == 5 || computerScore == 5){
        stopGame()
    }
}

// defining the stop game function 
function stopGame(){
    if (userScore > computerScore){
        commentary.textContent = 'You defeated the Computer !!!';
    } else {
        commentary.textContent = 'You lost!!!';
    }
    rockButton.removeEventListener('click', playRock);
    paperButton.removeEventListener('click', playPaper);
    scissorsButton.removeEventListener('click',playScissors);
}

// condition for reset 
function resetGame(){
    userScore = 0;
    computerScore = 0;
    playerFinalScore.textContent = userScore;
    computerFinalScore.textContent = computerScore;
    commentary.textContent = "Let's Play!!!"
    rockButton.addEventListener('click', playRock);
    paperButton.addEventListener('click', playPaper);
    scissorsButton.addEventListener('click', playScissors);
}