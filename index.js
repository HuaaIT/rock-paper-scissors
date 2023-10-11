function getComputerChoice(){
    const random = Math.floor(Math.random() * 3) + 1;
    if(random === 1){
        console.log(random)
        return console.log("rock");
    }
    else if(random === 2){
        console.log(random)
        return console.log("paper");
    }
    else if (random === 3){
        console.log(random)
        return console.log("scissors");
    }
}
console.log(getComputerChoice())
// function playRound(playerSelection, computerSelection){
//     return "You Lose! Paper beats Rock";
// }
// const playerSelection = "rock"
// const computerSelection = getComputerChoice()
// console.log(playRound(playerSelection, computerSelection))