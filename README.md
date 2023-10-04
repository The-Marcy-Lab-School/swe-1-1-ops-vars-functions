# Lesson 1.0.1 - Variables, Functions, and Strings

- [Lesson 1.0.1 - Variables, Functions, and Strings](#lesson-101---variables-functions-and-strings)
- [Before we start](#before-we-start)
  - [nodemon](#nodemon)
  - [playground.js](#playgroundjs)
- [Question 1: Advanced Greet](#question-1-advanced-greet)
- [Question 2: squishRepeat](#question-2-squishrepeat)
- [Question 3: capitalizeSentence](#question-3-capitalizesentence)
- [Question 4: copyFromTheLastChar](#question-4-copyfromthelastchar)
- [Question 5: replaceEveryGivenLetterWithWord](#question-5-replaceeverygivenletterwithword)
- [Question 6: capitalizeIndex](#question-6-capitalizeindex)
- [Question 7: hasOnlyOneOfThisLetter](#question-7-hasonlyoneofthisletter)
- [Question 8: MODIFY - Convert declarations to arrows](#question-8-modify---convert-declarations-to-arrows)
- [Question 9: MODIFY - Explicit to implicit returns](#question-9-modify---explicit-to-implicit-returns)
- [Question 10: DEBUG - Fix our mess of a function](#question-10-debug---fix-our-mess-of-a-function)

Alright, for tonight's assignment we have all three coding types ("from scratch", "modify", and "debug") but *no* short answers. Get started with `npm i` to install all dependencies and be sure to run your tests frequently.

If you're ever confused about what a function should do, **check the test files!**

# Before we start
## nodemon
It can get *pretty* tedious having to manually rerun our scripts all the time. It's why we recommend `test:w` when developing, those restarts on save are super nice.

But, there's a way to get `node` to auto restart too. If you use the `nodemon` package to run your scripts, it will automatically rerun the file on save. We're using it for our `playground.js` script. Check it out!

Usually, people install it globally, but we have it as dev a dependency. That's primarily because we're making HW assignments, and if any bugs occur, we want to know all students are using the same version.

## playground.js
This time we were even nicer, and imported all the `from-scratch` functions for you. We recommend using `npm run playground` to mess around with your work, and then `npm run test:w` when you get closer to the answers.

------------------

# Question 1: Advanced Greet
Write a function `advancedGreet` that takes two parameters: a string `name` and a string `mood`. It should return the string:

```plaintext
"Hello [name], are you feeling [mood] today?"
```

Here's the catch, you *must* use string templates and not concatenation.

# Question 2: squishRepeat
Write a function, `squishRepeat` that takes three parameters: a string `str`, a number `index`, and a number `num`. It should return a string that is created by taking a slice of the original string *up to* the `index`, and repeated `num` times.

NOTE: We will never give an index greater than the length of the string.

```js
squishRepeat('hello', 1, 3)
// 'hhh'
squishRepeat('hello', 2, 3)
// 'hehehe'
squishRepeat('neato', 4, 2)
// 'neatneat'
squishRepeat('wow', 3, 4)
// 'wowwowwowwow'
```

To do this, it's *highly* recommended that you use the built in [string method .repeat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat). Just give the docs a quick read, and you'll be set!

# Question 3: capitalizeSentence
Write a function `.capitalizeSentence()` that takes one parameter: a string `sentence`. The function should return the sentence with only the first letter modified to be capitalized.

NOTE: The sentence we give you will always be a normal length, and will always have a letter as the first character.

```js
capitalizeSentence('hello there!')
// Hello there!
```


# Question 4: copyFromTheLastChar
Write a function `copyFromTheLastChar` that takes two parameters: a string `str` and character `letter`. The function should return a copy of the given `str` from the `letter` to the end of the `str`. If the letter appears in the string more than once, copy from the *last* one. If the given letter is the last letter of the string, simply return the letter.

NOTE: the letter we give will ALWAYS appear in the given string at least once.

```js
copyFromTheLastChar('hello', 'e')
// ello
copyFromTheLastChar('hello', 'l')
// lo
copyFromTheLastChar('zzzzzz', 'z')
// z
```

# Question 5: replaceEveryGivenLetterWithWord
Write a function `replaceEveryGivenLetterWithWord` that takes three parameters: a string `str`, a character `letter`, and a string `word`. Return a string where you have replaced every instance of that `letter` in the `str` with the given `word`. If the `letter` does not appear in the `str`, return the original `str`.

NOTE: the `str`, `letter`, and `word` will all be lowercase.

```js
replaceEveryGivenLetterWithWord('hello', 'l', 'world')
// 'heworldworldo');
replaceEveryGivenLetterWithWord('I know you', 'k', "wow")
// "I wownow you");
replaceEveryGivenLetterWithWord('zoo', 'x', 'albatross')
// 'zoo');
```

# Question 6: capitalizeIndex
Write a function `capitalizeIndex` that takes two parameters: a string `word` and a number `index`. The `word` will have no punctuation or spaces, and will be all lower case. Return the word, with the letter at the `index` capitalized.

NOTE: The given `index` will only ever be in the range from 0 to str.length - 1.

```js
capitalizeIndex('hello', 0)
// 'Hello'
capitalizeIndex('hello', 1)
// 'hEllo'
capitalizeIndex('hello', 2)
// 'heLlo'
capitalizeIndex('hello', 3)
// 'helLo'
capitalizeIndex('hello', 4)
// 'hellO'
```

# Question 7: hasOnlyOneOfThisLetter
Write a function `hasOnlyOneOfThisLetter` that takes two parameters: a string `str` and a character `letter`. Return the boolean `true` if the given letter appears only once, and false if it appears more than once.

NOTE: We will always give a letter that appears *at least* once in the string.

# Question 8: MODIFY - Convert declarations to arrows
Inside `declarations-to-arrow.js` we have a few function declarations (and one *old school* `function` expression). Convert each of the functions to arrow function expressions, *while* maintaining exactly the same functionality. 

> ⚠️ Note: To pass the tests, you will also need to update the names of the functions. Take a look at `src/modify-spec.js` where we define our tests and find in the code where we import the functions from `declarations-to-arrow.js`. That will give you a hint for what we want the function names to be. 

# Question 9: MODIFY - Explicit to implicit returns
Now in `explicit-to-implicit.js`, we have those same functions simplified so they *only* return things. Let's convert them to arrow functions again *and* make them have implicit returns.

> ⚠️ Note: To pass the tests, you will also need to update the names of the functions. Take a look at `src/modify-spec.js` where we define our tests and find in the code where we import the functions from `explicit-to-implicit.js`. That will give you a hint for what we want the function names to be. 

# Question 10: DEBUG - Fix our mess of a function
Inside `bad-hoist.js` we have a doozy of a function. It's declaring variables with var, using implicit globals, has sloppy concatenation, and trying (poorly) to hoist variables into a message. Ugh.

Right now it logs:

```plaintext
Hello undefined, are you feeling undefined today?
Oh no, I'm sorry you're feeling happy today.
```

Make it so it logs:

```plaintext
Hello Zo, are you feeling happy today?
Oh no, I'm sorry you're feeling sad today.
```

Fix the function so:
- `var` is not used
- implicit globals are not used
- `const` and `let` are used correctly
- We use templates over concatenation
- we still have 4 variable assignments: 3 initializations and 1 reassignment
  - Basically, you can't just remove all the code and `console.log` those two strings.
