console.clear();
// parse - stringo vertimas i skaiciu, kai stringas yra skaiciai
const n1 = '7';
const n2 = 5;

/*
function suma(a, b) {
    if (typeof a !== 'number') {

//parseInt - grazina sveikaji skaiciu i kintamaji (a)
//parseFloat - grazina desimtaini skaiciu i kintamaji

        a = parseInt(a);
        if (typeof a !== 'number') {
        return 'ERROR: Pirmas parametras yra ne skaicius';
    }
}
        b = parseInt(b);
        if (typeof b !== 'number') {
        return 'ERROR: Antras parametras yra ne skaicius';
    }
        return a + b;
}

const ats = suma(n1, n2);
console.log(ats);
*/
//kodo supaprastinimas:

function suma(a, b) {
    a = parseInt(a);
    b = parseInt(b);

    // galima naudoti su : || - (or)
    //if (Nana(a) || initialAsize !== afterAsize) {
    if (isNaN(a)) {
        return 'ERROR: Pirmas parametras yra ne skaicius'; 
    }  
    if (isNaN(b)) {
        return 'ERROR: Antras parametras yra ne skaicius';   
 }
    return a + b;
}   
const ats = suma(n1, n2);
console.log(ats);