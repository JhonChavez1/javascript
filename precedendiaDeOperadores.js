// Precedencia Operadores

// 1. Parentesis y Corchetes
// 2. Operadores unarios, como -, ++, --, !
// 3. Aritmeticos *, / y %
// 4. Aritmeticos + y -
// 5. Relacionales <, <=, > y >=
// 6. Igualdad == y !=
// 7. Logicos && y ||
// 8. Asignacion =, +=, -=, *=, etc

// Ejemplo
// se revisa de izquierda a derecha
let a = 12 / 3 + 2 * 3 - 1;
// Paso1. División 12 /3 = 4
// Paso2. Multiplicación 2 * 3 = 6
// Paso3. Suma 4 + 6 = 10
// Paso4. Resta 10 - 1 = 9
console.log(a);