// exo 1
let parIsInt = document.getElementById("is-integer");

let valeur = parseFloat(parIsInt.innerHTML);

if(Number.isInteger(valeur)){
    parIsInt.innerHTML = valeur + " est un nombre entier";
    console.log(parIsInt);
}
else {
    parIsInt.innerHTML = valeur + " n'est pas un nombre entier";
    console.log(parIsInt);
}

// exo 2

