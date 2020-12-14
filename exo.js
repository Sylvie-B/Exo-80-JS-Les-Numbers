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

parParFloat.innerHTML = paFloat + " % de la population blablabla";

// exo 4
let parInt = document.getElementById("parse-int");

let paInt = parseFloat(parInt.innerHTML);
let newVal = parseInt(paInt / 45);
parInt.innerHTML = newVal + "px";

// exo 5
let toFix = document.getElementById("to-fixed");

let value = parseFloat(toFix.innerHTML);

value = value.toFixed(2);

toFix.innerHTML = value;
