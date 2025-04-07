let scores = JSON.parse(localStorage.getItem("scores"));

if (scores === null) {
  scores = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
}

updateScoreElement();

document.getElementById("rock").addEventListener("click", function () {
  playGame("rock");
});
document.getElementById("paper").addEventListener("click", function () {
  playGame("paper");
});
document.getElementById("scissors").addEventListener("click", function () {
  playGame("scissors");
});

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie";
    } else if (computerMove === "paper") {
      result = "You Lose";
    } else if (computerMove === "scissors") {
      result = "You Win";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You Win";
    } else if (computerMove === "paper") {
      result = "Tie";
    } else if (computerMove === "scissors") {
      result = "You Lose";
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You Lose";
    } else if (computerMove === "paper") {
      result = "You Win";
    } else if (computerMove === "scissors") {
      result = "Tie";
    }
  }

  if (result === "You Win") {
    scores.wins++;
  } else if (result === "You Lose") {
    scores.losses++;
  } else if (result === "Tie") {
    scores.ties++;
  }

  updateScoreElement();
  localStorage.setItem("scores", JSON.stringify(scores));

  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(".js-moves").innerHTML = `You <img src="images/${playerMove}-emoji.png" class="emoji" />, <img src="images/${computerMove}-emoji.png" class="emoji" /> Computer.`;
}

function updateScoreElement() {
  document.querySelector(".js-score").innerHTML = `Wins: ${scores.wins}, Losses: ${scores.losses}, Ties: ${scores.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}
