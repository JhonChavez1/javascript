// Declaración de una matriz
let matriz = [[], []];

// Modificar los valores
// Renglon 0
matriz[0][0] = 100;
matriz[0][1] = 200;
matriz[0][2] = 300;

// Renglon 1
matriz[1][0] = 400;
matriz[1][1] = 500;
matriz[1][2] = 600;

// Leer los valores
console.log(`Elemento [0][1] = ${matriz[0][1]}`);
console.log(`Elemento [1][2] = ${matriz[1][2]}`);
console.log(matriz);

// Sintaxís simplificadas de una matriz - inicializar los valores de la matriz
let matriz1 = [[100, 200, 300], [400, 500, 600]];
console.log(`Elemento [0][1] = ${matriz1[0][1]}`);
console.log(`Elemento [1][2] = ${matriz[1][2]}`);
console.log(matriz1);


// Iterar un matriz
// Debemos usar dos ciclos anidados
let matriz2 = [[100, 200, 300], [400, 500, 600, 700, 800]];
// Cantidad de renglones 
console.log(matriz2.length);
// Número de columnas (depende de el renglón seleccionado)
console.log(matriz2[0].length);
console.log(matriz2[1].length);

// este ciclo for recorre los renglones
for(let renglon = 0; renglon < matriz2.length; renglon ++){
    // este ciclo recorre las columnas
    for(let columna = 0; columna <matriz2[renglon].length; columna ++){
        console.log(`Elemento[${renglon}][${columna}] = ${matriz2[renglon][columna]}`);
    }
}
console.log(matriz2);
