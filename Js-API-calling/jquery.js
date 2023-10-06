

console.clear();

const makeRequest=async(url,method,value)=>
{
    try{
        const data=await $.ajax({
            url: url,
            method: method,
            data: value
            
        })
        return data;
    }catch(err)
    {
        console.log(err);
    }
}

const getData=()=>
{
    makeRequest("https://jsonplaceholder.typicode.com/posts","GET").then((res)=>
    {
        console.log(res);
    })
}
getData();


const createtData=()=>
{
    makeRequest("https://jsonplaceholder.typicode.com/posts","POST",
    {
        title: 'foo',
        body: 'bar',
        userId: 1,
      }
    ).then((res)=>
    {
        console.log(res);
    })
}
createtData();