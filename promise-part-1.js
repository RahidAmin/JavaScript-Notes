console.log("Welcome to promise");

let promise1=new Promise((resolve,reject)=>
{
   let completedPromise=true;
   if(completedPromise)
   {
    resolve("Promise 1 is completed");
   }
   else{
    reject("Promise 1 is rejected");
   }
});


let promise2=new Promise((resolve,reject)=>
{
   resolve("Completed promise 2");
});




//  console.log(promise1);


Promise.all([promise1,promise2]).then((res)=>
{
    console.log(res);
});

// promise1.then((res)=>
// {
//     console.log(res);
// }).catch((err)=>
// {
//     console.log(err);
// })


let promise3=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve("Promise 3 is completed after 2 seconds");
    },2000)
});

let promise4=new Promise((resolve,reject)=>
{
    setTimeout(() => {
        resolve("Promise 4 is completed after 1 second");
    }, 1000);
});

Promise.race([promise3,promise4]).then((res)=>
{
    console.log(res);
});




console.log("End");