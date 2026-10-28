//Harry Potter -lastenkirjoissa lajitteluhattu sijoittaa Tylypahkan noitien ja velhojen koulun uuden oppilaan yhteen neljästä tuvasta,
//jotka ovat Rohkelikko, Luihuinen, Puuskupuh ja Korpinkynsi. Kirjoita sähköinen lajitteluhattu, joka kysyy oppilaan nimeä ja arpoo oppilaalle tuvan.
//Jos annat nimeksi esimerkiksi Anna, ohjelma tulostaa HTML-dokumenttiin ”Anna, sinä olet Korpinkynsi.” (3 p)
//Käytä metodia Math.random() arvon (1, 2, 3 tai 4) arpomiseen.
//Kun luku on arvottu, tarvitset valintarakenteen, jossa on useita vaihtoehtoja (if, else if, …, else tai switch).

"use strict";
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
} //koodi mozillan docseista, mutta ymmärrän koodin toiminnan itse

const nimi = prompt("Anna nimesi, ja lajittelen sinut tupaan...");

const tupaInt = getRandomInt(1, 5);

const tupa = tupaInt.toString();

console.log(tupa);

switch (tupa) {
  case "1":
    document.querySelector("#target").textContent =
      nimi + ', olet... Rohkelikko!';
      break
  case "2":
    document.querySelector("#target").textContent =
      nimi + ', olet... Luihuinen!';
      break
  case "3":
    document.querySelector("#target").textContent =
      nimi + ', olet... Puuskupuh!';
      break
  case "4":
    document.querySelector("#target").textContent =
      nimi + ', olet... Korpinkynsi!';
}
