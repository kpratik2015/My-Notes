# TypeScript (for Angular)

## Benefits of TypeScript

Strong typing i.e. type of a variable specification is optional but better to do

Object-oriented features

Compile-time errors i.e. many errors can be caught in development itself

Great tooling 

## Setup 

```
npm install -g typescript

tsc --version
```

## Getting JS out of TypeScript

Create main.ts

You can put javascript code inside and it will work.
E.g.

```
function log(message) { console.log(message); }

var message = 'Hello World';

log(message)

```

If we put above code in main.ts, we need to transpile (compile) the code

```
tsc main.ts
```

The transpilation in angular happens under the hood 

Now a main.js will be created.

You can execute the code by using terminal command:

```
node main.js
```

## First program

### JavaScript has 3 different versions:

ES5 (ECMAScript 5): supported by all browsers

ES6 (2015)

ES6 (2016)

ES6 (2017): we get the let keyword here

### Why let is better than var

var's scope is associated to nearest function.

```
function doSomething() {
  for( var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log('Outside for loop where i is declared:' + i); 
}
```

Above code would print: 0 1 2 3 4 5

Whereas the 5 wouldn't be printed if instead of var i we do let i

let's scope is to the nearest block.

### Different types

```
let count = 5;
// count = 'a'; // generates error. ALthough we can compile it and get a valid javascript code.
```

It's better to type safe the variable

```
let count: number;
let e: number[] = [1,2,3];
let f: any[] = [1, true, 'a']; // this is bad but possible

const ColorRed = 0;
const ColorGreen = 1;

enum Color { Red = 0, Green = 1, Blue = 2 ); // Red automatically gets value of 0. But it is better to do it explicitly

let backgroundColor = Color.Red;

```


