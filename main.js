function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
      break;

    case 1:
      return "paper";
      break;

    default:
      return "scissors";
      break;
  }
}

function getHumanChoice() {
  let choice = prompt("Type rock, paper or scissors");
  choice = choice.toLowerCase();
  return choice;
}

let humanScore = 0,
  computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore++;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore++;
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    computerScore++;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    computerScore++;
  }
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if (humanScore > computerScore) {
    console.log("Human won");
  } else {
    console.log("Computer won");
  }
}

playGame();
