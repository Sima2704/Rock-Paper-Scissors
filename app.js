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
    const choise = Math.floor(Math.random() * options.length());
    return options[choise];
}