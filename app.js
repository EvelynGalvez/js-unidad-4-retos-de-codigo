/* 1) Escriba una función 'computeAverageLengthOfWords' que recibe dos strings y devuelve
el promedio de la longitud de ambos strings.*/

const computeAverageLengthOfWords = (st1, st2) => (st1.length + st2.length) / 2; 
// console.log(computeAverageLengthOfWords('', '')); // en () de console.log va la función y en () de la función van los parámetros  


/* 6) Escriba una función llamada "filterOddElements".
Dado un array de números,"filterOddElements" devuelve un array que contiene sólo los números impares del array dado.
Ejemplo:
var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5] */

const arr = [1, 2, 3, 4, 5];
const filterOddElements = arr.filter((impar) => {
  return impar % 2 !== 0;
})


/* 3) Escribe una función llamada areValidCredentials.
Dando un nombre y una contraseña, areValidCredentials, devuelve true si el nombre es superior a 3 caracteres, Y, la contraseña tiene al menos 8 caracteres de longitud. De lo contrario, devuelve false. */

const areValidCredentials = (name, password) => {
  if (name.length > 3 && password.length >= 8) {
    return true;
  } else {
    return false;
  }
}


/* 11) Escriba una función llamada computeSumOfAllElements.
Dado un array de números, computeSumOfAllElements devuelve la suma de todos los elementos del array dado. */

let arr = [1, 2, 3, 4, 5];
const computeSumOfAllElements = (arr) => {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma = suma + arr[i];
  }
  return suma;
}


/* 2) Escriba una función llamada getNthElement.
Dado un arreglo y un entero, getNthElement devuelve el valor según el entero dado, dentro del arreglo dado.
Notas:
Si el arreglo tiene una longitud de 0, debería devolver' undefined'.*/

let array = [1, 2, 4];
let n = 2;   
const getNthElement = (array, n) => {
  if (array.length == []) {
    return undefined
  } else {
    return array[n];
  }
} 


const convertDoubleSpaceToSingle = (str) => {
  // your code here
 return str.split('  ').join(' ');
}


/*Dada una lista de números enteros no negativos y una suma objetivo, encuentre un par de números que sumen a la suma objetivo.*/
let array = [0, 8, 1, 7, 19, 12, 4];
let number = 1;
const findPairForSum = (array, number) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] + array[j] === number) {
        let newArray = [array[i], array[j]];
        return newArray;
      }
    }
  }
}

















