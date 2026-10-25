// Rock Paper Scissors: best of 5, with a realistic shake-then-show reveal.
// Open index.html in a browser. No build step, no packages.

const HANDS = {
  rock: "✊",
  paper: "✋",
  scissors: "✌️",
};
const BEATS = { rock: "scissors", paper: "rock", scissors: "paper" };
const CHOICES = Object.keys(HANDS);
const TOTAL_ROUNDS = 5;

let playerScore = 0;
let computerScore = 0;
let round = 1;
let playing = false;

const playerHand = document.getElementById("player-hand");
const computerHand = document.getElementById("computer-hand");
const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const roundEl = document.getElementById("round");
const resultEl = document.getElementById("result");
const historyEl = document.getElementById("history");
const buttons = [...document.querySelectorAll(".choice")];

function setButtons(disabled) {
  buttons.forEach((button) => { button.disabled = disabled; });
}

function outcome(player, computer) {
  if (player === computer) return "draw";
  return BEATS[player] === computer ? "win" : "lose";
}

function play(player) {
  if (playing || round > TOTAL_ROUNDS) return;
  playing = true;
  setButtons(true);
  playerHand.textContent = "✊";
  computerHand.textContent = "✊";
  playerHand.classList.remove("winner");
  computerHand.classList.remove("winner");
  playerHand.classList.add("shaking");
  computerHand.classList.add("shaking");
  resultEl.textContent = "Rock… paper… scissors…";
  resultEl.className = "result";

  // The shake animation runs 3 x 0.45s, then both hands reveal.
  setTimeout(() => {
    const computer = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    playerHand.classList.remove("shaking");
    computerHand.classList.remove("shaking");
    playerHand.textContent = HANDS[player];
    computerHand.textContent = HANDS[computer];

    const result = outcome(player, computer);
    if (result === "win") {
      playerScore += 1;
      playerHand.classList.add("winner");
      resultEl.textContent = `You win this round! ${player} beats ${computer}.`;
    } else if (result === "lose") {
      computerScore += 1;
      computerHand.classList.add("winner");
      resultEl.textContent = `Computer takes it. ${computer} beats ${player}.`;
    } else {
      resultEl.textContent = `Draw, both showed ${player}.`;
    }
    resultEl.classList.add(result);

    const item = document.createElement("li");
    item.textContent = `Round ${round}: you ${player}, computer ${computer} — ${result}`;
    historyEl.appendChild(item);

    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;

    if (round >= TOTAL_ROUNDS) {
      const final = playerScore === computerScore
        ? "It's a tie overall!"
        : playerScore > computerScore
          ? "You win the match!"
          : "Computer wins the match!";
      resultEl.textContent += ` ${final}`;
      roundEl.textContent = TOTAL_ROUNDS;
    } else {
      round += 1;
      roundEl.textContent = round;
    }
    playing = false;
    setButtons(round > TOTAL_ROUNDS);
  }, 1400);
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  round = 1;
  playing = false;
  playerHand.textContent = "✊";
  computerHand.textContent = "✊";
  playerHand.classList.remove("winner", "shaking");
  computerHand.classList.remove("winner", "shaking");
  playerScoreEl.textContent = "0";
  computerScoreEl.textContent = "0";
  roundEl.textContent = "1";
  historyEl.innerHTML = "";
  resultEl.textContent = "Pick your weapon below.";
  resultEl.className = "result";
  setButtons(false);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => play(button.dataset.choice));
});
document.getElementById("reset").addEventListener("click", reset);
