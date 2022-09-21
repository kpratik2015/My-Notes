# JS Functional Programming

- [JS Functional Programming](#js-functional-programming)
  - [Function as arguments i.e. First-Class functions.](#function-as-arguments-ie-first-class-functions)
  - [Returning functions. For when functions vary in a very little way.](#returning-functions-for-when-functions-vary-in-a-very-little-way)
  - [Argument checking](#argument-checking)
    - [Extending to flexible number of arguments with spread operator](#extending-to-flexible-number-of-arguments-with-spread-operator)
  - [JavaScript objects in a functional way](#javascript-objects-in-a-functional-way)
  - [Partial Application](#partial-application)
  - [Composition](#composition)
  - [Tips](#tips)
  - [Piping for Left-to-right readability](#piping-for-left-to-right-readability)

All paradigms try to solve the problem of organizing all the ideas that a program solves. Functional programming makes it easier to avoid hard to re-create bugs. It does this by writing program in a series of testable self-contained code.

It aims to bring the organization of mathematical constructs into coding world. Express each piece of program as a nice piece of re-usable code just like a mathematical function.

We can work our way backward whenever an error happens.

3 core concepts of FP:

- Immutability
- Separation of Data and Functions
- First-Class Functions => working with function like we work with data.

A quick note to not use 3rd party library code directly in codebase. Otherwise when it needs to be replaced you gotta replace all those lines of code.

We can use a variable like `IS_DEVELOPMENT` to swap function definition. This variable is not a state variable since it won't ever change for the duration the app is running.

```js
const IS_DEVELOPMENT = true; // something you get from the environment
const loadDateFake = async () => {
  return {
    name: "Yo",
  };
};
const loadDataReal = async () => {
  // ...
};

const loadData = IS_DEVELOPMENT ? loadDataFake : loadDataReal;

// somewhere in app:
loadData();
```

## Function as arguments i.e. First-Class functions.

```js
const add = (x, y) => x + y;
const combine = (x, y, op) => op(x, y);

combine(13, 45, add);
```

## Returning functions. For when functions vary in a very little way.

```js
const createPrinter = () => () => console.log("Hello");

const myPrinter = createPrinter();

myPrinter();
```

```js
// Simple functions. Repetition involved.
const double = x => x * 2;
const triple = x => x * 3;
const quadruple = x => x * 4;

// A function that creates the above different variations
// y -> 2/3/4. x => number to operate on
const createMultiplier => y => x => x * y;

const double = createMultiplier(2);
double(30); // 60

// Why not do this:
const multiply = (x, y) => {
  return x * y;
}

multiply(2, 30);

/*
Reason: Certain situations where we require a certain shape of function i.e. number of arguments it takes. That is, createMultiplier is easier to pass as argument.
*/

const numbers = [1, 2, 3, 4];

// numbers.map(multiply(2, x)); // not allowed
numbers.map(double); // allowed and maybe more readable
```

## Argument checking

```js
const divide = (x, y) => {
  if (y === 0) {
    // cluttering with argument checking logic
    throw new Error("Do not divide by zero!");
  }
  return x / y; // core logic
};
```

Separate argument checking logic into another function.

```js
// Functions now do only one thing.

const divide = (x, y) => {
  return x / y;
};

// Higher Order Function
const secondArgIsntZero = (func) => (x, y) => {
  if (y === 0) {
    throw new Error("Second arg zero!");
  }
  return func(x, y);
};

const argsAreNumbers = (func) => (x, y) => {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("Args must be numbers");
  }
  return func(x, y);
};

const divideSafe = secondArgIsntZero(divide); // divideSafe contains logic of argument checking function as well as divide function

divideSafe(10, 2);
divideSafe(3, 0);

const divideSafer = secondArgIsntZero(argsAreNumbers(divide)); // Extension

divideSafer(10, "Hello");

// Alternate style:
const divide = secondArgIsntZero(
  argsAreNumbers((x, y) => {
    return x / y;
  })
);
```

**Closure** is when we return a function from a function and that function still has the scope of the function it was returned from.

```js
const createPrinter = () => {
  const myFavoriteNumber = 42;
  return () => console.log(`My favorite number is ${myFavoriteNumber}`);
};
```

### Extending to flexible number of arguments with spread operator

```js
const argsAreNumbers = (func) => (x, y) => {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("Args must be numbers");
  }
  return func(x, y);
};

const add = argsAreNumbers((x, y, z) => x + y + z); // argsAreNumbers currently only takes 2 args

const argsAreNumbers =
  (func) =>
  (...args) => {
    if (!args.every((arg) => typeof arg === "number")) {
      throw new Error("Args must be numbers");
    }
    return func(...args);
  };

const add = (...numbers) => {
  return numbers.reduce((sum, x) => sum + x);
};

add(10, 100, 10000);
```

## JavaScript objects in a functional way

```js
const person = {
  name: "John",
  age: 34,
};

const careerData = {
  jobTitle: "Software Developer",
  salary: 60000,
  yearsAtCompany: 5,
};

const newObj = { ...person, ...careerData };

const frozenNewObj = Object.freeze({ ...person, ...careerData });
frozenNewObj.name = "Won't work";
```

If object has functions then spread operator will copy those functions.

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const not =
  (func) =>
  (...args) =>
    !func(...args);
const isEven = (x) => x % 2 === 0;
const isOdd = not(isEven); // combining functions

const oddNumbers = numbers.filter(isOdd); // cool trick
```

## Partial Application

Pass as many arguments we want and however we want it.

```js
const add = (x, y, z) => x + y + z; // With this we always need to pass in 3 numbers

// first way
const addB = (x, y) => (z) => x + y + z;

addB(1, 2)(3);

// Why do above:
/**
It allows us to create functions where one or more of those arguments are already fixed.
*/

const add3 = addB(1, 2);

add3(10); // Gives answer with 3 added
```

**Currying**: `add(1)(2)(3)` - a specific case of partial application where all arguments are passed in specifically one at a time.

```js
// application of currying
const add = (x) => (y) => (z) => x + y + z;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.map(add(1)(2));

// this function does something like person.name || "DefaultName"
const getPropertyWithDefault = (defaultValue, propertyName, obj) =>
  obj[propertyName] || defaultValue; // just a readable & nice wrapper function

getPropertyWithDefault("N/A", "name", { a: 1 }); // 'N/A'
getPropertyWithDefault("N/A", "name", { name: "John" }); // 'John'

// Duplication of N/A and name above.

const getPropertyWithDefaultBetter =
  (defaultValue) => (propertyName) => (obj) =>
    obj[propertyName] || defaultValue;
const getName = getPropertyWithDefaultBetter("N/A")("name"); // Single place to make change of N/A if suppose later on management decides the default name should be Anonymous. Also, if backend changes name property to something else then we make change at one place.
getName({ name: "John" });
```

## Composition

It's when we take more than one function and combine them into a single function.

```js
// mathematical way
// f(x) = x + 1
const add1 = (x) => x + 1;
// g(x) = 2x
const double = (x) => x * 2;
// h(x) = x^2
const square = (x) => x * x;

double(add1(4)); // g(f(x)) === 2(x + 1)

square(double(add1(4))); // h(g(f(x))) === (2(x+1))^2

const composed = (x) => square(double(add1(x)));

composed(1);

// Advance:

const compose =
  (...funcs) =>
  (x) =>
    funcs.reduce((acc, func) => func(acc), x); // Takes several functions as an argument and invokes those functions on argument

// Another with reduceRight:

export const compose =
  (...functions) =>
  (input) =>
    functions.reduceRight(
      (chain, func) => chain.then(func),
      Promise.resolve(input)
    );

const composedA = compose(add1, double, square);

composedA(1); // same as using composed
```

Practical Application

```js
const people = [
  {
    name: "John",
    age: 34,
    hairColor: "brown",
  },
  {
    name: "Jane",
    age: 40,
    hairColor: "red",
  },
  {
    name: "Nancy",
    age: 20,
    hairColor: "blonde",
  },
];

// We want to capitalize all the names, put age in months and another transformation

const capitalizeName = (obj) => ({
  ...obj,
  name: obj.name.toUpperCase(),
});

const removeAge = (obj) =>
  Object.keys(obj).reduce(
    (acc, key) => (key === "age" ? acc : { ...acc, [key]: obj[key] }),
    {}
  );

const capitalizeHairColor = (obj) => ({
  ...obj,
  hairColor: obj.hairColor.toUpperCase(),
});

people.map((person) => capitalizeName(removeAge(capitalizeHairColor(person))));
```

## Tips

```js
const mulByTwo = (n) => n * 2;
const addFour = (n) => n + 4;
const pipe =
  (fn, ...fns) =>
  (...args) =>
    fns.reduce((acc, f) => f(acc), fn(...args)); // Pipe works the exact same way as Compose, the only difference is that instead of executing arguments from right to left, it executes them from left to right

[1, 2, 3].map(pipe(mulByTwo, addFour));
```

`.map` and `.filter` do create new arrays so that definitely is something to be aware of.

By the isomorphism of FP with CT we know that (fmap g) ∘ (fmap f) equals fmap (g ∘ f), so a compiler would be able to optimize this away easily. This is not the case in JS because g and f might have order-dependent side-effects, i.e. it is not functional.

Functional way of writing `map` and `reduce`:

```js
const map = function (a, ...args) {
  return a.map(...args);
};
const reduce = function (a, ...args) {
  return a.reduce(...args);
};

// usecase
const sum = (x, y) => x + y;
let data = [1, 1, 3, 5, 5];
let mean = reduce(data, sum) / data.length;
```

Higher-Order Function

```js
// This higher-order function returns a new function that passes its
// arguments to f and returns the logical negation of f's return value;
function not(f) {
  return function (...args) {
    // Return a new function
    let result = f.apply(this, args); // that calls f
    return !result; // and negates its result.
  };
}

const even = (x) => x % 2 === 0; // A function to determine if a number is even
const odd = not(even); // A new function that does the opposite
```

Another usecase

```js
// Return a function that expects an array argument and applies f to
// each element, returning the array of return values.
// Contrast this with the map() function from earlier.
function mapper(f) {
  return (a) => map(a, f);
}
const increment = (x) => x + 1;
const incrementAll = mapper(increment);
incrementAll([1, 2, 3]); // => [2,3,4]
```

Simplest form of memoize

```js
// Return a memoized version of f.
// It only works if arguments to f all have distinct string representations.
function memoize(f) {
  const cache = new Map(); // Value cache stored in the closure.
  return function (...args) {
    // Create a string version of the arguments to use as a cache key.
    let key = args.length + args.join("+");
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      let result = f.apply(this, args);
      cache.set(key, result);
      return result;
    }
  };
}

// usecase

// Return the Greatest Common Divisor of two integers using the Euclidian
// algorithm: http://en.wikipedia.org/wiki/Euclidean_algorithm
function gcd(a, b) {
  // Type checking for a and b has been omitted
  if (a < b) {
    // Ensure that a >= b when we start
    [a, b] = [b, a]; // Destructuring assignment to swap variables
  }
  while (b !== 0) {
    // This is Euclid's algorithm for GCD
    [a, b] = [b, a % b];
  }
  return a;
}
const gcdmemo = memoize(gcd);
gcdmemo(85, 187); // => 17
```

## Piping for Left-to-right readability

```js
function pipe(...fns) {
  return (arg) => fns.reduce((prev, fn) => fn(prev), arg);
}
// pipe(odds, double, log)([1, 2, 3, 4, 5])

function pipeWith(arg, ...fns) {
  return pipe(...fns)(arg);
}

// pipeWith([1, 2, 3, 4, 5], odds, double, log);
```

With [pipeline operator proposal](https://github.com/tc39/proposal-pipeline-operator), `[1, 2, 3, 4, 5] |> odds |> double |> log` would do roughly the same as above
