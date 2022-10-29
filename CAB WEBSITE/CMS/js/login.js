function validate(e){
    var email = document.forms[0]['email'];
    var password = document.forms[0]['password'];
    var error = document.getElementById('error-messages');
    if(!email.validity.valid){
        error.innerHTML = 'Please enter a valid email';
        return false;
    }
    if(!password.validity.valid){
        error.innerHTML = 'Please enter a valid password';
        return false;
    }
    e.preventDefault();

}

// function checkform(){

//     if(document.getElementById("form3Example3").value == 'var@gmail.com' && document.getElementById("form3Example4").value == 'var12345#' ){
//         alert("Login Successful");
//         window.location.assign("home.html")
//     }else{
//         alert("Access denied. Valid username and password is required.");
//     }
//}