/*
TERNARY operator
supaprastintas if/else'as
null - neegzistuojanti reiksme (einamuoju metu), kuria planuojame gauti
*/

const a = 4;
const b = 22;
let ats = null;

if (a > b) {
    ats = 'daugiau';
} else {
    ats = 'NE daugiau';
}

console.log(ats);

const tern = a > b ? 'daugiau' : 'NE daugiau';
console.log(tern);

const egz = 0 ? 0 ? 3 : 4 : 5 ? 6 : 7;
console.log(egz);

/*
REIKSMIU POZITYVUMAS / NEGATYVUMAS
boolean
skaiciai -> viskas TAIP, isskyrus nuli (0)
null -> false
undefined -> false
stringai ->  viskas TAIP, isskyrus tuscias stringas
*/
if (3) {
    console.log('taip');
} else {
    console.log('ne');
}