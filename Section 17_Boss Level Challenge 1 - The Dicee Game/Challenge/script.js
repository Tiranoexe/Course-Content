var player1Num = Math.floor(Math.random()*6) + 1;
var player2Num = Math.floor(Math.random()*6) + 1;

var randomDiceImg1 = "/Dicee+Challenge+-+Starting+Files/Dicee Challenge - Starting Files/images/dice"+ player1Num +".png";
var randomDiceImg2 = "/Dicee+Challenge+-+Starting+Files/Dicee Challenge - Starting Files/images/dice"+ player2Num +".png";

document.querySelector(".dice1").setAttribute("src", randomDiceImg1);
document.querySelector(".dice2").setAttribute("src", randomDiceImg2);

if (player1Num > player2Num){
    document.querySelector("h1").innerHTML = " 🚩 Player 1 wins";
}
else if (player2Num > player1Num){
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}
