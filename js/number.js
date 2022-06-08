/*
NUMBERS:
"normalus":
- sveikieji
- desimtainiai
"nenormalus":
- ne skaicius
- negalybes
*/

// sveikasis
const a = 0;

// desimtainis
const b = 3.14;

// neigiami
const c = -7;

const d = Infinity;
const e = -Infinity;

// ne skaicius, kuris yra skaicius
const f = NaN; // not-a-number

console.log(7 / 5);
console.log(-7 / 5);
console.log('septyni' / 'penki');
console.log('labas' / 'rytas');

console.log(1 / 0);
console.log(-1 / 0);


let skaicius = 10;
skaicius = skaicius + 3;
skaicius += 3;

skaicius = skaicius - 3;
skaicius -= 3;

skaicius = skaicius * 4;
skaicius *= 4;

skaicius = skaicius / 2;
skaicius /= 2;

skaicius = skaicius % 7;
skaicius %= 7;

console.log('Skaicius:', skaicius);

console.log(2 * 2);
console.log(2 ** 2);

console.log(3 ** 1);
console.log(3 ** 2);
console.log(3 ** 3);
console.log(3 ** 4);

console.log(Math.PI);
console.log(Math.E);

console.log(Math.abs(7));
console.log(Math.abs(-7));

console.log(2.0001, '-> ceil ->', Math.ceil(2.0001));
console.log(2.9999, '-> ceil ->', Math.ceil(2.9999));
console.log(3, '-> ceil ->', Math.ceil(3));

console.log(2.0001, '-> floor ->', Math.floor(2.0001));
console.log(2.9999, '-> floor ->', Math.floor(2.9999));
console.log(3, '-> floor ->', Math.floor(3));

console.log(2.0001, '-> round ->', Math.round(2.0001));
console.log(2.9999, '-> round ->', Math.round(2.9999));
console.log(2.4999, '-> round ->', Math.round(2.4999));
console.log(2.5, '-> round ->', Math.round(2.5));
console.log(2.500001, '-> round ->', Math.round(2.500001));
console.log(3, '-> round ->', Math.round(3));

console.log(Math.pow(2, 4));
console.log(2 ** 4);

console.log(Math.max(1, 10, 7, 5));
console.log(Math.min(1, 10, 7, 5));
console.log(Math.max(-1, -10, -7, -5));
console.log(Math.min(-1, -10, -7, -5));

// [0..1) -> [0..0.99999999999999999]
console.log(Math.random());

console.log(Math.sqrt(4));
console.log(Math.sqrt(81));
console.log((-1) ** 0);
console.log((-1) ** 1);
console.log((-1) ** 2);
console.log((-1) ** 3);

console.log('-----------');
console.log(Math.trunc(3.47));
console.log(Math.trunc(3.00001));
console.log(Math.trunc(3.99999));

console.log(Math.floor(3.47));
console.log(Math.floor(3.00001));
console.log(Math.floor(3.99999));

console.log('-----------');

console.log(Math.trunc(-3.47));
console.log(Math.trunc(-3.00001));
console.log(Math.trunc(-3.99999));

console.log(Math.floor(-3.47));
console.log(Math.floor(-3.00001));
console.log(Math.floor(-3.99999));