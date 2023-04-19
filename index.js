
var min=1;
var max=6;
var randomNumber1=Math.floor(Math.random()*(max-min+1)+min);// random Numbers 1-6
console.log(randomNumber1);

var randomDiceImage = "dice"+ randomNumber1+".png"; //dice1.png to dice6.png

var randomImageSource = "images/"+randomDiceImage; // images/dice1.png to images/dice6.png

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);


var randomNumber2=Math.floor(Math.random()*(max-min+1)+min);// random Numbers 1-6
console.log(randomNumber2);

randomDiceImage = "dice"+ randomNumber2+".png"; //dice1.png to dice6.png

randomImageSource = "images/"+randomDiceImage; // images/dice1.png to images/dice6.png

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins";
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins🚩";
}else {
    document.querySelector("h1").innerHTML="Draw!";
}