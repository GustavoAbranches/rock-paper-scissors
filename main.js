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
    else if(player === 'paper' && computer === 'scissor'){
        return 'You lose! Scissor beats Paper'
    }
    else if(player === 'scissor' && computer === 'rock'){
        return 'You lose! Scissor beats Paper'
    }
    else if(player === 'rock' && computer === 'paper'){
        return 'You lose! Paper beats Rock'
    }
    else{
        return 'It\'s a tie!'
    }
   
}

function game(){

    let roundCount = 0
    let playerPoints = 0
    let computerPoints = 0

    while (roundCount < 5){

        const playerChoice = prompt('Choose between: Rock, Paper, Scissor')
        const computerChoice = getComputerChoice()
        const roundResult = playRound (playerChoice, computerChoice)

        console.log('Player choice: ' + playerChoice)
        console.log('Computer choice ' + computerChoice)
        console.log('Round result: ' + roundResult)
        
        if (roundResult.includes('win')){
            playerPoints++
        } else if(roundResult.includes('lose')){
            computerPoints++
        }

        console.log('Player Points: ' + playerPoints)
        console.log('Computer points: ' 
        + computerPoints)

        roundCount++
        console.log('Round count: ' + roundCount)
    }

    if (playerPoints > computerPoints){
        console.log('You win!!!')
    } else if(playerPoints < computerPoints){
        console.log('You lose!!!')
    } else{
        console.log('It\'s a tie in the game!')
    }
}

const gameResult = game()
console.log(gameResult)