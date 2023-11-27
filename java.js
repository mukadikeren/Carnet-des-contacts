let boutoncreer = document.querySelector("#boutoncreer");
let boutonreinit =document.querySelector("#boutonreinit");

boutoncreer.addEventListener("click", function () {
    let input = document.querySelector("#Prenominput")
    console.log(input.value);
    let premierecase = document.querySelector("#premierecase")
    let h4 = document.createElement("h4")
    h4.innerHTML= input.value
    premierecase.appendChild(h4)

    // let photo1 = document.getElementsByClassName("photo1")
    // titre2.innerthtml = titre2.innerthtml + "" + input.value
    // input.push(newtext)
    // input.pop
})

// mettre le bordur en rouge une fois qu'ont sort de l'input du telephone
let telephone = document.getElementById("telephone");

telephone.addEventListener("blur", (event) => {
    event.target.style.border = "red solid 2px";
});

let email = document.getElementById("email");

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
    }else if (telephone.value.length < 10 || telephone.value.length > 10 ) {
        telephone.style.borderColor = 'red';
        telephoneError.textContent = 'Veuillez renseigner un numero de telephone valide avec 10 chiffre.';
    }else {
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

let emailInput = document.getElementById('email');
let errorMessage = document.getElementById('error');

emailInput.addEventListener('blur', function() {
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

let nom = document.getElementById('nom');
let nomError = document.getElementById('nomError');

nom.addEventListener('blur', function () {
    if (nom.value.length < 3) {
        nom.style.borderColor = 'red';
        nomError.textContent = 'Veuillez renseigner un nom avec plus de 3 caractères.';
    } else if (nom.value.length > 50 ) {
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
let prenom = document.getElementById('prenom');
let prenomError = document.getElementById('prenomError');

prenom.addEventListener('blur', function () {
    if (prenom.value.length < 3) {
        prenom.style.borderColor = 'red';
        prenomError.textContent = 'Veuillez renseigner un prenom avec plus de 3 caractères.';
    }else if (prenom.value.length > 50 ) {
        prenom.style.borderColor = 'red';
        prenomError.textContent = 'Veuillez renseigner un prenom avec moins de 50 caractères.';
    }
    else {
        prenom.style.borderColor = '';
        prenomError.textContent = '';
    }
});

// Fin Critère d'acceptation du PRENOM

// Deposez la photo

// const boxes = document.querySelectorAll('.box');
let images = document.getElementsByClassName(Deposez-ici);
images.forEach(images => {
   images.addEventListener('dragenter', dragEnter)
   images.addEventListener('dragover', dragOver);
   images.addEventListener('dragleave', dragLeave);
   images.addEventListener('drop', drop);
});
function dragEnter(e) {
   e.target.classList.add('drag-over');
}
function dragOver(e) {
   e.target.classList.add('drag-over');
}
function dragLeave(e) {
   e.target.classList.remove('drag-over');
}
function drop(e) {
   e.target.classList.remove('drag-over');
}
//function called when drag starts
function dragIt(theEvent) {
    //tell the browser what to drag
    theEvent.dataTransfer.setData("Text", theEvent.target.id);
    }
