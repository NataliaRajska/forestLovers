const form = document.querySelector("#register-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = `name=${this.name.value}&username=${this.login.value}&phoneNumber=${this.phone.value}&email=${this.payerEmail.value}&password=${this.password.value}`;
    console.log(data);
    setStudent(data);
});

function setStudent(data) {
    fetch("http://localhost:9000/register",
        {
            mode: 'no-cors',
            method: "POST",
            body: data
        })
        .then(function (response) {
            console.log(response);
        });
}