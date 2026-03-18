let index = 0

while (index < 10) {
    console.log("Codigo Ejecutado, intentos restantes", index);
    index = index + 1
}

let iteraciones = 100

while (iteraciones > 0) {
    if (iteraciones % 3 === 0 && iteraciones % 5 === 0) {
        console.log("El numero",iteraciones,"es multiplo de 3 y de 5")
    }
    else if (iteraciones % 5 === 0) {
        console.log("El numero",iteraciones,"es multiplo de 5");
    }
    else if (iteraciones % 3 === 0) {
        console.log("El numero",iteraciones,"es multiplo de 3")
    }
    else {
        console.log("El numero",iteraciones,"no es multiplo de 3 o 5");
    }
    iteraciones=iteraciones-1
}



const number = 3;
let multiplicador = 1;


while(multiplicador<=12){
    let operacion = number * multiplicador
    console.log(number,"x",multiplicador,"=",operacion );
    multiplicador = multiplicador+1
    
}