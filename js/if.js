/*
SALYGOS SAKINYS
sablonai:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} ....  else if () {}
if () {} else if () {} ....  else if () {} else {}

Palyginimo operatoriai:
visi: >, <, >=, <=, ==, !=, ===, !==
naudotini: >, <, >=, <=, ===, !==
nenaudotini: ==, !=

Loginiai operatoriai:
&& (and) -turi tenkinti visas salygas
|| (or) - turi tenkinti bent viena salyga

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

const diena = 1;
if (diena === 1) {
    console.log('pirmadienis');
} else {
    if (diena === 2) {
        console.log('antradienis');
    } else {
        if (diena === 3) {
            console.log('treciadienis');
        } else {
            if (diena === 4) {
                console.log('ketvirtadienis');
            } else {
                if (diena === 5) {
                    console.log('penktadienis');
                } else {
                    if (diena === 6) {
                        console.log('sestadienis');
                    } else {
                        if (diena === 7) {
                            console.log('sekmadienis');
                        } else {
                            console.log('tokia diena savaiteje neegzistuoja');
                        }
                    }
                }
            }
        }
    }
}

console.log('-------------------');
const day = 8;
if (day === 1) {
    console.log('pirmadienis');
} else if (day === 2) {
    console.log('antradienis');
} else if (day === 3) {
    console.log('treciadienis');
} else if (day === 4) {
    console.log('ketvirtadienis');
} else if (day === 5) {
    console.log('penktadienis');
} else if (day === 6) {
    console.log('sestadienis');
} else if (day === 7) {
    console.log('sekmadienis');
} else {
    console.log('tokia diena neegzistuoja');
}

console.log('-------------------');

const nuoKadaSilta = 12;
const temp = 18;
const lietus = true;

if (lietus === true) {
    if (temp >= nuoKadaSilta) {
        console.log('1) varom nuogi');
    } else {
        console.log('1) pasiimk palta ir sketi');
    }
} else {
    if (temp >= nuoKadaSilta) {
        console.log('1) gali eiti su maike');
    } else {
        console.log('1) pasiimk striuke');
    }
}

if (lietus === true && temp >= nuoKadaSilta) {
    console.log('2) varom nuogi');
} else if (lietus === true && temp < nuoKadaSilta) {
    console.log('2) pasiimk palta ir sketi');
} else if (lietus === false && temp >= nuoKadaSilta) {
    console.log('2) gali eiti su maike');
} else if (lietus === false && temp < nuoKadaSilta) {
    console.log('2) pasiimk striuke');
}

const silta = temp >= nuoKadaSilta;
const ats = '3)' + lietus ? silta ? 'varom nuogi' : 'pasiimk palta ir sketi' : silta ? ' gali eiti su maike' : 'pasiimk striuke';
console.log(ats);