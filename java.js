//Récuperation des éléments depuis HTML
let prenom = document.getElementById('prenom');
let prenomError = document.getElementById('prenomError');
let nom = document.getElementById('nom');
let nomError = document.getElementById('nomError');
let telephone = document.getElementById('telephone');
let telephoneError = document.getElementById('telephoneError');
let groupe = document.getElementById('groupe');
let email = document.getElementById('email');
let Bio = document.getElementById('bio');
let photo = document.querySelector('.span1');
let btnCréer = document.getElementById('boutonCréer');
let btnReinit = document.getElementById('boutonReinit');
let fileUrl;

let ul = document.getElementById('ul');
telephone.addEventListener("blur", (event) => {
    event.target.style.border = "red solid 2px";
});

email.addEventListener("blur", (event) => {
    event.target.style.border = "red solid 2px";
});

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


photo.addEventListener("dragover", (e) => {
    e.preventDefault();
})

photo.addEventListener("drop", (event) => {
    event.preventDefault();
    let file = event.dataTransfer.files[0];
    showfile(file);
})

function showfile(file) {
    let filetype = file.type;
    let fileExtension = ['image/jpeg', 'image/png', 'image/jpg'];
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

let tableClients = [];
let clients = { PRENOM: '', NOM: '', TELEPHONE: '', GROUPE: '', EMAIL: '', BIO: '', PHOTO: '' };

btnReinit.addEventListener('click', () => {
    prenom.value = '';
    nom.value = '';
    telephone.value = '';
    email.value = '';
    Bio.value = '';
    groupe.value = '';
    email.textContent = '';
    telephone.textContent = '';
    email.style.borderColor = '';
    telephone.style.borderColor = '';
    nom.style.borderColor = '';
    nomError.textContent = '';
    prenom.style.borderColor = '';
    prenomError.textContent = '';
    telephone.style.borderColor = '';
    telephoneError.textContent = '';
    emailError.textContent = '';
})


btnCréer.addEventListener('click', (e) => {
    if (nom.value === '' || email.value === '' || prenom.value === '' || telephone.value === '' || fileUrl.value === '' || groupe.value === '') {
        alert('Veuillez remplir tous les champs obligatoires.');
        e.preventDefault();
    }
    else {
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

function addTab() {
    tableClients.push({ PRENOM: prenom.value, NOM: nom.value, TELEPHONE: telephone.value, GROUPE: groupe.value, EMAIL: email.value, BIO: Bio.value, PHOTO: fileUrl });
}

function afficherTableau() {
    console.log(tableClients);
    ul.innerHTML = ''
    for (let i = 0; i < tableClients.length; i++) {
        let li = document.createElement('li');
        li.setAttribute('id', 'li_liste');
        let image = document.createElement('img');
        image.setAttribute('src', tableClients[i].PHOTO);
        let divEcrits = document.createElement('div');
        divEcrits.setAttribute('class', 'container_ecrits');
        let divNom_Fontawesome = document.createElement('div');
        divNom_Fontawesome.setAttribute('class', 'containerNom_Fontawesome');
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
        divPrenom_Groupe.appendChild(spanPrenom);
        divPrenom_Groupe.appendChild(spanNom);
        divPrenom_Groupe.appendChild(spanTrait);
        divPrenom_Groupe.appendChild(spanGroupe);
        let divFont_Awesome = document.createElement('div');
        divFont_Awesome = document.createElement('class', 'container_separation');
        let y = document.createElement('i');
        y.className = "fa-regular fa-trash-can"
        y.style.color = "#f60440"
        divFont_Awesome.appendChild(y)
        let x = document.createElement('i');
        x.className = "fa-solid fa-user-pen"
        x.style.color = " #0f1114"
        divFont_Awesome.appendChild(x)
        divNom_Fontawesome.appendChild(divPrenom_Groupe);
        divNom_Fontawesome.appendChild(divFont_Awesome);
        let divTelephone = document.createElement('div');
        divTelephone.setAttribute('class', 'container_telephone');
        let spanTelephone = document.createElement('span');
        spanTelephone.innerHTML = tableClients[i].TELEPHONE;
        divTelephone.appendChild(spanTelephone);
        let divBio = document.createElement('div');
        divBio.setAttribute('class', 'container_lorem');
        let spanBio = document.createElement('span');
        spanBio.setAttribute('class', 'what_lorem');
        spanBio.innerHTML = tableClients[i].BIO;
        divBio.appendChild(spanBio);
        divEcrits.appendChild(divNom_Fontawesome);
        divEcrits.appendChild(divTelephone);
        divEcrits.appendChild(divBio);
        li.appendChild(image);
        li.appendChild(divEcrits);
        ul.appendChild(li);
        n(y, li);
        m(x, i);

    }

}

function n(y, li) {
    y.addEventListener('click', () => {
        ul.removeChild(li);
    })
}

function m(x, i) {
    x.addEventListener('click', () => {
        document.getElementById('prenom').value = tableClients[i].PRENOM;
        document.getElementById('nom').value = tableClients[i].NOM;
        document.getElementById('telephone').value = tableClients[i].TELEPHONE;
        document.getElementById('groupe').value = tableClients[i].GROUPE;
        document.getElementById('email').value = tableClients[i].EMAIL;
        document.getElementById('bio').value = tableClients[i].BIO;
        document.querySelector('.span1').value = tableClients[i].PHOTO;

    })
}



