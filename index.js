var random1=(Math.random()*6+1);
var value1=(Math.floor(random1));

var random2=(Math.random()*6+1);
var value2=(Math.floor(random2));
document.getElementById("img1").src="dice"+value1+".png";
document.getElementById("img2").src="dice"+value2+".png";

if(value1>value2)
{
    document.getElementById("win").innerHTML="PLAYER 1 WON.";
}
else if(value1<value2)
{
    document.getElementById("win").innerHTML="PLAYER 2 WON.";
}
else if(value2===value2)
{
    document.getElementById("win").innerHTML="Draw";
}