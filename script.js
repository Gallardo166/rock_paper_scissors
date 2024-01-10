function getComputerChoice() {
    let computerChoice;
    let choices = ["Rock", "Paper", "Scissors"];
    let choiceNumber = Math.floor(Math.random() * 3);
    return computerChoice = choices[choiceNumber];
};

function win(playerSelection, computerSelection) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
};

function lose(playerSelection, computerSelection) {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
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
}

let playerSelection, computerSelection, playerScore, computerScore;

const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerSelection = button.textContent;
        computerSelection = getComputerChoice();
        if (playerSelection === computerSelection) {
            console.log("It's a tie!");
        } else {
            playRound(playerSelection, computerSelection);
        };
    });
});