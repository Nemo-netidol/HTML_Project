const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtn = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;

let ab = choiceBtn.forEach(button =>{
    button.addEventListener("click", ()=>{
        player = button.textContent;
        playerText.textContent = `Player: ${player}`;
        computerText.textContent = `Computer: ${computer}`;
        resultText.textContent = findResult();
        computerTurn();
        findResult();
    })
});

function computerTurn(){
    let numRand = Math.floor(Math.random() * 3) + 1;

    switch(numRand){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}

function findResult(){
    if(player == computer){
        return "DRAW!!"
    }
    else if(computer == "ROCK"){
        return (player == "PAPPER") ? "YOU WIN!!" : "YOU LOSE!!"
    }
    else if(computer == "PAPPER"){
        return (player == "SCISSORS") ? "YOU WIN!!" : "YOU LOSE!!"
    }
    else if(computer == "SCISSORS"){
        return (player == "ROCK") ? "YOU WIN!!" : "YOU LOSE!!"
    }
}

console.log(computerTurn());
