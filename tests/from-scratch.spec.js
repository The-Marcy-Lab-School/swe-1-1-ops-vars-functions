const path = require('path');
const ScoreCounter = require('score-tests'); // eslint-disable-line import/no-extraneous-dependencies
const {
  calculateArea,
  isEven,
  convertToFahrenheit,
  createGreeting,
  getInitials,
  formatPrice,
  getLarger,
  isValidAge,
} = require('../src/from-scratch');

const testSuiteName = 'From Scratch Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

describe(testSuiteName, () => {
  it('calculateArea - calculates rectangle area correctly', () => {
    expect(calculateArea(5, 3)).toBe(15);
    expect(calculateArea(10, 7)).toBe(70);
    expect(calculateArea(2, 8)).toBe(16);
    expect(calculateArea(0, 5)).toBe(0);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('isEven - returns true for even numbers, false for odd', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(4)).toBe(true);
    expect(isEven(6)).toBe(true);
    expect(isEven(0)).toBe(true);
    expect(isEven(1)).toBe(false);
    expect(isEven(3)).toBe(false);
    expect(isEven(5)).toBe(false);
    expect(isEven(-2)).toBe(true);
    expect(isEven(-1)).toBe(false);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('convertToFahrenheit - converts celsius to fahrenheit correctly', () => {
    expect(convertToFahrenheit(0)).toBe(32);
    expect(convertToFahrenheit(100)).toBe(212);
    expect(convertToFahrenheit(37)).toBeCloseTo(98.6, 1);
    expect(convertToFahrenheit(-40)).toBe(-40);
    expect(convertToFahrenheit(25)).toBe(77);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('createGreeting - creates proper greeting with name', () => {
    expect(createGreeting('Alice')).toBe('Hello, Alice!');
    expect(createGreeting('Bob')).toBe('Hello, Bob!');
    expect(createGreeting('')).toBe('Hello, !');
    expect(createGreeting('John Doe')).toBe('Hello, John Doe!');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('getInitials - extracts initials from first and last name', () => {
    expect(getInitials('John', 'Doe')).toBe('JD');
    expect(getInitials('Mary', 'Jane')).toBe('MJ');
    expect(getInitials('A', 'B')).toBe('AB');
    expect(getInitials('Xavier', 'Yamamoto')).toBe('XY');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('formatPrice - formats number as price string', () => {
    expect(formatPrice(5)).toBe('$5.00');
    expect(formatPrice(10)).toBe('$10.00');
    expect(formatPrice(0)).toBe('$0.00');
    expect(formatPrice(25)).toBe('$25.00');
    expect(formatPrice(100)).toBe('$100.00');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('getLarger - returns the larger of two numbers', () => {
    expect(getLarger(5, 3)).toBe(5);
    expect(getLarger(3, 5)).toBe(5);
    expect(getLarger(10, 10)).toBe(10);
    expect(getLarger(-5, -3)).toBe(-3);
    expect(getLarger(0, 1)).toBe(1);
    expect(getLarger(1, 0)).toBe(1);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('isValidAge - returns true for valid ages, false for invalid', () => {
    expect(isValidAge(0)).toBe(true);
    expect(isValidAge(18)).toBe(true);
    expect(isValidAge(65)).toBe(true);
    expect(isValidAge(120)).toBe(true);
    expect(isValidAge(-1)).toBe(false);
    expect(isValidAge(121)).toBe(false);
    expect(isValidAge(150)).toBe(false);
    expect(isValidAge(25)).toBe(true);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
