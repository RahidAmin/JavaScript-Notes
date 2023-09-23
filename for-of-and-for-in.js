//index.html

const rahid=["Rahid",25,"Rangpur"];

for(let myLoop of rahid)
{
  console.log(myLoop);
}

//for in uses for object(important)

let student={
    sname:"rahid",
    sid:19
}
for(let students in student)
{
    console.log(student[students]);
}

//foreach loop

let numbers=[10,20,30,40,50];

//  1:
numbers.forEach(myFunction);
function myFunction(x)
{
    console.log(x);
}

//  2:
numbers.forEach(function(y)
{
    console.log(y);
})

// 3:(important)
let number1=[2,4,6,8,10];
let squereNumber=[];
number1.forEach(function(z)
{
    squereNumber.push(z*z);
});
console.log(squereNumber);

// 4:(important)
let number2=[5,10,15,20];
number2.forEach(function(a,index,arr)
{
  arr[index]=a+5;
});
console.log(number2);