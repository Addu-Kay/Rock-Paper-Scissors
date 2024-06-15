let humanScore = 0,
  computerScore = 0,
  round = 1;

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

function declareWinner() {
  const resultsContainer = document.getElementById("results");
  if (humanScore == 5) {
    resultsContainer.textContent = "You Won!!!";
  } else {
    resultsContainer.textContent = "Computer won:(";
  }
}

const winMap = { rock: "scissors", scissors: "paper", paper: "rock" };

function playRound(humanChoice, computerChoice) {
  const humanScoreContainer = document.getElementById("human-score");
  const computerScoreContainer = document.getElementById("computer-score");
  const choiceContainer = document.getElementById("choices");
  if (winMap[humanChoice] == computerChoice) {
    humanScore++;
    humanScoreContainer.textContent = humanScore;
    choiceContainer.textContent = `You won round:${round}, ${humanChoice} beats ${computerChoice}`;
    round++;
  } else if (winMap[computerChoice] == humanChoice) {
    computerScore++;
    computerScoreContainer.textContent = computerScore;
    choiceContainer.textContent = `Computer won round:${round}, ${computerChoice} beats ${humanChoice}`;
    round++;
  } else {
    choiceContainer.textContent = `It's a tie at round:${round}`;
    round++;
  }
  if (humanScore == 5 || computerScore == 5) {
    declareWinner();
    choiceButton.forEach((button) => {
      button.removeEventListener("click", playGame);
      button.setAttribute("style", "cursor:default");
    });
  }
}

const choiceButton = document.querySelectorAll(".choice");
choiceButton.forEach((button) => {
  button.addEventListener("click", playGame);
});

const playAgainButton = document.getElementById("play-again");
playAgainButton.addEventListener("click", () => {
  const humanScoreContainer = document.getElementById("human-score");
  const computerScoreContainer = document.getElementById("computer-score");
  const choiceContainer = document.getElementById("choices");
  const resultsContainer = document.getElementById("results");
  humanScore = 0;
  computerScore = 0;
  humanScoreContainer.textContent = humanScore;
  computerScoreContainer.textContent = computerScore;
  choiceContainer.textContent = "";
  resultsContainer.textContent = "";
  round = 1;
  choiceButton.forEach((button) => {
    button.addEventListener("click", playGame);
    button.setAttribute("style", "cursor:pointer");
  });
});

function playGame(event) {
  const computerChoice = getComputerChoice();
  const humanChoice = event.target.id;
  playRound(humanChoice, computerChoice);
}
