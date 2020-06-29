// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//chiedo all'utente di inserire una parola

var parolaUtente = prompt("Scrivi una parola");
var risultato = palindroma(parolaUtente);

if(risultato == true){
  console.log("la parola è palindroma");
} else {
  console.log("la parola non è palindroma");
}




function palindroma(parolaUtente) {

    var lunghezzaParola = parolaUtente.length;
    var mezzaParola = Math.floor(lunghezzaParola/2);

    for ( var i = 0; i < mezzaParola; i++ ) {
        if (parolaUtente[i] !== parolaUtente[lunghezzaParola - 1 - i]) {
            return false;
        }
    }
        return true;
}
