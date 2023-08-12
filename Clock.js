
var myClock=document.querySelector("#decorate");
var myButton=document.querySelector("#myBtn");

myButton.addEventListener("click",clockFunction);

function clockFunction()
{
    var date=new Date();
    console.log(date);
    var hours=date.getHours();
    var minutes=date.getMinutes();
    var seconds=date.getSeconds();

     minutes=timeFormet(minutes);
     seconds=timeFormet(seconds);
    var time=hours+":"+minutes+":"+seconds;
    myClock.innerText=time;



    setInterval(clockFunction,1000);
}
function timeFormet(value)
{
    if(value<10)
    {
     value="0"+value;
    }
    return value;
}