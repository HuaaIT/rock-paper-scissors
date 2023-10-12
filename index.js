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
    if (playerSelection === "Rock" && computerSelection === "Paper"){
        return "You Lose! Paper beats Rock";
    }
    else if(playerSelection === "Rock" && computerSelection === "Scissors"){
        return "You Win! Rock beats Scissors";
    }
    else if(playerSelection === "Scissors" && computerSelection === "Paper"){
        return "You Win! Scissors beats Paper";
    }
    else if(playerSelection === "Scissors" && computerSelection === "Rock"){
        return "You Lose! Rock beat Scissors";
    }
    else if(playerSelection === "Paper" && computerSelection === "Rock"){
        return "You Win! Paper beats Rock";
    }
    else if(playerSelection === "Paper" && computerSelection === "Scissors"){
        return "You Lose! Scissors beats Paper";
    }
    else if(playerSelection === computerSelection){
        return "You Tie! Play Again! ";
    }
}

function capitalize(str){
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
}

function game(){

}
const playerSelection = capitalize("paper")
console.log(playerSelection)
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection))