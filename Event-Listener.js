//index.html

document.querySelector("button").addEventListener("click",eventListener);


function eventListener()
{
    alert("Hello")
    
}


var myVar=document.querySelector("h1");

myVar.addEventListener("mouseover",function()
{
 myVar.classList.add("ban");
});
myVar.addEventListener("mouseout",function()
{
 myVar.classList.remove("ban");
});