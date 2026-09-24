# Data Types, Operators, Variables, and Functions

Write small functions using Python's operators, variables, and f-strings.

**Practicing:** operators, variables, functions, scope

- [Before We Begin](#before-we-begin)
  - [What's In An Assignment?](#whats-in-an-assignment)
- [AI Use on This Assignment](#ai-use-on-this-assignment)
- [Setup](#setup)
- [From Scratch](#from-scratch)
  - [Question 1: `calculate_area`](#question-1-calculate_area)
  - [Question 2: `is_even`](#question-2-is_even)
  - [Question 3: `convert_to_fahrenheit`](#question-3-convert_to_fahrenheit)
  - [Question 4: `create_greeting`](#question-4-create_greeting)
  - [Question 5: `get_initials`](#question-5-get_initials)
  - [Question 6: `format_price`](#question-6-format_price)
  - [Question 7: `get_larger`](#question-7-get_larger)
  - [Question 8: `is_valid_age`](#question-8-is_valid_age)
- [Modify](#modify)
  - [Question 9: `return` vs `print`](#question-9-return-vs-print)
  - [Question 10: `greet`](#question-10-greet)
- [Debug](#debug)
  - [Question 11: Fix our mess of a function](#question-11-fix-our-mess-of-a-function)
- [Submitting](#submitting)
- [Good luck!](#good-luck)

## Before We Begin

Welcome to your first Python assignment! Before starting, we are going to go
over a few important things about assignments at Marcy.

### What's In An Assignment?

Assignments have three kinds of coding question.

- **From Scratch**: the bulk of the assignment. It tests your ability to look
  at a blank page and create something. Usually there is a `from_scratch.py`
  file, but not always.
- **Debug**: we'll be real with you, most of this job is fixing something
  broken. Here you get code that does not work, and you get it working by
  *mostly* relying on reading the tests.
- **Modify**: given some existing code, can you change or improve it? Like
  debug, there is existing code, but nothing is broken.

This assignment has all three. Not every assignment will. Read the whole
README and use the tests to confirm you have finished.

## AI Use on This Assignment

Use whichever mode matches where you are with this material. Both are fine,
and most people move between them as a concept clicks.

**Tutor mode.** The AI explains, questions, quizzes, and critiques, and you
write every line you submit. For this assignment that means asking it what an
f-string does, or having it quiz you on operators until you can predict what
your own code will do. Ask it a hundred questions — that is the whole point.
What you do not do is ask it for the function. Paste this at the start of a
chat and it will hold for the rest of the conversation:

> You are acting as a tutor. Your job is to explain what this coding question
> is asking, clarify confusing wording, and highlight the relevant concepts I
> need to know — but do not provide the full solution or code that directly
> answers the question. Instead, rephrase the problem in simpler terms,
> identify what is being tested, and suggest what steps or thought processes
> might help. Ask me guiding questions to make sure I am thinking critically.
> Do not write the final function, algorithm, or code implementation.

**Implementer mode.** You write a specification first, the AI writes code from
it, and then you verify that code line by line. For this assignment your spec
has to give each function's inputs, its return value, and one example. If what
comes back does more than you asked for, reject it — over-delivery is a
defect, and catching it is part of the job.

You own every line either way, and you will be asked to explain it.

## Setup

Work in `development/mod-1`. Make a draft branch before you start.

```sh
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
git checkout -b draft
```

Run `pytest` for everything, or `pytest -k is_even` for one question. Scores
land in `scores/scores.json`.

You can also try things out by hand in `src/playground.py` and run it with
`python3 src/playground.py`. Nothing in there is graded, so print whatever you
like.

75% of tests passing counts as complete. Submit at that point even if it is
not perfect. Treat submitting as a checkpoint rather than a finish line, and
come back to improve it.

## From Scratch

Okay, now let's get started! Write your solutions in `src/from_scratch.py`.

### Question 1: `calculate_area`

Write a function `calculate_area` that takes two parameters: a number `width`
and a number `height`. It should return the area of a rectangle.

```python
calculate_area(5, 3)
# 15
calculate_area(10, 7)
# 70
```

### Question 2: `is_even`

Write a function `is_even` that takes one parameter: a number. It should
return `True` if the number is even, and `False` if the number is odd.

```python
is_even(2)
# True
is_even(3)
# False
is_even(0)
# True
```

The `%` operator gives you the remainder after division, and a remainder of 0
is a strong hint about evenness.

### Question 3: `convert_to_fahrenheit`

Write a function `convert_to_fahrenheit` that takes one parameter: a number
`celsius`. It should return the temperature converted to Fahrenheit using the
formula `(celsius * 9 / 5) + 32`.

```python
convert_to_fahrenheit(0)
# 32
convert_to_fahrenheit(100)
# 212
convert_to_fahrenheit(-40)
# -40
```

That `-40` is not a typo. It is the one temperature where both scales agree,
which is a genuinely great piece of trivia.

### Question 4: `create_greeting`

Write a function `create_greeting` that takes one parameter: a string `name`.
It should return a greeting string in the format `"Hello, [name]!"`.

```python
create_greeting("Alice")
# "Hello, Alice!"
create_greeting("")
# "Hello, !"
```

An empty name still has to produce a valid string, comma and all.

### Question 5: `get_initials`

Write a function `get_initials` that takes two parameters: a string
`first_name` and a string `last_name`. It should return the first letter of
each, joined together.

```python
get_initials("John", "Doe")
# "JD"
```

A string can be indexed like a list. What is at index 0?

### Question 6: `format_price`

Write a function `format_price` that takes one parameter: a number `price`. It
should return the price as a string with a dollar sign and two decimal places.

```python
format_price(5)
# "$5.00"
format_price(0)
# "$0.00"
```

You could build this by hand, but do not. An f-string can round to two places
on its own with a format spec. Look up `:.2f` and enjoy how short the answer
gets.

### Question 7: `get_larger`

Write a function `get_larger` that takes two parameters: a number `num1` and a
number `num2`. It should return the larger of the two. If they are equal,
return that number.

```python
get_larger(5, 3)
# 5
get_larger(-5, -3)
# -3
```

### Question 8: `is_valid_age`

Write a function `is_valid_age` that takes one parameter: a number `age`. It
should return `True` if the age is from 0 to 120, and `False` otherwise. Both
0 and 120 count as valid.

```python
is_valid_age(120)
# True
is_valid_age(121)
# False
```

Python lets you chain comparisons, so you can write this the way you would say
it out loud. How about that?

## Modify

### Question 9: `return` vs `print`

Make each of the four functions in `src/return_vs_print.py` return its result.
They print their answer but never give it back, so `add(2, 3)` prints the right
message and evaluates to `None`, which means `add(add(1, 2), 3)` falls apart.

Keep the printed messages exactly as they are.

```python
add(2, 3)
# prints "The sum of 2 and 3 is 5", returns 5
add(add(1, 2), 3)
# 6
```

Printing shows a human something. Returning gives the value back to your code.
A function that only prints is a dead end, and this trips up almost everyone
once.

### Question 10: `greet`

Modify `greet` in `src/default_args.py` so that only `name` is required. It
currently demands all three parameters.

Give `greeting` a default of `"Hello"` and `punctuation` a default of `"!"`.

```python
greet("Alice")
# "Hello, Alice!"
greet("Bob", "Hi")
# "Hi, Bob!"
greet("Dev", punctuation=".")
# "Hello, Dev."
greet(greeting="Yo", name="Eve")
# "Yo, Eve!"
```

Look at those last two calls — naming your arguments lets them arrive in any
order you like.

## Debug

### Question 11: Fix our mess of a function

Inside `src/bad_scope.py` we have a doozy of a function. It is reaching for a
global, gluing strings together with `+`, and trying (poorly) to use variables
before it has actually made them. Ugh.

Right now it does not even run:

```text
UnboundLocalError: cannot access local variable 'their_name'
where it is not associated with a value
```

Make it so it prints:

```text
Hello Zo, are you feeling happy today?
Oh no, I'm sorry you're feeling sad today.
```

Fix the function so:

- `global` is not used
- every name is assigned before it is read
- f-strings are used instead of `+` concatenation
- the finished sentences are not just printed as literal strings
- in the end you will have 4 variable assignments: 3 initial ones and 1
  reassignment

That last point is the interesting one. Python decides a name belongs to the
**whole** function before running any of it. So reading `their_name` above its
assignment fails, even though the assignment sits right below. Where do the
assignments need to go?

## Submitting

```sh
git add -A
git commit -m "your message"
git push
```

Open a pull request to your instructor for feedback.

## Good luck!

This is the foundation everything else sits on. Take your time with it, and
you can do this!
