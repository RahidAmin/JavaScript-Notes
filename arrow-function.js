//index.html

function normalFunction()
{
    console.log("This is normal function");

}

const arrowFunction=()=>{
    console.log("This is arrow function"); //second bracket does not need for one method..
};

let arrowReturnFunction=()=> "This is return function";

let arrowReturnFunction1=(num,num1)=> num+num1;


normalFunction();
arrowFunction();
console.log(arrowReturnFunction());
console.log(arrowReturnFunction1(10,20));



let students=[
             {
                stdId:101,
                stdName:"Rahid",
                gpa:2.83
             },
              {
                stdId:102,
                stdName:"Amin",
                gpa:3.95
              }
              ,
              {
                stdId:103,
                stdName:"Siddique",
                gpa:3.30
              }

];

function studentName()         ///Important
{
    return students.filter(function(x)
    {
        return x.gpa > 3.5;
    }).map(function(y)
    {
        return y.stdName;
    })
}
console.log(studentName());


//using arrow function

var studentName1=()=>
{
   return students.filter((x)=>x.gpa<3.5).map((y)=>y.stdName);
}

console.log(studentName1());