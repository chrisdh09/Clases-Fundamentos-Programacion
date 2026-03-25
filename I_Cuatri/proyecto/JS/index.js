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

const age = 65;
const hasCoupon = true;
const couponDiscount = 99;
const hasStudentId = false;
let basePrice = 5000
let finalPrice = 0

// Escriba su código aquí calculando el price

//Niños menores de 12 años entran gratis
if (age < 12) {
    finalPrice = 0;
} else {

    //descuentos
    let discountAdult = 0;
    let discountStudent = 0;
    let discountCoupon = 0;

    //persona mayor de edad
    if (age >= 65) {
        discountAdult = 40;
    }

    //persona estudiante
    if (hasStudentId) {  // aqui no pongo ""== true" por que siempre va a verificar si esta true aunque no le especifique
        discountStudent = 25;
    }

    // Cupon cualquiera
    if (hasCoupon) {
        discountCoupon = couponDiscount;
    }

    //Aqui se elige el descuento mayor de los antes declarados para aplicar solo 1
    let bestDiscount = Math.max(discountAdult, discountStudent, discountCoupon); // bestDiscount pasa a ser el mejor descuento
    let finalDiscount = basePrice * (bestDiscount / 100);

    

    finalPrice = basePrice - finalDiscount;

}

// Resultado final con el price calculado:
    console.log("El precio de su tiquete es: ", finalPrice) // este tiene que ir fuera del if para que se ejecute tanto si se cumple el IF o el ELSE

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