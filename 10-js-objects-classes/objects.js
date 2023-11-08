function main() {
    const filme = {
        nome: 'A Viagem de Chihiro',
        genero: 'Animacao',
        diretor: 'Hayao Miyazaki',
        anoLancamento: 2001,
        classificacaoIndicativa: 'Livre',
        avaliacao: 8.6, /* de acordo com IMDb */
        duracaoHoras: 2.08,
        duracaoMinutos: 125,
        descrever: function () {
            console.log(`O filme ${this.nome} (${this.genero} - ${this.anoLancamento}, dirigido por ${this.diretor}, dura ${this.duracaoMinutos} minutos.`);
        },
        placeHolder: ''
    };
    const atributo = 'anoLancamento';

    console.log(filme.nome);
    console.log(filme.diretor);
    console.log(filme.avaliacao);
    console.log(filme.duracaoMinutos);
    console.log(filme);

    filme.nome = 'Sen to Chihiro no Kamikakushi';
    delete filme.placeHolder;
    console.log(filme);

    filme.descrever();

    console.log(filme[atributo]);
}

main();