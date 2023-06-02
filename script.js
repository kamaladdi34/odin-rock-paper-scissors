let hands = ["Rock","Paper", "Scissors"];
function getComputerChoice()
{
    return hands[Math.floor(Math.random()*hands.length)];
}
function getUserChoice()
{
    let userChoice = prompt("Rock Paper Scissors?").toLowerCase();
    userChoice[0].toUpperCase();
    console.log(`User choice is ${userChoice}`);
    if(userChoice == "Rock" || userChoice == "Paper" ||userChoice == "Scissors")
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
    if(userChoice == computerChoice)
    {
        return("Draw");
    }
    if (userChoice == "Rock" && computerChoice == "Scissors")
    {
        return("User");
    }
    else if (userChoice == "Paper" && computerChoice == "Rock")
    {
        return("User");
    }
    else if (userChoice == "Scissors" && computerChoice == "Paper")
    {
        return("User");
    }
    else
    {
        return("Computer");
    }
}
