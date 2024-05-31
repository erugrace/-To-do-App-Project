const uname = document.getElementById("uname");
const pword = document.getElementById("pword");


function validateLogin(){

  const unameValidate = validateNameField(uname.value);
  const passwordValidate = validatePassword(pword.value);

  if (unameValidate && passwordValidate) {
    event.preventDefault()
    clearUserInput();
    window.location.href = "index.html"
  } else {
    if (!unameValidate) {
      alert("User name must be equal to or greater than 3");
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
function validatePassword(value) {
  if (value.length >= 8) {
    return true;
  }
  return false;
}
function clearUserInput(){
  uname.value=""
  pword.value=""
}