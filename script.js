const hands = ["rock", "paper", "scissors"];
const userButtons = document.querySelectorAll('.user-side .container-row > button');
const userChoiceEL = document.querySelector('.user-choice');
const computerChoiceEL = document.querySelector('.computer-choice');
const scores = document.querySelector('.scores > p')
let userScore = 0, computerScore = 0;
function getComputerChoice() {
  return hands[Math.floor(Math.random() * hands.length)];
}

function getUserChoice() {
  let userChoice = prompt("Rock Paper Scissors?");
  if (userChoice === null) {
    console.log("User didn't input a choice");
    return userChoice;
  } else {
    return checkUserChoice(userChoice);
  }
}

function checkUserChoice(choice) {
  choice = choice.toLowerCase();
  if (hands.includes(choice)) {
    return choice;
  } else {
    console.log(`Invalid user choice "${choice}"`);
    return null;
  }
}

function playRound(userChoice, computerChoice) {
  if (userChoice === null) {
    return "Wrong user choice input";
  }
  updateChoicesGraphics(userChoice,computerChoice)
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    userScore++;
  } else if (userChoice === computerChoice) {
    return "It's a draw!";
  } else {
    computerScore++;
  }
  scores.textContent = `${userScore} - ${computerScore}`;
}
userButtons.forEach((button)=>{
  button.addEventListener('click',(e)=> {
    playRound(e.target.getAttribute('data-choice'),getComputerChoice())
  })
})
function updateChoicesGraphics(userChoice,computerChoice)
{
  userChoiceEL.textContent = getEmojiFromChoice(userChoice);
  computerChoiceEL.textContent = getEmojiFromChoice(computerChoice);
}
function getEmojiFromChoice(choice)
{
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