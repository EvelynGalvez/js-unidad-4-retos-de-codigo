/* 1) Escriba una función 'computeAverageLengthOfWords' que recibe dos strings y devuelve
el promedio de la longitud de ambos strings.*/

const computeAverageLengthOfWords = (st1, st2) => (st1.length + st2.length) / 2; 
// console.log(computeAverageLengthOfWords('', '')); // en () de console.log va la función y en () de la función van los parámetros  


/* 6) Escriba una función llamada "filterOddElements".
Dado un array de números,"filterOddElements" devuelve un array que contiene sólo los números impares del array dado.
Ejemplo:
var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5] */

const filterOddElements = [1, 2, 3, 4, 5];
const numImp = filterOddElements.filter(impar => impar % 2 !== 0);


/* 3) Escribe una función llamada areValidCredentials.
Dando un nombre y una contraseña, areValidCredentials, devuelve true si el nombre es superior a 3 caracteres, Y, la contraseña tiene al menos 8 caracteres de longitud. De lo contrario, devuelve false. */

const areValidCredentials = (name, password) => {
  if (name.length > 3 && password.length >= 8) {
    return true;
  } else {
    return false;
  }
}









