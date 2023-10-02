//index.html
console.log("Welcome to async");
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
       reject("This is task 4 and it is not completed");
    });
}
let task5=()=>
{
    return new Promise((resolve,reject)=>
    {
       resolve("This is task 5");
    });
}


async function callAllTask()
{
    try{
    const t1=await task1();
    console.log(t1);

    const t2=await task2();
    console.log(t2);

    const t3=await task3();
    console.log(t3);

    const t4=await task4();
    console.log(t4);

    const t5=await task5();
    console.log(t5);
    }catch(err)
    {
     console.log(err)
    }
}

callAllTask();