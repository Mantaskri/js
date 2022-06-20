console.clear();

const a = [1, 2, 3];
const b = [4, 5, 6];
const e = [7, 8, 9];

console.log('a:', a);
console.log('b:', b);

console.log('-------------');
const c = a.concat(e, b, a);
const d = [...a, ...e, ...b];

console.log('a:', a);
console.log('b:', b);
console.log('c:', c);
console.log('d:', d);