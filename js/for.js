/*
CIKLAI:
for, for-of, for-in, foreach, while, do-while, map, filter, reduce, sort, ...
sablonas
for () {}
*/

const kupiuros = [20, 5, 50, 100, 20];

let pinigine = 0;

console.log('START');

for (let i = 0; i < kupiuros.length; i++) {
    const kupiura = kupiuros[i];
    pinigine += kupiura;
    console.log(i, ')', kupiura, '->', pinigine);
}

console.log('END');
console.log(pinigine);

console.log('----------');
for (let i = -100; i <= -90; i++) {
    console.log(i);
}

console.log('----------');
for (let i = -90; i >= -100; i--) {
    console.log(i);
}

console.log('----------');
console.log([].length);
console.log(['a'].length);
console.log(['a', 'b'].length);
console.log(['a', 'b', 'labas'].length);

console.log('');
console.log('labas');
console.log(''.length);
console.log('labas'.length);

const word = 'Karsta vasara!';
for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    console.log(i, ')', letter);
}

for (let i = 10; i > 0; i--) {
    console.log(i);
}

console.log('--------');
for (let i = 10; i > 0; i--) {
    console.log(i);
    if (i === 5) {
        break;
    }
}

console.log('-------- min money');
const money = [5, 10, 20, 50, 100, 5, 10, 20];
const minTarget = 80;
const hand = [];
let handTotal = 0;

for (let i = 0; i < money.length; i++) {
    const value = money[i];
    handTotal += value;
    hand.push(value);

    console.log(`${i}) ${value} -> total: ${handTotal};`, hand);

    if (handTotal >= minTarget) {
        break;
    }
}

const graza = handTotal - minTarget;
if (graza > 0) {
    console.log(`Graza: ${graza}`);
    console.log('Duotos kupiuros:', hand);
} else if (graza === 0) {
    console.log('Duota lygiai tiek kiek reikia pinigu');
    console.log('Duotos kupiuros:', hand);
} else {
    console.log(`Tu skoloje dar ${graza * - 1} pinigu`);
}