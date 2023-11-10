const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, './assets/csv/file.csv')

async function buscarArquivo() {
    try {
        const arquivo = await fs.promises.readFile(filePath)
        const transcricao = arquivo.toString('utf-8')
        console.log(transcricao)
    }
    catch(erro) {
        console.log(erro)
    }
    finally {
        console.log('encerrado')
    }
}

buscarArquivo();

console.log('aparece durante a execução')