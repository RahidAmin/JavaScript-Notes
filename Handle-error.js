//index.html

try{
   alert("Number 1");
   alert(a);
   alert("Number 2");
  

}catch(err){
    console.log(err);
    console.log(err.name);
    console.log(err.message);
}
finally{
    alert("Bye...");  //it will always work
}