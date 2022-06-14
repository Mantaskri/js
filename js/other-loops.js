const marks = [10, 2, 8, 4, 6];

// for

for (let i = 0; i < marks.length; i++) {
    const mark = marks[i];
    console.log(mark);
}

// for-of

for (const mark of marks) {
    console.log(mark);
}

// while

let i = 0;
while (i < marks.length) {
    const mark = marks[i];
    console.log(mark);
    i++;
}

// do-while

let i2 = 0;
do { const mark = marks[i2];
    console.log(mark);
    i2++;
} while (i2 < marks.length)

// foreach

marks.forEach(mark => {
    console.log(mark);
})

// map - kaip modifikuoti kiekviena nari

const rezMap = marks
    .map(mark => mark * 2)
    .map(mark => mark > 10 ? 10 : mark);
console.log(marks);
console.log(rezMap);

// map - kaip modifikuoti kiekviena nari

console.log('----- filter');
const filterMarks = marks
    .filter(mark => mark > 2)
    .filter(mark => mark < 7);

const filterMarks2 = marks.filter(mark => mark > 2 && mark < 7);

console.log(marks);
console.log(filterMarks);
console.log(filterMarks2);

// map & filter combo

console.log('----- map-filter');
const mapFilter = marks
    .map(mark => mark * 2)
    .filter(mark => mark > 5);

console.log(marks);
console.log(mapFilter);

// reduce (subendrinti)

console.log('----- reduce');
const sumReduce = marks.reduce((total, mark) => total + mark);
const sumReduce20 = marks.reduce((total, mark) => total + mark, 20);
console.log(sumReduce);
console.log(sumReduce20);

const difReduce = marks.reduce((total, mark) => total - mark);
const difReduce20 = marks.reduce((total, mark) => total - mark, 20);
console.log(difReduce);
console.log(difReduce20);

const multiReduce = marks.reduce((total, mark) => total * mark);
const multiReduce20 = marks.reduce((total, mark) => total * mark, 20);
console.log(multiReduce);
console.log(multiReduce20);

const divReduce = marks.reduce((total, mark) => total / mark);
const divReduce20 = marks.reduce((total, mark) => total / mark, 20);
console.log(divReduce);
console.log(divReduce20);

// sort

console.log('----- sort:numbers');
const numList = [10, 2, 8, 4, 6, 1, 7, 23, 17];
const minMaxList = [...numList].sort((a, b) => a - b);
const maxMinList = [...numList].sort((a, b) => b - a);

console.log(numList);
console.log(minMaxList);
console.log(maxMinList);

console.log('----- sort:strings');
const stringList = ['b', 'd', 'c', 'de', 'be', 'a', 'at'];
const stringsSort = [...stringList].sort();
const minMaxStrings = [...stringList].sort((a, b) => a > b ? -1 : 1);
const maxMinStrings = [...stringList].sort((a, b) => a < b ? -1 : 1);

console.log(stringList);
console.log(stringsSort);
console.log(minMaxStrings);
console.log(maxMinStrings);