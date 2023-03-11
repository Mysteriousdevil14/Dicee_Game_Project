
//// For player 1////

var randomNumber1=Math.floor(Math.random() * 6)+1; //1 to 6

var randomDiceImage1="images/dice"+ randomNumber1+".png"; //dice 1to 6

 var image1= document.querySelectorAll("img")[0];

 image1.setAttribute("src",randomDiceImage1);
 

 /// For player 2///

 var randomNumber2=Math.floor(Math.random() * 6)+1; 

 var randomDiceImage2="images/dice"+ randomNumber2+".png";

 var image2=document.querySelectorAll("img")[1];

 image2.setAttribute("src",randomDiceImage2);

var result= document.getElementsByTagName("h1")[0];

 if(randomNumber1 > randomNumber2){
    result.innerHTML="🚩Player 1 Wins!";
 }
 else if(randomNumber1 < randomNumber2){
    result.innerHTML="Player 2 Wins!🚩";
 }
 else{
    result.innerHTML="Draw!";
 }
