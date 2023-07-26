var num1=parseInt(prompt("First Number: "));
var num2=parseInt(prompt("Second Number: "));
var num3=parseInt(prompt("Third Number: "));

var maximum=Math.max(num1,num2,num3);
console.log(maximum);

//Create random numbers

var randomNumber=Math.random();

console.log(randomNumber);   //between 0-1

randomNumber=Math.random()*6; //less then 6

console.log(randomNumber);

//floor(Primary number)

randomNumber=Math.floor(Math.random()*5)+1     //value (1-5)
console.log(randomNumber);


randomNumber=Math.floor(Math.random()*11)+10  //10-20
console.log(randomNumber);