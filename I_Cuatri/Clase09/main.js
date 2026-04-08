const word = "sdsd"

let wordReversed = "" //aqui se guardan las letras en cada loop

for (let i = word.length-1 ; i >= 0; i--) { //primero se muestra de donde empezamos el ciclo, la condicion y luego lo que se haga despues de cumplir la condicion
    wordReversed+=word.charAt(i) //aqui se agrega cada letra recorrida en cada loop hasta llegar a 0
}
if (wordReversed==word) {
    console.log(`La palabra ${word} SI es un palindromo`);
    
} else {
    console.log(`La palabra ${word} NO es un palindromo`);
}

