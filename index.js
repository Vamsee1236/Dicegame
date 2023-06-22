var num=Math.random();
num=Math.floor(num*6)+1;
var randomDiceImage="dice"+num+".png";
var image1=document.querySelector(".img1");
image1.setAttribute("src",randomDiceImage); 
var num2=Math.floor(Math.random()*6)+1;
var image2="dice"+num2+".png";
document.querySelector('.img2').setAttribute("src",image2);
let ch=document.querySelector("h1");
if(num>num2){
    ch.innerHTML="Player 1 Wins";
}
else if(num===num2)
    {
        ch.innerHTML="DRAW";
    }
else{
    ch.innerHTML="Player 2 Wins";
}