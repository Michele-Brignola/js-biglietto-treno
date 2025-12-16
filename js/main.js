const chilometriDaPercorrere = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));
const etaUtente = parseInt(prompt("Quanti anni hai?"));

costoViaggio(chilometriDaPercorrere, etaUtente);

function costoViaggio(disChilometri, eta) {
  let costo = 0.21 * disChilometri;
  
  if (eta < 18) {
    costo = costo * 0.8;
  } 
  else if (eta >= 65) {
    costo = costo * 0.6;
  }
  
  const costoFinale = costo.toFixed(2);
  console.log(`Il costo del viaggio è: €${costoFinale}`);
  alert(`Il costo del viaggio è: €${costoFinale}`);
}