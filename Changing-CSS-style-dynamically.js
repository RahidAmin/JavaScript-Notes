


function addStyle(){
var findTheElement=document.querySelector("#paraId");
// findTheElement.style.fontSize="7em";
findTheElement.classList.add("change-paragraph");   //classList for CSS class

}

function removeStyle()
{
    var findTheElement=document.querySelector("#paraId");

    findTheElement.classList.remove("change-paragraph");
}