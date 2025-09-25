// Arreglos
let numerosArreglo = [];

// Modificar los valores
// Defínimos el índice y luego asignamos el valor
numerosArreglo[0] = 13;
numerosArreglo[1] = 21;
numerosArreglo[4] = 'hola';

console.log(`Elemento 1 [0]: ${numerosArreglo[0]}`);
console.log(`Elemento 3 [2]: ${numerosArreglo[2]}`);
console.log(`Elemento 4 [4]: ${numerosArreglo[4]}`);

console.log(numerosArreglo);


// Inicializar los valores de un arreglo

let numerosArreglos = [13, 21, 0, 0, 62];

console.log(`Elemento 1 [0]: ${numerosArreglos[0]}`);
console.log(`Elemento 3 [2]: ${numerosArreglos[2]}`);
console.log(`Elemento 5 [4]: ${numerosArreglos[4]}`);

console.log(numerosArreglos);


// Leer los valores con un iterador
let numerosArreglo1 = [13, 21, 0, 0, 62];
for(let i = 0; i < numerosArreglo1.length; i ++){
console.log(numerosArreglo1[i]);
// imprimiendo con el string interpolation
console.log(`Arreglo[${i}] = ${numerosArreglo1[1]}`)
}
console.log(numerosArreglo1)
