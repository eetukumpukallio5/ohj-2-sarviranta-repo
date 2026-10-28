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
const heitot = parseInt(heitotStr);

let summa;

