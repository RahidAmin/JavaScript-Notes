
//---------my--try-----------
// function prev()
// {
//     var p=document.querySelector("#myImg");
//     p.src="images/1.png";

// }
// function next(){

//     var n=document.querySelector("#myImg");
//     n.src="images/hardy.png";
// }

var myImg=["images/2.png","images/1.png","images/hardy.png","images/developer.png"];

var imgTag=document.querySelector("img");
var count=0;

function next()
{
    count++;
    if(count>=myImg.length)
    {
        count=0;
        imgTag.src=myImg[count];
    }
    else{
        
        imgTag.src=myImg[count];
    }
  
  
}
function prev()
{

    count--;
    if(count<0)
    {
        count=myImg.length-1;
     imgTag.src=myImg[count];
    }
    else{
        imgTag.src=myImg[count];
    }
}