let winners = [];
const choices = ["rock", "paper", "scissors"];

function startGame() {
  //play game until someone wins 5 times
  let imgs = document.querySelectorAll("img");
  imgs.forEach((img) =>
    img.addEventListener(('click'), () => {
      if (img.id) {
        playRound(img.id);
      }
    })
  );
}

function playRound(playerChoice) {
  let wins = checkWins();
  if (wins >= 5){
    return
  }
  const computerChoice = computerSelect();

  const winner = checkWinner(playerChoice, computerChoice);
  winners.push(winner);
  tallyWins()
  displayRound(playerChoice, computerChoice, winner);
  wins = checkWins();
  if (wins == 5) {
    displayEnd()
  }
}

function displayEnd() {
  let playerWins = winners.filter((item) => item == "Player").length;

  if (playerWins == 5) {
    document.querySelector(".winner").textContent = 
      'You won 5 games, congrats!';
  } else {
    document.querySelector(".winner").textContent = 
      'Sorry, the computer won 5 times!';
  }
  document.querySelector(".reset").getElementsByClassName.display = "flex";
}

function displayRound(playerChoice, computerChoice, winner) {
  document.querySelector(".playerChoice").textContent = `You Chose: ${
    playerChoice.charAt(0).toUpperCase().slice(1)
  }`;
  document.querySelector(".computerChoice").textContent = `Computer Chose: ${
    computerChoice.charAt(0).toUpperCase().slice(1)
  }`;
  document.querySelector(".winner").textContent = `Round Winner: ${winner}`;
}

function tallyWins(){
  const pWinCount = winners.filter((item) => item == "Player").length;
  const cWinCount = winners.filter((item) => item == "Computer").length;
  const ties = winners.filter((item) => item == "Tie").length;
  document.querySelector('.playerScore').textContent = `Score: ${pWinCount}`;
  document.querySelector('.computerScore').textContent = `Score: ${cWinCount}`;
  document.querySelector('.ties').textContent = `Ties: ${ties}`;
}

function computerSelect() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function checkWins() {
  const pWinCount = winners.filter((item) => item == "Player").length;
  const cWinCount = winners.filter((item) => item == "Computer").length;
  return Math.max(pWinCount,cWinCount)
}

function checkWinner(choice1, choice2) {
  if (
    (choice1 == "rock" && choice2 =="scissors") ||
    (choice1 == "scissors" && choice2 == "paper") ||
    (choice1 == "paper" && choice2 == "rock")
  ) {
    return "Player";
  } else if (choice1 == choice2) {
    return "Tie";
  } else {
    return "Computer";
  }
}

function setWins() {
  const pWinCount = winners.filter((item) => item == "Player").length;
  const cWinCount = winners.filter((item) => item == "Computer").length;
  const ties = winners.filter((item) => item == "Tie").length;
}
startGame();