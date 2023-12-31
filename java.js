//Récuperation des éléments depuis HTML
let telephone = document.getElementById("telephone");

let email = document.getElementById("email");
let emailInput = document.getElementById('email');
let errorMessage = document.getElementById('error');

let nom = document.getElementById('nom');
document.getElementById('nom').innerHTML = "Keren";
   

let nomError = document.getElementById('nomError');

let prenom = document.getElementById('prenom');
let prenomError = document.getElementById('prenomError');
document.getElementById('prenom').innerHTML = "MUKADI";

let groupe = document.getElementById('groupe');
let Bio = document.getElementById('bio');

let photo = document.querySelector('.span1');

let btnCréer = document.getElementById('boutonCréer');

let btnReinit = document.getElementById('boutonReinit');
let fileUrl

let ul = document.getElementById('ul');
// appele aux click sur telephone et email
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
    else if (myregex.test(nom.value) == false) {
        nom.style.borderColor = 'red';
        nomError.textContent = 'Le nom dois comportez que des lettres';
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
    else if (myregex.test(prenom.value) == false) {
        prenom.style.borderColor = 'red';
        prenomError.textContent = 'Le prenom dois comportez que des lettres';
    }
    else {
        prenom.style.borderColor = '';
        prenomError.textContent = '';
    }
});
// Fin Critère d'acceptation du PRENOM

//Début critère d'acceptation Button Reinitiliser
btnReinit.addEventListener('click', renit)

function renit() {
    prenom.value = '';
    email.value = '';
    nom.value = '';
    groupe.value = '';
    telephone.value = '';
    Bio.value = '';
    fileUrl.value = '';
    emailError.textContent = '';
    telephoneError.textContent = '';
    prenomError.textContent = '';
    nomError.textContent = '';
    prenom.style.borderColor = '';
    nom.style.borderColor = '';
    email.style.borderColor = '';
    telephone.style.borderColor = '';
    photo.innerHTML = '';
}
// Fin Critère d'acceptation Button Reinitiliser

// Début Ajout des Photos : drag and drop

photo.addEventListener("dragover", (e) => {
    e.preventDefault();
})

photo.addEventListener("drop", (event) => {
    event.preventDefault();

    let file = event.dataTransfer.files[0];
    showfile(file);
})

function showfile(file) {
    // on récupere le type de fichier
    let filetype = file.type;
    let fileExtension = ['image/jpeg', 'image/png', 'image/jpg'];

    //on verifie la validité du type du fichier
    if (fileExtension.includes(filetype)) {
        let filereader = new FileReader();
        filereader.readAsDataURL(file);

        filereader.onload = () => {
            fileUrl = filereader.result;
            imgtag = `<img src="${fileUrl}" alt="Image progil" />`;
            photo.innerHTML = imgtag;
        }
    }
}
// FIN Ajout des Photos : drag and drop

// creation Table
let tableClients = [];

// creation Objet
let clients = { PRENOM: '', NOM: '', TELEPHONE: '', GROUPE: '', EMAIL: '', BIO: '', PHOTO: '' };
//Début critère d'acceptation Button Reinitiliser

btnCréer.addEventListener('click', (e) => {
    if (nom.value === '' || email.value === '' || prenom.value === '' || telephone.value === '' || fileUrl.value === '' || groupe.value === '') {
        alert('Veuillez remplir tous les champs obligatoires.');
        e.preventDefault();
    }
    else{
        clients.PRENOM = prenom.value;
        clients.NOM = nom.value;
        clients.TELEPHONE = telephone.value;
        clients.GROUPE = groupe.value;
        clients.EMAIL = email.value;
        clients.BIO = Bio.value;
        clients.PHOTO = fileUrl;
    addTab();
    afficherTableau();
    }
});
// Fin Critère d'acceptation Button Reinitiliser

function addTab() {
    tableClients.push({ PRENOM: prenom.value, NOM: nom.value, TELEPHONE: telephone.value, GROUPE: groupe.value, EMAIL: email.value, BIO: Bio.value, PHOTO: fileUrl });

}

