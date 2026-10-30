"use strict";

const names = [];

for (let i = 0; i < 5; i++) {
    let newName = prompt("Anna uusi nimi listaan.");
    names.push(newName);
}

console.log(names);

document.querySelector("#muokkaamaton").textContent = names;

document.querySelector("#viimeinenalk").textContent = names[4];

names.sort();

document.querySelector("#ensinsort").textContent = names[0];

names.shift();

document.querySelector("#muokattu").textContent = names;