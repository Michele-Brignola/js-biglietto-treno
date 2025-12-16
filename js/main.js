const chilometriDaPercorrere = prompt("Quanti chilometri vuoi percorrere?");
const etaUtente = prompt("Quanti anni hai?");

let costo = 0.21 * chilometriDaPercorrere;

if (etaUtente < 18) {
  costo = costo * 0.8;
} else if (etaUtente >= 65) {
  costo = costo * 0.6;
}

console.log(costo.toFixed(2));