let playerScore = 0;
let computerScore = 0;

function playGame() {
    rounds = parseInt(prompt("How many rounds would you like to play?"));
    for (let i = 0; i < rounds; i++) {
        playRound();
    }
}

function playRound() {
    const humanChoice = getHumanChoice(); 
    const computerChoice = Math.floor(Math.random() * 3);
    if (humanChoice === computerChoice) {
        console.log("It's a tie! No points are awarded");
    } else if (humanChoice === 0 && computerChoice === 1) {
        console.log("Paper beats rock! You lose!");
        computerScore++;
    } else if (humanChoice === 0 && computerChoice === 2) {
        console.log("Rock beats scissors! You win!");
        playerScore++;
    } else if (humanChoice === 1 && computerChoice === 0) {
        console.log("Paper beats rock! You win!")
        playerScore++;
    } else if (humanChoice === 1 && computerChoice === 2) {
        console.log("Scissors beats paper! You lose!");
        computerScore++;
    } else if (humanChoice === 2 && computerChoice === 0) {
        console.log("Rock beats scissors! You lose!");
        computerScore++; 
    } else {
        console.log("Scissors beats paper! You win!"); 
        playerScore++;
    }
    console.log("Current scores: \nPlayer: " + playerScore + " Computer: " + computerScore);
}

function getHumanChoice() {
    let choiceValue = -1;
    const choice = prompt("Rock [0]. Paper [1]. Scissors [2]?");
    const choiceLower = choice.toLowerCase();
    if (choiceLower === "rock" || choice === 0) {
        choiceValue = 0;
        return choiceValue;
    } else if (choiceLower === "paper" || choice === 1) {
        choiceValue = 1;
        return choiceValue;
    } else {
        choiceValue = 2;
        return choiceValue;
    }
}

playGame();