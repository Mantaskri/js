const marks = [10, 2, 8, 4, 6];

const minMark = Math.min(...marks);
console.log(minMark);

const maxMark = Math.max(...marks);
console.log(maxMark);

const pirmas = [7, 8, 9];
const antras = [77, 88, 99];

const pirmasAntras = [...pirmas, ...antras];
const antrasPirmas = [...antras, ...pirmas];
console.log(pirmasAntras);
console.log(antrasPirmas);

console.log('----------------------');

const mokiniai = ['Petras', 'Maryte', 'Jonas', 'Ona'];
console.log(mokiniai);

//const mokiniuKopija = mokiniai; // nuoroda i atminti
const mokiniuKopija = [...mokiniai]; // pirmo lygio kopija
console.log(mokiniuKopija);

mokiniai[0] = 111;
console.log(mokiniai);
console.log(mokiniuKopija);