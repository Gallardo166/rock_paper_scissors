//create a function getComputerChoice that does the following
function getComputerChoice() {
//create a variable called computerChoice
    let computerChoice;
//create an array called Choices containing "Rock", "Paper" and "Scissors"
    let choices = ["Rock", "Paper", "Scissors"];
//create a variable called choiceNumber that can be equal to 0, 1 or 2 corresponding to Rock, Paper and Scissors
//set choiceNumber equal to 0, 1 or 2 at random
    let choiceNumber = Math.floor(Math.random() * 3);
//get the item in Choices with index equal to choiceNumber
    return computerChoice = choices[choiceNumber];
//return computerChoice
};

//create a function called win that does the following
    function win() {
    //return a text displaying "You win! {playerSelection} beats {computerSelection}"
        return `You win! ${playerSelection} beats ${computerSelection}`;
    };

//create a function called lose that does the following
    function lose() {
    //return a text displaying "You lose! {computerSelection} beats {playerSelection}"
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    };

//create a function playRound that takes playerSelection and computerSelection and does the following:
function playRound(playerSelection, computerSelection) {
    //if computerSelection is rock
    if (computerSelection === "Rock") {
        //match playerSelection to scissors or paper
        switch (playerSelection) {
            //if playerSelection is paper, call win()
            case "Paper": win();
            break;
            //else, call lose()
            case "Scissors": lose();
            break;
        };
    //if computerSelection is paper
    } else if (computerSelection === "Paper") {
        //match playerSelection to rock or scissors
        switch (playerSelection) {
            //if playerSelection is scissors, call win()
            case "Scissors": win();
            //else, call lose()
            case "Rock": lose();
        };
    //if computerSelection is scissor
    } else if (computerSelection === "Scissors") {
        //match playerSelection to paper or rock
        switch (playerSelection) {
            //if playerSelection is rock, call win()
            case "Rock": win();
            //else, call lose()
            case "Paper": lose();
        };
    };
}