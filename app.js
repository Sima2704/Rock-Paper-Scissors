
const options = ['Rock', 'Paper', 'Scissors']

const getComputerChoise = () => {
    const response = Math.floor(Math.random() * options.length)
    return options[response]
}

const getHumanChoise = () => {
    let inputRespose = window.prompt('What will u choose?')
    return inputRespose
}


    let humanScore = 0
    let computerScore = 0

const playRound = (computerResponse, humanResponse) => {
    const cR = computerResponse.toLowerCase()
    const hR = humanResponse.toLowerCase()

    if(hR === 'rock' && cR === 'rock')
        console.log('Draw!');
    else if(hR === 'rock' && cR === 'paper'){
        console.log('You lose! Paper beats Rock');
        computerScore++
    }else if(hR === 'rock' && cR === 'scissors'){
        console.log('You win! Rock beast Scissors')
        humanScore++
    }
    else if(hR === 'paper' && cR === 'paper')
        console.log('Draw!')
    else if(hR === 'paper' && cR === 'rock'){
        console.log('You win! Paper beats Rock')
        humanScore++
    }else if(hR === 'paper' && cR === 'scissors'){
        console.log('You lose! Scissors beats Paper')
        computerScore++
    }else if(hR === 'scissors' && cR === 'scissors'){
        console.log('Draw!')
    }else if(hR === 'scissors' && cR === 'rock'){
        console.log('You lose! Rock beats Scissors')
        computerScore++
    }else if(hR === 'scissors' && cR === 'paper'){
        console.log('You win! Scissors beats Paper')
        humanScore++
    }
}

const playGame = (round = 5) => {

    for(let i = 0; i< round; i++){
        
        const humanSelection = getHumanChoise()
        const computerSelection = getComputerChoise()
        
        playRound(computerSelection, humanSelection)
    }

    if(humanScore > computerScore){
        console.log(`You win! ${humanScore} - ${computerScore}`)
    }else if(computerScore > humanScore){
        console.log(`Computer wins! ${computerScore} - ${humanScore}`)
    }else{
        console.log('It is a draw!');
    }
}

playGame();