let humanScore = 0;
let computerScore = 0;
const message_h3 = document.querySelector('.message');
const scorePlayer_span = document.querySelector('.score-player');
const scoreComputer_span = document.querySelector('.score-computer');
const rockBtn = document.querySelector('#rock');
const papaerBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

const options = ['rock', 'paper', 'scissors'];

const getComputerChoise = () => {
    const choise = Math.floor(Math.random() * options.length);
    return options[choise];
}

const playGame = (humanChoise, computerChoise) => {

    if(humanScore < 5 && computerScore < 5){
        if(humanChoise === 'rock' && computerChoise === 'rock'){
            console.log('It is a draw!');
            // draw(); 
        }else if(humanChoise === 'rock' && computerChoise === 'scissors'){
            console.log('You win!');
            // win();
        }else if(humanChoise === 'rock' && computerChoise === 'paper'){
            console.log('You lose!');
            // lose();
        }else if(humanChoise === 'paper' && computerChoise === 'rock'){
            console.log('You win!');
            // win();
        }else if(humanChoise === 'paper' && computerChoise === 'scissors'){
            console.log('You lose!');
            // lose();
        }else if(humanChoise === 'scissors' && computerChoise === 'paper'){
            console.log('You win!');
            // win();
        }else if(humanChoise === 'scissors' && computerChoise === 'rock'){
            console.log('You lose!');
            // lose();
        }
    }
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