var numbers=[1,2,3,4,5,6,7,8,9,10];
var sum=0;
for(var i=0;i<numbers.length;i++)
{
    document.write("<br> "+numbers[i]);
    sum=numbers[i]+sum;
}
document.write("<br>Summation is: "+sum);

//---------- Array Library methods

var names=["Rahid","Amin","Siddique","Afrin","Jahan","Chamak"];
names.shift() //opposite of pop
console.log(names);
names.unshift("un-shift"); //opposite of push
console.log(names);


//---------------add,remove names through Splice

names.splice(2,0,"Sabila","Rahman"); //add sabila rahman
console.log(names);

names.splice(5,7); //remove afrin jahan chamak
console.log(names);

var newArray=names.slice(2); //it will remove 2 blocks and make a new array

console.log(newArray);

//---------sort and reverse
var names1=["f","b","c","d","e"];
var sortedArray=names1.sort();
names1.reverse();
console.log(names1);

//-----sort for numbers

var numbers1=[5,8,9,2,0,7];
var newNumber=numbers1.sort(function(a,b){
     return a-b;   //For reverse b-a
})
console.log(newNumber);



