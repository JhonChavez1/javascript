
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
let edadPersona = 17;
if(edadPersona >= EDAD_ADULTO){
    console.log(`La persona con edad ${edadPersona} es una adulto`);
}
else{
    console.log(`La persona con edad ${edadPersona} es menor de edad`);
}

// Día de la semana
let diaSemana = 5;

if(diaSemana == 1){
    console.log(`Lunes`);
}
else if(diaSemana == 2){
    console.log('Martes');
}
else if(diaSemana == 3){
    console.log('Miercoles');
}
else if(diaSemana == 4){
    console.log('Jueves');
}
else if(diaSemana == 5){
    console.log('Viernes');
}
else if(diaSemana == 6){
    console.log('Sábado');
}
else if(diaSemana == 7){
    console.log(Domingo);
}
else{
    console.log('Número erroneo')
}


// Dia de la seman utilizando la sentencia switch
// Sino se encuentra la sentencias break, continua con el siguiente caso, imprimiendo el caso anterior
let diaSemana2 = 1;

switch(diaSemana2){
    case 1:
    console.log('Lunes');
    break;
    case 2:
    console.log('Martes');
    break;
    case 3:
    console.log('Miercoles');
    break;
    case 4:
    console.log('Jueves');
    break;
    break;
    console.log('Viernes');
    break;
    case 6:
    console.log('Sábado');
    break;
    case 7:
    console.log('Domingo');
    break;
    default:
        console.log(`Día de la semana erroneo ${diaSemana2}`);
        break;
}
