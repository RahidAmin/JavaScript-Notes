var number=100;
var i;
for(i=0;i<=number;i++)
{
 if(i%3==0 && i%5==0)
 {
    document.write("<br>Multipicable numbers of 3 and 5 is: "+i);
 }
}
document.write("<br>")
var i1=0;
number1=100;
do{
    document.write(i1+" ");
    i1++;
    if(i1==10)
    {
        // break;
        continue;
    }
    
}while(i1<=number1);