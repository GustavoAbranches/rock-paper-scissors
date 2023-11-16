function getComputerChoice(){

    const choice = ['Rock', 'Paper', 'Scissor']

    const randomPlay = Math.floor(Math.random() * choice.length)

    return(choice[randomPlay])

}

function playRound(playerSelection, computerSelection){

    if(playerSelection === 'paper' && computerSelection === 'rock'){
        return 'You win! Paper beats Rock'
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissor'){
      return 'You win! Rock beats Paper'
    }
    else if(playerSelection === 'scissor' && computerSelection === 'paper'){
        return 'You win! Scissor beats Paper'
    }
    else if(playerSelection === 'paper' && computerSelection === 'scissor'){
        return 'You lose! Scissor beats Paper'
    }
    else if(playerSelection === 'scissor' && computerSelection === 'rock'){
        return 'You lose! Scissor beats Paper'
    }
    else if(playerSelection === 'rock' && computerSelection === 'paper'){
        return 'You lose! Paper beats Rock'
    }
    else{
        return 'is a tie'
    }
   
}

const playerChoice = prompt('Choose between: Rock, Paper, Scissor')
const computerChoice = getComputerChoice()
const roundChoice = playRound (playerChoice, computerChoice)
console.log(computerChoice)
console.log(roundChoice)