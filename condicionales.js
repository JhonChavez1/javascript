
let miNumero = 0;


if(miNumero > 0){
    console.log(`valor positivo ${miNumero}`);
}
else if(miNumero <0){
    console.log(`Valor negativo ${miNumero}`);
}
else{
    console.log(`Valor cero o negativo ${miNumero}`);
}


// Operador ternario 
let numero = 1;
(numero > 5) ? console.log(`Positivo`) : console.log(`Negativo`);

// Algoritmo mayor de edad
const EDAD_ADULTO = 18;
let edadPersona = 30;
if(edadPersona >= EDAD_ADULTO){
    console.log(`La persona con edad ${edadPersona} es una adulto`)
}