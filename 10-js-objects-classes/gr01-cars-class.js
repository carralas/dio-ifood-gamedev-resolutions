function main() {
    class Carro {
        marca;
        cor;
        gastoLitroKm;
        constructor(marca, cor, gastoLitroKm) {
            this.marca = marca;
            this.cor = cor;
            this.gastoLitroKm = gastoLitroKm;
        }
        calcularCustoViagem(distanciaKm, precoCombustivelLitro) {
            let custoViagem = distanciaKm*this.gastoLitroKm*precoCombustivelLitro;
            console.log(`a viagem de ${distanciaKm}km custara ${custoViagem.toFixed(2)} reais para este ${this.marca} ${this.cor}.`);
        }
    }
    
    const kia = new Carro('Kia Soul', 'vermelho', 1/10.2);

    console.log(kia)
    kia.calcularCustoViagem(12.7, 5.65)
}

main();