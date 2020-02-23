var colors = [];
var num = {};
var squares = document.querySelectorAll(".squares");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var navDisplay = document.querySelector("#navDisplay");
// var num1 = 6;
// var num2 = Math.floor(Math.random()*(num));
// 버튼 변수설정
var newColor = document.querySelector("#newColor");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var secondRow = document.querySelector("#secondRow");
// 숫자 변수
num.num1 = 6;
num.num2 = Math.floor(Math.random()*(num.num1));
hard.classList.add("selected");

function colorInit(){
    for(i = 0; i < num.num1; i++){
        // var RandomNumber = num();
        colors[i] = `rgb(${number()}, ${number()}, ${number()})`;
    }
    var pickColor = colors[num.num2];
    colorDisplay.innerHTML = pickColor;
}

function number(){
    return Math.floor(Math.random()*257);
}

function squaresInit(){
    for(i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", squareClick);
    }
}

function squareClick(){
    var clickColor = this.style.backgroundColor;
    var pickColor = colors[num.num2];
        console.log(clickColor, pickColor);
        if(clickColor === pickColor){
            messageDisplay.innerHTML = "GOOD!";
            newColor.innerHTML = "Play again?"
            navDisplay.style.backgroundColor = pickColor;
            for(i = 0; i < squares.length; i++){
                squares[i].style.backgroundColor = pickColor;
            }
        }else{
            messageDisplay.innerHTML = "AGAIN!";
        this.style.backgroundColor = "#222222";
        }       
}
// 버튼함수
function easyBtn(){
    easy.addEventListener("click", easyBtnClick);
}

function easyBtnClick(){
    num.num1 = 3;
    num.num2 = Math.floor(Math.random()*(num.num1));
    reset();
    secondRow.classList.add("hide");
    easy.classList.add("selected");
    hard.classList.remove("selected");
}

function hardBtn(){
    hard.addEventListener("click", hardBtnClick);
}

function hardBtnClick(){
    num.num1 = 6;
    num.num2 = Math.floor(Math.random()*(num.num1));
    reset();
    secondRow.classList.remove("hide");
    hard.classList.add("selected");
    easy.classList.remove("selected");
}

function newColorBtn(){
    newColor.addEventListener("click", reset);
}
// 리셋함수
function reset(){
    num.num2 = Math.floor(Math.random()*(num.num1));
    messageDisplay.innerHTML = "";
    newColor.innerHTML = "new color";
    navDisplay.style.backgroundColor = "steelblue";
    colorInit();
    squaresInit();
}

// 실행부분
function init(){
    colorInit();
    squaresInit();
    newColorBtn();
    easyBtn();
    hardBtn();
}

init();