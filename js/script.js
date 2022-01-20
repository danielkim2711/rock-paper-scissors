const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

const result = document.querySelector('.result');

function playRound(e) {
  // User choose either "Rock", "Paper", "Scissors"
  const playerSelection = e.target.classList.value;

  // Computer choose either "Rock", "Paper", "Scissors"
  let computerInput = Math.floor(Math.random() * 3) + 1;
  let computerSelection;

  if (computerInput === 1) computerSelection = 'rock';
  else if (computerInput === 2) computerSelection = 'paper';
  else computerSelection = 'scissors';

  // Define rock, paper and scissors logic and score
  if (playerSelection === computerSelection) {
    result.textContent = "It's a draw";
    return;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    result.textContent = 'You won!';
    playerScore.textContent++;
  } else {
    result.textContent = 'You lost!';
    computerScore.textContent++;
  }

  // When score hits 5, end the game
  if (playerScore.textContent == 5) {
    alert('Congratulations! You won!');
    playerScore.textContent = 0;
    computerScore.textContent = 0;
  } else if (computerScore.textContent == 5) {
    alert('Oops, you lost! Better luck next time!');
    playerScore.textContent = 0;
    computerScore.textContent = 0;
  }
}

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);
