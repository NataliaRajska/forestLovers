
const birds = new Audio("resources/birds.mp3");

function subPages(){
    const username = (document.getElementById("username").value);
    const password = (document.getElementById("password").value);
    if(username == "creep@gmail.com" && password == "111")
    {
        location.href="creep.html";
    } else if ((username == "mentor@gmail.com" && password == "222")) {
        location.href="mentor.html";
    }else if ((username == "codecooler@gmail.com" && password == "333")) {
        location.href="codecooler.html";
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


function addClass() {
    const classesTable = document.getElementById("classes_table");

    const newClass = document.createElement("tr");
    const newMentor = document.createElement("td");
    const newClassName = document.createElement("td");

    newMentor.innerHTML = document.getElementById("mentor_select").value;
    newClassName.innerHTML = document.getElementById("class_name").value;

    newClass.appendChild(newClassName);
    newClass.appendChild(newMentor);

    classesTable.appendChild(newClass);
}
