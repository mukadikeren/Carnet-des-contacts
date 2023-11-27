

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
