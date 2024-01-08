//create a function getComputerChoice that does the following
function getComputerChoice() {
//create a variable called computerChoice
    let computerChoice;
//create an array called Choices containing "Rock", "Paper" and "Scissors"
    let choices = ["rock", "paper", "scissors"];
//create a variable called choiceNumber that can be equal to 0, 1 or 2 corresponding to Rock, Paper and Scissors
//set choiceNumber equal to 0, 1 or 2 at random
    let choiceNumber = Math.floor(Math.random() * 3);
//get the item in Choices with index equal to choiceNumber
    return computerChoice = choices[choiceNumber];
//return computerChoice
};