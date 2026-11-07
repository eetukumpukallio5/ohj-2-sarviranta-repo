//Kirjoita ohjelma, joka kysyy käyttäjältä osallistujien lukumäärän. Tämän jälkeen ohjelma kysyy kaikkien osallistujien nimet. 
//Lopuksi ohjelma tulostaa osallistujien nimet verkkosivulle numeroituna luettelona (<ol>) aakkosjärjestyksessä. (2p)

'use strict';

const nimet = [];
const ol = document.querySelector('ol');

const lukuStr = prompt('Anna osallistujien lukumäärä.');
const luku = parseInt(lukuStr);

for (let i = 0; i < luku; i++) {
    nimet.push(prompt('Anna nimi.'));
}

nimet.sort();

for (const nimi of nimet) {
    const li = document.createElement('li');
    li.textContent = nimi;

    ol.appendChild(li);
}