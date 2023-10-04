console.clear();

//event-onload,onerror
//propertie
//function


const makeRequest=(method,url)=>
{
    const xhr=new XMLHttpRequest();
    xhr.open(method,url);
   
    xhr.onload=()=>
    {
        let data=xhr.response;
        console.log(JSON.parse(data));
    }
    xhr.onerror=()=>
    {
        console.log("error occurred");
    }

     xhr.send();
     
}

const makeRequestPost=(method,url,receivedData)=>
{
    const xhr1=new XMLHttpRequest();

    xhr1.open(method,url);

    xhr1.setRequestHeader("Content-type","application/json");
    
    xhr1.onload=()=>
    {
        let data=xhr1.response;
        console.log(JSON.parse(data));
    }
    xhr1.onerror=()=>
    {
        console.log("Error Occurred..");
    }
 

    xhr1.send(JSON.stringify(receivedData));
}



const getData=()=>
{
    makeRequest("GET","https://jsonplaceholder.typicode.com/todos/1");
    makeRequest("GET","https://dummyjson.com/products/1");
    
}
getData();

const postData=()=>
{
 makeRequestPost("POST","https://jsonplaceholder.typicode.com/posts",{
    title: 'foo',
    body: 'bar',
    userId: 1,
  })
}
postData();

const updateData=()=>
{
    makeRequestPost("PUT","https://jsonplaceholder.typicode.com/posts/1",{
        title: 'foo-updated',
        body: 'bar-updated',
        userId: 2,
        phnNo:123456,
      })

}

updateData();


const updateSingleData=()=>
{
    makeRequestPost("PATCH","https://jsonplaceholder.typicode.com/posts/1",{
        title:'Title is Changed',
    })
}

updateSingleData();


const deleteData=()=>
{
    makeRequestPost("DELETE","https://jsonplaceholder.typicode.com/posts/1");
}
deleteData();


