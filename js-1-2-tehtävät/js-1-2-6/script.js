//Kirjoita ohjelma, joka näyttää vahvistusikkunassa tekstin ”Lasketaanko neliöjuuri?”.
//Jos käyttäjä valitsee OK, ohjelma kysyy luvun, laskee sen neliöjuuren ja tulostaa neliöjuuren HTML-dokumenttiin.
//Jos käyttäjä valitsee Cancel, ohjelma tulostaa HTML-dokumenttiin tekstin ”Neliöjuurta ei lasketa.” (3p)

//Vahvistusikkunan saat näkyviin funktiolla confirm(). Funktio palauttaa arvon true, jos käyttäjä valitsee OK, ja arvon false, jos käyttäjä valitsee Cancel.

//Negatiivisen luvun neliöjuurta ei voi laskea.
//Jos käyttäjän syöttämä luku on negatiivinen, ohjelma tulostaa HTML-dokumenttiin ”Negatiivisen luvun neliöjuurta ei ole määritelty.”

"use strict";

const valinta = confirm("Lasketaanko neliöjuuri?");

switch (valinta) {
  case true:
    const numStr = prompt("Anna laskettava numero.");
    const num = parseInt(numStr);
    if (num < 0) {
      document.querySelector("#target").textContent =
        "Negatiivisen luvun neliöjuurta ei ole määritelty.";
        break
    } else {
      document.querySelector("#target").textContent = Math.sqrt(num);
      break
    }
  case false:
    document.querySelector("#target").textContent = "Neliöjuurta ei lasketa.";
}
