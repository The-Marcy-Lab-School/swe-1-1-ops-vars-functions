# Data Types, Operators, Variables, & Functions

- [Before we start](#before-we-start)
  - [Get Set Up](#get-set-up)
  - [nodemon](#nodemon)
  - [playground.js](#playgroundjs)
- [Question 1: calculateArea](#question-1-calculatearea)
- [Question 2: isEven](#question-2-iseven)
- [Question 3: convertToFahrenheit](#question-3-converttofahrenheit)
- [Question 4: createGreeting](#question-4-creategreeting)
- [Question 5: getInitials](#question-5-getinitials)
- [Question 6: formatPrice](#question-6-formatprice)
- [Question 7: getLarger](#question-7-getlarger)
- [Question 8: isValidAge](#question-8-isvalidage)
- [Question 9: MODIFY - Convert declarations to arrows](#question-9-modify---convert-declarations-to-arrows)
- [Question 10: MODIFY - Explicit to implicit returns](#question-10-modify---explicit-to-implicit-returns)
- [Question 11: DEBUG - Fix our mess of a function](#question-11-debug---fix-our-mess-of-a-function)

Alright, for tonight's assignment we have all three coding types ("from scratch", "modify", and "debug"). Get started with `npm i` to install all dependencies and be sure to run your tests frequently.

If you're ever confused about what a function should do, **check the test files!**

## Before we start

### Get Set Up

For guidance on setting up and submitting this assignment, refer to the Marcy lab School Docs How-To guide for [Working with Short Response and Coding Assignments](https://marcylabschool.gitbook.io/marcy-lab-school-docs/fullstack-curriculum/how-tos/working-with-assignments#how-to-work-on-assignments).

### nodemon
It can get *pretty* tedious having to manually rerun our scripts all the time. It's why we recommend `test:w` when developing, those restarts on save are super nice.

But, there's a way to get `node` to auto restart too. If you use the `nodemon` package to run your scripts, it will automatically rerun the file on save. We're using it for our `playground.js` script. Check it out!

Usually, people install it globally, but we have it as dev a dependency. That's primarily because we're making HW assignments, and if any bugs occur, we want to know all students are using the same version.

### playground.js
This time we were even nicer, and imported all the `from-scratch` functions for you. We recommend using `npm run playground` to mess around with your work, and then `npm run test:w` when you get closer to the answers.

------------------

## Question 1: calculateArea
Write a function `calculateArea` that takes two parameters: a number `width` and a number `height`. It should return the area of a rectangle.

```js
calculateArea(5, 3)
// 15
calculateArea(10, 7)
// 70
```

## Question 2: isEven
Write a function `isEven` that takes one parameter: a number. It should return `true` if the number is even, and `false` if the number is odd.

```js
isEven(2)
// true
isEven(3)
// false
isEven(0)
// true
```

## Question 3: convertToFahrenheit
Write a function `convertToFahrenheit` that takes one parameter: a number `celsius`. It should return the temperature converted to Fahrenheit using the formula: `(celsius * 9/5) + 32`.

```js
convertToFahrenheit(0)
// 32
convertToFahrenheit(100)
// 212
convertToFahrenheit(37)
// 98.6
```

## Question 4: createGreeting
Write a function `createGreeting` that takes one parameter: a string `name`. It should return a greeting string in the format: `"Hello, [name]!"` 

(don't include the `[]` characters in the string. That is just to indicate a variable).

```js
createGreeting('Alice')
// "Hello, Alice!"
createGreeting('Bob')
// "Hello, Bob!"
```

## Question 5: getInitials
Write a function `getInitials` that takes two parameters: a string `firstName` and a string `lastName`. It should return the initials by taking the first letter of each name.

```js
getInitials('John', 'Doe')
// "JD"
getInitials('Mary', 'Jane')
// "MJ"
```

## Question 6: formatPrice
Write a function `formatPrice` that takes one parameter: an integer `price`. It should return a formatted price string in the format: `"$[price].00"` (without the `[]`).

```js
formatPrice(5)
// "$5.00"
formatPrice(10)
// "$10.00"
```

## Question 7: getLarger
Write a function `getLarger` that takes two parameters: a number `num1` and a number `num2`. It should return the larger of the two numbers.

```js
getLarger(5, 3)
// 5
getLarger(3, 5)
// 5
getLarger(10, 10)
// 10
```

## Question 8: isValidAge
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

## Question 9: MODIFY - Convert declarations to arrows
Inside `declarations-to-arrow.js` we have a few function declarations (and one *old school* function expression). Convert each of the functions to arrow function expressions, *while* maintaining exactly the same functionality. 

## Question 10: MODIFY - Explicit to implicit returns
Now in `explicit-to-implicit.js`, we have those same functions simplified so they *only* return things. Let's convert them to arrow functions again *and* make them have implicit returns.

## Question 11: DEBUG - Fix our mess of a function
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
