//index.html
function MyInfo(myName,myAge)
{
    return{
        myName,
        myAge
    }
}
console.log(MyInfo("Rahid",25));


let ObjectFunction ={
   
       msg: function()
       {
        return `This is Object Function`;
       },
       msg1(from,to){
          console.log(from);
          console.log(to);
       },
       'my msg'()
       {
         return `my name is rahid`;
       }
    

}
console.log(ObjectFunction.msg());
ObjectFunction.msg1('Dhaka','Rangpur');
console.log(ObjectFunction['my msg']());