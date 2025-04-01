// RACCOLTA DATI

// chiedere età al cliente, il numero dei km, costo fisso 0.21*numero km, in base ad età fare sconto

// creato richiesta età al cliente e relativa conversione in numero e stampa
const requestAgeUser = prompt("Quanti anni hai?");
const responseAge = parseInt(requestAgeUser);
console.log(responseAge);

// creato richiesta età al cliente e relativa conversione in numero e stampa
const requestDistanceUser = prompt("Quanti km devi fare?");
const responseDistance = parseInt(requestDistanceUser);
console.log(responseDistance);

// creato costante fissa per costo al Km
const pricekm = 0.21;

// calcolo costo al Km
const pricetotkm = pricekm * responseDistance;
console.log(pricetotkm.toFixed(2));

// presenza biglietto
const ticket = true;
const student = true;

let discountprice;

// SVOLGIMENTO

if (responseAge < 10) {
  alert("Passaggero età non consentita per viaggiare da solo");
}
if (
  responseAge > 10 &&
  (responseAge >= 14 || responseAge <= 25) &&
  ticket == true &&
  student == true
) {
  console.log("Utente studente con biglietto che può viaggiare");
  discountprice = pricetotkm - (pricetotkm * 35) / 100;
  console.log("il prezzo biglietto per studente è:", discountprice);
}

// OUTPUT
