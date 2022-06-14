console.clear();

const str = 'Labas rytas Lietuva';
const words = str.split(' ');
const wordCount = words.length;
console.log(words);
console.log(wordCount);

const str2 = 'ananasa';
const words2 = str2.split('a');
console.log(words2);

const person = 'Vardenis Tevavardis Pavardenis'; // V.P.
const inicialai = person
    .split(' ')
    .map(w => w[0])
    .join('.') + '.';
console.log(inicialai);

let inicialai2 = person[0];
for (let i = 1; i < person.length; i++) {
    const letter = person[i];
    if (person[i - 1] === ' ') {
        inicialai2 += '.' + letter;
    }
}
inicialai2 += '.';
console.log(inicialai2);