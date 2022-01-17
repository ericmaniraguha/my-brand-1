
 function Logout()
{
     localStorage.removeItem("user");
    window.location.href = "http://127.0.0.1:5500/my-brand/pages/admin-login.html";
    
}
