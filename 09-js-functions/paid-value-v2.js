function calcularValor(precoProduto, percentualPago=0) {
    if (percentualPago > 0) {
        let valorPago = precoProduto*percentualPago;
        console.log(valorPago.toFixed(2));
    }
}

(function () {
    const precoProduto = 39.99;
    const metodoPagamento = 1; /* 1 = debito, 2 = dinheiro ou pix, 3 = parcelado até 2x, 4 = parcelado em mais de 2x */

    if (metodoPagamento === 1) {
        calcularValor(precoProduto, .9);
    } else if (metodoPagamento === 2) {
        calcularValor(precoProduto, .85);
    } else if (metodoPagamento === 3) {
        calcularValor(precoProduto, 1);
    } else if (metodoPagamento === 4) {
        calcularValor(precoProduto, 1.1);
    } else {
        console.log(`metodo de pagamento nao fornecido ou invalido`);
    }
})();