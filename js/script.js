// User enters either "Rock", "Paper", "Scissors"
// const playerSelection = prompt(
//   'Please choose "Rock", "Paper", "Scissors".'
// ).toLowerCase();
const computerSelection = computerPlay();

// Computer selects either "Rock", "Paper", "Scissors"
function computerPlay() {
  let input = Math.floor(Math.random() * 3) + 1;

  if (input === 1) return 'rock';
  else if (input === 2) return 'paper';
  else return 'scissors';
}

// If user plays "Rock" and computer plays "Scissors", player wins
// If user plays "Paper" and computer plays "Rock", player wins
// If user plays "scissors" and computer plays "paper", player wins
// If both play the same hand, it's a draw, otherwise computer wins
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log('You draw');
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    console.log('You won');
  } else console.log('You lost');
}

playRound(playerSelection, computerSelection);
