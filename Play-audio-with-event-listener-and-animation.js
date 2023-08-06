
let btnLength=document.querySelectorAll(".myBtn").length;

for(var i=0;i<btnLength;i++){

    document.querySelectorAll(".myBtn")[i].addEventListener("click",function()
    {
        text=this.innerHTML;
        
        audioPlay(text);
        playAnimation(text);
    
    });
    


}


function audioPlay(text)
{
    switch(text)
        {
            case 'A':
                var audio=new Audio("Sounds/1.mp3");
                audio.play();
                break;
            case 'B':
                var audio=new Audio("Sounds/2.mp3");
                audio.play();
                break;
            case 'C':
                var audio=new Audio("Sounds/3.mp3");
                audio.play();
                break;
        }
}

function playAnimation(text)
{
   var animationElement=document.querySelector("." + text);
   animationElement.classList.add("anim");


   setTimeout(function(){
    animationElement.classList.remove("anim");
   },1000)

}
