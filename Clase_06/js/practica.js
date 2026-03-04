const lunes = "Lunes";
const martes = "Martes";
const miercoles = "Miercoles";
const jueves = "Jueves";
const sabado = "Sábado";
const domingo = "Domingo";

const hoy = "Miercoles";

console.log(`Hoy es Lunes? ${hoy==lunes}`); //comillas invertidas
console.log("Hoy es Miercoles?", hoy==miercoles ); //con comas, este es el unico que lo imprime como valor buleano y no como texto
console.log("Hoy es Martes o Miercoles? "+ (hoy==martes||hoy==miercoles)); //con parentesis encerrando a las variables
console.log("Hoy es Miercoles y Jueves? "+ (hoy==miercoles&&hoy==jueves)); //con parentesis encerrando a las variables