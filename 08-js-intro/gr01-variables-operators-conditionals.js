const precoGasolinaLitro = 5.65; /* preço no dia 08/11/2023 */
const precoEtanolLitro = 3.64; /* preço no dia 08/11/2023 */
const custoKmLitro = 10.2; /* referente ao carro kia soul */
const distanciaKm = 12.7; /* comprimento da ponte rio-niterói */
const tipoCombustivelUsado = 'gasolina';
var gastoTotal;

if (tipoCombustivelUsado === 'gasolina') {
    gastoTotal = (distanciaKm/custoKmLitro)*precoGasolinaLitro;
} else {
    gastoTotal = (distanciaKm/custoKmLitro)*precoEtanolLitro;
}

console.log(`combustivel: ${tipoCombustivelUsado}. gasto total: ${gastoTotal.toFixed(2)}.`)