function getComputerChoice() {
    let computerChoice;
    let choices = ["Rock", "Paper", "Scissors"];
    let choiceNumber = Math.floor(Math.random() * 3);
    return computerChoice = choices[choiceNumber];
};

let playerSelection, computerSelection, playerScore = 0, computerScore = 0;

const buttonDiv = document.querySelector(".buttons")
const textDiv = document.querySelector(".text")
const matchStatement = document.querySelector("#matchStatement")
const scores = document.querySelector("#scores")
const winner = document.createElement("p")

const playAgain = document.createElement("button")
playAgain.textContent = "Play Again"

function win(playerSelection, computerSelection) {
    matchStatement.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    playerScore += 1;
};

function lose(playerSelection, computerSelection) {
    matchStatement.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    computerScore += 1;
};

//compare the player's and computer's choices to see who won
function playRound(playerSelection, computerSelection) {
    if (computerSelection === "Rock") {
        switch (playerSelection) {
            case "Paper": win(playerSelection, computerSelection);
            break;
            case "Scissors": lose(playerSelection, computerSelection);
            break;
        };
    } else if (computerSelection === "Paper") {
        switch (playerSelection) {
            case "Scissors": win(playerSelection, computerSelection);
            break;
            case "Rock": lose(playerSelection, computerSelection);
            break;
        };
    } else if (computerSelection === "Scissors") {
        switch (playerSelection) {
            case "Rock": win(playerSelection, computerSelection);
            break;
            case "Paper": lose(playerSelection, computerSelection);
            break;
        };
    };
    scores.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
    checkFinish();
}

const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerSelection = button.textContent;
        computerSelection = getComputerChoice();
        if (playerSelection === computerSelection) {
            matchStatement.textContent = "It's a tie!";
        } else {
            playRound(playerSelection, computerSelection);
        };
    });
});

function checkFinish() {
    if (playerScore == 5) {
        textDiv.appendChild(winner)
        winner.textContent = "Congratulations, you win!";
        buttons.forEach((button) => buttonDiv.removeChild(button));
        buttonDiv.appendChild(playAgain);
    };
    if (computerScore == 5) {
        textDiv.appendChild(winner)
        winner.textContent = "Oh no, you lost.";
        buttons.forEach((button) => buttonDiv.removeChild(button));
        buttonDiv.appendChild(playAgain);
    };
};

playAgain.addEventListener("click", () => {
    buttonDiv.removeChild(playAgain);
    buttons.forEach((button) => buttonDiv.appendChild(button));
    textDiv.removeChild(winner);
    matchStatement.textContent = "";
    scores.textContent = "";
    playerScore = 0;
    computerScore = 0;
});