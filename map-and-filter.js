//index.html

let numbers=[5,6,7,8,9];

let squereNumber=numbers.map(function(x)
{
 return x*x;
});
console.log(squereNumber);

let number1=[10,9,7,20,30,50];

let filterNumber=number1.filter(function(y)
{
    return y>10;
});
console.log(filterNumber);