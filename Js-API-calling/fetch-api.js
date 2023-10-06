
console.clear();
fetch("https://jsonplaceholder.typicode.com/posts",
{
    method:"POST",
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    body:JSON.stringify({
        title: 'foo',
    body: 'bar',
    userId: 1,
    }),
})
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


////delete
fetch("https://jsonplaceholder.typicode.com/posts/2",
{
    method:"DELETE",
   
})

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


/////async-await

const makeRequest=async(url, config)=>
{
  const res=await fetch(url, config);
  const data=await res.json();
  if(!res.ok)
  {
    const message=`Error Occurred ${res.status}`;
    throw new Error(message);
  }

  return data;
}
//get data
const getData=()=>
{
    makeRequest("https://jsonplaceholder.typicode.com/posts/3").then((res)=>
    {
        console.log(res);
    }).catch((err)=>
    {
        console.log(err);
    })
}

getData();

//sent data

const sentData=()=>
{
    makeRequest("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        body: JSON.stringify(
            {
                title: 'foooooooooo',
                body: 'barrrrrrrrrr',
            }
        )
    }).then((res)=>{
        console.log(res);
    }).catch((err)=>
    {
        console.log(err);
    })
}
sentData();


////---update data
const updateData=()=>
{
    makeRequest("https://jsonplaceholder.typicode.com/posts/5",{
        method:"PUT",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        body: JSON.stringify(
            {
                title: 'foollllllllll',
                body: 'barllllllllll',
                userName:'rahid',
            }
        )
    }).then((res)=>{
        console.log(res);
    }).catch((err)=>
    {
        console.log(err);
    })
}
updateData();
