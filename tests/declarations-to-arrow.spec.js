/* eslint-disable global-require */
const path = require('path');
const fs = require('fs');
const {
  add,
  subtract,
  multiply,
  power,
} = require('../src/declarations-to-arrow');

const testSuiteName = 'Declarations to Arrow Tests';

describe(testSuiteName, () => {
  it('The declarations have been converted to arrows', () => {
    const fileText = fs.readFileSync(path.join(__dirname, '../src/declarations-to-arrow.js'), 'utf-8');
    const noCommentsText = fileText.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '');

    expect(noCommentsText.includes('=> {')).toBeTruthy();
    expect(noCommentsText.includes('function')).toBeFalsy();

    // Expect the functions to still work
    expect(add(1, 2)).toBe(3);
    expect(subtract(1, 2)).toBe(-1);
    expect(multiply(1, 2)).toBe(2);
    expect(power(1, 2)).toBe(1);
  });
});
