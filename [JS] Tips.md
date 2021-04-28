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
