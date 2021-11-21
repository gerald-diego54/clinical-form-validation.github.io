function validateForm(){
  let first_name_validation = /[0-9]/;
  let space_validation = /\s/;
  let email_validation =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let logForms = document.forms['logform'];
  let fname = logForms["fname"].value;
  let lname = logForms["lname"].value;
  let email = logForms["email"].value;
  
  if (first_name_validation.test(fname)) {
    alert("Firstname must not have number characters");
    logForms["fname"].focus();
    return false;
  }
  if (fname == "") {
    alert("Empty Field [Firstname]");
    logForms["fname"].focus();
    return false;
  }
  if (first_name_validation.test(lname)) {
    alert("Lastname must not have number characters");
    logForms["lname"].focus();
    return false;
  }
  if (lname == "") {
    alert("Empty Field [Laststname]");
    logForms["lname"].focus();
    return false;
  }
  if (!email.match(email_validation)) {
    alert(!email_validation.test(email));
    alert("Invalid email format!");
    logForms["email"].focus();
    return false;
  }
  else {
    alert("Proceeding to Login");
    return true;
  }
  if (first_name_validation.test(lname)) {
    alert("Lastname must not have number characters");
    return false;
  }
}