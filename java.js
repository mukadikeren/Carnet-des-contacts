//Récuperation des éléments depuis HTML
let telephone = document.getElementById("telephone");

let email = document.getElementById("email");
let emailInput = document.getElementById('email');
let errorMessage = document.getElementById('error');

let nom = document.getElementById('nom');
let nomError = document.getElementById('nomError');

let prenom = document.getElementById('prenom');
let prenomError = document.getElementById('prenomError');

let groupe = document.getElementById('groupe');
let Bio = document.getElementById('bio');

let btnCréer = document.getElementById('boutonCréer');

let btnReinit = document.getElementById('boutonReinit');

let ul = document.getElementById('ul');


let clients = [];
// creation Table
// let clients = [];
// function AjoutContact(){
//     clients.push({
//         PRENOM: prenom.value,
//         NOM: nom.value,
//         TELEPHONE: telephone.value,
//         GROUPE: groupe.value,
//         EMAIL: email.value,
//         BIO: Bio.value,
//     });
// }

// mettre le bordur en rouge une fois qu'ont sort de l'input du telephone

telephone.addEventListener("blur", (event) => {
    event.target.style.border = "red solid 2px";
});

email.addEventListener("blur", (event) => {
    event.target.style.border = "red solid 2px";
});

//  Début Critère d'acceptation du numero
function numeroValide(numero) {
    let format = /^(084|085|080|089|081|082|099|097|090)/;
    return format.test(numero);
}

document.getElementById('telephone').addEventListener('blur', function () {
    let numeroTelephone = this.value;
    if (!numeroValide(numeroTelephone)) {
        this.style.borderColor = 'red';
        telephoneError.textContent = 'Veuillez renseigner un numéro de téléphone au format valide apparaît.';
    } else if (telephone.value.length < 10 || telephone.value.length > 10) {
        telephone.style.borderColor = 'red';
        telephoneError.textContent = 'Veuillez renseigner un numero de telephone valide avec 10 chiffre.';
    } else {
        telephone.style.borderColor = '';
        telephoneError.textContent = '';
    }
});

//    Fin Critère d'acceptation du numero
//  Début Critere d'acceptation sur le mail
function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


emailInput.addEventListener('blur', function () {
    if (!validateEmail(this.value)) {
        this.style.borderColor = 'red';
        emailError.textContent = 'Veuillez renseigner une adresse email valide';
    } else {
        this.style.borderColor = '';
        emailError.textContent = '';
    }

});

//    Fin Critère d'acceptation du mail

// Début critère d'acceptation NOM


nom.addEventListener('blur', function () {
    if (nom.value.length < 3) {
        nom.style.borderColor = 'red';
        nomError.textContent = 'Veuillez renseigner un nom avec plus de 3 caractères.';
    } else if (nom.value.length > 50) {
        nom.style.borderColor = 'red';
        nomError.textContent = 'Veuillez renseigner un nom avec moins de 50 caractères.';
    }

    else {
        nom.style.borderColor = '';
        nomError.textContent = '';
    }
});
// Fin Critère d'acceptation du NOM


// Début critère d'acceptation PRENOM

prenom.addEventListener('blur', function () {
    if (prenom.value.length < 3) {
        prenom.style.borderColor = 'red';
        prenomError.textContent = 'Veuillez renseigner un prenom avec plus de 3 caractères.';
    } else if (prenom.value.length > 50) {
        prenom.style.borderColor = 'red';
        prenomError.textContent = 'Veuillez renseigner un prenom avec moins de 50 caractères.';
    }
    else {
        prenom.style.borderColor = '';
        prenomError.textContent = '';
    }
});
// Fin Critère d'acceptation du PRENOM


//Début critère d'acceptation Button Reinitiliser

btnReinit.addEventListener('click', () => {
    prenom.value = '';
    email.value = '';
    emailInput.value = '';
    errorMessage.value = '';
    nom.value = '';
    nomError.value = '';
    groupe.value = '';
    Bio.value = '';

})
// Fin Critère d'acceptation Button Reinitiliser


//Début critère d'acceptation Button Reinitiliser


// Fin Critère d'acceptation Button Reinitiliser



//Début critère d'acceptation Button Reinitiliser

