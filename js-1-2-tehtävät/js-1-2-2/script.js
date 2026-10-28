//Kirjoita ohjelma, joka kysyy käyttäjän nimeä ja tervehtii sitten käyttäjää. Tulosta tervehdys HTML-dokumenttiin: Hei, Nimi! (2 p)

"use strict";
const nimi = prompt("Anna nimesi.");
document.querySelector("#target").textContent = "Hei, " + nimi;