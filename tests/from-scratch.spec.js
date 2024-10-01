const path = require('path');
const ScoreCounter = require('score-tests'); // eslint-disable-line import/no-extraneous-dependencies
const {
  advancedGreet,
  squishRepeat,
  capitalizeSentence,
  copyFromTheLastChar,
  replaceEveryGivenLetterWithWord,
  capitalizeIndex,
  hasOnlyOneOfThisLetter,
} = require('../src/from-scratch');

const testSuiteName = 'From Scratch Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

describe(testSuiteName, () => {
  it('advancedGreet - greets any name and mood correctly', () => {
    const randomName = Math.random().toString(36).substring(7);
    const randomMood = Math.random().toString(36).substring(7);
    expect(advancedGreet(randomName, randomMood))
      .toBe(`Hello ${randomName}, are you feeling ${randomMood} today?`);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('advancedGreet - uses string template', () => {
    const textContent = advancedGreet.toString();

    expect(textContent.includes('`')).toBeTruthy();
    expect(textContent.includes('${')).toBeTruthy();
    expect(textContent.match(/\+^\+/)).toBeFalsy();

    expect(advancedGreet('tom', 'ok')).toBe(`Hello tom, are you feeling ok today?`);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('squishRepeat - repeats a slice of a string a given number of times', () => {
    expect(squishRepeat('hello', 1, 3)).toBe('hhh');
    expect(squishRepeat('hello', 2, 3)).toBe('hehehe');
    expect(squishRepeat('neato', 4, 2)).toBe('neatneat');
    expect(squishRepeat('wow', 3, 4)).toBe('wowwowwowwow');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('capitalizeSentence - capitalizes the first letter of a sentence', () => {
    expect(capitalizeSentence('hello')).toBe('Hello');
    expect(capitalizeSentence('hello world')).toBe('Hello world');
    expect(capitalizeSentence('hello world, how are you?')).toBe('Hello world, how are you?');
    expect(capitalizeSentence('Hey alright then.')).toBe('Hey alright then.');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('copyFromTheLastChar - copies a string from the last index', () => {
    expect(copyFromTheLastChar('hello', 'l')).toBe('lo');
    expect(copyFromTheLastChar('wow', 'w')).toBe('w');
    expect(copyFromTheLastChar('okay', 'a')).toBe('ay');
    expect(copyFromTheLastChar('zzzzzzzz', 'z')).toBe('z');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('replaceEveryGivenLetterWithWord - replaces every given letter with a word', () => {
    expect(replaceEveryGivenLetterWithWord('hello', 'l', 'world')).toBe('heworldworldo');
    expect(replaceEveryGivenLetterWithWord('hey there', 'e', 'all')).toBe('hally thallrall');
    expect(replaceEveryGivenLetterWithWord('I know you', 'k', 'wow')).toBe('I wownow you');
    expect(replaceEveryGivenLetterWithWord('zzzzzzzz', 'z', 'a')).toBe('aaaaaaaa');
    expect(replaceEveryGivenLetterWithWord('zoo', 'x', 'albatross')).toBe('zoo');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('capitalizeIndex - capitalizes the letter at a given index', () => {
    expect(capitalizeIndex('hello', 0)).toBe('Hello');
    expect(capitalizeIndex('hello', 1)).toBe('hEllo');
    expect(capitalizeIndex('hello', 2)).toBe('heLlo');
    expect(capitalizeIndex('hello', 3)).toBe('helLo');
    expect(capitalizeIndex('hello', 4)).toBe('hellO');
    expect(capitalizeIndex('zzzz', 0)).toBe('Zzzz');
    expect(capitalizeIndex('zzzz', 1)).toBe('zZzz');
    expect(capitalizeIndex('zzzz', 2)).toBe('zzZz');
    expect(capitalizeIndex('zzzz', 3)).toBe('zzzZ');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('hasOnlyOneOfThisLetter - returns true if there is only one of this letter', () => {
    expect(hasOnlyOneOfThisLetter('hello', 'h')).toBeTruthy();
    expect(hasOnlyOneOfThisLetter('hello', 'l')).toBeFalsy();
    expect(hasOnlyOneOfThisLetter('hello', 'o')).toBeTruthy();
    expect(hasOnlyOneOfThisLetter('wow', 'o')).toBeTruthy();
    expect(hasOnlyOneOfThisLetter('wow', 'w')).toBeFalsy();
    expect(hasOnlyOneOfThisLetter('okay', 'a')).toBeTruthy();
    expect(hasOnlyOneOfThisLetter('alright then', 'a')).toBeTruthy();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
