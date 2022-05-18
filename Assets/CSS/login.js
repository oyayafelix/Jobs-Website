this.setHomePage('http://www.mysite.com');

function validate()
{
    var email=document.getElementById("email").value
    var password=document.getElementById("password").value

    if (email=="admin" && password=="admin") {
        alert("login sucessfull");
        //return false;
        return window.location= window.location = "https://www.google.com/";
        



    } else {
        alert("login failed");
        
        
    }
}
const buttonClick = document.querySelector(".button");

buttonClick.addEventListener("click",function(){
   
        window.location = "https://www.google.com/"
        
   
    
})
