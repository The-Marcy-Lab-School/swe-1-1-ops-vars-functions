# Operators, Variables, and Functions

Write small functions using Python's operators, variables, and f-strings.

**Practicing:** operators, variables, functions, scope

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
  - [Question 11: `debug_func`](#question-11-debug_func)
- [Submitting](#submitting)
- [Good luck!](#good-luck)

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

Run `pytest` for everything, or `pytest -k is_even` for one question.
Scores land in `scores/scores.json`.

75% of tests passing counts as complete. Submit at that point even if it is
not perfect. Treat submitting as a checkpoint rather than a finish line, and
come back to improve it.

## From Scratch

Write your solutions in `src/from_scratch.py`.

### Question 1: `calculate_area`

Return the area of a rectangle.

```python
calculate_area(5, 3)   # 15
```

### Question 2: `is_even`

Return `True` if `number` is even, `False` if odd. Negative numbers count too.

```python
is_even(4)    # True
is_even(-1)   # False
```

The `%` operator gives you the remainder, and a remainder of 0 is a strong
hint about evenness.

### Question 3: `convert_to_fahrenheit`

Convert celsius to fahrenheit using `(celsius * 9 / 5) + 32`.

```python
convert_to_fahrenheit(100)   # 212
convert_to_fahrenheit(-40)   # -40
```

That `-40` is not a typo. It is the one temperature where both scales agree,
which is a genuinely great piece of trivia.

### Question 4: `create_greeting`

Return a greeting. An empty name still returns a valid string.

```python
create_greeting("Alice")   # "Hello, Alice!"
create_greeting("")        # "Hello, !"
```

### Question 5: `get_initials`

Return the first letter of each name, joined together.

```python
get_initials("John", "Doe")   # "JD"
```

A string can be indexed like a list. What is at index 0?

### Question 6: `format_price`

Return the price as a string with a dollar sign and two decimal places.

```python
format_price(5)   # "$5.00"
format_price(0)   # "$0.00"
```

You could build this by hand, but do not. An f-string can round to two places
on its own with a format spec. Look up `:.2f` and enjoy how short the answer
gets.

### Question 7: `get_larger`

Return the larger of two numbers. Equal numbers return that number.

```python
get_larger(5, 3)     # 5
get_larger(-5, -3)   # -3
```

### Question 8: `is_valid_age`

Return `True` if `age` is from 0 to 120, and `False` otherwise. Both ends
count as valid.

```python
is_valid_age(120)   # True
is_valid_age(121)   # False
```

Python lets you chain comparisons, so you can write this the way you would say
it out loud. How about that?

## Modify

### Question 9: `return` vs `print`

Make each function in `src/return_vs_print.py` return its result. They print
their answer but never give it back, so `add(2, 3)` prints the right message
and evaluates to `None`, which means `add(add(1, 2), 3)` falls apart.

Keep the printed messages exactly as they are.

```python
add(2, 3)             # prints "The sum of 2 and 3 is 5", returns 5
add(add(1, 2), 3)     # 6
```

Printing shows a human something. Returning gives the value back to your code.
A function that only prints is a dead end, and this trips up almost everyone
once.

### Question 10: `greet`

`src/default_args.py` has a `greet` that demands all three arguments. Give
`greeting` and `punctuation` default values so only `name` is required.

```python
greet("Alice")                      # "Hello, Alice!"
greet("Bob", "Hi")                  # "Hi, Bob!"
greet("Dev", punctuation=".")       # "Hello, Dev."
greet(greeting="Yo", name="Eve")    # "Yo, Eve!"
```

Defaults must be `"Hello"` and `"!"`. Look at those last two calls — naming
your arguments lets them arrive in any order you like.

## Debug

### Question 11: `debug_func`

`debug_func` in `src/bad_scope.py` looks reasonable and crashes immediately
with an `UnboundLocalError`. It complains about `their_name`, even though
`their_name` is assigned on the very next line.

Python decides a name is local to the **whole** function body before running
any of it, so reading it above its assignment fails. Where would the
assignments need to be for that to stop happening?

Fix it so it prints exactly this:

```text
Hello Zo, are you feeling happy today?
Oh no, I'm sorry you're feeling sad today.
```

Four things the tests check:

- Every name is assigned before it is read.
- No `global`. The function keeps its variables to itself.
- Use an f-string, not `+` to glue strings together.
- `mood` changes between the two lines, so do not print finished strings.

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
