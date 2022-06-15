console.clear();

// Paprastas ir sudetingas uzraymo budas

/*
const petrasFirstName = 'Petras';
const petrasAge = 99;
const petrasIsMarried = true;

const maryteFirstName = 'Maryte';
const maryteAge = 87;
const maryteIsMarried = false;

const jonasFirstName = 'Jonas;'
const jonasAge = 66;
const jonasIsMarried = false;

const onaFirstName = 'Ona';
const onaAge = 17;
const onaIsMarried = true;

console.log(onaFirstName, onaAge, onaIsMarried);
console.log()
*/


/* Supaprastinta, bet labai svarbus eiliskumas 
   ir jei dings kintamasis bus neaisku, kas jo netenka */
/*
const names = ['Petras', 'Maryte', 'Jonas', 'Ona'];
const ages = [99, 87, 66, 17];
const isMarried = [true, false, false, true];

const personIndex = 1;
const personName = names[personIndex];
const personAge = ages[personIndex];
const personStatus = isMarried[personIndex];

console.log(personName, personAge, personStatus);
*/


// Masyvas
/*
const people = [
    ['Petras', 99, true],
    ['Maryte', 87, false],
    ['Jonas', 66, false],
    ['Ona', 17, true],
];

const personIndex = 0;
const personName = people[personIndex][0];
const personAge = people[personIndex][1];
const personStatus = people[personIndex][2];

console.log(personName);
console.log(personAge);
console.log(personStatus);
*/
console.clear();

const people = [
    {
        name: 'Petras',
        age: 99,
        isMarried: true,
        marks: [10, 2, 8, 4, 6],
    },
    {
        name: 'Maryte',
        age: 87,
        isMarried: false,
        marks: [10, 2, 8, 4, 6],
    },
    {
        name: 'Jonas',
        age: 66,
        isMarried: false,
        marks: [10, 2, 8, 4, 6],
    },
    {
        name: 'Ona',
        age: 17,
        isMarried: true,
        marks: [10, 2, 8, 4, 6],
    },
];

const pn = people[3]['name'];
const pa = people[3]['age'];
const pm = people[3]['marks'][0];
const ps = people[3]['isMarried'];

const pn2 = people[3].name;
const pa2 = people[3].age;
const pm2 = people[3].marks[0];
const ps2 = people[3].isMarried;

console.log(pn);
console.log(pa);
console.log(pm);
console.log(ps);

console.log(pn2);
console.log(pa2);
console.log(pm2);
console.log(ps2);

const students = [
    {
        name: 'Petras',
        dob: 2015,
        marks: [],
        gender: true,
        responsibleHumans: [
            {
                name: 'Jonas',
                status: 'parent',
                dob: 1999,
                phone: [
                    4859624856,
                    4859624857,
                ],
                email: [
                    'jonas@jonas.jonas',
                    'jonas2@jonas2.jonas2',
                ],
                address: {
                    country: 'LTU',
                    city: 'Vilnius',
                    street: 'Verkiu g.',
                    buildingNr: 1,
                    appartmentNr: 13,
                }
            },
            {
                name: 'Maryte',
                status: 'parent',
                dob: 1999,
                phone: [
                    4859624856,
                    4859624857,
                    4859624858,
                    4859624859,
                ],
                email: [
                    'maryte@maryte.maryte',
                    'maryte2@maryte2.maryte2',
                ],
                address: {
                    country: 'LTU',
                    city: 'Vilnius',
                    street: 'Verkiu g.',
                    buildingNr: 1,
                    appartmentNr: 13,
                }
            },
            {
                name: 'Ona',
                status: 'parent',
                dob: 1999,
                phone: [
                    4859624856,
                ],
                email: [
                    'Ona@Ona.Ona',
                    'Ona2@Ona2.Ona2',
                ],
                address: {
                    country: 'LTU',
                    city: 'Vilnius',
                    street: 'Verkiu g.',
                    buildingNr: 1,
                    appartmentNr: 13,
                }
            },
        ]
    }
];

const respHumans = students[0].responsibleHumans;

console.log('-------------------');
let nr = 0;
for (const human of respHumans) {
    console.log(++nr, ')', human.name);

    for (const phone of human.phone) {
        console.log('-', phone);
    }
}

console.log('-------------------');
for (let i = 0; i < respHumans.length; i++) {
    const human = respHumans[i];
    console.log(i + 1, ')', human.name);

    for (let j = 0; j < human.phone.length; j++) {
        const phone = human.phone[j];
        console.log('-', phone);
    }
}

console.log(
    students[0].responsibleHumans[1].address.street,
    students[0].responsibleHumans[1].address.buildingNr,
);
