function add(a, b) {
  const result = a + b;
  console.log(`The sum of ${a} and ${b} is ${result}`);
  return result;
}

function subtract(a, b) {
  const result = a - b;
  console.log(`The difference between ${a} and ${b} is ${result}`);
  return result;
}

const multiply = function (a, b) {
  const result = a * b;
  console.log(`The product of ${a} and ${b} is ${result}`);
  return result;
}

function power(a, b) {
  const result = a ** b;
  console.log(`${a} to the power of ${b} is ${result}`);
  return result;
}

module.exports = {
  add,
  subtract,
  multiply,
  power,
};
