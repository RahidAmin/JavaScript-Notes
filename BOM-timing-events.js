//index.html



window.setTimeout(()=>        //anonymous function 
{
 console.log("Hello World");
},4000);


var myVar=document.querySelector(".Button");
var myP=document.querySelector(".pra");
var myP1=document.querySelector(".pra1");

// var h1=document.createElement("h1");

myVar.addEventListener("click",textFunction);
myVar.addEventListener("click",countFunction);
    
// function textFunction()
// {
// var newText=document.createTextNode("Hello Boss,how are you??");
// h1.appendChild(newText);
// var timeOut=document.body.appendChild(h1);
// }

function textFunction()
{
myP.innerText="Hey Bou";
// var v=document.createTextNode("Hey Bou kemon aso??");
// myP.appendChild(v);
setTimeout(()=>{
  myP.innerText="";
},4000)
    
}

function countFunction()
{
  var count=1;
  myP1.innerText=count;

  setInterval(() => {
    count++;
    myP1.innerText=count;
  }, 1000);

}
