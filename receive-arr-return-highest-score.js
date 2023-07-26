// var arraySize=[1,2,3,9,4,6,7]


// var sum=arraySize[0];
// for(var i=0;i<arraySize.length;i++)
// {
    
//   if(arraySize[i]>sum){
//      sum=arraySize[i];
//   }
  

// }document.write(sum);




function myFunction(array)
{
  let max=array[0];
  for(var i=1;i<array.length;i++)
  {
    if(max<array[i])
    {
      max=array[i];
    }
  }return max;
}
let array=[1,2,312,4,50,30,22,8];

let maxValue=myFunction(array);
console.log(maxValue);