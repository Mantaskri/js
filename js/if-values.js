console.clear();

/*
REIKSMIU POZITYVUMAS / NEGATYVUMAS
boolean (true -pozityvus / false - negatyvus);
skaiciai : visi skaiciai yra pozityvus (TAIP), 
isskyrus nuli (0) null -> false;
undefined -> false;
string : ne tuscias stringas ['xyz'] - pozityvus, tuscias stringas ('') - negatyvus;
array : visada pozityvus;
object : visada pozityvus;
function() {} : visada pozityvus;
arrow function : -//- visada pozityvus;
*/
/*
const userInput = ' ';

if (userInput) {
    console.log('taip');
} else {
    console.log('ne');
}
*/


let multi = 3;
let str = `"variable1", "variable2"`;
let multiStr = "";

for(let i = 0; i < multi; i++){
  multiStr += str
}
console.log(multiStr);
