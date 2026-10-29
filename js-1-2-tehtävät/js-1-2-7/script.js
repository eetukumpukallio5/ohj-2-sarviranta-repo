//Kirjoita ohjelma, joka heittää noppaa käyttäjän antaman määrän kertoja ja näyttää heittojen silmälukujen summan. (2p)

//Ensin ohjelma kysyy käyttäjältä, montako kertaa noppaa heitetään.

//Sitten ohjelma heittää noppaa niin monta kertaa kuin käyttäjä antoi.

//Tulosta silmälukujen summa konsoliin tai HTML-dokumenttiin.

"use strict";

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

const heitotStr = prompt("Monta heittoa tehdään?");
let heitot = parseInt(heitotStr);

let summa = 0;

for (heitot; heitot > 0; heitot--) {
  summa += getRandomInt(1, 7);
}

document.querySelector("#target").textContent = "Heittojen summa on" + summa;