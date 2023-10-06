console.clear();

 axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>
 {
    console.log(res.data);
 }).catch((err)=>
 {
    console.log(err);
 })

 axios.post("https://jsonplaceholder.typicode.com/posts",{
    body: JSON.stringify({
        title: 'foollll',
        body: 'barrrrrr',
        userId: 1,
        
    })
 }).then((res)=>{
    console.log(res.data);
 }).catch((err)=>
 {
    console.log(err);
 })





//for update
 axios.put("https://jsonplaceholder.typicode.com/posts/1",{
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
        userName:"Rahid"
    })
 }).then((res)=>{
    console.log(res.data);
 }).catch((err)=>
 {
    console.log(err);
 })

 ////--------important

 const makeRequest1=async(config)=>
 {
    return await axios(config);
 }

 const createData1=()=>
 {
makeRequest1({
    url:"https://jsonplaceholder.typicode.com/posts",        ///object parameter
    method:"POST",
    data:JSON.stringify({
        title: 'fool banaisi',
        body: 'bar a jabo',
        userId: 1,
      })
}).then((res)=>
    {
        console.log(res.data);
    })
 }
 createData1();
 