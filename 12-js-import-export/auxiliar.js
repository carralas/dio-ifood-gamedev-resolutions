const input = [4, 86, 30, 56, 60];
let k = 0;

function gets() {
    k++;
    if (k <= input.length){
        return input[k];
    }
}

function print(texto) {
    console.log(texto);
}

module.exports = {
    gets,
    print
}