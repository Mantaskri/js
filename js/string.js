/*
String -> tekstas
Iniciavimas:
- viengubos kabutes
- dvygubos kabutes
- backtick kabutes
*/

const username = 'Petras';
console.log(username);

const city = "Miestelis";
console.log(city);

const kabute1 = "Vienguba (') kabute.";
console.log(kabute1);

const kabute2 = 'Dvyguba (") kabute.';
console.log(kabute2);

const kabute121 = 'Vienguba (\') ir dvyguba (\") kabutes.';
console.log(kabute121);

const kabute122 = "Vienguba (\') ir dvyguba (\") kabutes.";
console.log(kabute122);

const keliosEilutes = '<div>\
                            <p>Labas</p>\
                       </div>';

const parosMetas = 'vakaras';
const username2 = 'Maryte';
// Labas rytas, Maryte!
// Labas vakaras, Maryte!
const pasisveikinimas = 'Labas ' + parosMetas + ', ' + username2 + '!';
console.log(pasisveikinimas);

const hello = `Labas ${parosMetas}, ${username2}!`;
console.log(hello);

// Siandien yra 23 laipsniai silumos ir nuotaiko yra gera.
const temp = 23;
const nuotaika = 'gera';
const orai = `Siandien yra ${temp} (jauciasi kaip: ${temp + 4}) laipsniai silumos ir nuotaiko yra "${nuotaika}".`;

console.log(orai);

console.log('Labas \\ rytas');
console.log('Labas \\\\ rytas');