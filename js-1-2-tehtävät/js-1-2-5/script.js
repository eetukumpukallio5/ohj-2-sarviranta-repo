//Kirjoita ohjelma, joka pyytää käyttäjää syöttämään vuosiluvun ja ilmoittaa, onko vuosi karkausvuosi. Vuosi on karkausvuosi, jos se on jaollinen neljällä. 
//Sadalla jaolliset vuodet ovat kuitenkin karkausvuosia vain, jos ne ovat jaollisia myös neljälläsadalla. Tulosta tulos HTML-dokumenttiin. (3 p)

"use strict";

const numbStr = prompt('Anna vuosi.');
const numb = parseInt(numbStr);

if (numb % 4 === 0) {
    if (numb % 100 === 0) {
        if (numb % 400 === 0) {
            document.querySelector("#target").textContent = 'Vuosi on karkausvuosi.';
        }
        else {
            document.querySelector("#target").textContent = 'Vuosi ei ole karkausvuosi.';
        }
    } else {
        document.querySelector("#target").textContent = 'Vuosi on karkausvuosi.';
    }
} else {
    document.querySelector("#target").textContent = 'Vuosi ei ole karkausvuosi.';
}