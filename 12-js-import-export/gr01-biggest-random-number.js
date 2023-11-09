const {gets, print} = require('./auxiliar.js');

let maiorNumero = -1;

for (let k = 0; k < 5; k++) {
    const numeroAtual = gets();
    if (numeroAtual > maiorNumero) {
        maiorNumero = numeroAtual;
    }
}

print(maiorNumero);