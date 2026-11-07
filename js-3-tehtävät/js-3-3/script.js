//Kirjoita ohjelma, joka kysyy kuuden koiran nimet. 
//Ohjelma tulostaa koirien nimet järjestämättömään luetteloon (<ul>) käänteisessä aakkosjärjestyksessä. (2p)

'use strict';

const nimet = [];
const ul = document.querySelector('ul');

for (let i = 0; i < 6; i++) {
    nimet.push(prompt('Anna koiran nimi.'));
}

nimet.sort();
nimet.reverse();

for (const nimi of nimet) {
    const li = document.createElement('li');
    li.textContent = nimi;

    ul.appendChild(li);
}