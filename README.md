# Data Types, Operators, Variables, & Functions

- [Before We Begin](#before-we-begin)
  - [What's In An Assignment?](#whats-in-an-assignment)
  - [Asking ChatGPT for Help](#asking-chatgpt-for-help)
  - [Be Okay With Being "Provisionally Complete"](#be-okay-with-being-provisionally-complete)
- [Set Up](#set-up)
  - [Manual Testing in playground.js](#manual-testing-in-playgroundjs)
- [From Scratch Questions](#from-scratch-questions)
  - [Question 1: calculateArea](#question-1-calculatearea)
  - [Question 2: isEven](#question-2-iseven)
  - [Question 3: convertToFahrenheit](#question-3-converttofahrenheit)
  - [Question 4: createGreeting](#question-4-creategreeting)
  - [Question 5: getInitials](#question-5-getinitials)
  - [Question 6: formatPrice](#question-6-formatprice)
  - [Question 7: getLarger](#question-7-getlarger)
  - [Question 8: isValidAge](#question-8-isvalidage)
- [Modify Questions](#modify-questions)
  - [Question 9: Convert declarations to arrows](#question-9-convert-declarations-to-arrows)
  - [Question 10: Explicit to implicit returns](#question-10-explicit-to-implicit-returns)
- [Debug Questions](#debug-questions)
  - [Question 11: Fix our mess of a function](#question-11-fix-our-mess-of-a-function)


## Before We Begin

Welcome to your first JavaScript assignment! Before starting, we're going to go over a few important things about assignments at Marcy.

### What's In An Assignment?

In your assignments, we have three coding types ("from scratch", "modify", and "debug").

- **From Scratch**: This is the bulk of the assignment. It's testing your ability to look at a blank page and create something. Usually, there will be a "from-scratch.js" file, but not always!
- **Debug**: We'll be real with you: most of this job is fixing something broken. So in this part you'll be asked to try and get something working by *mostly* relying on reading tests.
- **Modify**: Given some existing code, can you enhance/change it? It's similar to debug in that there's existing code, but nothing is broken.

This assignment has all three types of coding questions but not every assignment will. Make sure to thoroughly read the README and use your tests to confirm you've completed the assignment!

### Asking ChatGPT for Help

If you’re stuck, you may use ChatGPT to clarify the assignment — but not to solve it for you. To do this, copy the meta-prompt below into ChatGPT along with the assignment question.

> You are acting as a tutor. Your job is to explain what this coding question is asking, clarify confusing wording, and highlight the relevant concepts students need to know — but do not provide the full solution or code that directly answers the question. Instead, focus on rephrasing the problem in simpler terms, identifying what’s being tested, and suggesting what steps or thought processes might help. Ask guiding questions to ensure the student is thinking critically. Do not write the final function, algorithm, or code implementation.

Be mindful of your AI usage on assignments. AI can be a great tool to help your learning but it can also be detrimental if you let it do too much of the thinking for you.

### Be Okay With Being "Provisionally Complete"

At Marcy, we will deem an assignment as "complete" if the solution passes at least **75%** of the automated tests. 

However, we know many of you will feel the urge to hold off on submitting until your assignment feels 100% perfect. That drive for excellence is an asset!

But perfectionism can also get in the way of learning — especially when we need to cover a lot in a short amount of time.

That’s why we encourage you to be comfortable with being **“provisionally complete.”** This means:

- Submitting your work even if it isn’t perfect yet
- Treating submission as a checkpoint, not a finish line
- Committing to return, revise, and improve later

Learning to move forward with provisional completeness will help you make steady progress while still building the habit of continuous improvement.

## Set Up

For guidance on setting up and submitting this assignment, refer to the Marcy lab School Docs How-To guide for [Working with Short Response and Coding Assignments](https://marcylabschool.gitbook.io/marcy-lab-school-docs/how-tos/working-with-assignments#how-to-work-on-assignments).

Here are some useful commands to remember.

```sh
npm i                   # install dependencies
git checkout -b draft   # switch to the draft branch before starting

npm test # run the automated tests
npm run test:w # run the automated tests and rerun them each time you save a change

git add -A              # add a changed file to the staging area
git commit -m 'message' # create a commit with the changes
git push                # push the new commit to the remote repo
```

### Manual Testing in playground.js

Check out the `playground.js` file. In it, we've imported all the `from-scratch` functions for you. This can be a useful place for you to test your functions by invoking them with various inputs and logging the result. To execute this file, use `node` or `nodemon`:

```sh
node playground.js     # run the playground file once
nodemon playground.js  # automatically run the file when files change
```

## From Scratch Questions

Okay, now let's get started!

### Question 1: calculateArea
Write a function `calculateArea` that takes two parameters: a number `width` and a number `height`. It should return the area of a rectangle.

```js
calculateArea(5, 3)
// 15
calculateArea(10, 7)
// 70
```

### Question 2: isEven
Write a function `isEven` that takes one parameter: a number. It should return `true` if the number is even, and `false` if the number is odd.

```js
isEven(2)
// true
isEven(3)
// false
isEven(0)
// true
```

### Question 3: convertToFahrenheit
Write a function `convertToFahrenheit` that takes one parameter: a number `celsius`. It should return the temperature converted to Fahrenheit using the formula: `(celsius * 9/5) + 32`.

```js
convertToFahrenheit(0)
// 32
convertToFahrenheit(100)
// 212
convertToFahrenheit(37)
// 98.6
```

### Question 4: createGreeting
Write a function `createGreeting` that takes one parameter: a string `name`. It should return a greeting string in the format: `"Hello, [name]!"` 

(don't include the `[]` characters in the string. That is just to indicate a variable).

```js
createGreeting('Alice')
// "Hello, Alice!"
createGreeting('Bob')
// "Hello, Bob!"
```

### Question 5: getInitials
Write a function `getInitials` that takes two parameters: a string `firstName` and a string `lastName`. It should return the initials by taking the first letter of each name.

```js
getInitials('John', 'Doe')
// "JD"
getInitials('Mary', 'Jane')
// "MJ"
```

### Question 6: formatPrice
Write a function `formatPrice` that takes one parameter: an integer `price`. It should return a formatted price string in the format: `"$[price].00"` (without the `[]`).

```js
formatPrice(5)
// "$5.00"
formatPrice(10)
// "$10.00"
```

### Question 7: getLarger
Write a function `getLarger` that takes two parameters: a number `num1` and a number `num2`. It should return the larger of the two numbers.

```js
getLarger(5, 3)
// 5
getLarger(3, 5)
// 5
getLarger(10, 10)
// 10
```

### Question 8: isValidAge
Write a function `isValidAge` that takes one parameter: a number `age`. It should return `true` if the age is between 0 and 120 (inclusive), and `false` otherwise.

```js
isValidAge(25)
// true
isValidAge(0)
// true
isValidAge(120)
// true
isValidAge(-1)
// false
isValidAge(121)
// false
```

## Modify Questions

### Question 9: Convert declarations to arrows
Inside `declarations-to-arrow.js` we have a few function declarations (and one *old school* function expression). Convert each of the functions to arrow function expressions, *while* maintaining exactly the same functionality. 

### Question 10: Explicit to implicit returns
Now in `explicit-to-implicit.js`, we have those same functions simplified so they *only* return things. Let's convert them to arrow functions again *and* make them have implicit returns.

## Debug Questions

### Question 11: Fix our mess of a function
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
- In the end, you will have 4 variable assignments: 3 initializations and 1 reassignment
