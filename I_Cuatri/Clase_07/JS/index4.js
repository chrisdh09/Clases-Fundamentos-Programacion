const userName = "chifrijo";
const savedUserName = "chifrijo"

const userPassword = "1234";
const savedPassword = "1234";

const userAnswer = "Calabaza";
const savedAnswer = "Pistacho";

if (userName!=savedUserName) {
    console.log("Su Usuario no existe");    
} else if (userName==savedUserName&&userPassword==savedPassword) {
    console.log("Puede iniciar sesion");
}    else if (userName==savedUserName&&(userPassword==savedPassword||userAnswer==savedAnswer)){
        console.log("Puede iniciar sesion");
    } else {
        console.log("No puede iniciar sesion");
    }