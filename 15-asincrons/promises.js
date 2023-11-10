/*
new Promise((resolve, reject) => {
    resolve()
    reject()
})
*/

const promessaNumero = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero = parseInt(Math.random()*100)
        resolve(numero)
    }, 1000)
})

promessaNumero
    .then((valor) => {
        console.log(valor)
    })
    .catch((erro) => {
        console.log(erro)
    })
    .finally(() => {
        console.log(`${promessaNumero} finalizado`)
    })

console.log('aguarde')