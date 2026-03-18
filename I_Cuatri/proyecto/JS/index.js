/* 
Escriba un programa que calcule el precio del tiquete de entrada a un museo
El precio de los tiquetes sigues las siguientes reglas:
    1. El precio base sin descuento es de 5000
    2. Niños menores de 12 años entran gratis
    3. Personas mayores de 65 años tienen un 40% de descuento age>==65
    4. Personas con un id de estudiantes tienen un 25% de descuento, sin importar la edad
    5. Personas con cupón de descuento, se les puede aplicar el descuento descrito en el cupón.
    6. Solo un descuento se aplica a cada tiquete, el más alto, por lo tanto, para una persona 
    con id de estudiante y con un cupón de 30% de descuento, solo aplicará uno de los dos descuentos.
*/

const age = 63;
const hasCoupon = true;
const couponDiscount = 10;
const hasStudentId = true;

let basePrice = 5000
let finalPrice = 0

// Escriba su código aquí calculando el price

//1.Niños menores de 12 años entran gratis
if (age<12) {
    finalPrice=0;}

    // Personas mayores de 65 años tienen un 40% de descuento
    else if (age>= 65){
        finalPrice = basePrice - (basePrice*0.40)}
        // Personas con un id de estudiantes tienen un 25% de descuento, sin importar la edad
        else if (hasStudentId==true){
            finalPrice = basePrice - (basePrice*0.25)}
             //Personas con cupón de descuento, se les puede aplicar el descuento descrito en el cupón.
            else if (couponDiscount==10){
} else {
    
}

// Resultado final con el price calculado:
console.log('El precio de su tiquete es: ', finalPrice)

// Ejemplos:

// ----- 1 ------
// age = 30;
// hasCoupon = false;
// couponDiscount = 0;
// hasStudentId = false;
// El precio de su tiquete es: 5000

// ----- 2 ------
// age = 25;
// hasCoupon = true;
// couponDiscount = 10;
// hasStudentId = true;
// El precio de su tiquete es: 3750

// ----- 2 ------
// age = 11;
// hasCoupon = false;
// couponDiscount = 0;
// hasStudentId = true;
// El precio de su tiquete es: 0

// ----- 3 ------
// age = 15;
// hasCoupon = true;
// couponDiscount = 70;
// hasStudentId = true;
// El precio de su tiquete es: 1500