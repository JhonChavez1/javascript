/* Tipos de datos
Number: 10, -6, 3.9, -15.66, ect
String: "hola", 'hola'
Bolean:
Null: ausencia de la referencia hacia un objeto ej. null
Undefined: ausencia de valor ej. undefined
*/
// javascript es de tipado dinámico
// Javascript engloba todos los tipos númericos en uno solo
let miEntero = 10;
let miFlotante = 7.5;
let miCadena = 'hola';
let miBoolean = true;
let miBoolean2 = false;
let miNull = null;
let miUndefined = undefined;


console.log(miEntero);
console.log(miFlotante);
console.log(miCadena);
console.log(miBoolean);
console.log(miBoolean2);
console.log(miNull);
console.log(miUndefined);

// operador typeof: es para saber el tipo de variable que queremos conocer
console.log(typeof miEntero);
console.log(typeof miCadena);
console.log(typeof miBoolean);
console.log(typeof miNull);
console.log(typeof miUndefined);

/* hoisting de javascript: Puedes usar ciertas variables o funciones antes de declararlas en tu código, porque JavaScript las “eleva” internamente.
- define la variable, luego se le da el valor 
- podemos usar una variable y luego declararla*/

var x;
x = 10;
console.log(x);

y = 5;
let y;

// el hoisting solo funciona con var, si utilizamos let ya no podremos utilizar las variables antes de ser inicializada

'use strict'

