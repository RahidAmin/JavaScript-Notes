//index.html

//synchronous:when all functions call respectably.
//asynchronous:data loading function will work after finishing the time.


let task1=()=>
{
    console.log("This is task 1");
}

let dataLoading=()=>
{
    console.log("Task 2,Data loading")
}

let task2=()=>
{
    setTimeout(dataLoading,2000);   ///asynchronous
}
// let task2=()=>
// {
//     setTimeout(()=>
//     {
//         console.log("Task 2,Data loading")
//     },2000); 
// }
let task3=()=>
{
    console.log("This is task 3");
}
let task4=()=>
{
    console.log("This is task 4");
}
let task5=()=>
{
    console.log("This is task 5");
}


task1();
task2();
task3();
task4();
task5();