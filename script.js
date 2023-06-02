let hands = ["rock","paper", "scissors"];
function getComputerChoice()
{
    return hands[Math.floor(Math.random()*hands.length)];
}
function getUserChoice()
{
    let userChoice = prompt("Rock Paper Scissors?").toLowerCase();
    if(userChoice == "rock" || userChoice == "paper" ||userChoice == "scissors")
    {
        return userChoice;
    }
    else
    {
        console.log(`Invalid user Choice "${userChoice}"`)
        return null;
    }
}
function playRound(userChoice, computerChoice)
{
    let roundResult = null;
    if(userChoice == null)
    {
        roundResult = null;
    }
    console.log(`User choice is "${userChoice}", computer choice is "${computerChoice}"`);
    if(userChoice == computerChoice)
    {
        roundResult = "Draw";
    }
    if (userChoice == "rock" && computerChoice == "scissors")
    {
        roundResult = "User"
    }
    else if (userChoice == "paper" && computerChoice == "rock")
    {
        roundResult = "User"
    }
    else if (userChoice == "scissors" && computerChoice == "paper")
    {
        roundResult = "User"
    }
    else
    {
        roundResult = "Computer"
    }
    if(roundResult == null)
    {
        return "Wrong user choice input";
    }
    if(roundResult == "Draw")
    {
        return "It's a Draw!";
    }
    return`${roundResult} is the winner!`;
}

function game()
{
    console.log(playRound(getUserChoice(), getComputerChoice()))
}
game();
