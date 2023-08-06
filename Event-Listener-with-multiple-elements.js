
let buttonLength=document.querySelectorAll(".myBtn").length;

for(var i=0;i<buttonLength;i++)
{
    document.querySelectorAll(".myBtn")[i].addEventListener("click",function()
    {
      text=this.innerHTML;
     document.querySelector("h1").innerHTML=text+" "+"is Clicked";
    
    });
}
