//index.html


//default parameter

function MyName(text="no name")
{
    console.log(`My Name is: ${text}`);
}

MyName("Riven");
MyName();

//rest parameter
var summation=0;
function Sum(x,y,...z)
{
    console.log(`X:${x},Y:${y},Z:${z}`);
    const arr=[]=[x,y,...z];
    let len=z.length+2;
    for(var i=0;i<len;i++)
    {
        
        summation=arr[i]+summation;
        
    }
    console.log(summation);
      
}

Sum(10,20,30,40,50);
