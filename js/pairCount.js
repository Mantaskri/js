console.clear()

const input =
'25892981792631471969267453951682402092784389387235295443373147775875406894535919831124711984842655404060198438865132912203262428291203041008462211699331029';

function pairCount(str) {
    const ats = Array(100).fill(0);
    for (let i = 0; i < str.length - 1; i++) {
        const current = str[i];
        const next = str[i + 1];
        const index = parseInt(current + next);
        ats [+index]++;            
        }
    
    return ats;
}
function max(list) {
    const biggest = [...list].sort((a, b) => b - a)[0];
    const ats = [];
    for (let i = 0; i < list.length; i++) {
    if (list[i] === biggest) {
        ats.push(i);
    }
}
return ats;
}
const pairs = pairCount(input);
const maxList = max(pairs);

console.log(pairs);
console.log(pairs.sort((a, b) => a - b));
