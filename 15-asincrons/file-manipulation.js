const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, './assets/csv/file.csv')

const promiseLeituraArquivo = fs.promises.readFile(filePath)

promiseLeituraArquivo
    .then((arquivo) => arquivo.toString('utf8'))
    .then((titulo) => titulo.split('\n').slice(1))
    .then((linhas) => linhas.map((linha) => {
        const [objeto, cor] = linha.split(`; `)
        return `${objeto} na cor ${cor}`
    }))
    .then((texto) => console.log(texto))
    .catch((erro) =>{
        console.log(`erro:`, erro)
    })