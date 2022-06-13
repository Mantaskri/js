//function declaration
function sudetis(a, b) {
    return a + b;
}
console.log(7, ' + ' , 5, '=', sudetis(7, 5));

/* function atimtis(a, b){
    return a - b;
}
console.log(7, '-', 5, '=', atimtis(7, 5));

anonimine funkcija
        --->
*/
       
const atimtis = function (a, b){
    return a - b;
}
console.log(7, '-', 5, '=', atimtis(7, 5));

// arrow (rodykline) function; pvz. : c# vadinama lambda function
const daugyba = (a, b) => {
    return a * b;
}
console.log(7, '*', 5, '=', daugyba(7, 5));

// arrow (rodykline) function:
// kai logikos bloke yra tik VIENA PROCEDURA, tai nenaudojam {} ir return : (a, b) => { return a / b; }
const dalyba = (a, b) => a / b;
console.log(7, '/', 5, '=', dalyba(7, 5));

//arrow function:
// kai logikos bloke yra TIK VIENAS parametras, tai nenaudojam () : const dalyba = a => a ** 2;
const kvadratas = a => a ** 2;
console.log(7, '**', 2, '=', kvadratas(7, 5));
