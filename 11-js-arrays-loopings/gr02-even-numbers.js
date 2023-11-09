const numeros = [5, 10, 6, 14, 21, 33, 109, 777, 542, 0, 12];
const pares = [];

for (let k = 0; k < numeros.length; k++) {
    if (numeros[k]%2 === 0) {
        pares.push(numeros[k]);
    }
}

console.log(pares);