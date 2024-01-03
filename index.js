var loginNmae = document.getElementById('loginNmae');
var loginEmail = document.getElementById('loginEmail');
var loginPassword = document.getElementById('loginPassword');
var puch = document.getElementById('puch');


var SignInBtn = document.getElementById('SignIn');
var loign = document.getElementById('loign');

var dataArray = [];
if (localStorage.getItem('login') != null) {

    dataArray = JSON.parse(localStorage.getItem('login'));
}
function puchdata() {
    var objData = {
        name: loginNmae.value,
        email: loginEmail.value,
        password: loginPassword.value,
    };
    if (allValid() && isExist()) {
        dataArray.push(objData);
        localStorage.setItem("login", JSON.stringify(dataArray));
        document.getElementById("pAll").classList.add("d-none");
        SignInBtn.classList.replace("d-none", "d-block");

        empty();
    } else {
        loginNmae.classList.add("is-invalid");
        loginEmail.classList.add("is-invalid");
        loginPassword.classList.add("is-invalid");
        console.log("login false");
        SignInBtn.classList.replace("d-block", "d-none");
    }


    console.log(dataArray);


}
function allValid() {
    if (validName() && validEmail() && validPass()) {
        return true;
    } else {

        return false;
    }


}
function validName() {
    var nameRegex = /^(?=.*[A-Z])[A-Za-z]{1,20}$/;
    if (nameRegex.test(loginNmae.value) == true) {
        loginNmae.classList.add("is-valid");
        loginNmae.classList.remove("is-invalid");
        document.getElementById("pName").classList.add("d-none")
        return true;
    }

    else {
        loginNmae.classList.remove("is-valid");
        loginNmae.classList.add("is-invalid");
        document.getElementById("pName").classList.remove("d-none")
        return false;
    }
}
function validEmail() {
    var nameRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (nameRegex.test(loginEmail.value) == true) {
        loginEmail.classList.add("is-valid");
        loginEmail.classList.remove("is-invalid");
        document.getElementById("pEmail").classList.add("d-none")
        return true;
    }

    else {
        loginEmail.classList.remove("is-valid");
        loginEmail.classList.add("is-invalid");
        document.getElementById("pEmail").classList.remove("d-none")
        return false;
    }
}
function validPass() {
    var nameRegex = /^.{5,15}$/;
    if (nameRegex.test(loginPassword.value) == true) {
        loginPassword.classList.add("is-valid");
        loginPassword.classList.remove("is-invalid");
        document.getElementById("pPass").classList.add("d-none")

        return true;
    }

    else {
        loginPassword.classList.remove("is-valid");
        loginPassword.classList.add("is-invalid");
        document.getElementById("pPass").classList.remove("d-none")
        return false;
    }
}
function clearData() {
    localStorage.clear();

}
function isExist() {
    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i].name.toLowerCase() == loginNmae.value.toLowerCase() || dataArray[i].email.toLowerCase() == loginEmail.value.toLowerCase()) {
            loginNmae.classList.remove("is-valid");
            loginEmail.classList.remove("is-valid");
            loginNmae.classList.remove("is-valid");

            document.getElementById("pAll").classList.remove("d-none")
            return false;
        }
    }

    return true;

}
function empty() {
    loginNmae.value = "";
    loginEmail.value = "";
    loginPassword.value = "";

}
var username = JSON.parse(localStorage.getItem("name"));
function Login() {
    var sinName = document.getElementById('sinName');
    var sinPass = document.getElementById('sinPass');


    if (sinName.value == "" || sinPass.value == "") {
        document.getElementById("psin").classList.replace("d-block", "d-none");
        document.getElementById("emt").classList.replace("d-none", "d-block");
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "All inputs is required !",
        });

    }

    else {
        document.getElementById("emt").classList.replace("d-block", "d-none");
        if (dataArray.length == 0) {
            console.log("eroe");
            document.getElementById("psin").classList.replace("d-none", "d-block");
        }
        else {
            for (let i = 0; i < dataArray.length; i++) {
                if (dataArray[i].email.toLowerCase() === sinName.value.toLowerCase() && dataArray[i].password.toLowerCase() === sinPass.value.toLowerCase()) {
                    sinName.classList.remove("is-invalid");
                    sinName.classList.add("is-valid");
                    sinPass.classList.remove("is-invalid");
                    sinPass.classList.add("is-valid");
                    document.getElementById("psin").classList.replace("d-block", "d-none");
                    username = dataArray[i].name;
                    localStorage.setItem("name", JSON.stringify(username));
                    window.location.href = "logout.html";
                }
                else {

                    sinName.classList.remove("is-valid");
                    sinName.classList.add("is-invalid");
                    sinPass.classList.remove("is-valid");
                    sinPass.classList.add("is-invalid");
                    document.getElementById("psin").classList.replace("d-none", "d-block");
                }

            }
        }

    }
}
function display() {

    document.getElementById("block").innerHTML = `Welocme ${username}`
}

function logOut() {
    localStorage.removeItem("name");

}

function hide() {
    var sinPasss = document.getElementById('sinPass');
    var eye = document.getElementById("togglePassword1");
    var eye2 = document.getElementById("togglePassword2");
    if (sinPasss.type === "password") {
        sinPasss.type = "text";
        eye.classList.add("d-none");
        eye2.classList.remove("d-none");


    }

    else if (sinPasss.type === "text") {
        sinPasss.type = "password";
        eye.classList.remove("d-none");
        eye2.classList.add("d-none");

    }

}