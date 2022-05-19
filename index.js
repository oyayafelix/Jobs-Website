

function validate()
{
    var email=document.getElementById("email").value
    var password=document.getElementById("password").value

    if (email=="admin"  && password=="admin") {
        //window.location.href= "./myjobs.html";
       window.location= "https://www.google.com/";

        alert("login sucessfull");
        return false;
       
        



    } else {
        //window.location.reload();
        alert("login failed");
        
        
        
        
    }
}
const buttonClick = document.querySelector(".button");

buttonClick.addEventListener("click",function(){
  
        
        
   
    
})
