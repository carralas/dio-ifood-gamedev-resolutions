function main() {
    class Carro {
        marca;
        cor;
        percorreKmLitro;
        gastoLitroKm;
        constructor(marca, cor, percorreKmLitro) {
            this.marca = marca;
            this.cor = cor;
            this.percorreKmLitro = percorreKmLitro
            this.gastoLitroKm = 1/percorreKmLitro;
        }
        calcularCustoViagem(distanciaKm, precoCombustivelLitro) {
            let custoViagem = distanciaKm*this.gastoLitroKm*precoCombustivelLitro;
            console.log(`a viagem de ${distanciaKm}km custara ${custoViagem.toFixed(2)} reais para este ${this.marca} ${this.cor}.`);
        }
    }
    
    const precoCombustivelLitro = 5.65;
    const distanciaKm = 12.7;

    const kia = new Carro('Kia Soul', 'vermelho', 10.2);

    console.log(kia)
    kia.calcularCustoViagem(distanciaKm, precoCombustivelLitro)
}

main();