function afficherTableau() {
    console.log(tableClients);
    ul.innerHTML = ''
    for (let i = 0; i < tableClients.length; i++) {

        // function Afficher() {

        let li = document.createElement('li');
        li.setAttribute('id', 'li_liste');
        let image = document.createElement('img');

        image.setAttribute('src', tableClients[i].PHOTO);

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
        spanPrenom.innerHTML = tableClients[i].PRENOM;
        let spanNom = document.createElement('span');
        spanNom.innerHTML = tableClients[i].NOM;
        let spanTrait = document.createElement('span');
        spanTrait.innerHTML = '-';
        let spanGroupe = document.createElement('span');
        spanGroupe.innerHTML = tableClients[i].GROUPE;

        /*Mettre les spans:nom,prenom,....dans leur div*/
        divPrenom_Groupe.appendChild(spanPrenom);
        divPrenom_Groupe.appendChild(spanNom);
        divPrenom_Groupe.appendChild(spanTrait);
        divPrenom_Groupe.appendChild(spanGroupe);
        /*Fin de la Création de la Div contant les Prenom, Nom - Groupe*/

        /*Création de la Div contant les Prenom, Nom - Groupe*/
        let divFont_Awesome = document.createElement('div');
        divFont_Awesome = document.createElement('class', 'container_separation');
        // divFont_Awesome = document.createElement('<i class="fa-solid fa-user-pen" style="color: #0f1114;"></i><i class="fa-regular fa-trash-can" style="color: #f60440;"></i>');
        let y = document.createElement('i');
        y.className = "fa-regular fa-trash-can"
        y.style.color = "#f60440"
        divFont_Awesome.appendChild(y)
        // divFont_Awesome.setAttribute('class', 'container_separation');
        // divFont_Awesome.innerHTML = '<i class="fa-solid fa-user-pen" style="color: #0f1114;"></i><i class="fa-regular fa-trash-can" style="color: #f60440;"></i>';
      
        let x = document.createElement('i');
        x.className = "fa-solid fa-user-pen"
        x.style.color = " #0f1114"
        divFont_Awesome.appendChild(x)

        /*Fin de la Création de la Div contant les Prenom, Nom - Groupe*/
        /*Début: mise de la Div des Prenom-Groupe et de font awesome dans leur parent*/
        divNom_Fontawesome.appendChild(divPrenom_Groupe);
        divNom_Fontawesome.appendChild(divFont_Awesome);
        /*Fin de la mise dans le parent*/
        /*Début: création de la Div et span du Telephone et la mise de la span dans cette div*/
        let divTelephone = document.createElement('div');
        divTelephone.setAttribute('class', 'container_telephone');
        let spanTelephone = document.createElement('span');
        spanTelephone.innerHTML = tableClients[i].TELEPHONE;
        divTelephone.appendChild(spanTelephone);
        /*Fin création de la Div du Telephone*/
        /*Début: création de la Div et span de Lorem ipsum et la mise de ces span dans la Div parent*/
        let divBio = document.createElement('div');
        divBio.setAttribute('class', 'container_lorem');

        let spanBio = document.createElement('span');
        spanBio.setAttribute('class', 'what_lorem');
        spanBio.innerHTML = tableClients[i].BIO;


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

        // let suppression = document.getElementsByClassName('fa-regular ');
        // console.log('suppression', suppression);
        n(y, li)
        m(x, spanPrenom, spanNom, spanGroupe, spanBio, spanTelephone, fileUrl)
    }
    renit()
    // Fin : Fontcion Affichage
}

function n(y, li) {
    y.addEventListener('click', () => {
        ul.removeChild(li);

    })
}

function m(x, spanPrenom, spanNom, spanGroupe, spanBio, spanTelephone, fileUrl) {
    x.addEventListener('click', () => {
        prenom.value = spanPrenom.innerHTML;
        nom.value = spanNom.innerHTML;
        groupe.value = spanGroupe.innerHTML;
        Bio.value = spanBio.innerHTML;
        telephone.value = spanTelephone.innerHTML;
        fileUrl.value = fileUrl.innerHTML;
    })
}
