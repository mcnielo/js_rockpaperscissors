let computerScore = 0;
let yourScore = 0;
const targetScore = 3;

function getComputerChoice() {
    let value = Math.random();
    let computerChoice;

    if (value < 0.33) {
        computerChoice = 'rock';
    } else if (value < 0.66) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }

    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, Scissors?").toLowerCase();

    while (humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors') {
        humanChoice = prompt("Invalid input. Please enter Rock, Paper, or Scissors:").toLowerCase();
    }

    return humanChoice;
}



function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log(`Computer chooses ${computerChoice}, Human chooses ${humanChoice}. It is a draw!`);
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        yourScore += 1;
        console.log(`Computer chooses ${computerChoice}, Human chooses ${humanChoice}. Human wins!`);
    } else {
        computerScore += 1;
        console.log(`computer chooses ${computerChoice}, Human chooses ${humanChoice}, Computer wins!`)
    }
}



while (computerScore < targetScore && yourScore < targetScore) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(computerChoice, humanChoice);
    
    console.log(`Scores: Human - ${yourScore}, Computer - ${computerScore}`);
}

if (yourScore == targetScore) {
    console.log('Congrats you win!');
} else {
    console.log('The computer owned you!');
}


