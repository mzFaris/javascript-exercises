const reverseString = function(str) {
    const letters = str.split("");
    const reversedLetters = [];
    for (let i = 0, length = letters.length; i < length; i++) {
        reversedLetters.push(letters.pop());
    }
    return reversedLetters.join("");
};

console.log(reverseString("hello"))

// Do not edit below this line
module.exports = reverseString;
