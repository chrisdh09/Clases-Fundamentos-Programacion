// Dada una lista de nombres de estudiantes y sus calificaciones:
// 1. Calcule el promedio de calificaciones, el cual debe estar redondeado a 2 decimales
// 2. Imprima una lista de los estudiantes que aprobaron (aprueban con 70)
// 3. Imprima una lista de los estudiantes que no aprobaron
// 4. Transforme la lista a el sistema de calificaciones de letras:
//    - Si la calificación es igual o mayor a 95: A
//    - Si la calificación es igual o mayor a 90: B
//    - Si la calificación es igual o mayor a 80: C
//    - Si la calificación es igual o mayor a 70: D
//    - Si la calificación es menor de 70: F

// Input
// Una lista que contiene pares de nombres y números:
const list = ['Ana', 88, 'Carlos', 76, 'Karina', 63, 'Pedro', 82];

//! Separamos las notas de los nombres para poder sacar el promedio
const grades = list.filter(item=> typeof item === 'number');

//! sacamos el promedio
const average = grades.reduce((a,b)=> a+b,0) / grades.length;
console.log(`El promedio de calificaciones es: ${average.toFixed(2)}`);

// Imprima una lista de los estudiantes que aprobaron (aprueban con 70)
const approved = list.filter((item, index) => {
    return typeof item === 'string' && list[index + 1] >= 70 });

console.log(`Los estudiantes que aprobaron son: ${approved.join(', ')}`);

//Imprima una lista de los estudiantes que no aprobaron

let listApproved = [];
let listFailed = [];

for (let index = 0; index < list.length; index += 2) { //recordar que primero va el punto de partida, luego la condicion y luego lo que hara cada vez que termine la 
    let name = list [index];
    let grade = list[index + 1];

    if (grade >= 70) {
        listApproved.push(name)
        
    } else {
        listFailed.push(name)
    }
    
}

console.log(`Los estudiantes que aprobaron son: ${listApproved.join(', ')}`);
console.log(`Los estudiantes que no aprobaron son: ${listApproved.join(', ')}`);


// Transforme la lista a el sistema de calificaciones de letras:

let letterGrades = [];

for (let index = 0; index < list.length; index += 2) {
    let name = list [index];
    let grade = list[index + 1];
    let letter = ''; // todavia no lo tenemos

    if (grade >= 95) {
        letter = 'A ';
    } else if (grade >= 90){
        letter = 'B' ;
    } else if (grade >= 80){
        letter = 'C ';
    } else if (grade >= 70){
        letter = 'D '
    } else {
        letter = 'F '
    }

    letterGrades.push(`${name}: ${letter}`)
    console.log(`La calificación de ${name} es ${letter}`);
}

console.log(`La lista transformada es: ${letterGrades}`);



// Output
// El programa debe imprimir los siguientes logs:
// -> El promedio de calificaciones es: {promedio}
// -> Los estudiantes que aprobaron son: {nombres separados por coma}
// -> Los estudiantes que no aprobaron son: {nombres separados por coma}
// -> La lista transformada es: {lista transformada en letras}
// Por cada estudiante:
// -> La calificación de {nombre} es {letra}

// Ejemplo:
// Para la lista: ['Ana', 88, 'Carlos', '76', 'Karina', '63']
// Los logs serían:
// -> El promedio de calificaciones es: 75.67
// -> Los estudiantes que aprobaron son: Ana, Carlos
// -> Los estudiantes que no aprobaron son: Karina
// -> La lista transformada es:  ['Ana', 'C', 'Carlos', 'D', 'Karina', 'F']
// -> La calificación de Ana es C
// -> La calificación de Carlos es D
// -> La calificación de Karina es F

// Ejemplo 2:
// Para la lista: ['Manuel', 54, 'Lisa', '93', 'Daniel', '97', 'Maribel', '61']
// Los logs serían:
// -> El promedio de calificaciones es: 76.25
// -> Los estudiantes que aprobaron son: Lisa, Daniel
// -> Los estudiantes que no aprobaron son: Manuel, Maribel
// -> La lista transformada es: ['Manuel', F, 'Lisa', B, 'Daniel', A, 'Maribel', F]
// -> La calificación de Manuel es F
// -> La calificación de Lisa es B
// -> La calificación de Daniel es A
// -> La calificación de Maribel es F