console.clear();

const text = 'Labas rytas Lietuva';

function charCount(str) {
    const raides = {};

    for (const symbol of str) {
        if (raides[symbol]) {
            raides[symbol]++;
        } else {
            raides[symbol] = 1;
        }
    }

    return raides;
}

console.log(charCount(text));

const bigText = 'as tu jis banana ji mes tu jis ji jus jie jos mes jus jie jos as tu jis ji';

function wordCount(str) {
    const uniqueWords = {};
    const words = str.split(' ');

    for (const word of words) {
        if (uniqueWords[word]) {
            uniqueWords[word]++;
        } else {
            uniqueWords[word] = 1;
        }
    }

    return uniqueWords;
}

const dic = wordCount(bigText);

// for-in
let uniqueWordsCount = 0;
for (const key in dic) {
    uniqueWordsCount++;
    console.log(key, '->', dic[key]);
}

console.log(uniqueWordsCount);