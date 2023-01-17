//Largest word length in a string
function largestWordInAString(str) {
    let longestWord = 0;
    let longestWordLength = 0;
    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestWordLength) {
            longestWordLength = arr[i].length;
            longestWord = arr[i];
        }
    }
    return [longestWordLength, longestWord];
}

console.log(largestWordInAString("What if we try a super-long word such as otorhinolaryngology"));