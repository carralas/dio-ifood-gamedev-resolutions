const preco_combustivel_l = 5.65; /* preço no dia 08/11/2023 */
const custo_km_por_l = 10.2; /* referente ao carro kia soul */
const distancia_km = 12.7; /* comprimento da ponte rio-niterói */
var gasto_total;

gasto_total = (distancia_km/custo_km_por_l)*preco_combustivel_l;

console.log(gasto_total.toFixed(2))