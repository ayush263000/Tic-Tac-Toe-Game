let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelectorAll("#reset-button");
let newGameButton = document.querySelector("#new-button");
let messageContainer = document.querySelector(".message-container");
let message = document.querySelector("#message");

let turnO = true;    //playerX, playerO

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turnO = true;
    enableButtons();
    messageContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => { 
        if(turnO) {   //playerO
            box.innerText = "O";
            turnO = false;
        } else {    //playerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableButtons = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableButtons = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    message.innerText = `Congratulations, Winner is ${winner}`;
    messageContainer.classList.remove("hide");
    disableButtons();
};

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
};

newGameButton.addEventListener("click", resetGame);
// resetButton.addEventListener("click", resetGame);