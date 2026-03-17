//Ejercicio #1

/*Escriba un programa que compute si un número está dentro del rango de 10 - 20 o dentro del rango de 40 - 60
El programa debe calcular un booleano y loggear el resultado.*/

let number = 21;

let result = (number>=10&&number<=20)||(number>=40&&number<=60);

console.log("El cálculo de rangos para el número",number,"es:",result);

//Ejercicio #2

/*Para calcular la edad humana de un perrito, se dice que los primeros 2 años de la vida del perro cuentan como 10 años humanos cada uno,
y todos los años después de eso cuentan como 4 años humanos cada uno.
Escriba un programa que calcule la edad humana de un perrito de acuerdo a su edad.*/

const dogAge = 4;

/*sabemos que los primeros dos años va a ser siempre 10 cada uno, entonces siempre tendra un total de 20, hay que entonces quitarle 2 años metiendolo
entre parentesis, para que luego el resultado que son los años restantes, lo multiplicamos por 4*/
const humanAge = 20 + (dogAge-2)*4;

console.log("El perrito de",dogAge,"años tendría",humanAge,"años si fuera humano");
