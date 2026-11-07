//Kirjoita ohjelma, joka kysyy käyttäjältä lukuja, kunnes käyttäjä syöttää nollan. 
//Ohjelma tulostaa annetut luvut konsoliin suurimmasta pienimpään. (2p)

'use strict';

const luvut = [];

let lukuStr = prompt('Anna seuraava luku.');
let luku = parseInt(lukuStr);

while (luku != 0) {
    luvut.push(luku);
    lukuStr = prompt('Anna seuraava luku.');
    luku = parseInt(lukuStr);
}

luvut.sort((a, b) => a - b);
luvut.reverse();

console.log(luvut);