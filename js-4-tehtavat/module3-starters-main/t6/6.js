//Avaa kansio t6 kehitysympäristössäsi tai editorissasi. 
//Tee skripti, joka avaa ilmoitusikkunan tekstillä ”Button Clicked”, kun <button>-elementtiä napsautetaan. (1p)

'use strict';

const button = document.querySelector('button');

button.addEventListener('click', function(evt) {
    alert('Button Clicked');
});