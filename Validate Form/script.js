var nameError = document.getElementById('name-error'); 
var phoneError = document.getElementById('phone-error'); 
var msgError = document.getElementById('msg-error'); 
var emailError = document.getElementById('email-error'); 
var submitError = document.getElementById('submit-error'); 

function validateName(){
    var name = document.getElementById('contact-name').value;
    if (name.length ==0 ){
        nameError.innerHTML = "Name is required"; 
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name"; 
        return false; 
    }
    nameError.innerHTML =''; 
    return true;
}
function validatePhone(){
    var phone = document.getElementById('contact-phone').value;
    if(phone.length == 0){
        phoneError.innerHTML = "Phone is required"; 
        return false;
    }
    if(phone.length !== 12){
        phoneError.innerHTML = "Phone should be 12 digits"; 
        return false;
    }
    if(!phone.match(/^[0-9]{12}$/)){
        phoneError.innerHTML= "Only digits"; 
        return false;
    }
    phoneError.innerHTML =''
    return true; 
}
function validateEmail(){
    var email = document.getElementById('contact-email').value;
    if(email.length ==0){
        emailError.innerHTML = "Email is required"; 
        return false;
    }
    if(!email.match(/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)){
        emailError.innerHTML = "Email invalid"; 
        return false;
    }
    emailError.innerHTML =''
    return true; 
}
function validateMsg(){
    var msg = document.getElementById('contact-msg').value;
    var required = 30;
    var left = required- msg.length;
    if(left>0){
        msgError.innerHTML = left +'more characters required'; 
        return false;
    }
    msgError.innerHTML = "";
    return true;
}
function validateForm(){
    if (!validateName() || !validateEmail() || !validateMsg() || !validatePhone()){
        submitError.style.display ='block';
        submitError.innerHTML ='please fix error to submit'; 
        setTimeout(function(){submitError.style.display='none';}, 3000);
        return false; 
    }
}
