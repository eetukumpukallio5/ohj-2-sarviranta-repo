//Avaa kansio t2 kehitysympäristössäsi tai editorissasi. 
//Lisää HTML-koodia metodien createElement() ja appendChild() avulla. (2p)

//Lisää seuraava HTML-koodi elementtiin, jolla on id="target":
// <li>First item</li>
// <li>Second item</li>
// <li>Third item</li>
//Lisää luettelon toiselle <li>-elementille luokka my-item.

const li1 = document.createElement('li');
li1.textContent = 'First item';

const li2 = document.createElement('li');
li2.textContent = 'Second item';

const li3 = document.createElement('li');
li3.textContent = 'Third item';



target = document.querySelector('#target');
target.appendChild(li1);
target.appendChild(li2);
target.appendChild(li3);

li2.classList.add('my-item');