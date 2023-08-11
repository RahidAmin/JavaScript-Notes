//dragstart,dragover,drop
var Div=document.querySelector("#myDiv");
var P=document.querySelector("#myPra");

P.addEventListener("dragstart",function(e){
   e.dataTransfer.setData("Text",e.target.id);
});

Div.addEventListener("dragover",function(e)
{
   e.preventDefault();
});

Div.addEventListener("drop",function(e)
{
  let id=e.dataTransfer.getData("Text");
  Div.appendChild(document.getElementById(id));
  e.preventDefault();

});