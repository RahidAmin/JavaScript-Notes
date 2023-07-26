var employee1={
  name: "Shanto",
  age:25,
  salary:12000

}
console.log(employee1.name);

//make object using function and construction

function Student(name,age,cgpa,language)
{
    this.Name=name;
    this.Age=age;
    this.Cgpa=cgpa;
    this.Language=language;
    this.Display=function()
    {
        console.log(this.Name);
        console.log(this.Age);

        console.log(this.Cgpa);
        console.log(this.Language);
    }
}

var studen1=new Student("Rahid",25,2.83,["Bangla","English","Hindi"]);

studen1.Display();


function Engineer(name,designation,phnNO)
{
    this.name=name;
    this.designation=designation;
    this.phnNO=phnNO;

}

var engineer1=new Engineer();
    engineer1.name=prompt("Engineer Name: ");
    console.log(engineer1.name);

    Math.sqrt