let a = true;
let b = false;
console.log(a);
console.log(b);

// &&	AND  (Y lógico)		true && false			false
// Regresa verdadero si ambos son verdaderos
console.log(`${a} && ${b} -> ${a && b}`);

// |	OR    (O lógico)		true || false			true
// Regresa verdadero si cualquiera de los dos es verdadero
console.log(`${a} || ${b} -> ${a || b}`);

// !	NOT  (Negación)		!true				false
// invierte el resultado lógico de nuestra expresión
console.log(`${a} ! ${!a}`)



// Ejemplo
// Valores dentro de un rango

// Definir las variables
let minimo = 0; 
let maximo = 5;
// valor para saber si esta dentro de un rango
let dato = 3;
// variable para comprobar si está dentro de un rango
let dentroRango = dato >= minimo && dato <= maximo;
console.log('Valor dentro rango: ', dentroRango);




