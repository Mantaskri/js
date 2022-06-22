console.clear();

const family = [
    {
        name: 'Petras',
        age: 9,
        children: [
            {
                name: 'Juozas',
                age: 44,
                children: [
                    {
                        name: 'Styvas',
                        age: 105,
                    },
                    {
                        name: 'Maryte',
                        age: 87,
                        children: [],
                    },
                ],
            },
            {
                name: 'Ona',
                age: 67,
                children: [],
            },
        ],
    },
    {
        name: 'Maryte',
        age: 95,
        children: [
            {
                name: 'Jonas',
                age: 50,
            },
            {
                name: 'Zose',
                age: 100,
            },
        ],
    },
];

function oldest(list, depth = 0) {
    let age = -1;
    let name = '';
    for (const person of list) {
        if (person.age > age) {
            age = person.age;
            name = person.name;
        }
        if (person.children && person.children.length > 0) {
            const oldestChild = oldest(person.children, depth +1);
            if (oldestChild > age) {
                age = oldestChild
                name = oldestChild.name;
            }
        }
    }
    console.log(depth , {name, age });
    return depth === 0 ? `${name} is ${age} years old.` : { name, age };
} 
console.log(oldest(family)); // Styvas is 105 years old.