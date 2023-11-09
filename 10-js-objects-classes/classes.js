function compararJogos (primeiroJogo, segundoJogo) {
    if (primeiroJogo.anoLancamento > segundoJogo.anoLancamento) {
        console.log(`o jogo ${primeiroJogo.nome} saiu depois de ${segundoJogo.nome}`);
    } else if (primeiroJogo.anoLancamento < segundoJogo.anoLancamento) {
        console.log(`o jogo ${segundoJogo.nome} saiu depois de ${primeiroJogo.nome}`);
    } else {
        console.log(`os jogos ${primeiroJogo.nome} e ${segundoJogo.nome} sairam juntos`)
    }
}

function main() {
    class Jogo {
        nome;
        genero;
        anoLancamento;
        idadeJogo;
        constructor(nome, genero, anoLancamento) {
            this.nome = nome;
            this.genero = genero;
            this.anoLancamento = anoLancamento;
            this.idadeJogo = 2023-anoLancamento; /* considerando 2023 o ano atual */
        }
        descrever() {
            console.log(`${this.nome} (${this.genero}) tem ${this.idadeJogo} anos.`);
        }
    }

    const fft = new Jogo('Final Fantasy Tactics', 'J-RPG', 1997);
    const luct = new Jogo('Tactics Ogre: Let Us Cling Together', 'J-RPG', 1995);

    compararJogos(fft, luct);
}

main();