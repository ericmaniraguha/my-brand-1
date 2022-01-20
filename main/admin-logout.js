const logout = document.getElementById("logout");
logout.addEventListener("click", () => {
    const logout = JSON.parse(localStorage.getItem("user"));
    logout.islogin = false;
    localStorage.setItem("user", JSON.stringify(logout));
    window.location.href = "admin-login.html";
})
