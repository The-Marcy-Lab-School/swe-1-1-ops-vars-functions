/* eslint-disable global-require */
const path = require('path');
const fs = require('fs');
const ScoreCounter = require('score-tests');
const {
  addArrow,
  subtractArrow,
  multiplyArrow,
  powerArrow,
} = require('../src/declarations-to-arrow');
const {
  addImplicit,
  subtractImplicit,
  multiplyImplicit,
  powerImplicit,
} = require('../src/explicit-to-implicit');

const testSuiteName = 'Modify Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

describe(testSuiteName, () => {
  it('The declarations have been converted to arrows', () => {
    const fileText = fs.readFileSync(path.join(__dirname, '../src/declarations-to-arrow.js'), 'utf-8');

    expect(fileText.includes('=> {')).toBeTruthy();
    expect(fileText.includes('function')).toBeFalsy();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('The implicit returns have been converted to implicit returns', () => {
    const fileText = fs.readFileSync(path.join(__dirname, '../src/explicit-to-implicit.js'), 'utf-8');

    expect(fileText.includes('=>')).toBeTruthy();
    expect(fileText.includes('return')).toBeFalsy();
    expect(fileText.includes('function')).toBeFalsy();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('The functions still work', () => {
    expect(addArrow(1, 2)).toBe(3);
    expect(subtractArrow(1, 2)).toBe(-1);
    expect(multiplyArrow(1, 2)).toBe(2);
    expect(powerArrow(1, 2)).toBe(1);
    expect(addImplicit(1, 2)).toBe(3);
    expect(subtractImplicit(1, 2)).toBe(-1);
    expect(multiplyImplicit(1, 2)).toBe(2);
    expect(powerImplicit(1, 2)).toBe(1);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
