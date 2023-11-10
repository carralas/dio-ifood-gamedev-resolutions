const lista = ['a', 'b', 'c', 'd', 'e']

function print(valor) {
    console.log(valor)
}

lista.forEach(print)

lista.forEach((valor) => {
    console.log(valor)
})

lista.forEach((valor, k, listaCompleta) => {
    console.log(valor, k, listaCompleta)
})