let playerScore = 0;
let computerScore = 0;
const message_h3 = document.querySelector('.message');
const scorePlayer_span = document.querySelector('#score-player');
const scoreComputer_span = document.querySelector('#score-computer');
const gameOver = document.querySelector('.gameover');
const gameOverMessage = document.querySelector('.text');
const endGameScore = document.querySelector('.end-score')
const rockBtn = document.querySelector('#rock');
const papaerBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resetBtn = document.querySelector('#resetBtn');

const options = ['rock', 'paper', 'scissors'];

const getGameOverMessage = () => {
    if(playerScore > computerScore){
        gameOverMessage.textContent = `You win!`
    }else{
        gameOverMessage.textContent = 'You lose...'
    }
}

const updateScore = (playerScore, computerScore) => {
    scorePlayer_span.textContent = `${playerScore}`;
    scoreComputer_span.textContent = `${computerScore}`;
}

const getComputerChoise = () => {
    const choise = Math.floor(Math.random() * options.length);
    return options[choise];
}

const win = (playerChoise, computerChoise) => {
    playerScore++;
    message_h3.textContent = `${playerChoise} beats ${computerChoise}`;
    updateScore(playerScore, computerScore);
}

const lose = (playerChoise, computerChoise) => {
    computerScore++;
    message_h3.textContent = `${playerChoise} loses to ${computerChoise}`;
    updateScore(playerScore, computerScore);
}

const draw = (playerChoise, computerChoise) => {
    message_h3.textContent = `${playerChoise} equals ${computerChoise}`;
}

const restartGame = () => {
    playerScore = 0;
    computerScore = 0;
    updateScore(playerScore, computerScore);
    message_h3.textContent = 'First to reach 5, wins!';
    gameOver.style.display = "none";
}

const playRound = (playerChoise, computerChoise) => {
    
    if(playerChoise === 'rock' && computerChoise === 'rock'){
        draw(playerChoise, computerChoise);
    }else if(playerChoise === 'rock' && computerChoise === 'scissors'){
        win(playerChoise, computerChoise);
    }else if(playerChoise === 'rock' && computerChoise === 'paper'){
        lose(playerChoise, computerChoise);
    }else if(playerChoise === 'paper' && computerChoise === 'paper'){
        draw(playerChoise, computerChoise);
    }else if(playerChoise === 'paper' && computerChoise === 'rock'){
        win(playerChoise, computerChoise);
    }else if(playerChoise === 'paper' && computerChoise === 'scissors'){
        lose(playerChoise, computerChoise);
    }else if(playerChoise === 'scissors' && computerChoise === 'scissors'){
        draw(playerChoise, computerChoise);
    }else if(playerChoise === 'scissors' && computerChoise === 'paper'){
        win(playerChoise, computerChoise);
    }else if(playerChoise === 'scissors' && computerChoise === 'rock'){
        lose(playerChoise, computerChoise);
    }    
    
}

const endRound = () => {
    getGameOverMessage();

    gameOver.style.display = "block";

    endGameScore.textContent = playerScore > computerScore ? `${playerScore} to ${computerScore}` : `${computerScore} to ${playerScore}`

    resetBtn.addEventListener('click', () => {
        restartGame();
    })
}

const playGame = (playerChoise, computerChoise) => {
    if(playerScore < 5 && computerScore < 5){
        playRound(playerChoise,computerChoise)
    }
    if(playerScore === 5 || computerScore === 5) 
        endRound()
}


rockBtn.addEventListener('click', (e) => {
    playGame(e.target.id, getComputerChoise())
})

papaerBtn.addEventListener('click', (e) => {
    playGame(e.target.id, getComputerChoise())
})

scissorsBtn.addEventListener('click', (e) => {
    playGame(e.target.id, getComputerChoise())
})
