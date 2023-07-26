 // alert("Hello World");
        // alert(19);
        // alert("I love Allah");
        // document.write("I Love Allah<br>");
        
        // document.write("I Love Hazrat Muhammad SA");
        // console.log("I love Islam");  //This will print in console


var name=("Rahid </br>");
document.write(name);
var name=("Amin");
document.write(name);

var num1=10;
var num2=20;
var sum=num1+num2;
console.log(sum);
var lastName="Siddique";
console.log(lastName);
console.log(typeof(lastName));
var integerNumber=19;
var stringNumber=toString(integerNumber);
console.log("ToString method: ",typeof(stringNumber));
var number="17";
var changeNumber=parseInt(number);
console.log("ParseInt Method: ",typeof(changeNumber));
var doubleNumber=2.3456789;
console.log(doubleNumber.toFixed(3));
console.log(doubleNumber.toPrecision(1));
console.log(Number("12"));
console.log(typeof(Number("12")));
console.log(Number(true));

var num1=50;
var num2=60;
var fname="rezwan";
var lname="khan";
console.log(fname+lname);
console.log("my name is "+"riven");
console.log("Number one is: "+num1+" and number two is: "+num2);

var text="Bangladesh";
console.log("Length of Bangladesh: "+text.length);

// ----------------For Input------------------

var inputName=prompt("Enter Your Name: ");
console.log("Your name is "+inputName+" Number of Character: "+inputName.length);

console.log("Character at: "+text.charAt(2)); //Character in the perticular block



console.log("To Upper Case: "+text.toUpperCase()+" To Lower Case: "+text.toLowerCase());
 //to upper case and lower case

 var text1="is a beautiful Country";
 console.log(text.concat(text1));   //concatenation


 console.log("Slice of Bangladesh: "+text.slice(0,2)); //slice

// ------------------- Assignment Operators-----------------

var x=30;
x +=10;
console.log("X= "+x);

x /=10;  //    x=x/10=4;

console.log("Now X= "+x);


//----------------Calculator-------------

var number=parseInt(prompt("Enter Your First number: "));
var number1=parseInt(prompt("Enter Your Second number: "));

console.log("Addition: "+(number+number1));
console.log("Substraction: "+(number-number1));


//------------------- Area of Traingle

var base=parseFloat(prompt("Enter the base of traingle: "));
var height=parseFloat(prompt("Enter the height of traingle: "));
var area =(0.5*base*height);
console.log("Area of Traingle is: "+area);
