function getComputerChoice(){
    const random = Math.floor(Math.random() * 3) + 1;
    if(random === 1){
        return "Rock";
    }
    else if(random === 2){
        return "Paper";
    }
    else if (random === 3){
        return "Scissors";
    }
}
console.log(getComputerChoice())

function playRound(playerSelection, computerSelection){
    console.log(playerSelection);
    return "You Lose! Paper beats Rock";
}

function capitalize(str){
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
}

const playerSelection = capitalize("RoCk")
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection))