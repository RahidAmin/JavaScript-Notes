
var form=document.querySelector('form');
var name=form.querySelector('div #username');
var email=form.querySelector('div #email');
var password=form.querySelector('div #password');


form.addEventListener('submit',formHandler);

function formHandler(f)
{
    f.preventDefault(); ///important

    console.log(username.value);
    const obj={
        name:username.value,
        email:email.value,
        password:password.value
    };
    console.log(obj);
    
}


