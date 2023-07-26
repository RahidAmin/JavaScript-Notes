



function highScore(playerInfo)
{
    var max=playerInfo[0][0];
    var maxScore=playerInfo[0][1];
    for(var i=1;i<playerInfo.length;i++)
    {
      if(maxScore<playerInfo[i][1])
      {
        maxScore=playerInfo[i][1];
        
       
        
      }
      if(max<playerInfo[i][0])
      {
        max=playerInfo[i][0];
        
       
        
      }
      
     }  console.log(max+" : "+maxScore);
}




let playerInfo=[

["Sakib",100],["Tamim",900],["Mahmudullah",180],["Musfique",70]

];



var maximumScore=highScore(playerInfo);


