const number = 364;
let sum = 0;

// Convertimos el número a string para poder recorrerlo
const numberString = number.toString();

for (let i = 0; i < numberString.length; i++) {
    // Convertimos el carácter actual de vuelta a número y lo sumamos
    sum += Number(numberString[i]);
}

console.log(`La suma de los dígitos del número ${number} es ${sum}`);

