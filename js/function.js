/*
FUNCTION:
logikos gabalas, kuri galim/norim perpanaudoti
- gali gauti parametrus (pradines salygos)
- visada grazina savo rezultata:
    - mes galim nurodyti koki rezultata grazinti
    - jei nenurodysime, tai bus grazintas "default'inis" rezultatas
        - "default'inis" rezultatas yra undefined
*/

function sumavimas(a, b) {
    return a + b;
}

function daugyba(a, b) {
    return a * b;
}

function dalyba(a, b) {
    return a / b;
}

function atimtis(a, b) {
    return a - b;
}

const n1 = 7;
const n2 = 'asd';
const s1 = sumavimas(n1, n2);
const a1 = atimtis(n1, n2);
const m1 = daugyba(n1, n2);
const d1 = dalyba(n1, n2);
console.log(n1, '+', n2, '=', s1);
console.log(n1, '-', n2, '=', a1);
console.log(n1, '*', n2, '=', m1);
console.log(n1, '/', n2, '=', d1);

// const n3 = 44;
// const n4 = 77;
// const rez2 = sumavimas(n3, n4);
// console.log(rez2);