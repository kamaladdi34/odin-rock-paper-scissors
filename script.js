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
        playRound(userChoice,getComputerChoice())
    }
    else
    {
        console.log(`USer choice "${userChoice}" is invalid`)
    }
}
function playRound(userChoice, computerChoice)
{
    if(userChoice == computerChoice)
    {
        console.log("Draw!")
    }
    if (userChoice == "Rock" && computerChoice == "Scissors")
    {
        console.log("User wins!")
    }
    else if (userChoice == "Paper" && computerChoice == "Rock")
    {
        console.log("User wins!")
    }
    else if (userChoice == "Scissors" && computerChoice == "Paper")
    {
        console.log("User wins!")
    }
    else
    {
        console.log("Computer wins!")
    }
}
