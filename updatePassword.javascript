let formEl = document.getElementById("updatePasswordForm");
let newpassEl = document.getElementById("newPassword");
let confirmpassEl = document.getElementById("confirmPassword");
let newpasserrmsgEl = document.getElementById("newPasswordErrMsg");
let confirmpasserrmsgEl = document.getElementById("confirmPasswordErrMsg");
let btnEl = document.getElementById("updateBtn");

let newpasserr = "Required*";
let confmerr = "Password must be same";

let validnewpassword = function() {

    if (newpassEl.value === "") {
        newpasserrmsgEl.textContent = newpasserr;
    } else {
        newpasserrmsgEl.textContent = "";
    }
};

let validconfirmpassword = function() {
    if (newpassEl.value !== confirmpassEl.value) {
        confirmpasserrmsgEl.textContent = confmerr;
    } else {
        confirmpasserrmsgEl.textContent = "";
    }
};

confirmpassEl.addEventListener("blur", validconfirmpassword);
newpassEl.addEventListener("blur", validnewpassword);


formEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validnewpassword();
    validconfirmpassword();
});
