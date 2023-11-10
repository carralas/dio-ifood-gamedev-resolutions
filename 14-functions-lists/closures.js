function soma(x) {
    return function(y) {
        return x+y;
    }
}

console.log(soma(5)(20));

const somaParcial = soma(10);

console.log(somaParcial)
console.log(somaParcial(10))
console.log(somaParcial(40))