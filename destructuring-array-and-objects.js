
const numbers=[10,20,30,40,50,60];

let [num1,num2,num3,...z]=numbers;
 
console.log(num1);
console.log(z);

//swap veriables

let x=10,y=20;

  [x,y]=[y,x]; //destructing for swap veriables

  console.log(x);
  console.log(y);

  //object destructure

  let students=
    {
        stdId:101,
        stdName:"Mujibul",
        stdGpa:2.5,
        language:{             //nested object
            native:"Bangla",
            beginner:"English"
        }
     }
    
  

  let {stdId,stdName,language}=students;

  console.log(stdId);
  console.log(stdName);
  console.log(language); //nested object destructive
  console.log(language.native);

  //destructuring function parameter

  let empInfo=({empId,empName})=>
  {
      console.log(`${empName},${empId}`);
  }
//   let empInfo=(employee)=>
//   {
//       console.log(`${employee.empName},${employee.empId}`);
//   }

  let employee=
  {
    empId : 19,
    empName: "Rahid"
  };

  empInfo(employee)
