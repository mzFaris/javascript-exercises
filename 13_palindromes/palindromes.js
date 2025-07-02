const palindromes = function(str) {
  const alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789";
  const cleanStr = str
    .toLowerCase()
    .split("")
    .filter(char => alphanumeric.includes(char))
    .join("");
  const reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
