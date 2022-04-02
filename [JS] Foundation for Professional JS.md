# Foundations for Professional JS

## Intro & Basics

JS WAT

```
{} + []
> 0
[] + {}
> '[object Object]'
[] + []
> ''
{} + {}
> '[object Object][object Object]'
Array(16).join("wat" - 1) + "Batman"
> 'NaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNBatman'
Array(16).join("wat" + 1) + "Batman"
> 'wat1wat1wat1wat1wat1wat1wat1wat1wat1wat1wat1wat1wat1wat1wat1Batman'
Array(16).join("wat" + 1)
> 'wat1wat1wat1wat1wat1wat1wat1wat1wat1wat1wat1wat1wat1wat1wat1'
```

### TC39 Committe

[Github Link](https://github.com/tc39/proposals)

### Language Characteristics

- Dynamic
- Weakly Typed
- "Truly" Object-Oriented
- Interpreted (not necessarily compiled)

JS can also be used on the server-side with NodeJS, which is built on Chrome's V8 Engine.

### Types

- null
- undefined
- boolean
- number
- string
- symbols (since ES6)

Everything else is considered an object

### Semicolons

- Semicolons are inserted automatically by the interpreter (Known as ASI - Automatic Semicolon Insertion)
- However, you should set them yourself to avoid unexpected behavior

### Flow Control

While/Do ... While

```js
while (condition) {
  doAwesomeStuff();
}

do {
  doAwesomeStuff();
} while (condition);
```

Switch

### Operators & Coercion

Type conversion, typecasting, and coercion are different ways of, implicitly or explicitly, changing an entity of one data type into another.

If operands of an operator are of different types, one of them will be converted. The coercion rules are quite expensive

**Nullish coalescing operator (??)**

```js
const foo = null ?? "default"; // default
const bar = undefined ?? "default"; // default
```

### [Basic test](https://codepen.io/enpayne/pen/dJMGjL)

```html
<div id="mocha"></div>
```

```js
// Change function to meet test requirements
function returnValueOrDefault(value) {
  return value ?? "default";
}

// ----------------------------------------------
// You don't need to change anything below
mocha.setup("bdd");
var assert = chai.assert;

describe("returnValueOrDefault()", () => {
  it('returns string "default" if value is undefined', function () {
    assert.equal(returnValueOrDefault(), "default");
  });

  it("returns given value", () => {
    let myValue = "Hello World";
    assert.equal(returnValueOrDefault(myValue), myValue);
  });
});

mocha.run();
```

### Strict Mode

- Opts in a restricted variant of JS
- Not a subset but different semantics
- Stric mode and non-strict mode code can coexist
- Not supported by all browsers
- Eliminates some JS silent errors
- Fixes mistakes that make it difficult for JS engines to perform optimizations

```js
"use strict";
var v = "This is strict mode";
```

## Objects

Object literal: `const anObject = {}`

[Arrays] are Objects. It's basically a map with index-to-value pairs. This means there is no such thing as `out of bounds`

```js
const arr = [1, 2, NaN];
arr.includes(NaN); // true
arr.indexOf(NaN); // -1
```

## Hoisting

Temporal Deadzone (TDZ)
