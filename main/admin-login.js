function Adminlogin(event) {
    
    event.preventDefault();
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var emailandpassword = document.getElementById("invalid");
    var email_invalid = document.getElementById("email_invalid");

    var password_invalid = document.getElementById("password_invalid");

    if (!checkPassword(passwordInput.value)) {
        passwordInput.style.border = "solid 2px red";
        password_invalid.style.display = "block";
        
    } else {
        passwordInput.style.border = "solid 1px #cbd5e0";

    }
    if (!check_email(emailInput.value)) {
        emailInput.style.border = "solid 1px red";
        email_invalid.style.display = "block";

    } else {
        emailInput.style.border = "solid 1px #cbd5e0";

    }
    if (checkPassword(passwordInput.value) && check_email(emailInput.value)) {
        passwordInput.style.border = "solid 1px #cbd5e0";
        emailInput.style.border = "solid 1px #cbd5e0";
        if (localStorage.getItem("user")) {
            const user = JSON.parse(localStorage.getItem("user"));
            if (user.email == emailInput.value && user.password == passwordInput.value) {
                window.location.href="admin-articles-dashboard.html";
            }
            else {
                alert("Please, put valid credintial");
            }
           
        } else {
            const obj = {
                email: emailInput.value,
                password: passwordInput.value,
                islogin: true
            }
            localStorage.setItem("user", JSON.stringify(obj));
            window.location.href = "admin-articles-dashboard.html";
        }

    }
}

function check_email(email) {
    if (!email.match(/\S+@\S+\.\S+/)) {
        return false;
    }
    if (email.indexOf(' ') != -1 || email.indexOf('..') != -1) {
        return false;
    }
    return true;
}

function checkPassword(password) {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
    return re.test(password);
}