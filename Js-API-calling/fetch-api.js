
console.clear();
fetch("https://jsonplaceholder.typicode.com/posts")
// .then((res)=>res.json())
.then((res)=>
{
    let message=`Error: ${res.status}`
    if(!res.ok)
    {
      throw new Error(message);
    }
    return res.json();
})
.then((res)=>
{
    console.log(res);
}).catch((err)=>
{
    console.log(err);
})

console.log("End");