btnCréer.addEventListener('click', () => {

    clients.push({
        PRENOM: prenom.value,
        NOM: nom.value,
        TELEPHONE: telephone.value,
        GROUPE: groupe.value,
        EMAIL: email.value,
        BIO: Bio.value,
    });

    let c = clients.length - 1;

    let li = document.createElement('li');
    li.setAttribute('id', 'li_liste');
    let image = document.createElement('img');
    image.setAttribute('src', 'https://media.licdn.com/dms/image/D4E03AQH6bd5CS2viWQ/profile-displayphoto-shrink_800_800/0/1683023750582?e=2147483647&v=beta&t=ykBYwBoUwId8oy33HM4at7_XdJut2axXMeO-QiA4V_s');
    image.setAttribute('alt', 'Photo profil');

    /* Div contant tous les elements de li SANS de la photo*/
    let divEcrits = document.createElement('div');
    divEcrits.setAttribute('class', 'container_ecrits');

    /* la Div contant les Prenom, Nom - Groupe Et les Font Awesome*/
    let divNom_Fontawesome = document.createElement('div');
    divNom_Fontawesome.setAttribute('class', 'containerNom_Fontawesome');

    /*Création de la Div contant les Prenom, Nom - Groupe*/
    let divPrenom_Groupe = document.createElement('div');
    divPrenom_Groupe.setAttribute('class', 'containerPrenom_Groupe');
    divPrenom_Groupe.setAttribute('class', 'container_separation');

    let spanPrenom = document.createElement('span');
    spanPrenom.innerHTML = clients[c].PRENOM;
    let spanNom = document.createElement('span');
    spanNom.innerHTML = clients[c].NOM;
    let spanTrait = document.createElement('span');
    spanTrait.innerHTML = '-';
    let spanGroupe = document.createElement('span');
    spanGroupe.innerHTML = clients[c].GROUPE;

    /*Mettre les spans:nom,prenom,....dans leur div*/
    divPrenom_Groupe.appendChild(spanPrenom);
    divPrenom_Groupe.appendChild(spanNom);
    divPrenom_Groupe.appendChild(spanTrait);
    divPrenom_Groupe.appendChild(spanGroupe);

    /*Fin de la Création de la Div contant les Prenom, Nom - Groupe*/

    /*Création de la Div contant les Prenom, Nom - Groupe*/

    let divFont_Awesome = document.createElement('div');
    divFont_Awesome.setAttribute('class', 'container_separation');
    divFont_Awesome.innerHTML = '<i class="fa-solid fa-user-pen" style="color: #0f1114;"></i><i id="suppression" class="fa-regular fa-trash-can" style="color: #f60440;"></i>';

    /*Fin de la Création de la Div contant les Prenom, Nom - Groupe*/

    /*Début: mise de la Div des Prenom-Groupe et de font awesome dans leur parent*/
    divNom_Fontawesome.appendChild(divPrenom_Groupe);
    divNom_Fontawesome.appendChild(divFont_Awesome);
    /*Fin de la mise dans le parent*/

    /*Début: création de la Div et span du Telephone et la mise de la span dans cette div*/
    let divTelephone = document.createElement('div');
    divTelephone.setAttribute('class', 'container_telephone');
    let spanTelephone = document.createElement('span');
    spanTelephone.innerHTML = clients[c].TELEPHONE;

    divTelephone.appendChild(spanTelephone);
    /*Fin création de la Div du Telephone*/


    /*Début: création de la Div et span de Lorem ipsum et la mise de ces span dans la Div parent*/
    let divBio = document.createElement('div');
    divBio.setAttribute('class', 'container_lorem');

    let spanBio = document.createElement('span');
    spanBio.setAttribute('class', 'what_lorem');
    spanBio.innerHTML = clients[c].BIO;


    divBio.appendChild(spanBio);
    /*Fin création de la Div et span de Lorem ipsum */


    /*Début: mise de la Div Fontawesome dans son parent et des autres dans leur parent*/
    divEcrits.appendChild(divNom_Fontawesome);
    divEcrits.appendChild(divTelephone);
    divEcrits.appendChild(divBio);
    /*Fin de la mise dans le parent*/


    li.appendChild(image);
    li.appendChild(divEcrits);
    ul.appendChild(li);


    suppression.addEventListener('click', () => {
        clients.splice(1,)
        li.remove();
    });
})
// Fin Critère d'acceptation Button Reinitiliser


