
const birds = new Audio("resources/birds.mp3");

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

//hamburger responsive
function myFunction() {
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

(() => {
    document.getElementById('submit').addEventListener("click", () => subPages());

})();

