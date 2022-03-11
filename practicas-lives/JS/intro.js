console.log("\n********* Variables *********\n")
var numero1 = 4;
var numlet = "4";
var numero2 = 6;
console.log("Número 1:" + numero1 + "Número 2:" + numero2);

console.log(numero1);

console.log("\n********* Cadenas *********\n");
var frase1 = "Ejemplo Comillas Dobles";
var frase2 = 'Ejemplo "Comillas" simples';
var frase3 = `Ejemplo Comillas ${frase1} Invertidas`; //formatos para incluir variables

console.log(frase1 + "\n" + frase2 + "\n" + frase3)

console.log("\n********* Condicionales *********\n")

console.log(numero1 > numero2); 

console.log(numero1 === numlet); // = : valor, == : valor,contexto, ===: valor, contexto, tipo

console.log("\n********* Operador lógico AND *********\n");
console.log(true && false);

console.log("\n********* Operador lógico OR *********\n");
console.log(true || false);

//let: solo para bloque de codigo, var: para fuera y dentro del codigo (global), const= nunca cambia (constante)
console.log("\n********* Arreglos *********\n");
let listaDeNumeros = [2,3,5,7,11,234]; 
console.log(listaDeNumeros[0]);
console.log(listaDeNumeros[3]);
console.log(listaDeNumeros[5]);

listaDeNumeros.push(16);
listaDeNumeros.push(929);

console.log(listaDeNumeros);
console.log(listaDeNumeros.length);

let listaDePalabras = ["Explorer","MisionComander","LaunchX","Innovaccion"];
console.log(listaDePalabras);
console.log(listaDePalabras.length);

let palabra = "Explorer";
console.log(palabra[2]);
console.log(palabra.length);

console.log("\n********* Objetos *********\n"); //funcionan como structs de C

//objeto json
let explorer = {
    nombre : "Nombre del Explorer",
    email: "email@innovaccion.mx",
    numReg: 12345,
    mision: "FrontEnd",
    proyectos: ["Abogabot", "Pasteleria", "Taqueria", "Vacunación"],
    proPer: {
        escolar: "Tareas",
        profesional: "Trabajo",
        personal: "Negocio"
    }
}

console.log(explorer);
console.log(explorer.proPer);

/*Flujo condicional*/
let number1 = 4;
let number2 = 2;
console.log("\n********* if/else *********\n");
if(number1 > number2 && number2 > 5){
    console.log("El número 1 es mayor que número 2");
}else if(number1 == number2 || number1 < 3){
    console.log("Los números son iguales");
}else{
    console.log("El número 2 es mayor que número 2");
}

console.log("\n********* while *********\n");
let numberWhile = 0;
while(numberWhile <= 12){
    console.log(numberWhile);
    numberWhile = numberWhile+2;
}
console.log("Aquí ya salió del while " + numberWhile);

console.log("\n********* Do while *********\n");
let numeroDoWhile = 10;
do{
    numeroDoWhile = numeroDoWhile+2;
    console.log(numeroDoWhile);
}while(numeroDoWhile < 20);
console.log("Aquí ya salió del do while " + numeroDoWhile);

console.log("\n********* For *********\n");
let numeroFor;
for(numeroFor=0;numeroFor<=12;numeroFor=numeroFor+1){
    console.log(numeroFor);
}
console.log("Aquí ya salió del for " + numeroFor);

console.log("\n********* Switch *********\n");
switch (prompt("¿Cómo esta el clima?")){
    case "lluvioso":
        console.log("No te vayas a mojar");
    break;

    case "soleado":
        console.log("Ponte bloqueador");
    break;

    case "nublado":
        console.log("Tapate bien");
    break;

    default:
        console.log("No se como está el clima");
    break;
}
console.log("Aquí ya salimos del switch ");