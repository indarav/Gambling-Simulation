const initialValue = 0;
const numbers = [10, 20, 30, 40];
const finalNumbers = numbers.reduce((previousValue, currentValue) => previousValue+currentValue, initialValue);
console.log(finalNumbers);
