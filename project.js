let email=document.getElementById("e-mailid");
let elabel=document.getElementById("l-email")
let emailerror=document.getElementById("e-mailerror");

let password=document.getElementById("in-pass");
let lpass=document.getElementById("l-pass")
let passerror=document.getElementById("passerror");

function validemail(){

if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailerror.innerHTML="Make sure email is more than 3 characters and has @ and a ." ;
    return false;
}
emailerror.innerHTML="" ;
return true;
}

function validpassword(){
  if(!password.value.match(/^[a-zA-Z0-9!@#$%^&*]{8,16}$/)){
    passerror.innerHTML=" Make sure password is more than 8 characters."
    return false;
}
else{
    passerror.innerHTML=" All good to go!";
    passerror.style.color="green"
    return true;
}

}







