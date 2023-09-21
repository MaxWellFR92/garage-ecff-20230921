// ----- START EVENEMENT CLICK CONNECT OU CREATE -----

let btnConnect = document.querySelector('.choice-connect-down');
let btnCreate = document.querySelector('.choice-create-down');


btnConnect.addEventListener('click', function () {
  document.querySelector('.choice-connect-up').style.display = 'flex';
  document.querySelector('.choice-create-up').style.display = 'none';
  document.querySelector('.choice-connect-down').style.display = 'none';
  document.querySelector('.choice-create-down').style.display = 'flex';
  document.querySelector('#field-content-create').style.display = 'none';
});
btnCreate.addEventListener('click', function () {
  document.querySelector('.choice-connect-up').style.display = 'none';
  document.querySelector('.choice-create-up').style.display = 'flex';
  document.querySelector('.choice-connect-down').style.display = 'flex';
  document.querySelector('.choice-create-down').style.display = 'none';
  document.querySelector('#field-content-create').style.display = 'flex';
});



// ----- START SCRIPT VALIDATION DU FORMULAIRE
// ----- DECLARATION DES VARIABLES -----
let form = document.querySelector('form')
let userName = document.getElementById('identifiant');
let alertuserName = document.getElementById('alertUser');
let passWord = document.getElementById('password');
let alertPassWord = document.getElementById('alertPassWord');
let email = document.getElementById('email');
let alertEmail = document.getElementById('alertEmail');
let emailConfirm = document.getElementById('email-confirm');
let alertEmailConfirm = document.getElementById('alertEmailConfirm');
let lastName = document.getElementById('lastname');
let alertLastName = document.getElementById('alertLastName');
let firstName = document.getElementById('firstname');
let alertFirstName = document.getElementById('alertFirstName');
let listP = document.querySelectorAll('p');

let btnSubmit = document.getElementById('form');
userName.focus();
let allElementValid = 0;

// ----- FONCTION AVEC EVENT ET TARGET  -----
//userName.addEventListener('click', function (event) {
  //event.target.style.backgroundColor = 'pink';
//});

userName.addEventListener('input', function (event) {
  //if (event.target.value.length <8 || event.target.value.length > 20 ){
  if (!event.target.value.match ("^[A-Za-z0-9+_.-]{8,20}$")) {
    alertuserName.innerHTML = 'ATTENTION! 8 à 20 caractères latins, chiffres, -._ accordés'
  } else {
    alertuserName.innerHTML = 'Correct';
  }
});

passWord.addEventListener('input', function (event) {
  if (!event.target.value.match ("^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[$&+,:;=?@#|'<>.^*()%!-']).{8,20}$")) {
    alertPassWord.innerHTML = 'INVALID! 8 à 20 caractères majuscule, chiffre, caractères spéciaux requis'
  } else {
    alertPassWord.innerHTML = 'Correct';
  }
});

email.addEventListener('input', function (event) {
  if (!event.target.value.match ("^[A-Za-z0-9+-._]+@[A-Za-z0-9+-._]+.[A-Za-z]{2,3}$")) {
    alertEmail.innerHTML = 'ATTENTION! adresse mail non valide'
  } else {
    alertEmail.innerHTML = 'Correct';
  }
});

emailConfirm.addEventListener('input', function (event) {
  if (event.target.value != email.value) {
    alertEmailConfirm.innerHTML = 'ATTENTION! verifier votre adresse email'
  } else {
    alertEmailConfirm.innerHTML = 'Correct';
  }
});

lastName.addEventListener('input', function (event) {
  if (!event.target.value.match ("^[A-Za-z+\\s-]{1,40}$")) {
    alertLastName.innerHTML = 'ATTENTION! seuls les caractères latin sont accordés'
  } else {
    alertLastName.innerHTML = 'Correct';
  }
});

firstName.addEventListener('input', function (event) {
  if (!event.target.value.match ("^[A-Za-z+\\s-]{1,40}$")) {
    alertFirstName.innerHTML = 'ATTENTION! seuls les caractères latin sont accordés'
  } else {
    alertFirstName.innerHTML = 'Correct';
  }
});

// ----- SOUMISSION FORMULAIRE -----
btnSubmit.addEventListener('submit', function (e) {
  //----- INITIALISATION VARIABLE -----
  allElementValid = 0;
  //----- BOUCLE VERIFICATION TOUS LES CHAMPS INPUT -----
  listP.forEach(function (element) {
    if (element.innerHTML == "Correct") {
      allElementValid ++;
    } 
  });
  //----- EVITE LA VALIDATION DU FORMULAIRE SINON FORMULAIRE VALIDE -----
  console.log(allElementValid)
  if (allElementValid != 6) {
    e.preventDefault();
  }
});