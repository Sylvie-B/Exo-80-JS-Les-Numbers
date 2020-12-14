// // exo 1
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
let parIsNan = document.getElementById("is-nan");
let ref = parseInt(parIsNan.innerHTML);
console.log(ref);

if (isNaN(ref)) {
    parIsNan.innerHTML = parIsNan.innerHTML + " est NaN";
}
else {
    parIsNan.innerHTML = parIsNan.innerHTML + " est un nombre";
}

// exo 3