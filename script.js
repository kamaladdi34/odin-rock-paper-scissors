const hands = ["rock", "paper", "scissors"];
const userButtons = document.querySelectorAll('.user-side .container-row > button');
const userChoiceEL = document.querySelector('.user-choice');
const computerChoiceEL = document.querySelector('.computer-choice');
const scores = document.querySelector('.scores > p')
const roundInfo = document.querySelector('.round-info');
const gameWinner = document.querySelector('.game-winner');
let userScore = 0, computerScore = 0;

function getComputerChoice() {
  return hands[Math.floor(Math.random() * hands.length)];
}

function playRound(userChoice, computerChoice) {
  if (userChoice === null) {
    return "Wrong user choice input";
  }
  if(userScore == 5 || computerScore == 5)
  {
    resetScore();
  }
  updateChoicesGraphics(userChoice,computerChoice);
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    userScore++;
    roundInfo.textContent = "you won!";
  } else if (userChoice === computerChoice) {
    roundInfo.textContent = "It's a draw!";
  } else {
    computerScore++;
    roundInfo.textContent = "beep boop!, robot won!";
  }
  scores.textContent = `${userScore} - ${computerScore}`;
  gameWinner.textContent = updateWinnerText();
}

userButtons.forEach((button)=>{
  button.addEventListener('click',(e)=> {
    playRound(e.target.getAttribute('data-choice'),getComputerChoice())
  })
})

function updateChoicesGraphics(userChoice,computerChoice){
  userChoiceEL.textContent = getEmojiFromChoice(userChoice);
  computerChoiceEL.textContent = getEmojiFromChoice(computerChoice);
}

function getEmojiFromChoice(choice){
  switch(choice){
    case 'scissors':
      return '✂️'
      break;
    case 'rock':
      return '🪨'
      break;
    case 'paper':
      return '📄'
      break;
  }
}

function updateWinnerText(){
  if(userScore == 5){
    return 'you won the game!, great job! 😀';
  }
  else if(computerScore == 5){
    return 'oh oh!, looks like robot won! 😞';
  }
  else{
    return 'first to 5 wins the game! 😁';
  }
}

function resetScore(){
  userScore = 0;
  computerScore = 0;
}