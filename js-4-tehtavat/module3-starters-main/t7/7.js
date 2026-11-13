//Avaa kansio t7 kehitysympäristössäsi tai editorissasi. 
//Tee JavaScriptillä hover-efekti eli muutos, joka tapahtuu, kun hiiri viedään elementin päälle. (2p)
//Kun käyttäjä vie hiiren <p id="trigger">-elementin päälle, vaihda <img id="target">-elementin kuva picA.jpg:stä picB.jpg:hen.
//Kun käyttäjä vie hiiren pois elementin päältä, vaihda kuva takaisin alkuperäiseksi.

const trigger = document.querySelector('#trigger');
const target = document.querySelector('#target');

trigger.addEventListener('mouseenter', function(evt) {
    target.src = 'img/picB.jpg';
});

trigger.addEventListener('mouseleave', function(evt) {
    target.src = 'img/picA.jpg';
});