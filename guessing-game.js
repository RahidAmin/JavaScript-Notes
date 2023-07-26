
var win=0;
var lose=0;
for(var x=0;x<5;x++)
{
    var guessingNumber=parseInt(prompt("Guess a Number Between 1 to 5: "));

    var randomNumber=Math.floor(Math.random()*5)+1;
    
    
    if(guessingNumber==randomNumber)
    {
        console.log("Your Guessing number is Currect..");
        console.log("Number is: "+randomNumber);
        ++win;
    }
    else{
        console.log("Your Guessing number is wrond..");
        console.log("Number is: "+randomNumber);
        ++lose;
    }
}
document.write("You have won: "+win);
document.write("<br>");
document.write("You have lost: "+lose);

