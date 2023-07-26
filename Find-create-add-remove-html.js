//html file name:"index.html"
var google=document.getElementsByTagName("a")[0];

google.style.textDecoration="none";

google.innerHTML="Md Rahid Amin";

google.style.color="red";

google.href="https://www.google.com/";


// create html elements
var createElement=document.createElement("h1");
var text=document.createTextNode("This Element has Created by javascript");
createElement.appendChild(text);

var mydiv1=document.getElementById("myDiv");
mydiv1.appendChild(createElement);

//remove elements

var rem=document.getElementsByTagName("h2")[1];

mydiv1.removeChild(rem);


//Create Before
var createElement1=document.createElement("h1");
var text1=document.createTextNode("This Element-1 has Created by javascript");
createElement1.appendChild(text1);
var rem1=document.getElementsByTagName("h2")[0];
mydiv1.insertBefore(createElement1,rem1);