const preco_gasolina_l = 5.65; /* preço no dia 08/11/2023 */
const preco_etanol_l = 3.64; /* preço no dia 08/11/2023 */
const tipo_combustivel_usado = 'gasolina';
const custo_km_por_l = 10.2; /* referente ao carro kia soul */
const distancia_km = 12.7; /* comprimento da ponte rio-niterói */
var gasto_total;

if (tipo_combustivel_usado === 'gasolina') {
    gasto_total = (distancia_km/custo_km_por_l)*preco_gasolina_l;
} else {
    gasto_total = (distancia_km/custo_km_por_l)*preco_etanol_l;
}

console.log(`combustivel: ${tipo_combustivel_usado}. gasto total: ${gasto_total.toFixed(2)}.`)