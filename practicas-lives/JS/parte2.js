const cuadrado = function(x){
    return x*x;
}
let numero = 4;
console.log(cuadrado(numero));

const ruido = function(){
    console.log("kataplum!");
}

ruido();

const exponencial = function(base, exponente){
    let resultado = 1;
    let i
    for(i=0;i<exponente;i++){
        resultado *= base;
    }

    return resultado

}
console.log(exponencial(4,3));

console.log(sumar(5,65));
function sumar(x, y){
    return x+y;
}

//arrow function
const restar = (a,b) =>{
    return a-b;
}
console.log(restar(40, 8));

function saludar(quien){
    console.log("Hola " + quien);
}

saludar("Explorer");
console.log("Bye");

//Exepciones
function preguntaDireccion(pregunta){
    let result = prompt(pregunta);

    if(result.toLowerCase() == "izquierda") return "I";
    if(result.toLowerCase() == "derecha") return "D";

    throw new Error("Dirección invalida: " + result);
}

function mirar(){
    if (preguntaDireccion("A que lado?") == "I"){
        return "una casa";
    }else{
        return "2 osos hambrientos";
    }
}//mirar()

try{
    console.log("Mira a ",mirar());
}catch(error){
    console.log("Hubo un error: " + error);
}