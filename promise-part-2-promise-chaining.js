

let task1=()=>
{
    return new Promise((resolve,reject)=>
    {
       resolve("This is task 1");
    });
}
let task2=()=>
{
    return new Promise((resolve,reject)=>
    {
       resolve("This is task 2");
    });
}
let task3=()=>
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(() => {
            resolve("This is task 3");
        },3000);
    });
}
let task4=()=>
{
    return new Promise((resolve,reject)=>
    {
       resolve("This is task 4");
    });
}
let task5=()=>
{
    return new Promise((resolve,reject)=>
    {
       resolve("This is task 5");
    });
}

task1().then((res)=>
{
    console.log(res);
}).then(task2).then((res)=>console.log(res)).then(task3).then((res)=>console.log(res))
.then(task4).then((res)=>console.log(res));