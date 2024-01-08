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
    function win(playerSelection, computerSelection) {
    //return a text displaying "You win! {playerSelection} beats {computerSelection}"
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    };

//create a function called lose that does the following
    function lose(playerSelection, computerSelection) {
    //return a text displaying "You lose! {computerSelection} beats {playerSelection}"
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    };

//create a function playRound that takes playerSelection and computerSelection and does the following:
function playRound(playerSelection, computerSelection) {
    //if computerSelection is rock
    if (computerSelection === "Rock") {
        //match playerSelection to scissors or paper
        switch (playerSelection) {
            //if playerSelection is paper, call win()
            case "Paper": win(playerSelection, computerSelection);
            break;
            //else, call lose()
            case "Scissors": lose(playerSelection, computerSelection);
            break;
        };
    //if computerSelection is paper
    } else if (computerSelection === "Paper") {
        //match playerSelection to rock or scissors
        switch (playerSelection) {
            //if playerSelection is scissors, call win()
            case "Scissors": win(playerSelection, computerSelection);
            break;
            //else, call lose()
            case "Rock": lose(playerSelection, computerSelection);
            break;
        };
    //if computerSelection is scissor
    } else if (computerSelection === "Scissors") {
        //match playerSelection to paper or rock
        switch (playerSelection) {
            //if playerSelection is rock, call win()
            case "Rock": win(playerSelection, computerSelection);
            break;
            //else, call lose()
            case "Paper": lose(playerSelection, computerSelection);
            break;
        };
    };
}

let playerSelection, computerSelection;

//set a sentry isTie (True) for the following while loop:
let isTie = true;
while (isTie) {
    //set computerSelection to be a random choice using getComputerChoice()
    computerSelection = getComputerChoice();
    //set a sentry keepGoing (True) for the following while loop:
    let keepGoing = true;
        //while keepGoing is True,
    while (keepGoing) {
            //get user input for playerSelection and capitalise it
        playerSelection = capitalize(prompt("What's your choice? Rock, paper or scissors?"))
            //if playerSelection is one of rock, paper or scissors, set keepGoing to False
        switch (playerSelection) {
            case "Rock":
            case "Paper":
            case "Scissors":
                keepGoing = false;
                break;
            //else, keepGoing is still True
            default:
        };
    };
    //if playerSelection is the same as computerSelection,
    if (playerSelection === computerSelection) {
        //print "It is a tie!" and isTie is still True
        console.log("It is a tie!")
    //else, set isTie to be False, and call playRound()
    } else {
        isTie = false
        playRound(playerSelection, computerSelection)
    };
};

//create a function called capitalize(string) that takes a string that converts it such that only the first character of the string is capitalized
function capitalize(string) {
    //create a variable called firstCharacter, to be the first character of the string
    let firstCharacter = string.at(0);
    //create a variable called remainingCharacters, to be the rest of the string
    let remainingCharacters = string.slice(1);
    //capitalise the first character
    firstCharacter = firstCharacter.toUpperCase();
    //lowercase the remaining characters
    remainingCharacters = remainingCharacters.toLowerCase();
    //return the fist character and the remaining character as one piece
    return firstCharacter + remainingCharacters;
};