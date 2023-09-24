
function square(x)
{
    console.log(`Square of ${x} is: ${x*x}`);
}


//square(5);

// var takeSquare=square;
// takeSquare(6);

//heigherorder and callback function

function heigherOrderFunction(number,callback)
{
  callback(number);
}

heigherOrderFunction(7,square);





/////-----------------------------------------------

let task1=(callback)=>
{
    console.log("This is task 1");
    callback();
}

let task2=(callback)=>
{
    setTimeout(()=>
    {
        console.log("Task 2,Data loading")
        callback();
    },2000); 

    
}
let task3=(callback)=>
{
    console.log("This is task 3");
    callback();
}
let task4=(callback)=>
{
    console.log("This is task 4");
    callback();
}
let task5=()=>
{
    console.log("This is task 5");
}

task1(function f1()
{
    task2(function f2()
    {
        task3(function f3()
        {
            task4(function f4()
            {
                task5();
            });
        });
    });
});
