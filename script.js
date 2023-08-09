console.log("Welcome to tic tac toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let isGameOver = false;

// tic tac toe 
let turn = "X";
//function to change turn from X to 0 or vice versa
const changeTurn=() =>{
    return turn==="X"?"O":"X";
}

//function to check winner
const checkWin=()=>{
    let boxes = document.getElementsByClassName("box");
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8],
    ]
    wins.forEach(e=>{
        if((boxes[e[0]].innerText===boxes[e[1]].innerText)&&(boxes[e[2]].innerText===boxes[e[1]].innerText)&&(boxes[e[0]].innerText!=="")){
            document.getElementsByClassName("info")[0].innerText = boxes[e[0]].innerText+" Won ";
            isGameOver=true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="200px";
        }
    })
}

// Main game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText= turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isGameOver)
                document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
            else{
                setTimeout(resetGrid, 300000);
                
            }
        }
    })
})

const resetGrid=()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
    });
    turn = "X";
    document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
    isGameOver = false;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0px";
}

reset.addEventListener('click',()=>{
    audioTurn.play();
    resetGrid();
})