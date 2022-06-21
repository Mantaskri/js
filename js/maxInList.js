console.clear();



function max(list) {
    let maxNumber = -Infinity;

    for (const n of list) {
        if (Array.isArray(n)) {
            const maxChild = max(n);
            if (maxChild > maxNumber
                && typeof maxChild === 'number') {
                maxNumber = maxChild;
            }
        } else {
            if (typeof n !== 'number'
                || !isFinite(n)) {
                continue;
            }
            if (n > maxNumber) {
                maxNumber = n;
            }
        }
    }

    if (maxNumber === -Infinity) {
        return 'ERROR';
    }

    return maxNumber;
}

const l1 = [1, 5, 10, 7, 3.14, 6, 13, 4];
console.log(max(l1), '->', 13);

const l2 = [1, 2];
console.log(max(l2), '->', 2);

const l3 = ['labas', 2];
console.log(max(l3), '->', 2);

const l4 = [5, 'labas'];
console.log(max(l4), '->', 5);

const l5 = [-1, -5, -10, -7, -3.14, -6, -13, -4];
console.log(max(l5), '->', -1);

const l6 = [];
console.log(max(l6), '->', 'ERROR');

const l7 = ['labas', true, false, [], NaN, Infinity, -Infinity];
console.log(max(l7), '->', 'ERROR');

const l8 = [2, 1, [33, [4, [7, [11, 99, [0]]]]], 5];
console.log(max(l8), '->', 99);

const l9 = [2, 1, [33, 7], 5];
console.log(max(l9), '->', 33);

const l10 = [2, 1, [[3, 3], 7], 5];
console.log(max(l10), '->', 7);