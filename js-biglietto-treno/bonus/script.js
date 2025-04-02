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
let discountprice = pricetotkm;

console.log(discountprice.toFixed(2));

// SVOLGIMENTO

if (responseAge < 18) {
  console.log("Utente minorenne");
  discountprice = pricetotkm - (pricetotkm * 20) / 100;
  console.log("Il prezzo del biglietto è:", discountprice);
} else if (responseAge < 22) {
  console.log("Utente over22");
  discountprice = pricetotkm - (pricetotkm * 30) / 100;
  console.log("Il prezzo del biglietto è:", discountprice);
} else if (responseAge < 35) {
  console.log("Utente over35");
  discountprice = pricetotkm - (pricetotkm * 35) / 100;
  console.log("Il prezzo del biglietto è:", discountprice);
} else if (responseAge < 65) {
  console.log("Utente over65");
  discountprice = pricetotkm - (pricetotkm * 40) / 100;
  console.log("Il prezzo del biglietto è:", discountprice);
} else if (responseAge > 75) {
  console.log("Utente over75");
  discountprice = pricetotkm - (pricetotkm * 50) / 100;
  console.log("Il prezzo del biglietto è:", discountprice);
}

// OUTPUT

/**
 * if > 20
 * if > 40
 * if > 90
 *
 * if VERO
 * else if NON AVVIENE MAI
 * else NON AVVIENE MAI
 *
 *
 * if FALSO
 * else if POTREBBE ACCADERE
 * else DIPENDE DALLA CONDIZIONE PRECEDENTE
 *
 * if VERO
 * else NON AVVIENE MAI
 *
 * if FALSO
 * else AVVIENE SEMPRE
 *
 *
 */
