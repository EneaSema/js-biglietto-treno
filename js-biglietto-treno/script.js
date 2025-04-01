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
const pricetotkm = pricekm * responseDistance;
console.log(pricetotkm.toFixed(2));

let discountprice;

// SVOLGIMENTO

if (responseAge < 18) {
  console.log("Passaggero minorenne");
  discountprice =
    pricekm * responseDistance - (pricekm * responseDistance * 20) / 100;
  console.log("Il costo del biglietto è ", discountprice.toFixed(2));
} else if (responseAge > 65) {
  console.log("Passaggero over65");
  discountprice =
    pricekm * responseDistance - (pricekm * responseDistance * 40) / 100;
  console.log("Il costo del biglietto è ", discountprice.toFixed(2));
}

// OUTPUT
