
// function ValidateEmail(inputText)
// {
// var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// console.log(inputText);
// if(inputText.value.match(mailformat))
// {
// alert("Valid email address!");
// document.logform.text1.focus();
// return true;
// }
// else
// {
// alert("You have entered an invalid email address!");
// document.logform.text1.focus();
// return false;
// }
// }
let passWord = logForm["floatingPassword"].value.trim();
if (passWord === "") {
  alert("Please provide password!");
  logForm["floatingPassword"].focus(); //validate
  return false;
}
if (passWord.length !== 4) {
  alert("Provide maximum password atleast 4 characters!");
  logForm["floatingPassword"].focus();
  return false;
}
if (confirm_password.length !== 4 ) {
  alert("Provide maximum confirmation password atleast 4 characters!");
  return false;
}

if (passWord !== confirm_password) {
  alert("Invalid confiramtion password");
  return false;
}