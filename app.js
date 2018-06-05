/* 1) Escriba una función 'computeAverageLengthOfWords' que recibe dos strings y devuelve
el promedio de la longitud de ambos strings.*/

const computeAverageLengthOfWords = (st1, st2) => (st1.length + st2.length) / 2; 
// console.log(computeAverageLengthOfWords('', '')); // en () de console.log va la función y en () de la función van los parámetros  


/* 2) Escriba una función llamada "filterOddElements".

Dado un array de números,"filterOddElements" devuelve un array que contiene sólo los números impares del array dado.

Ejemplo:

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5] */

const filterOddElements = [1, 2, 3, 4, 5];
const numImp = filterOddElements.filter(impar => impar % 2 !== 0);

/* 





