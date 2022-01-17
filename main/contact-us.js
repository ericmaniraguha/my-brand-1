
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
    // else if (check_tel(tel)) {
    //     tel.style.border = "solid 1px red";
    //     tel_invalid.style.display = "block";
    //     }
    else {
        var obj = {
            Fname: fname.value,
            Lname: lname.value,
            Email: email.value,
            Tel: tel.value,
            Message: message.value,
        }
        let queries = localStorage.getItem("queries");
        if (queries) {

            var convert = JSON.parse(queries);
            convert.push(obj);
            localStorage.setItem("queries", JSON.stringify(convert));

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
        document.forms['form'].reset();
        return true;
    }
}


// function check_tel(tel)
// {
//   var phoneno =/^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm;
//   if(tel.value.match(phoneno))
//      {
// 	   return true;      
// 	 }
//    else
//      {
// 	   alert("Not a valid Phone Number");
// 	   return false;
//      }
// }
