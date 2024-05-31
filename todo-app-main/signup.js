const email = document.getElementById("email");
const uname = document.getElementById("uname");
const pword = document.getElementById("pword");


function validateSignUp(){

  const unameValidate = validateNameField(uname.value);
  const emailValidate = validateEmail(email.value);
  const passwordValidate = validatePassword(pword.value);

  if (unameValidate && emailValidate && passwordValidate) {
    event.preventDefault()
    alert("You've successfully registered your account");
    clearUserInput();
    window.location.href = "login.html"
  } else {
    if (!unameValidate) {
      alert("User name must be equal to or greater than 3");
      return;
    }
    if (!emailValidate) {
      alert("Email must be equal to or greater than 12");
      return;
    }
    if (!passwordValidate) {
      alert("Password should be more than 8 characters.");
      return;
    }
  }
};


function validateNameField(value) {
  const trimmedValue = value.trim();
  if (trimmedValue.length >= 2) {
    return true;
  }
  return false;
}
function validateEmail(value) {
  const trimmedValue = value.trim();
  if (trimmedValue.length >= 12) {
    return true;
  }
  return false;
}
function validatePassword(value) {
  if (value.length >= 8) {
    return true;
  }
  return false;
}
function clearUserInput(){
  uname.value=""
  pword.value=""
  email.value=""
}