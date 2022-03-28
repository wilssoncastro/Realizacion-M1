'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  // lo primero es asignar hacer un arreglo con num, esto lo haremos con split
  //despues con reverse voltearemos el codigo de atras a adelante
  let arregloBinario = num.split('').reverse();
  // creamos una variable resultado y la igualamos a 0
    let resultado = 0;
    // iteramos por el arreglo 
   for( let i = 0 ; i < arregloBinario.length; i++){
     // lo que va a hacer es por cada indice recorrido elebara a el exponente de la posicion del arreglo y despues lo multiplicara 
     // por el valor de ese indice
     // este resultado lo sumara a la variable resultado y asi cada vez
    resultado += Math.pow(2, i) * arregloBinario[i];
}
// retornamos resultado para mostrar el valor 
return resultado;
}

function DecimalABinario(num) {
  // creamos una variable y la inicializamos con una cadena sin nada
  let resultado = "";
  // ejecutamos el ciclo while mientras num sea mayor que cero ejecutara el codigo
    while (num > 0){
  // a la variable resultado le iremos concatenando e resto de derecha a izquierda
    resultado = (num % 2) + resultado;
  // la variable num ira cambiando cada vea que se divida en 2, y se utiliza floor para redondear hacia abajo
    num = Math.floor(num / 2);
  }
  //Se devuelve el string resultado
  return resultado; 
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}