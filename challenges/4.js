/*
Corrige los pares faltantes en el código.
*/

let myArray = [1, 2, 3];
let arraySum = myArray.reduce(function (previous, current, index, array) { return previous + current});
console.log(`Sum of array values is: ${arraySum}`);