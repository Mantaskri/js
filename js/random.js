console.clear();

// [0..1)
// const n1 = Math.random();
// console.log(n1);

function randomBetween(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
}

const stats = {};

for (let i = 0; i < 100000000; i++) {
    const n = randomBetween(1, 2);
    if (n in stats) {
        stats[n]++;
    } else {
        stats[n] = 1;
    }
}

console.log(stats);