
var myVar=document.querySelector("div");

myVar.addEventListener("click",function(c)
{
    // console.log(c.target.id);
    //console.log(c.target.className);
    // console.log(c.target.innerText);

    var myBtn=c.target.className;
    console.log(myBtn);
    console.log(c.target.innerText);


});


var myButton=document.querySelectorAll(".button");

//convert node list to array
// map function only works with array
Array.from(myButton).map((b)=>
{
  b.addEventListener("click",function()
  {
     console.log("Clicked");
  });

});



// myVar.addEventListener("dblclick",function(){

//     console.log("dblclick");
// });

// myVar.addEventListener("mousedown",function()
// {
//     console.log("mousedown");
// });

// myVar.addEventListener("mouseup",function()
// {
//     console.log("mouseup");
// });

// myVar.addEventListener("mouseenter",function()
// {
//     console.log("mouse enter");
// });
// myVar.addEventListener("mouseout",function()
// {
//     console.log("mouse out");
// });
// myVar.addEventListener("mouseover",function()
// {
//     console.log("mouse over");
// });
// myVar.addEventListener("mousemove",function(e)
// {
//     console.log(`ClintX: ${e.clientX},ClintY: ${e.clientY}`);
//     console.log(`offsetX: ${e.offsetX},offsetY: ${e.offsetY}`);
// });


