//Avaa kansio t1 kehitysympäristössäsi tai editorissasi. Lisää HTML-koodia innerHTML-ominaisuuden (property) avulla. (2p)
//Lisää seuraava HTML-koodi elementtiin, jolla on id="target":
// <li>First item</li>
// <li>Second item</li>
// <li>Third item</li>
//Lisää samalle elementille luokka my-list.

'use strict';

const target = document.querySelector('#target');
const html = `<li>First item</li><li>Second item</li><li>Third item</li>`;
target.innerHTML = html;
target.classList.add('my-list');