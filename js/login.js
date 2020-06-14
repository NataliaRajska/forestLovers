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

const birds = new Audio();
birds.src = "resources/birds.mp3"

//hamburger responsive
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
