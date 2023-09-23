//index.html
class Student{
     
          constructor(id,name)
          {
            this.id=id;
            this.name=name;
          }
          set studentName(name)
          {
            this.name=name;
          }
          get studentInfo()
          {
            return this.name+" , "+this.id;
          }

}

let s1=new Student(101,"Rahid");
console.log(s1.name);
console.log(s1.id);

s1.studentName="Md rahid amin";
console.log(s1.name);

console.log(s1.studentInfo);