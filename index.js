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
    if (playerSelection !== computerSelection && computerSelection === 'Scissors') {
        return "You win! Rock beats Scissors";
    } else if (playerSelection === computerSelection) {
        return "Tie game!";
    } else {
        return "You lose! Paper beats rock!"
    }
  }
   
const playerSelection = "Rock";
const computerSelection = result;
console.log(playRound(playerSelection, computerSelection));

