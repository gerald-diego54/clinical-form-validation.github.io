document.getElementById('nextbtn-change').addEventListener('click', function form(e) {
  e.preventDefault();
  let arr = [];
  // let list = [];
  //gender
  let gender;
  let genderChoice = document.querySelectorAll("input[name = 'gender']");
          for (const c of genderChoice) {
               if (c.checked) {
                    gender = c.value;
                    break;
               }
          }
          //checkboxes
          let checkboxes = document.querySelectorAll("input[type = 'checkbox']:checked");
          let checkedValues = [];
          checkboxes.forEach((checkbox) => {
               checkedValues.push(checkbox.value);
          });
// selection
          // let selection = document.querySelectorAll("#sel");
          // let selected = [...selection.options] 
          //      .filter((option) => option.selected)
          //      .map((option) => option.value);
        let currSymptomsChosen = document.getElementById("sel");
        let currSymptoms = [...currSymptomsChosen.options].filter(option => option.selected).map(option => option.value);
        var takingMeds = document.getElementById("meds").value;

  let Form  = {
    id: Date.now(),
    first_name: document.getElementById('firstname').value,
    middle_name: document.getElementById('middlename').value,
    last_name: document.getElementById('lastname').value,
    adress: document.getElementById('address').value,
    birthday: document.getElementById('date').value,
    contact: document.getElementById('contact').value,
    Gender: gender,
    medical_history: checkedValues,//stores the values
    symptoms: currSymptoms,
    current_medication: takingMeds,
    ifYes: document.getElementById("distxt").value,
  }
  

  arr.push(Form);
  localStorage.setItem('Patients Information Form', JSON.stringify(arr));
  console.table(arr);
  

});



function btn2() {
    if (document.getElementById('firstname').value == "") {
      alert(`Firstname Input Required!`);
      return false;
  }
  if (document.getElementById('middlename').value == "") {
    alert(`Middlename Input Required!`);
    return false;
  }
  if (document.getElementById('lastname').value == "") {
    alert(`Lastname Input Required!`);
    return false;
  }
if (document.getElementById('address').value == "") {
  alert(`Address Input Required!`);
  return false;
}
if (document.getElementById('contact').value == "") {
  alert(`Contact Input Required!`);
  return false;
}
if (document.querySelector('input[name = "gender"]:checked').value == "") {
  alert(`Gender Field Required!`);
  return false;
}
if (document.getElementById('date').value == "") {
  alert(`Birthdate Input Required!`);
  return false;
}
// console.log(document.getElementById('date').value);
document.getElementById('prevbtn').style.display = "inline"; //prevbtn present
    let docu = document.getElementsByClassName('Tab'); //Tab
    docu[1].style.display = "inline";// 1 true
    docu[0].style.display = "none";// 0 false
    document.getElementById('nextbtn').style.display = "none"; //nextbtn none
    document.getElementById('nextbtn-change').style.display = "inline"; //nextbtn-chnage present
}
function btn1() {
     document.getElementById('prevbtn').style.display = "none"; //prevbtn none
     let doc = document.getElementsByClassName('Tab');//Tab
     doc[1].style.display = "none";// 1 none
     doc[0].style.display = "inline" //0 present
     document.getElementById('nextbtn').style.display = "inline";//nextbtn present
     document.getElementById('nextbtn-change').style.display = "none";//nextbtn-change none
   }

   function medical(medic) {
    var m = document.getElementById("distxt");
    if(medic == "yes"){
        m.disabled = false;
        console.log(medic);
    }
    if (medic == "no") {
        m.disabled = true;
        m.value = "";
    }
  }  