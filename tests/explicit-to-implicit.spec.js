/* eslint-disable global-require */
const path = require('path');
const fs = require('fs');
const ScoreCounter = require('score-tests');
const {
  add,
  subtract,
  multiply,
  power,
} = require('../src/explicit-to-implicit');

const testSuiteName = 'Explicit to Implicit Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

describe(testSuiteName, () => {
  it('The explicit returns have been converted to implicit returns', () => {
    const fileText = fs.readFileSync(path.join(__dirname, '../src/explicit-to-implicit.js'), 'utf-8');
    const noCommentsText = fileText.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '');

    expect(noCommentsText.includes('=>')).toBeTruthy();
    expect(noCommentsText.includes('return')).toBeFalsy();
    expect(noCommentsText.includes('function')).toBeFalsy();

    // Expect the functions to still work
    expect(add(1, 2)).toBe(3);
    expect(subtract(1, 2)).toBe(-1);
    expect(multiply(1, 2)).toBe(2);
    expect(power(1, 2)).toBe(1);
    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
