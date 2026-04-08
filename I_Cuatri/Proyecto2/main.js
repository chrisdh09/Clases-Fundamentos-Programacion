// Para un supermercado con 1 cajero, codifique un programa 
// que calcule cuánto tiempo le va a tomar a este cajero atender 
// una fila de x cantidad de compradores 

// Input es un número entre 0 y 90
const cantidadDeClientes = 1;

let totalDeSegundos = 0;

for (let index = 1; index <= cantidadDeClientes; index++) {
    let segundosDelCliente = 0;

    // reglas para los impares y pares
    if (index % 2 === 0) {
        // pares seria 45 segundos
        segundosDelCliente += (index * 60) + 45;
    } else {
        // impar seria 20 segundos
        segundosDelCliente += 20;
    }

    // Extras
    if (index % 10 === 0) {
        segundosDelCliente += (18 * 60) + 11;
    } else if (index % 5 === 0) {
        segundosDelCliente += 37 * 60;
    }

    totalDeSegundos += segundosDelCliente;
}

//Ya aqui tenemos el total de segundos que le va a tomar al cajero atender a los clientes, ahora vamos a convertirlo a horas, minutos y segundos para una mejor lectura.

let horas = Math.floor(totalDeSegundos / 3600); //aqui math.floor lo que hace es redondea hacia abajo al entero mas cercano
let minutos = Math.floor((totalDeSegundos % 3600) / 60); // aqui hago la misma operacion que en horas pero al resultado final lo divido entre 60 para obtener los minutos
let segundos = totalDeSegundos % 60;

// Este es el output 
let resultado = "A el cajero le va a tomar ";

// usamos arrays o listas para almacenar los valores y los nombres
let valores = [horas, minutos, segundos];
let nombres = ["hora", "minuto", "segundo"];
let partes = []; //esta esta en blanco por que aqui almacenamos todo


for (let index = 0; index < valores.length; index++) { //recorremos 
    let valor = valores[index];

    if (valor > 0) {
        let texto = valor + " " + nombres[index];

        if (valor > 1) { // aqui si valor es mayor a 1, le agregamos una "s" al final del texto
            texto += "s";
        }

        partes.push(texto);
    }
}

// armamos el resultado final
if (partes.length === 0) {
    resultado += "0 segundos";
} else if (partes.length === 1) {
    resultado += partes[0];
} else if (partes.length === 2) {
    resultado += partes[0] + " y " + partes[1];
} else {
    resultado += partes[0] + ", " + partes[1] + " y " + partes[2];
}

console.log(resultado);