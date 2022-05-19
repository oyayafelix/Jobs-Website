this.setHomePage('login.js');

function validate()
{
    var email=document.getElementById("email").value
    var password=document.getElementById("password").value

    if (email=="admin"  && password=="admin") {
        window.location= "https://google.com";
        alert("login sucessfull");
        return true;
       
        



    } else {
        window.location.reload();
        alert("login failed");
        return true;
        
        
        
    }
}
const buttonClick = document.querySelector(".button");

buttonClick.addEventListener("click",function(){
  
        
        
   
    
})
