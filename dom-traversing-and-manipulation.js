// const StudentList=document.querySelector(".student-list");
// const Student1=StudentList.querySelector(".student-1");

// document.write("This is Student: "+Student1);


// const StudentList=document.querySelector(".student-list");
// const Student1=StudentList.children[0];
// document.write(Student1);

// parent Element

// const StudentList=document.querySelector("li");
// const Student1=StudentList.parentElement;
// document.write(Student1);

//next-element-sibling

const StudentList=document.querySelector("li");
const Student1=StudentList.nextElementSibling;
const Student2=StudentList.nextElementSibling;
document.write(Student2);