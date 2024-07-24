let computerScore = 0;
let yourScore = 0;
const targetScore = 5;

const rockSound = document.getElementById('rock__sfx');
const paperSound = document.getElementById('paper__sfx');
const scissorsSound = document.getElementById('scissors__sfx');
const buttonSound = document.getElementById('button__sfx');
const winSound = document.getElementById('win__sfx');
const loseSound = document.getElementById('lose__sfx');

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

// <b style="color: ;</b>

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    if (computerChoice === humanChoice) {
    document.querySelector("#status").innerHTML = `Player chose <b style="color: #FF6F61;">${humanChoice}</b> and computer chose <b style="color: #FF6F61;">${computerChoice}</b>. <b style="color: #F5A623;">It's a draw!</b>`;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
        
    ) {
        yourScore += 1;
        document.querySelector("#status").innerHTML = `Computer chooses <b style="color: #FF6F61;">${computerChoice}</b>, Player chooses <b style="color: #FF6F61;">${humanChoice}</b>. <b style="color: #F5A623;">Player wins!</b>`;
    } else {
        computerScore += 1;
        document.querySelector("#status").innerHTML = `Computer chooses <b style="color: #FF6F61;">${computerChoice}</b>, Player chooses <b style="color: #FF6F61;">${humanChoice}</b>, <b style="color: #F5A623;">Computer wins!</b>`;       
    }

    document.querySelector("#humanScore").textContent = `Player: ${yourScore}`;
    document.querySelector("#computerScore").textContent = `Computer: ${computerScore}`;

    if (yourScore === targetScore) {
        playSound(winSound);
        document.querySelector("#status").innerHTML = `<b style="color: #F5A623;">Congrats you won!</b>`;
        disableImages();
    } else if (computerScore === targetScore) {
        playSound(loseSound);
        document.querySelector("#status").innerHTML = `<b style="color: #F5A623;">The computer owned you!</b>`;
        disableImages();
    }
}

function resetGame() {
    yourScore = 0;
    computerScore = 0;
    document.querySelector('#rock').classList.remove('disabled');
    document.querySelector('#paper').classList.remove('disabled');
    document.querySelector('#scissors').classList.remove('disabled');
    document.querySelector("#status").textContent = "Pick your hand!"
    document.querySelector("#humanScore").textContent = `Player: ${yourScore}`;
    document.querySelector("#computerScore").textContent = `Computer: ${computerScore}`;
}


function disableImages() {
    document.querySelector('#rock').classList.add('disabled');
    document.querySelector('#paper').classList.add('disabled');
    document.querySelector('#scissors').classList.add('disabled');
}






function playSound(input) {
    input.currentTime = -0.8; // Reset audio to the start
    input.play();
}


document.querySelector("#rock").addEventListener('click', () => {
    playSound(rockSound); // Play sound
    playRound('rock');
});

document.querySelector("#paper").addEventListener('click', () => {
    playSound(paperSound);
    playRound('paper');
});
document.querySelector("#scissors").addEventListener('click', () => {
    playSound(scissorsSound);
    playRound('scissors');
});
document.querySelector("#new_game").addEventListener('click', () => {
    playSound(buttonSound);
    resetGame()
});





