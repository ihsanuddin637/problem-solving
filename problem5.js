const numbers = [2, 3, 3, 7, 9, 9, 11, 12];
const removeDuplicate = numbers.filter(
  (number, index) => numbers.indexOf(number) !== index
);

console.log(removeDuplicate);