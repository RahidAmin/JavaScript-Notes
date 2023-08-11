//index.html

console.log(window);
console.log(window.location);
console.log(location.href);
console.log(location.protocol);
console.log(location.port);
console.log(location.host);
console.log(location.hostname);
console.log(location.origin);
console.log(location.pathname);

///------------------------

let locationObj=document.querySelector(".location-div");

let p=locationObj.children[0];
p.innerText=location.hostname;

let p1=locationObj.children[1];
p1.innerText=location.href;

let p2=locationObj.children[2];
p2.innerText=location.protocol;

let p3=locationObj.children[3];
p3.innerText=location.pathname;

//-----------visit a particular website------

let visitButton=document.querySelector("#visit");

visitButton.addEventListener("click",function()
{
    location.assign("https://www.youtube.com/");
})