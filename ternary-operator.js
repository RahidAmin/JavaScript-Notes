var number=Number(prompt("Check ternary operator for: "));

// var result=number>0?"Positive":"Negative";
// var result=number>0?document.write("positive....") : document.write("negative....");
var result=number>0?"Positive": number<0?"Negative": "Zero";
document.write(result);
