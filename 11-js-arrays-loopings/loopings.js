const notas = [9, 7.5, 8];
let somaNotas = 0;

for (let k = 0; k < notas.length; k++) {
    somaNotas += notas[k];
}

const media = somaNotas /= 3;

console.log(`media final das ${notas.length} notas: ${media.toFixed(1)}`);

const nome = 'betty';

for (let letra = 0; letra < nome.length; letra++) {
    console.log(nome[letra]);
}