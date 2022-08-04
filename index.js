function computerPlay() {
    let random = Math.random();
    if (random <= 0.3333) {
      return "paper";
    } else if (random >= 0.6666) {
      return "rock";
    } else {
      return "scissors";
    }
  }
  
  
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === null) {
        return "Round Skipped"
    }
    
    if (playerSelection.toLowerCase() === "rock") {
      if (computerSelection === "paper") {
        computerScore++;
        return lose + " Paper beats Rock!";
      } else if (computerSelection === "rock") {
        return tie;
      } else {
        userScore++;
        return win + " Rock beats Scissors!";
      }
    }
  
    if (playerSelection.toLowerCase() === "scissors") {
      if (computerSelection === "paper") {
        userScore++;
        return win + " Scissors beat Paper!";
      } else if (computerSelection === "rock") {
        computerScore++;
        return lose + " Rock beats Scissors!";
      } else {
        return tie;
      }
    }
  
    if (playerSelection.toLowerCase() === "paper") {
      if (computerSelection === "paper") {
        return tie;
      } else if (computerSelection === "rock") {
        userScore++;
        return win + " Paper beats Rock!";
      } else {
        computerScore++;
        return lose + " Scissors beat Paper!";
      }
    }

  }
  
  
  let userScore = parseInt(0);
  let computerScore = parseInt(0);
  let win = "You win!"
  let lose = "You lose"
  let tie = "It is a tie"
  
  for(var i=0;i<5;i++){
    let playerSelection = prompt("Pick a move");
    const computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection))
    console.log("your score = " + userScore);
    console.log("Computer's score = " + computerScore);
  }

  