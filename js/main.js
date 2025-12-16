const chilometriDaPercorrere = parseFloat(prompt(`Quanti chilometri vuoi percorrere?`));
const etaUtente = parseInt(prompt(`Quanti anni hai?`));
const nomeUtente = prompt(`Come ti chiami?`)

if (isNaN(chilometriDaPercorrere) || isNaN(etaUtente) || isNaN(nomeUtente)) {
  console.log(`I valori non sono validi`);
  alert(`I valori non sono validi`);
}
else {
  costoViaggio(chilometriDaPercorrere, etaUtente, nomeUtente);
}

function costoViaggio(disChilometri, eta, nome) {
  let costo = 0.21 * disChilometri;
  
  if (nome.toLowerCase() === `arthur`) {
    costo = 0
  }
  else if (nome.toLowerCase() === `tiziano`) {
    costo = 0.5 * disChilometri;
  }

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