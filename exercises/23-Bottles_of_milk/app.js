// Your code here:
function getVerse(number) {
    let bottleWord = "bottles";
    if (number === 1) {
        bottleWord = "bottle";
    }

    let nextBottleWord = "bottles";
    let nextCount = number - 1;

    if (nextCount === 1) {
        nextBottleWord = "bottle";
    }

    if (nextCount === 0) {
        nextCount = "no more";
    }

    if (number > 0) {
        return `${number} ${bottleWord} of milk on the wall, ${number} ${bottleWord} of milk. Take one down and pass it around, ${nextCount} ${nextBottleWord} of milk on the wall.\n`;
    } else {
        return "No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.\n";
    }
}

for (let i = 99; i >= 0; i--) {
    let verse = getVerse(i);
    console.log(verse);
}


