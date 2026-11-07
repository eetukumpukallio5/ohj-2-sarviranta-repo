//Kirjoita ohjelma, joka kysyy käyttäjältä lukuja. 
//Kun käyttäjä syöttää luvun, jonka hän on jo aiemmin syöttänyt, ohjelma ilmoittaa, 
//että luku on jo annettu, lopettaa toimintansa 
//ja tulostaa kaikki annetut luvut konsoliin nousevassa järjestyksessä. (2p)

'use strict';

const luvut = [];

while (true) {
    let lukuStr = prompt('Anna seuraava luku.');
    let luku = parseInt(lukuStr);
    if (luvut.includes(luku)) {
        console.log('Luku on jo annettu. Lopetetaan ohjelma.');
        break;
    }
    luvut.push(luku);
}

luvut.sort((a, b) => a - b);

console.log(luvut);