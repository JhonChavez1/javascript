// Imprimir los primeros 10 números de 3 en 3
// Icremento
let maximo = 10, minimo = -10;
console.log('Incrementos de 3 en 3');
for(let numero = 1; numero <= maximo; numero += 3){
    console.log(numero);
}

// Decremento
console.log('Decremento de 3 en 3');
for(let numero = 1; numero >= minimo; numero -= 3)
    console.log(numero)



// Realizar la suma de los primeros 5 números utilizando un ciclo FOR
let nMaximo = 5, acumuladorSuma = 0;
for(let numero = 1; numero <= nMaximo; numero ++){
    // Variable número = contador
    console.log(`${acumuladorSuma} + ${numero}`)
    acumuladorSuma += numero;
    console.log(acumuladorSuma);
}
console.log(acumuladorSuma);



// Realizar la suma de los primeros 5 números utilizando un ciclo WHILE
let numero = 1, aMaximo = 5, acumuladorSuma2 = 0
while(numero <= aMaximo){
    console.log(`${acumuladorSuma2} + ${numero}`);
    acumuladorSuma2 += numero;
    console.log(acumuladorSuma2);
    numero ++;
}
console.log(acumuladorSuma2);

// Realizar la suma de los primeros 5 números utilizando un ciclo DO WHILE
let numero1 = 1, bMaximo = 5, acumuladorSuma3 = 0;
do{
    console.log(`${acumuladorSuma3} + ${numero1}`);
    acumuladorSuma3 += numero1;
    console.log(acumuladorSuma3);
    numero1 ++;
} while(numero1 <= bMaximo);
console.log(acumuladorSuma3);

