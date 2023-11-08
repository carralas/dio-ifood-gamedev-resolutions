const pesoKg = 75;
const alturaM = 1.88;

let imc = pesoKg/Math.pow(alturaM, 2)

if (pesoKg < 0 || alturaM < 0) {
    console.log(`valor invalido inserido`)
} else if (imc < 18.5) {
    console.log(`imc ${imc.toFixed(1)} - abaixo do peso`)
} else if (imc <= 25) {
    console.log(`imc ${imc.toFixed(1)} - peso normal`)
} else if (imc <= 30) {
    console.log(`imc ${imc}.toFixed(1) - acima do peso`)
} else if (imc <= 40) {
    console.log(`imc ${imc.toFixed(1)} - obesidade`)
} else {
    console.log(`imc ${imc.toFixed(1)} - obesidade grave`)
}