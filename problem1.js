function reverseStringLoop(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

const originalString = "Hello";
const reversedString = reverseStringLoop(originalString);
console.log(reversedString);
