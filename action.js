// L'utente inserisce due parole in sucessione. Il software stampa
// prima la parola più corta e poi quella più lunga

// Mi creo prima delle variabli

var stampa, par1, par2;

stampa = document.getElementById('my');

// Faccio inserire all'utente due parole

par1 = prompt("Inserisci una parola");
par2 = prompt("Inserisci un'altra parola");

// Faccio stampare le due parole

if (par1.length > par2.length) {
  stampa.innerHTML = "La parola più corta è " + par2;
} else if (par1.length == par2.length) {
  stampa.innerHTML = "Le parole hanno la stessa lunghezza";
} else {
  stampa.innerHTML = "La parola più lungha è " + par1;
}
