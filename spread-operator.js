//index.html

function addition(x,y,z)
{
    return x+y+z;
}

let number=[1,2,3];
console.log(addition(...number));

let number1=[0,...number,40,50];
console.log(number1);

let number1ForConcat=[1,2,3];
let number2ForConcat=[4,5,6];
let sum=number1ForConcat.concat(number2ForConcat);
console.log(sum);

//using spread operator
let sum1=[...number1ForConcat,...number2ForConcat];
console.log(sum1);


//concat using spread operator

let x={
    myName:"MD Rahid",
    myAGe:25,
}
let y={
    phnNo:1941222641,
    HomeTown:"Rangpur"
}

//concat
let z={...x,...y};

console.log(z);