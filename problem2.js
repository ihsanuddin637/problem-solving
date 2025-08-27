const prompt = require("prompt-sync")();
function countVowel(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

const string = prompt("Enter a string: ");
const result = countVowel(string);
console.log(`Number of vowels: ${result}`);
