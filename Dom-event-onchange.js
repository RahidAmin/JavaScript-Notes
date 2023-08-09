//onchange event




var input=document.querySelector("#onChange-event[name=name]").addEventListener("change",onChangeEventFunction);


function onChangeEventFunction(e)
{
   // console.log(e.type);
// conole.log(e.target.id);
console.log(e.target.value);
    
    
}


///------------------Checkbox

var checBoxValue=document.querySelectorAll("input[name=program]");

console.log(checBoxValue);


Array.from(checBoxValue).map((checBoxValue)=>    //--This is very important
{
    checBoxValue.addEventListener("change",checkBoxFunction);
});

function checkBoxFunction(c)
{
  if(c.target.checked)
  {
    console.log(c.target.value);
  }
}


///--------------Select

var selectElement=document.querySelector("#department");

selectElement.addEventListener("change",selectFunction);

function selectFunction(s)
{
    console.log(s.target.value);
}