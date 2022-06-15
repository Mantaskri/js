console.clear();

const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
    '**': (a, b) => a ** b,
    '%': (a, b) => a % b,
    'proc': (a, b) => (b / a * 100).toFixed(2),
};

const userN1 = 7;
const userN2 = 5;
const userAction = 'proc';

const userFunc = operations[userAction];
const answer = userFunc(userN1, userN2);

console.log(userN1, userAction, userN2, '=', answer);