console.log("Live");

const validateName = (name) => {
    let message = "";

    if (name == ""){
        message += "| Name cannot be empty ";
    }
    else if (name.length < 3) {
        message += "| Name must have atleast three character ";
    }
    else if (name.length > 51) {
        message += "| Name cannot have more than 51 char ";
    }

    let digitFlag = false;
    for (let index = 0; index < name.length; index++) {
        if (name[index] >= 'a' && name[index] <= 'z') {}
        else if (name[index] >= 'A' && name[index] <= 'Z') {}
        else if (name[index] == " ") {}
        else {
            digitFlag = true;
        }
    }

    if (digitFlag) {
        message += "| Only uppercase and lowercase letters are allowed. "
    }

    if (message == "") {
        return true;
    }
    else {
        message += "|";
        let nameWarn = document.getElementById("nameWarn");
        nameWarn.innerText = message;
        return false;
    }
}

const validateMobile = (mobile) => {
    let message = "";

    if (mobile == "") {
        message += "| mobile field cannot be empty ";
    }
    else if (parseInt(mobile) < 0) {
        message += "| mobile number cannot be negative ";
    }
    else if (mobile.length != 10) {
        message += "| mobile number must have 10 digits ";
    }
    else if (mobile[0] == "0") {
        message += "| mobile number cannot start with 0 ";
    }
    else {
        return true;
    }

    message += "|";

    let mobileWarn = document.getElementById("mobileWarn");
    mobileWarn.innerText = message;
    return false;
}

const validateEmail = (email) => {
    let message = "";

    if (email == "") {
        message += "| Email field cannot be empty ";
    }

    
}

const validateForm = () => {
    let name = document.getElementById("nameField").value;
    let mobile = document.getElementById("mobileField").value;
    let email = document.getElementById("emailField").value;
    let password = document.getElementById("passwordField").value;
    let confirmPasswordField = document.getElementById("confirmPasswordField").value;
    
    let validName = validateName(name);
    console.log(validName);

    let validMobile = validateMobile(mobile);
    console.log(validMobile);

    let validEmail = validateEmail(email);
    console.log(validEmail);
}