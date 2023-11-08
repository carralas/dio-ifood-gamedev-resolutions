function escreverNome(nome='nao fornecido') {
    console.log(`seu nome: ${nome}`);
}

function verificarIdade(idade=-1) {
    if (idade > 18) {
        console.log(`maior de idade`)
    } else if (idade >= 0) {
        console.log(`menor de idade`)
    } else {
        console.log(`idade invalida`);
    }
}

(function () {
    escreverNome();
    escreverNome('betty');

    verificarIdade();
    verificarIdade(15);
    verificarIdade(29);
})();