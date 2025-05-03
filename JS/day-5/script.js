let userid = document.getElementById("userid");
let useriderror=document.getElementById("userid-error");



function submit(){
    if(userid.value.length < 4){
        useriderror.style.visibility="visible";
        useriderror.innerText="user id must be atleast 8 charecters";
        useriderror.style.color="red";
    }
    else{
          
    }
}