let hands = ["Rock","Paper", "Scissors"];
function getComputerChoice()
{
    return hands[Math.floor(Math.random()*hands.length)];
}
function getUserChoice()
{
    let userChoice = prompt("Rock Paper Scissors?").toLowerCase();
    console.log(`User choice is ${userChoice}`);
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
    if(userChoice == null)
    {
        return userChoice;
    }
    if(userChoice == computerChoice)
    {
        return("Draw");
    }
    if (userChoice == "rock" && computerChoice == "scissors")
    {
        return("User");
    }
    else if (userChoice == "paper" && computerChoice == "rock")
    {
        return("User");
    }
    else if (userChoice == "scissors" && computerChoice == "paper")
    {
        return("User");
    }
    else
    {
        return("Computer");
    }
}

function game()
{
    console.log(playRound(getUserChoice(),getComputerChoice()));
}
game();