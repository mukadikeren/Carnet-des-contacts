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



function validateEmail(email) {
    let input = document.getElementById("input")
let buton = document.getElementsByClassName("buton");
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
  }

// }
$("#validate").on("click", validate);
