const playerTurn=document.getElementById("turnText");
const cells=document.querySelectorAll(".cell");
const scoreXtext=document.getElementById("scoreX");
const scoreOtext=document.getElementById("scoreO");
let scoreX=0;
let scoreO=0;
const winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let currentPlayer="X";
let gameActive=true;

let board=["","","","","","","","",""];
const restartButton=document.getElementById("restartBtn");
function handleClick(index){
    if(!gameActive){
        return;
    }
    if(board[index]!==""){
        return;
    }
    board[index]=currentPlayer;
    cells[index].textContent=currentPlayer;
    if(currentPlayer==="X"){
        currentPlayer="O";
    }else{
        currentPlayer="X";
    }
    playerTurn.textContent="Player "+currentPlayer+"'s Trun";
    checkWinner();

}
function checkWinner() {

    for(let i = 0; i < winningPatterns.length; i++) {

        let a = winningPatterns[i][0];
        let b = winningPatterns[i][1];
        let c = winningPatterns[i][2];

        if(board[a] !== "" &&
           board[a] === board[b] &&
           board[a] === board[c]) {
            if(board[a] === "X"){
                scoreX++;
                scoreXtext.textContent = scoreX;
            } else {
                scoreO++;
                scoreOtext.textContent = scoreO;
            }

            gameActive = false;
            playerTurn.textContent = "Player " + board[a] + " Wins!";
            return;
        }
    }

    
    if(!board.includes("")) {
        gameActive = false;
        playerTurn.textContent = "It's a Draw!";
    }
}
function restartGame(){
    board=["","","","","","","","",""];
    currentPlayer="X";
    gameActive=true;
    playerTurn.textContent = "Player X's Turn";
    for(let i=0;i<cells.length;i++){
        cells[i].textContent="";
    }
}