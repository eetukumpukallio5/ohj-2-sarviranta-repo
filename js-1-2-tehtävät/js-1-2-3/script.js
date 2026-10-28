//Kirjoita ohjelma, joka kysyy kolme kokonaislukua. Ohjelma tulostaa lukujen summan, tulon ja keskiarvon HTML-dokumenttiin. (3 p)
//Muista muuntaa merkkijonot luvuiksi ennen kuin lasket ne yhteen.

"use strict";

const yksiSyote = prompt("Anna ensimmäinen luku.");
const kaksiSyote = prompt("Anna toinen luku.");
const kolmeSyote = prompt("Anna kolmas luku.");

const yksi = parseInt(yksiSyote);
const kaksi = parseInt(kaksiSyote);
const kolme = parseInt(kolmeSyote);

document.querySelector("#summa").textContent = yksi + kaksi + kolme;
document.querySelector("#tulo").textContent = yksi * kaksi * kolme;
document.querySelector("#keskiarvo").textContent = (yksi + kaksi + kolme) / 3;