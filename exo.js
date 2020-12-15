// // exo 1
let parIsInt = document.getElementById("is-integer");

let valeur = parseFloat(parIsInt.innerHTML);

if(Number.isInteger(valeur)){
    parIsInt.innerHTML = valeur + " est un nombre entier";
}
else {
    parIsInt.innerHTML = valeur + " n'est pas un nombre entier";
}

// exo 2
let parIsNan = document.getElementById("is-nan");
let isNan = parseInt(parIsNan.innerHTML);

if (isNaN(isNan)) {
    parIsNan.innerHTML = parIsNan.innerHTML + " est NaN";
}
else {
    parIsNan.innerHTML = parIsNan.innerHTML + " est un nombre";
}

// exo 3
let parParFloat = document.getElementById("parse-float");

let paFloat = Number.parseFloat(parParFloat.innerHTML);

paFloat = paFloat * 45;

parParFloat.innerHTML = paFloat + " " + parParFloat.innerHTML.substr(7);

// exo 4
let parInt = document.getElementById("parse-int");

let paInt = parseFloat(parInt.innerHTML);
let newVal = parseInt(paInt / 45);
parInt.innerHTML = newVal + " " + parInt.innerHTML.substr(2);

// exo 5
let toFix = document.getElementById("to-fixed");

toFix.innerHTML = parseFloat(toFix.innerHTML).toFixed(2);
