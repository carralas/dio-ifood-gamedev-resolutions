var lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const listaFiltrada = lista.filter((x) => {
    return (x % 3 === 0)
})

console.log(listaFiltrada)

class Cor {
    constructor(nome) {
        this.nomeCor = nome
    }
}

lista = [new Cor('azul'), new Cor('vermelho'), new Cor('amarelo')]

const listaFrutas = lista.map((x) => x.nomeCor)

console.log(lista)
console.log(listaFrutas)

const listaFrutasHTML = lista.map((x) => {
    return `
    <li>
        ${x.nomeCor}
    </li>`
})

console.log(listaFrutasHTML)