/* eslint-disable no-undef */
const path = require('path');
const ScoreCounter = require('score-tests'); // eslint-disable-line import/no-extraneous-dependencies
const { debugFunc } = require('../src/bad-hoist');

const testSuiteName = 'Debug Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

// mock console.log with jest mock function
const log = jest.spyOn(console, 'log').mockImplementation(() => { });

describe(testSuiteName, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('does not set any implicitly global variables', () => {
    // We're setting these globally to make sure YOU didn't.
    // Never use implicit global variables.
    time = undefined;
    theirName = undefined;
    mood = undefined;
    debugFunc();

    expect(time).toBeUndefined();
    expect(theirName).toBeUndefined();
    expect(mood).toBeUndefined();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('uses let and const, but not var', () => {
    const textContent = debugFunc.toString();

    // console.info('textContent:', textContent);
    expect(textContent.includes('let')).toBeTruthy();
    expect(textContent.includes('const')).toBeTruthy();
    expect(textContent.includes('var')).toBeFalsy();

    expect(textContent.includes('time =')).toBeTruthy();
    expect(textContent.includes('name =')).toBeTruthy();
    expect(textContent.includes('mood =')).toBeTruthy();
    expect(textContent.indexOf('mood =') !== textContent.lastIndexOf('mood =')).toBeTruthy();

    // don't just log out the exact strings
    expect(textContent.includes('Hello Zo, are you feeling happy today?')).toBeFalsy();
    expect(textContent.includes("Oh no, I'm sorry you're feeling sad today.")).toBeFalsy();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('Uses a template literal', () => {
    const textContent = debugFunc.toString();

    expect(textContent.includes('`')).toBeTruthy();
    expect(textContent.includes('${')).toBeTruthy();
    expect(textContent.match(/\+^\+/)).toBeFalsy();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('logs the correct output', () => {
    debugFunc();
    expect(log).toHaveBeenCalledTimes(2);
    expect(log).toHaveBeenNthCalledWith(1, 'Hello Zo, are you feeling happy today?');
    expect(log).toHaveBeenNthCalledWith(2, "Oh no, I'm sorry you're feeling sad today.");

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
