const pessoa = {
    idade: 60
}

const betty = {
    nome: 'betty',
    sobrenome: 'betty',
    __proto__: pessoa
}

console.log(betty.idade);

function Filme(nome, genero) {
    this.nome = nome
    this.genero = genero
}

const barbie = new Filme('Barbie', 'Drama');

Filme.prototype.descrever = function() {
    console.log(`o filme ${this.nome} e do genero ${this.genero}`)
}

console.log(barbie);
barbie.descrever();