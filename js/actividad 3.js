/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */

let edad =20;

if (edad >= 18){
    console.log("si puede votar")
} else {
    console.log("no puede votar")
}

/** Ejercicio 2
 * 
 * Desarrolla un programa que permita obtener el promedio de un/a alumno/a
 * recibiendo como parametro 4 calificaciones
 * 
 * Si el promedio es aprobatorio (mayor o igual a 7) imprimir aprobado
 * en el caso de que no sea un promedio aprobatorio imprimir reporobado
 * 
 * Consideraciones: utilizar la estructura if-else
 * 
 */


let calificacion = (10 + 5 + 8 + 2)/4

if (calificacion >= 7){
    console.log("aprobado :)")
} else {
    console.log("reprobado :(")
}

/** Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es primo
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Consideraciones: utilizar la estructura if-else
 */

let numero = 2

if(numero <= 1){
    
    console.log("No es número primo")

        } else if (numero === 2){
   
    console.log("Es un número primo")
        } else if (numero % 2 === 0){
    
    console.log("No es número primo")
        } else {
       
    console.log("Es un número primo")
    
        }

        /** Ejercicio 4
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Colocar calificaciones de manera que vayan del 0 al 10
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */
    
let valor = 56

if(valor % 7 === 0 && valor % 8 === 0){
console.log("true")
} else {
console.log("false")
}
        
/** Ejercicio 5
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */

let value = 1

if(value % 4 === 0 || value % 9 === 0){
console.log("true")
} else {
console.log("false")
}

/** Ejercicio 6
 * 
 * Crear un programa que funcione como una calculadora simple
 * que realice las operaciones aritmeticas basicas
 * 
 *  -suma
 *  -resta
 *  -multiplicacion
 *  -division
 * 
 * Debe recibir como parametros la operacion a realizar y dos numeros
 * Dependiendo de la opcion que se indique, realizar la operacion correspondiente
 * 
 * 1. suma
 * 2. resta
 * 3. multiplicacion
 * 4. division
 * 
 * Consideraciones: utilizar la estructura switch
 */

function calculadoraSwitch(numero1, operador, numero2 ) {
let resultado;

switch (operador) {
case "+":
resultado = numero1 + numero2;
break;
case "-":
resultado = numero1 - numero2;
break;
case "*":
resultado = numero1 * numero2;
break;
case "/":
resultado = numero1 / numero2;
break;
default:
console.log("Operacion inválida");
break;
}

return resultado;
}

/** Ejercicio 7
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */

function peliculas(categoriaPelicula ) {
    let resultado;
    
    switch (categoriaPelicula) {
    case "acción":
    resultado = "Terminator la saga";
    break;
    case "drama":
    resultado = "No se aceptan devoluciones";
    break;
    case "comedia":
    resultado = "TED";
    break;
    case "romance":
    resultado = "Titanic";
    case "suspenso":
    resultado = "La huerfana";
    break;
    default:
    console.log("No es una categoria de pelicula");
    break;
    }
    
    return resultado;
    }

    /** Ejercicio 8
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 */

    function cajeroDinamico (operacionDeseada){
   
    
        switch(operacionDeseada){
            case "Retirar":
                console.log("Vas a realizar un retiro de efectivo")
            break;
            case "Transferencia":
                console.log("Vas a realizar una transferencia desde tu cuenta")
            break;
            case "Deposito":
                console.log("Vas a realizar un deposito en efectivo")
            break;
            case "Pago":
                console.log("Vas a realizar el pago de algún servicio")
            break;
            default:
                console.log("NO ES UNA OPERACIÓN VALIDAD :(")
                break;
        }
    }

    /** Ejercicio 9
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 */

    function conversorDivisas(pesos, divisaDeseada) {
        let resultado;
        
        switch (divisaDeseada) {
        case "dolares":
        resultado = pesos*0.0585521;
        break;
        case "euros":
        resultado = pesos*.05481;
        break;
        case "*yenesJaponeses":
        resultado = pesos*8.64361;
        break;
        case "libraEsterlina":
        resultado = pesos*.0471618;
        break;
        case "francoSuizo":
        resultado = pesos*.0525454;
        default:
        console.log("Operacion inválida");
        break;
        }
        
        return resultado;
        }

/** Ejercicio 10
 * 
 * Realizar un programa que calcule un descuento del 10% a un producto si se ingresa el codigo
 * de descuento correcto
 * 
 * Debe recibir como parametros el precio del producto
 * y el codigo de descuento
 * 
 * Sugerencia de codigo de descuento DESCUENTO10
 * 
 * Consideracion: utilizar la estructura if-else
 * 
 */

function descuento(precioProducto, DESCUENTO10){

    if (DESCUENTO10 === DESCUENTO10){
        console.log("El precio del producto con descuento es de "+ precioProducto*.90)
    }else {
        console.log("Código ingresado invalido :(")
    }
   }


