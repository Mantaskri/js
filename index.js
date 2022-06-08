"use strict";

/*
Kintamuju iniciavimo budai:
const - kai verte negali keistis (default)
let - kai verte norime, jog galetu keistis
var - senasis budas (nenaudoti, jei nenori PROBLEMU)
*/

const username = 'Petras';

let pinigine = 1;
console.log(username, 'pinigineje turi', pinigine, 'pinigu');

pinigine = pinigine * 2;
console.log(username, 'pinigineje turi', pinigine, 'pinigu');

pinigine = pinigine * 2;
console.log(username, 'pinigineje turi', pinigine, 'pinigu');

pinigine = pinigine * 2;
console.log(username, 'pinigineje turi', pinigine, 'pinigu');

pinigine = pinigine * 2;
console.log(username, 'pinigineje turi', pinigine, 'pinigu');

const a = 9.999999;
const b = 2;

console.log(a, '+', b, '=', a + b);
console.log(a, '-', b, '=', a - b);
console.log(a, '*', b, '=', a * b);
console.log(a, '/', b, '=', a / b);
console.log(a, '%', b, '=', a % b);


let skaicius = 10;
skaicius = skaicius + 3;
skaicius += 3;
skaicius -= 3;
skaicius -= 3;
skaicius *= 4;
skaicius /= 2;
skaicius %= 7;
console.log('Skaicius:', skaicius);