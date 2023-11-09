function main() {
    class Pessoa {
        nome;
        pesoKg;
        alturaM;
        imc;
        constructor(nome, pesoKg, alturaM) {
            this.nome = nome;
            this.pesoKg = pesoKg;
            this.alturaM = alturaM;
            this.imc = this.pesoKg/Math.pow(alturaM, 2);
        }
        informarIMC() {
            console.log(`o imc de ${this.nome} e de ${(this.imc).toFixed(1)}.`);
        }
        classificarIMC() {
            if (this.imc < 18.5) {
                console.log(`abaixo do peso`)
            } else if (this.imc <= 25) {
                console.log(`peso normal`)
            } else if (this.imc <= 30) {
                console.log(`acima do peso`)
            } else if (this.imc <= 40) {
                console.log(`obesidade`)
            } else {
                console.log(`obesidade grave`)
            }
        }
    }

    const betty = new Pessoa('Betty', 78, 1.7);

    console.log(betty);
    betty.informarIMC();
    betty.classificarIMC();
}

main();