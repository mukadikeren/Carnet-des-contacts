// let tasklist= document.getElementById("tasklist");

// function liste() {
//     // let photo1

//     let liste = document.getElementById("liste");
//     let Prenominput = document.getElementById("Prenom-input");
//     Nominput = document.getElementById("Nom-input");

//     input = document.getElementById("input")
//     buton = document.getElementsByClassName("buton");
//     label.addEventListener = ("click", () => {
//         console.log(input.value);
//         input.value = "++"
//         if (Prenom = lettre) {
//             alert("ok")
//         }

//         else {
//             alert()
//         }
//         return (liste, Prenom, Nom, input, buton);
//     })

//     return (photo1)

let bouton = document.getElementsByClassName("bouton");

bouton.addEventlistener("click", function () {
    let input = document.queryselector(".input")
    input.value

    let photo1 = document.getElementsByClassName("photo1")
    titre2.innerthtml = titre2.innerthtml + "" + input.value
    input.push(newtext)
    input.pop


})

function validateEmail(email) {
    let input = document.getElementById("input")
    let email = document.getElementsByClassName("inputemail");
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
}

// }
$("#validate").on("click", validate);
