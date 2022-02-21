   let fname = document.getElementById('fname');
   let lname = document.getElementById('lname');
   let email = document.getElementById('email');
   let tel = document.getElementById('tel');
   let message = document.getElementById('message');
   let form = document.getElementById('form');


   var fname_invalid = document.getElementById("fname_invalid");
   var lname_invalid = document.getElementById("lname_invalid");
   var email_invalid = document.getElementById("email_invalid");
   var tel_invalid = document.getElementById("tel_invalid");
   var Message_invalid = document.getElementById("message");
  

function Contact(event) {
    
    event.preventDefault();
 
    if (fname.value == "" && message.value == "") {

        fname.style.border = "solid 1px red";
        lname.style.border = "solid 1px red";
        tel.style.border = "solid 1px red";
        email.style.border = "solid 1px red";
        message.style.border = "solid 1px red";
        fname_invalid.style.display = "block";
        Message_invalid.style.display = "block";
    } else if (!check_email(email.value)) {
        email.style.border = "solid 1px red";
        email_invalid.style.display = "block";
    }

    else {
        var obj = {
            id: uuidv4(),
            Fname: fname.value,
            Lname: lname.value,
            Email: email.value,
            Tel: tel.value,
            Message: message.value,

            
        }
        let queries = localStorage.getItem("queries");
        console.log(fname.value)
        if (queries) {

            var convert = JSON.parse(queries);
            convert.push(obj);
            localStorage.setItem("queries", JSON.stringify(convert));
            document.forms['form'].reset();
            window.alert("Thank you, message sent");

        } else {
            var queryarray = [obj];
            localStorage.setItem("queries", JSON.stringify(queryarray));
            
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
}

