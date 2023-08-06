
//Event-listener-and-animation.html

document.addEventListener("keypress",function(event){

   var text=event.key;
   document.querySelector("p").innerHTML="You Have Type: "+text;

});