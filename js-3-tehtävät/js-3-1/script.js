//Kirjoita ohjelma, joka kysyy käyttäjältä viisi lukua ja tulostaa ne päinvastaisessa järjestyksessä kuin käyttäjä ne syötti (ei siis suuruusjärjestyksessä). 
//Tulosta tulos konsoliin. (2p)

//Tallenna luvut taulukkoon ja käy taulukko sitten for-silmukalla läpi lopusta alkuun.

//Älä käytä metodia array.reverse().

"use strict";

const numerot = [];
const lajiteltu = [];

for (let i = 0; i < 5; i++) {
    const numStr = prompt("Anna laskettava numero.");
    const num = parseInt(numStr);
    numerot.push(num);
}

for (let i = 0; i < 5; i++) {
    const lajiteltava = numerot.pop();
    lajiteltu.push(lajiteltava);
}

document.querySelector("#target").textContent = lajiteltu;