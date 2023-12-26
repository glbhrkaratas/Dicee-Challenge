var randomNumber1= Math.floor(Math.random()*6)+1;//numbers between 1 and 6

var randomDiceImg="dice"+randomNumber1+".png";//Choose a random image 

var randomDiceLoc="images/"+randomDiceImg;

document.querySelectorAll("img")[0].setAttribute("src",randomDiceLoc);

var randomNumber2 =Math.floor(Math.random()*6)+1;

var randomimgDice="images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomimgDice);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 wins!";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins! 🚩"; 
}
else{
    document.querySelector("h1").innerHTML="Draw!🤝";
}

function refreshPage(){
    window.location.reload();
} 