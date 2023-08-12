//no html files


//confirm box

function confirmBox()
{
    let confirmValue=confirm("Do You Want to Delete This file?");
    if(confirmValue==true)
    {
        document.write("Deleted");
    }
    else{
        document.write("File is not deleted");
    }
}
confirmBox();


//prompt
function message()
{
    var msg=prompt("Enter Your name: ");
    var h1=document.createElement("h1");
    var text;
    if(msg==null || msg=="")
    {
        text="no name found";
    }
    else{
        text="Welcome "+msg;
    }
    var textNode=document.createTextNode(text);
    h1.appendChild(textNode);
    document.body.appendChild(h1);

}

message();