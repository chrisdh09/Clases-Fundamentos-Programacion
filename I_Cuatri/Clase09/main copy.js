const word = "oso"

let len = word.length-1
let wordReversed = ""

for (let i = len ; i >= 0; i--) {
    wordReversed+=word[i]
}
if (wordReversed==word) {
    console.log(`La palabra ${word} es un palindromo`);
    
} else {
    console.log(`La palabra ${word} no es un palindromo`);
}


