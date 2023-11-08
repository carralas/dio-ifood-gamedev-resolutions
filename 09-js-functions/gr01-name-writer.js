function escreverNome(nome='nao fornecido') {
    console.log(`seu nome: ${nome}`);
}

(function () {
    escreverNome();
    escreverNome('betty');
})();