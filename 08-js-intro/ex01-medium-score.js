const primeiraNota = 10;
const segundaNota = 7;
const terceiraNota = 9;
let media;

media = (primeiraNota+segundaNota+terceiraNota)/3;

if (media > 7) {
    console.log(`aprovado com ${media.toFixed(1)}`)
} else if (media < 5) {
    console.log(`reprovado com ${media.toFixed(1)}`)
} else {
    console.log(`recuperacao com ${media.toFixed(1)}`)
}