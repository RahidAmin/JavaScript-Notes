var num=parseInt(prompt("Enter a number: "));
if(num%2==1)
{
    document.write(num+" :is Odd Number </br>");

}
else if(num%2==0)
{
    document.write(num+" :is Even Number </br>");
}
else{
    document.write("Invalid number </br>");
}

switch(num)
{
    case 1:
        document.write("one");
        break;
        case 2:
            document.write("Two");
            break;
            case 3:
                document.write("three");
                break;
                case 4:
                    document.write("four");
                    break;
                    case 5:
                        document.write("five");
                        break;
                        case 6:
                            document.write("six");
                            break;
            default:
                document.write("It is not in the list..");
                break;
                 
}

for(var i=0;i<num;i++)
{
    document.write("</br>Bangladesh..</br>");

}document.write("<br>For loop End")
var j=1;
while(j <= num)
{
    document.write("<br> <br>"+j);
    j++;
   
} document.write("<br>While loop End");