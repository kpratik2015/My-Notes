# Javascript Tips

## Multiple condition checking

```js
//Long version
if (value === 1 || value === "one" || value === 2 || value === "two") {
  //Execute code
}

//Shorthand 1
if ([1, "one", 2, "two"].indexOf(value) >= 0) {
  //Execute code
}
//Shorthand 2
if ([1, "one", 2, "two"].includes(value)) {
  //Execute code
}
```

## String into a number

```js
// Long version
let total = parseInt("45");
let average = parseFloat("421.6");

//Shorthand
let total = +"45";
let average = +"421.6";
```

The unary plus operator precedes its operand and evaluates to its operand but attempts to convert it into a number if it isn't already.

```js
console.log(+true); // 1
console.log(+false); // 0
console.log(+null); // 0
```

What if we want to be more explicit in our code?

```js
Number("42"); // 42
Number("1.3"); // 1.3
Number("tax"); // NaN
```

`parseInt()` takes a String as a first argument and a base to which that String will be converted to.

```js
parseInt("1234", 10); // 1234
parseInt("11 players", 10); // 11
parseInt("player 2", 10); // NaN
parseInt("10.81", 10); // 10
```

`parseInt()` tries to get a number from a string that does not only contain a number, but if the string does not start with a number, you’ll get NaN.

## Find max and min number in array

```js
// Shorthand
const arr = [2, 8, 15, 4];
Math.max(...arr); // 15
Math.min(...arr); // 2
```

## Double NOT bitwise operator

You can use the `~~` instead of `Math.floor()`. Only works for 32-bit numbers, so use it wisely.

```js
//Long version
const floor = Math.floor(4.8); // 4

//Shorthand
const floor = ~~4.8; // 4
```

## Repeat a string multiple time

```js
"Hello ".repeat(5); // Hello Hello Hello Hello Hello
```

## Deep clone of multi-level object

It won't work when you have functions as values.

```js
let obj = { x: 20, y: { z: 30 } };
const cloneObj = JSON.parse(JSON.stringify(obj));
```

## Immutable array insert

```js
const insert = (arr, index, newItem) => [
  ...arr.slice(0, index), // first half of array
  newItem, // new item
  ...arr.slice(index), // rest of array
];

const items = ["S", "L", "C", "E"];

const result = insert(items, 2, "I");

console.log(result); // ["S", "L", "I", "C", "E"]
```
