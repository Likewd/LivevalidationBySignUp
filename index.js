let pwd = document.getElementById("pwd")

var myinput = pwd.value;

var letter = document.getElementById("letter")
var capital = document.getElementById("capital")
var number = document.getElementById("number")
var last = document.getElementById("last")
var length = document.getElementById("length")

pwd.onfocus = function () {
    document.getElementById("message").style.display = "block"
}

pwd.onkeyup = function () {
    // lowercase
    let lowercase = /[a-z]/g
    if (pwd.value.match(lowercase)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    }
    else {
        letter.classList.add("invalid");
        letter.classList.remove("valid");
    }

    // Uppercace

    let uppercase = /[A-Z]/g
    if (pwd.value.match(uppercase)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    }
    else {
        capital.classList.add("invalid");
        capital.classList.remove("valid");
    }


    // Number

    let numberChack = /[0-9]/g
    if (pwd.value.match(numberChack)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    }
    else {
        number.classList.add("invalid");
        number.classList.remove("valid");
    }

    //length must be 8


    if (pwd.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    }
    else {
        length.classList.add("invalid");
        length.classList.remove("valid");
    }

    // last digit must be A number

    if (!pwd.value.length == "" && !isLastNumber(pwd.value)) {

        last.classList.remove("invalid");
        last.classList.add("valid");
    }
    else {
        last.classList.add("invalid");
        last.classList.remove("valid");
    }
}

function isLastNumber(str) {
    return isNaN(str.slice(-1))
}

function passwordToggle(e) {
    pwd.type == "password" ? pwd.type = "text" : pwd.type = "password"
    e.classList.toggle("fa-eye")
}

function submitFrom(event) {
    event.preventDefault()
    location = "Wellcome.html"
}

