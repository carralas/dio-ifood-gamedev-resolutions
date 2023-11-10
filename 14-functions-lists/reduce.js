const lista = [10, 20, 30, 40, 50]

const somaLista = lista.reduce((anterior, atual) => {
    return anterior+atual
})

console.log(somaLista)

const somaListaCom100 = lista.reduce((anterior, atual) => {
    return anterior+atual
}, 100)

console.log(somaListaCom100)