function validate()
{
    var email=document.getElementById("email").value
    var password=document.getElementById("password").value

    if (email=="admin" && password=="user") {
        alert("login sucessfully");
        return false;
       



    } else {
        alert("login failed");
        
        
    }
}