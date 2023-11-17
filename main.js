function getComputerChoice(){

    const choice = ['Rock', 'Paper', 'Scissor']

    const randomPlay = Math.floor(Math.random() * choice.length)

    return(choice[randomPlay])

}

function playRound(playerSelection, computerSelection){

    const player = playerSelection.toLowerCase()
    const computer = computerSelection.toLowerCase()

    if(player === 'paper' && computer === 'rock'){
        return 'You win! Paper beats Rock'
    }
    else if(player === 'rock' && computer === 'scissor'){
      return 'You win! Rock beats Paper'
    }
    else if(player === 'scissor' && computer === 'paper'){
        return 'You win! Scissor beats Paper'
    }
    else if(player === 'paper' && computer=== 'scissor'){
        return 'You lose! Scissor beats Paper'
    }
    else if(player === 'scissor' && computer === 'rock'){
        return 'You lose! Scissor beats Paper'
    }
    else if(player === 'rock' && computer === 'paper'){
        return 'You lose! Paper beats Rock'
    }
    else{
        return 'is a tie'
    }
   
}

function game(){
    
}

const playerChoice = prompt('Choose between: Rock, Paper, Scissor')
const computerChoice = getComputerChoice()
const roundChoice = playRound (playerChoice, computerChoice)
console.log(computerChoice)
console.log(roundChoice)