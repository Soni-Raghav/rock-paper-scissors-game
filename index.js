// Game variables
let playerScore = 0;
let computerScore = 0;

// Function to play the game
function playGame(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  if (playerChoice === computerChoice) {
    showResult("It's a tie!");
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    showResult("You win!");
  } else {
    computerScore++;
    showResult("Computer wins!");
  }

  updateScore();
  checkGameOver();
}

// Function to display the result
function showResult(result) {
  const resultElement = document.getElementById("score");
  resultElement.textContent = result;
}

// Function to update the score
function updateScore() {
  const playerScoreElement = document.getElementById("player1");
  const computerScoreElement = document.getElementById("computer");

  playerScoreElement.value = playerScore;
  computerScoreElement.value = computerScore;
}

// Function to check if the game is over
function checkGameOver() {
  if (playerScore === 5 || computerScore === 5) {
    const buttons = document.querySelectorAll("#display button");
    buttons.forEach((button) => (button.disabled = true));

    const resetButton = document.getElementById("reset");
    resetButton.disabled = false;

    if (playerScore === 5) {
      showResult("Game over. You win!");
    } else {
      showResult("Game over. Computer wins!");
    }
  }
}

// Function to reset the game
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  updateScore();
  showResult("");
  
  const buttons = document.querySelectorAll("#display button");
  buttons.forEach((button) => (button.disabled = false));

  const resetButton = document.getElementById("reset");
  resetButton.disabled = true;
}