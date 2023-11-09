const input = [4, 86, 30, 56, 60];
let k = 0;

function gets() {
    output = input[k]
    k++;
    return output;
}

function print(texto) {
    console.log(texto);
}

module.exports = {
    gets,
    print
}