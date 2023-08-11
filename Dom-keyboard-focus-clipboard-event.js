
///-----Keyboard events------
var varKey=document.querySelector("textarea");

varKey.addEventListener("keydown",function(a)
{
  console.log("Keydown");
  console.log(a.keyCode);

});

varKey.addEventListener("keypress",function()
{
    console.log("Keypress");
});

varKey.addEventListener("keyup",function()
{
    console.log("keyup");
});

////-------------focus events

var varInput=document.querySelector("input");

varInput.addEventListener("focus",function(e)
{
    console.log("Focus");
    this.classList.add("focus");
    
   

});

// varInput.addEventListener("focusin",function()
// {
//     console.log("Focusin");
//     this.classList.add("focus");
    
// });

// varInput.addEventListener("focusout",function()
// {
//     console.log("Focusout");
//     this.classList.remove("focus");
// });
varInput.addEventListener("blur",function(e)
{
    console.log("Blur");
    this.classList.remove("focus");
    console.log(e.target.value);   //value(not innerText) uses for brouser form
    varInput.value=e.target.value.toUpperCase();
});



///-------------clipboard-(copy,cut,paste)---------
var varClipboard=document.getElementById("clipboard");
var p=document.getElementById("clipboardResult");

varClipboard.addEventListener("copy",function(e)
{
    console.log("Copyed");
    p.innerText="You have Copyed";

});

varClipboard.addEventListener("cut",function()
{
    console.log("Cut");
    p.innerText="You have cut";
});
varClipboard.addEventListener("paste",function()
{
    console.log("Paste");
    p.innerText="You have Pasted";
})