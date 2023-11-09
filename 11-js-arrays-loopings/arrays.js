const frutas = ['morango', 'uva', 'banana'];

console.log(frutas);
console.log(frutas[1]);

frutas.push('melancia');
frutas[5] = 'maracuja';

console.log(frutas);

frutas.push('kiwi');
console.log(frutas);

console.log(frutas.pop());
console.log(frutas);

console.log(frutas.shift());
console.log(frutas);

delete frutas[2];
console.log(frutas);