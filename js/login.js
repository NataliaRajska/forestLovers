function subPages(){
    var username = (document.getElementById("username").value);
    var password = (document.getElementById("password").value);
    if(username == "creep@gmail.com" && password == "111")
    {
        location.href = "creep.html";
    } else if ((username == "mentor@gmail.com" && password == "222")) {
        location.href = "mentor.html";
    }else if ((username == "codecooler@gmail.com" && password == "333")) {
        location.href = "codecooler/codecooler.html";
    }
}