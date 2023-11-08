const precoProduto = 39.99;
const metodoPagamento = 1 /* 1 = debito, 2 = dinheiro ou pix, 3 = parcelado até 2x, 4 = parcelado em mais de 2x */

if (metodoPagamento === 1) {
    console.log(`valor pago: ${(precoProduto*.9).toFixed(2)}`)
} else if (metodoPagamento === 2) {
    console.log(`valor pago: ${(precoProduto*.85).toFixed(2)}`)
} else if (metodoPagamento === 3) {
    console.log(`valor pago: ${precoProduto.toFixed(2)}`)
} else if (metodoPagamento === 4) {
    console.log(`valor pago: ${(precoProduto*1.1).toFixed(2)}`)
} else {
    console.log(`metodo de pagamento invalido`)
}