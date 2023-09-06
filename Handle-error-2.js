//index.html


  document.querySelector("#checkButton").addEventListener("click",function()
  {
   var textValue=document.querySelector("#myId").value;
    
   try{
      if(textValue<5)
      {
        throw "input is too low";
      }
      else if(textValue>10)
      {
        throw "input is too high";
      }
    else if(textValue>=5 && textValue<=10)
    {
        console.log(textValue);
    }
    else{
      throw "input is invalid";
    }

   }catch(err)
   {
     console.log(err);
   }

   

  });