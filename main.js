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

const winMap = { rock: "scissors", scissors: "paper", paper: "rock" };

function playRound(humanChoice, computerChoice) {
  if (winMap[humanChoice] == computerChoice) {
    humanScore++;
  } else if (winMap[computerChoice] == humanChoice) {
    computerScore++;
  }
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  console.log(humanScore, computerScore);
  if (humanScore > computerScore) {
    console.log("Human won");
  } else if (humanScore < computerScore) {
    console.log("Computer won");
  } else {
    console.log("Draw");
  }
}

playGame();
