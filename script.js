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
    else
    {
        return checkUserChoice(userChoice);
    }

}
function checkUserChoice(choice)
{
    choice = choice.toLowerCase();
    if(hands.includes(choice))
    {
        return choice;
    }
    else
    {
        console.log(`Invalid user Choice "${choice}"`)
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
    if (userChoice == "rock" && computerChoice == "scissors" || userChoice == "paper" && computerChoice == "rock" || userChoice == "scissors" && computerChoice == "paper")
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
    return`${roundWinner} is the winner!`;
}

function game()
{
    for (let i = 0; i < 3; i++) {
        console.log(playRound(getUserChoice(), getComputerChoice()))
    }
}
game();
