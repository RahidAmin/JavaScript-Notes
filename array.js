var names=new Array(10);
names[0]="Rahid";
names[1]="Amin";
names[2]="Siddique";
names[3]=19;
names[4]=20;
document.write(names[0]);
document.write("<br>");
document.write(names[2]);
document.write("<br>");
document.write(names[4]);
document.write("<br>");

var groups=["Bashundhara","Jamuna","Nadia",1,2,3];
document.write(groups.length);
document.write("<br>");
document.write(groups[0]);
document.write("<br>");
document.write(groups[1]);
document.write("<br>");
document.write(groups[4]);
groups.push("Sokina");
groups.push("Morjina");
groups.pop();
document.write(groups);

//------------------ concatenation

var all=names.concat(groups);
console.log(all);