let hands = ["rock","paper", "scissors"];
function getComputerChoice()
{
    return hands[Math.floor(Math.random()*hands.length)];
}
function getUserChoice()
{
    let userChoice = prompt("Rock Paper Scissors?");
    if(userChoice == null) 
    {
        console.log("User didn't input a choice");
        return userChoice;
    }
    userChoice = userChoice.toLowerCase();
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
    let roundWinner = null;
    if(userChoice == null)
    {
        return "Wrong user choice input";
    }
    console.log(`User choice is "${userChoice}", computer choice is "${computerChoice}"`);
    if (userChoice == "rock" && computerChoice == "scissors")
    {
        roundWinner = "User"
    }
    else if (userChoice == "paper" && computerChoice == "rock")
    {
        roundWinner = "User"
    }
    else if (userChoice == "scissors" && computerChoice == "paper")
    {
        roundWinner = "User"
    }
    else if(userChoice == computerChoice)
    {
        return "It's a Draw!";
    }
    else
    {
        roundWinner = "Computer";
    }
    if(roundWinner == null)
    {
        return "Wrong user choice input";
    }
    return`${roundWinner} is the winner!`;
}

function game()
{
    for (let i = 0; i < 3; i++) {
        console.log(playRound(getUserChoice(), getComputerChoice()))
    }
}
game();
