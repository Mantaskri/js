/*
SALYGOS SAKINYS
sablonai:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} ....  else if () {}
if () {} else if () {} ....  else if () {} else {}
Palyginimo operatoriai:
visi: >, <, >=, >=, <=, <=, ==, !=, ===, !==
naudotini: >, <, >=, >=, <=, <=, ===, !==
nenaudotini: ==, !=
*/

const a = 77;
const b = 555;

console.log('START');

if (a > b) {
    console.log('Pirmas yra daugiau uz antra');
} else {
    console.log('Pirmas nera daugiau uz antra');
}

console.log('END');

const temperatura = 12;

if (temperatura > 12) {
    console.log('Siandien silta');
} else {
    console.log('Siandien NE silta');
}

if (temperatura < 12) {
    console.log('Siandien salta');
} else {
    console.log('Siandien NE salta');
}

const x = 'Labas';
if (x === 'labas') {
    console.log('TAIP');
} else {
    console.log('NE');
}