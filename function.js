function multiplecation(number,number1)
{
    
    result=number*number1;
    return result;
}
function summation(number,number1)
{
    
    result=number+number1;
    return result;
}
function substraction(number,number1)
{
    
    result=number-number1;
    return result;
}
document.write(multiplecation(12,13)+"<br>");
document.write(summation(12,13)+"<br>");
document.write(substraction(12,13)+"<br>");

//-------------------IIFES(Immediatly invokable Function Expression )

(function message(msg){
   
    document.write(msg);

})("Hello Chamak");
document.write("<br><br>")

var table=function tableNo(num){

  document.write("Table no: "+num);
}
table(21);