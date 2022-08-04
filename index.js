//console.log('Hello World!');

//get computer to make random choice 
function getComputerChoice(choices) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * choices.length);
    // get random item
    const item = choices[randomIndex];
    // return choice from array
    return item;
}
//create array of Rock, Paper or scissors
const choices = ['Rock', 'Paper', 'Scissors'];
//get result of random computer selection
const result = getComputerChoice(choices);
//prints result 
console.log(result);



//playing single round against computer
function playRound(playerSelection, computerSelection) {
    if (playerSelection !== computerSelection && computerSelection === 'Scissors' && playerSelection === 'Rock') {
        return "You win! Rock beats Scissors";
    } else if (playerSelection !== computerSelection && computerSelection === 'Paper' && playerSelection === 'Rock') {
        return "You lose! Paper beats Rock";
    } else if (playerSelection !== computerSelection && computerSelection === 'Scissors' && playerSelection === 'Paper') {
        return "You lose! Scissors beats Paper";
    } else if (playerSelection !== computerSelection && computerSelection === 'Rock' && playerSelection === 'Paper') {
        return "You win! Paper beats Rock";
    } else if (playerSelection !== computerSelection && computerSelection === 'Rock' && playerSelection === 'Scissors') {
        return "You lose! Rock beats Scissors";
    } else if (playerSelection !== computerSelection && computerSelection === 'Paper' && playerSelection === 'Scissors') {
        return "You win! Scissors beats Paper";
    } else if (playerSelection === computerSelection) {
        return "Tie game! Play again";
    } else {
        return "Error, enter valid choice";
    }   
}  
    
    
    
 
   
const playerSelection = prompt("Rock, Paper, or Scissors?");
const computerSelection = result;
console.log(playRound(playerSelection, computerSelection));

