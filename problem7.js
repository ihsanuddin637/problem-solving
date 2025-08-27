function evenNumber() {
  const numbers = [7, 10, 15, 8, 13, 18, 6, 48];
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  console.log(evenNumbers);
}

evenNumber();
