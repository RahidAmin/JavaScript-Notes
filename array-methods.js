//find method


let numbers=[3,9,7,8,10,20,19];

let findFirstEventNumber=numbers.find(x=> x%2==0);
console.log(findFirstEventNumber);

let findFirstOddNumbers=numbers.find(oddNumbers);
let findTheIndexNumberOfFirstOddNumbers=numbers.findIndex(oddNumbers);

function oddNumbers(y)
{
    if(y%2!=0)
    {
        return y;
    }
}
console.log(findFirstOddNumbers);
console.log(`The index number of the first odd number is:${findTheIndexNumberOfFirstOddNumbers}`);


//Array Object

var employee=[
    {
        id:101,
        salary:10000
    },
    {
        id:102,
        salary:20000
    },
    {
        id:103,
        salary:30000
    },
    {
        id:104,
        salary:40000
    }
]

var findEmployee=employee.find(x=> x.salary>20000);
console.log(findEmployee);