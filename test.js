const heads = [1, 2, 3, 4, 5];

const tails = [];
let previousArray = false;

for (let i = 0; i < heads.length; i++) {
    const initialHead = heads[heads.length - 1];
    let newHead = initialHead - i;

    if (!previousArray) {
        tails.push(newHead);
    } else {
        tails.push(newHead);
    }

    previousArray = newHead;
}

console.log(tails);
