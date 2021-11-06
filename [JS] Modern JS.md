# Modern JS

- [Modern JS](#modern-js)
  - [Basic](#basic)
  - [Array Enhancements](#array-enhancements)
  - [Objects](#objects)
  - [Symbols](#symbols)
  - [Methods in Object](#methods-in-object)
    - [assign()](#assign)
    - [getOwnPropertySymbols()](#getownpropertysymbols)
    - [is()](#is)
    - [setPrototypeOf()](#setprototypeof)
  - [Class Related](#class-related)
  - [Collection classes](#collection-classes)
  - [Generators and Iterables](#generators-and-iterables)
  - [Handy snippets](#handy-snippets)
    - [Getting a random number in a specific range](#getting-a-random-number-in-a-specific-range)
    - [Divide in half + round down](#divide-in-half--round-down)
    - [Get an Array of all the links in the document](#get-an-array-of-all-the-links-in-the-document)

## Basic

```js
function totalSal(base, bonus = 0.0, bonus2 = 0.0) {
  return base + bonus1 + bonus2;
}
totalSal(100, undefined, 30); // you can use undefined to skip over a default parameter.
```

Support for octal and binary notations. Decimal and Hexadecimal supported as well.

```js
let num1 = 0o74; // Octal for 60 decimal
let num2 = 0b111100; // Binary for 60 decimal
let num3 = 0x3c; // Hex for 60 decimal
let num4 = 60; // Decimal
```

Numer API

```js
Number.isInteger(1234); // true
Number.isInteger(3.14); // false
Number.isNaN(0 / 0); // true
Number.isNaN("text"); // false // technically not numeric but it's not NaN
Number.isNaN(1234); // false

let n = Math.pow(2, 53);
console.log(Number.isSafeInteger(n)); // false
console.log(Number.isSafeInteger(n - 1)); // true as per IEEE format fits in 53 bits

console.log(Number.parseInt("3") * 2); // 6
console.log(Number.parseFloat(".3") * 2); // 0.6
console.log(Number.isFinite(10 / 0)); // false
```

Raw Template Literals

```js
let html = String.raw`\tJohn`;
console.log(html); // \tJohn
// tab is not given
```

RegEx - use `search()` starts from beginning. Returns index of first match or -1

```js
let s = "The cat sat on the mat";
let r1 = s.search(/.at/); // anywhere in string 'at'
console.log(r1); // 4
```

Splitting a String - use `split()`

```js
let s = "Jon,Jez;Jim:Jan";
let a = s.split(/,|;|:/);
console.log(a); // ['Jon','Jez','Jim','Jan']
```

Replacing Content in a String - Replaces the first regex match and you can use `g` flag to achieve a global replacement.

```js
let s = "Jon,Jez;Jim:Jan";
let r1 = s.replace(/,|;|:/, "-");
console.log(r1); // Jon-Jez;Jim:Jan

let r2 = s.replace(/,|;|:/g, "-");
console.log(r2); // Jon-Jez-Jim-Jan
```

Matching Content in a String - use `match()`; (i) Returns the first regex match, or null if no matches. (ii) You can use `g` flag to get all matches, as an array. (iii) You can use the `i` flag to do a case-insensitive match

```js
let s = "The CAT sat on the mat";
let r1 = s.match(/.at/);
console.log(r1); // ['sat']
let r2 = s.match(/.at/gi);
console.log(r2); // ['CAT','sat','mat']
```

The `y` flag in RegEx - the next match must start straight after previous match

```js
let s1 = "The CAT sat on the mat";
let r1 = s1.match(/.at/giy);
console.log(r1); // null

let s2 = "CATsatmat";
let r2 = s2.match(/.at/giy);
console.log(r2); // ['CAT', 'sat', 'mat']
```

## Array Enhancements

Creating an Array via `Array.from` from an array-like object. `length` property and indexed elements.

```js
let obj = { length: 3, 0: "Jo", 1: "Mo", 2: "Zoe" };
let array = Array.from(obj);
console.log(array);
```

Creating an array from a `NodeList` returned from a call to `document.querySelectorAll()`

```js
let spans = document.querySelectorAll("span");
let texts = Array.from(spans, (s) => s.textContent);
console.log(texts);
// Note: 2nd optional argument can be given to map items
```

`Array.of()` creates an array from a series of values

```js
let a = [10, 20, 30];
let b = Array.of(10, 20, 30); // Equivalent
let c = new Array(10, 20, 30); // Equivalent
```

Array has a `find()` method that executes call-back on each elem until it finds an item.

```js
var array = ["today", "is", "the", "day"];
var item = array.find((e, i, a) => {
  console.log(`${e} ${i} ${a}`);
  return e.startsWith("th");
});
console.log(item);
```

Array with holes

```js
let array = [10, , , 20]; // The holes have undefined value
console.log(array.length); // 4
```

**Typed Arrays**

Arrays for holding binary data - e.g. `Int32Array` holds an array of 32-bit ints. A typed array can be created from a normal array.

```js
let nums = new Int32Array([10, 20, 30]); // The array knows that every element is of 32 bit or 4 byte.
console.log(Int32Array.BYTES_PER_ELEMENT); // 4 // bytes
```

More versions are available. This is useful when you use with certain APIs. It still behaves like a regular array.

**How Data is Stored**

- A typed array doesn't store the data inside itself.
  - It has a `buffer` property, points to an `ArrayBuffer`
  - The `ArrayBuffer` stores the raw data

```
Typed array object ---buffer---> ArrayBuffer ---> Raw data
```

To use a typed array, access the `ArrayBuffer` and access the raw data:

```js
let nums = new Int32Array([10, 200, 30, 40, 50]);
// Get reference to underlying ArrayBuffer
let buf1 = nums.buffer;
console.log(buf1.byteLength); // 20 bytes
// Create new ArrayBuffer from bytes 5 to 14.
let buf2 = buf1.slice(5, 15);
console.log(buf2.byteLength); // 10 bytes
```

It's possible to create an `ArrayBuffer` directly. `var buf = new ArrayBuffer(128) // 128 bytes`. This doesn't care about the type of data put inside it.

Many JS APIs use `ArrayBuffer` to hold binary data.

- File API
- Cavas API for processing images
- Ajax calls via `XMLHttpRequest`
- Web sockets
- WebGL for low-level pixel handling in graphics processing.

## Objects

Defining methods

```js
const acc = {
  bal: 1000,
  deposit(amt) {
    this.bal += amt;
  },
  withdraw(amt) {
    this.bal -= amt;
  },
};
```

Getters and Setters

```js
let person = {
  fn: "John",
  ln: "Smith",
  get fullName() {
    // like computed property
    return this.fn + " " + this.ln;
  },
  set fullName(name) {
    var parts = name.toString().split(" ");
    this.fn = parts[0];
    this.ln = parts[1];
  },
};
person.fullName = "Kari Nordman"; // look for field fullName or a setter.
console.log(person.fullName); // look for field fullName or a getter.
```

## Symbols

Symbols are like unique strings. Main use of symbols is for property names.

```js
let s1 = Symbol("mySymbol"); // no shorthand literal syntax to create a Symbol

console.log(s1);
console.log(typeof s1);
```

Symbol is not the same as string.

```js
let p = { x: 10, y: 20, z: 30 };
const symColor = Symbol("color");
p[symColor] = "red";

const symMsg = Symbol("msg");
p[symMsg] = "hi";

console.log(p.x, p.y, p.z);
console.log(p[symColor]); // red
console.log(p[symMsg]); // hi
```

Symbols are always unique. You create two symbols with same name, they are always treated as different symbols.

```js
const sym1 = Symbol("mySymbol");
const sym2 = Symbol("mySymbol");

console.log(sym1 == sym2); // false
console.log(sym1 === sym2); // false
```

It's always safe to use a symbol to add a new property to an object - it won't conflict with existing properties.

```js
let obj = {};

const sym1 = Symbol("msg");
obj[sym1] = "Hi";

const sym2 = Symbol("msg");
obj[sym2] = "Bye";

console.log(obj[sym1]); // Hi
console.log(obj[sym2]); // Bye
```

Symbol's advantage is the ability to add any property to an existing object with full assurity that there will not be any overriding or other properties affected. There's no conversion of a Symbol to string.

```js
let p = {
  x: 10,
  [Symbol("color")]: "red",
};

console.log(Object.keys(p)); // only x
console.log(Object.getOwnPropertyNames(p)); // only x

for (let k in p) console.log(`${k}=${p[k]}`); // only x
```

To see symbol-named properties:

```js
for (let k of Object.getOwnPropertySymbols(p)) console.log(p[k]);
```

To see all properties (string- or symbol-named):

```js
for (let k of Reflect.ownKeys(p)) console.log(p[k]);
```

## Methods in Object

### assign()

`Object.assign()` merges all properties from other objects into target object (string- and symbol-named)

```js
let person = { name: "James Bond", age: 48 };
let job = { role: "Spy", [Symbol("id")]: "007" };
let car = { car: "Aston Martin", cool: true };

Object.assign(person, job, car);

console.log(person); // Displays 6 properties
```

### getOwnPropertySymbols()

`Object.getOwnPropertySymbols()` gets an object's symbol-named properties (not string-named)

```js
let p = {
  x: 10,
  y: 20,
  [Symbol("color")]: "red",
  [Symbol("msg")]: "hi",
};

// Displays 'red' and 'hi'

for (let k of Object.getOwnPropertySymbols(p)) console.log(p[k]);
```

### is()

`Object.is()` is a strict equality test which works properly for `NaN` unlike `===` operator

```js
let a,
  b = NaN,
  NaN;
console.log(a === b); // false
console.log(Object.is(a, b)); // true
```

### setPrototypeOf()

`Object.setPrototypeOf()` is correct way to set prototype for an object in ES6+.

```js
let acc1 = {bal: 500, name: 'Josh'};
let acc2 = {bal: 300, name: 'Joshline'};

let funcs = {
  deposit: // ..
  withdraw: // ..
} // kind of like shared object that can be shared across other accounts

Object.setPrototypeOf(acc1, funcs);
Object.setPrototypeOf(acc2, funcs);
// acc1 and acc2 point to a shared pointer of funcs

acc1.deposit(200);
```

## Class Related

Defining Static Data

```js
class Account {
  static limit = -1000;
  withdraw(amt) {
    if (this.bal - amt >= Account.limit) this.bal -= amt;
  }
  static incrementLimit() {
    // static methods don't know this pointer and they can only access static data
    limit++;
  }
}
Account.incrementLimit();
console.log(Account.limit);
```

## Collection classes

- Map
- WeakMap
- Set
- WeakSet

Map is a dictionary of keys and values. It is used for lookup purpose.

```js
let emps = new Map();

emps.set("001", "Matt");
console.log(emps.get("001"));
console.log(emps.get("003")); // undefined

emps.delete("001");

emps.clear();

console.log(emps.size);

// Chaining

new Map().set("001", "S").set("002", "X");

// Alternative syntax

let emps = new Map([
  ["001", "A"],
  ["002", "B"],
]);

// get all entries

for (let entry of emps.entries()) console.log(entry[0], entry[1]);
for (let entry of emps) console.log(entry[0], entry[1]);
for (let [k, v] of emps) console.log(k, v);

// Conversion to array

let arr = [...emps];
for (let kv of arr) console.log(kv[0], kv[1]);
```

`WeakMap` is similar to Map except, if a WeakMap is the only remaining reference to an object then it does not prevent the variable from being garbase collected.

- keys must be objects
- Can't iterate over a WeakMap. Only get/set entries
- You can't clear WeakMap

You can use a `WeakMap` to cache "expensive" values

```js
const cache = new WeakMap();

function getExpensiveValue(key) {
  if (cache.has(key)) return cache.get(key);
  else {
    let val = expensiveOpToCreateValueFor(key);
    cache.set(key, val);
    return val;
  }
}
```

## Generators and Iterables

A generator is a special kind of function that generates successive values.

- Client code calls a generator function to get started.
- generator function returns a "generator object"
- Client calls next() on generator object, to get a value
- so on

A generator function name starts with `*`. Inside the function, use `yield` keyword to yield control back to client (optionally supplying a value)

## Handy snippets

### Getting a random number in a specific range

```js
const x = Math.floor(Math.random() * (max - min + 1)) + min;
```

### Divide in half + round down

```js
console.log(28 >> 1); // 14
console.log(29 >> 1); // 14
console.log(4 >> 1); // 2
console.log(5 >> 1); // 2
```

### Get an Array of all the links in the document

```js
const allLinks = document.links;
```
