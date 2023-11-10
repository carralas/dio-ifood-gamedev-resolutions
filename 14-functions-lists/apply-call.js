const pessoa = {
    nome: 'betty',
    idade: 60
}

function falar(pretexto) {
    console.log(`${pretexto} ${this.nome}`);
}

falar('alo');

falar.apply(pessoa, ['meu nome e']);
falar.call(pessoa, 'o meu tambem e');