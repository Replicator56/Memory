
const firstname = document.getElementById('validationServer01');
const lastname = document.getElementById('validationServer02');
const email = document.getElementById('validationServerUsername');
const password = document.getElementById('validationServer03')
const password2 = document.getElementById('validationServer04')
const validate = document.getElementById('submitBtn')
const acceptButton = document.querySelector("#Check3")



acceptButton.addEventListener('change',checked)
firstname.addEventListener('input', firstnameChange);
lastname.addEventListener('input', lastnameChange);
email.addEventListener('input', emailChange);
password.addEventListener('input', passwordCheck)
password2.addEventListener('input', passwordidem)
validate.addEventListener('click', submituser)


function checked() {
    console.log(acceptButton.checked);
    
    
}

function init() {

    lastnameChange();
    emailChange();
    passwordCheck();
    passwordidem();
    
}

// Capture de la valeur du champ prénom
function firstnameChange() {
    let firstnameValue = firstname.value
    console.log(firstnameValue);
    if (firstnameValue.length <= 2) {
        document.querySelector('#firstnameImg').src = 'ressources/error.svg';
        firstnameOK = true;
    }
    else {
        document.querySelector('#firstnameImg').src = 'ressources/check.svg';
        firstnameOK = false;
    }
}

// Capture de la valeur du champ nom
function lastnameChange() {
    let lastnameValue = lastname.value
    console.log(lastnameValue);
    if (lastnameValue.length <= 2) {
        document.querySelector('#lastnameImg').src = 'ressources/error.svg';
        lastnameOK = true
    }
    else {
        document.querySelector('#lastnameImg').src = 'ressources/check.svg';
        lastnameOK = false
    }

    
}

// Capture de la valeur du champ email
function emailChange() {
    console.log(email.value);
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (pattern.test(email.value)) {
        document.querySelector('#emailImg').src = 'ressources/check.svg';
        
    }
    else {
        document.querySelector('#emailImg').src = 'ressources/error.svg';
    }
}

// Capture et gestion des mots de passe
function passwordCheck() {
    let passwordValue = password.value;     // valeur du mot de passe
    let passwordLength = passwordValue.length // longueur du mot passe

    if (passwordLength >= 1) {
        document.querySelector('#levelBoxLow').style.visibility = "visible"
    } else {
        document.querySelector('#levelBoxLow').style.visibility = "hidden"
    }

    if (passwordLength >= 6) {
        document.querySelector('#levelBoxMid').style.visibility = "visible"
        document.querySelector('#pass1Img').src = 'ressources/check.svg';
    } else {
        document.querySelector('#levelBoxMid').style.visibility = "hidden"
        document.querySelector('#pass1Img').src = 'ressources/error.svg';
    }

    if (passwordLength > 9) {
        document.querySelector('#levelBoxHigh').style.visibility = "visible"
    } else {
        document.querySelector('#levelBoxHigh').style.visibility = "hidden"
    }

    passwordidem();

}

//Vérifie si les 2 mots de passe sont identiques et si le mot de passe de confirmation contient au moins 6 caractères
function passwordidem() {
    if ((password.value === password2.value) && (password2.value.length >= 6)) {
        console.log("les mots de passe sont identiques");
        document.querySelector('#pass2Img').src = 'ressources/check.svg';
    }
    else {
        document.querySelector('#pass2Img').src = 'ressources/error.svg';
    }
}

function submituser() {
    
    if ((password.value === password2.value) && (password2.value.length >= 6) && acceptButton.checked) {
        let aStocker = new Set;
        aStocker = [firstname.value, lastname.value, password.value]
        const storedUserData = localStorage.getItem(email.value)
        if (storedUserData) {
            alert("l'utilisateur " + email.value + " existe déjà !");
        } 
        else {
            localStorage.setItem(email.value, JSON.stringify(aStocker));
            alert('Félicitation, vous êtes enregistré ! Appuyez pour continuer')
            window.location.href = "play.html"
            
        }
    }
}


// const userData = JSON.parse(storedUserData)
// function emailComp (){
//     for email.value
// }










window.init();