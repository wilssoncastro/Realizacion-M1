'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let arregloBinario = num.split('').reverse();
  let resultado = 0;
   for( let i = 0 ; i < arregloBinario.length; i++){
    resultado += Math.pow(2, i) * arregloBinario[i];
}
return resultado;
}

function DecimalABinario(num) {
  let resultado = "";
  
  while (num > 0){
    resultado = (num % 2) + resultado;
    num = Math.floor(num / 2);
  }
  return resultado; 
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}