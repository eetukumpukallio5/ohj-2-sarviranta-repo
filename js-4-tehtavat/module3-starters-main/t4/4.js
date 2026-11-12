//Avaa kansio t4 kehitysympäristössäsi tai editorissasi. 
//Lisää HTML-koodia metodien createElement() ja appendChild() avulla. (2p)
//Lisää seuraava HTML-koodi elementtiin, jolla on id="target". 
//Lisää students-taulukon arvot <option>-elementteihin for-silmukassa.
// <option value="2345768">John</option>
// <option value="2134657">Paul</option>
// <option value="5423679">Jones</option>
//Näet koko lopputuloksen selaimen kehittäjätyökalujen (developer tools) elementtitarkastimesta: 
//napsauta sivua hiiren oikealla painikkeella ja valitse Tarkista (Inspect).



'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const target = document.querySelector('#target');

for (const student of students) {
  let option = document.createElement('option');
  option.textContent = `${student.name}`;
  option.value = `${student.id}`;
  target.appendChild(option);
}