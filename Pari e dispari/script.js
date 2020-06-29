// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// L'utente sceglie pari o dispari con prompt
var pariDispari = prompt("Pari o dispari?");

// Utente inserisce un numero da 1 a 5
var numUtente = parseInt(prompt("Dammi un numero da 1 a 5"));
console.log(numUtente);

var numComputer = numeroCasualeComputer(1, 5);
 console.log(numComputer);

 var somma = somma(numUtente, numComputer);

if (somma == true) {
   console.log("hai vinto");
 } else {console.log("hai perso");
}







// Funzioni
function somma(n1, n2){
  var somma = n1+n2;

  if(somma%2 == 0 && pariDispari == "pari") {
   return true;
 } else if (!(somma%2 == 0) && pariDispari == "dispari") {
   return true;
 } else {
   return false;
 }
}

function numeroCasualeComputer(min, max) {
 min = Math.ceil(min);
 max = Math.floor(max);
 var result = Math.floor(Math.random() * (max - min + 1)) + min;
 return result;
 }
