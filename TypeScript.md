# TypeScript (w.r.t Angular)

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

## Type Assertions

```
let message; // type is any
message = 'abc';
let endsWithC = (<string> message).endsWith('c');
// OR
let alternativeWay = (message as string).endsWith('c');
// this does not restructure the object in memory but it allows typescript's intellisense to generate suggestions and errors based on type

```

## Arrow Functions

```
// TRADITIONAL:
let log = function(message) {
  console.log(message);
}

// Arrow One:

let doLog = (message) => {
  console.log(message);
}

// If we have only one line of code inside then:

let doLog = (message) => console.log(message); // in C# we call this lambda function

// If no parameters:

let doLog = () => console.log('anything');

```

## Interfaces

```
// Inline annotation way:

let drawPoint = (point: {x : number, y: number}) => {
  // ...
}

drawPoint( {
  x: 1,
  y: 2
} )

// Interface:
// use skull naming convention while naming interface that is uppercase starting letter.
interface Point {
  x: number,
  y: number
}

let drawPoint = (point: Point) => {
  // ...
}

drawPoint( {
  x: 1,
  y: 2
} )
```

## Classes

Cohesion principle. Class groups properties and functions that are highly related.

### Note: '?' question mark symbol after variable indicates it is optional. Also, parameters to the right of first optional parameter should all be optional. This allows creating an object with no arguements to be passed. Since typescript does not allow multiple constructor type.

```
class Point {
  x: number;
  y: number;

	constructor(x?: number, y?: number) {
		this.x = x;
		this.y = y;
	}

	draw() {
		console.log('X: ', this.x + ', Y: ' + this.y);
	}
	getDistance(another: Point) {
	}
}

let point = new Point(); // have to allocate memory for object with new keyword
point.draw();
```

## Access Modifiers

public, private and protected. Default: public.

```
class Point {
  private x: number;
  private y: number;

	constructor(x?: number, y?: number) {
		this.x = x;
		this.y = y;
	}

	draw() {
		console.log('X: ', this.x + ', Y: ' + this.y);
	}
	getDistance(another: Point) {
	}
}

let point = new Point(1, 2); // works
// point.x = 2; // error
point.draw();
```

### Making code smaller

```
class Point {
	constructor(private x?: number, private y?: number) {
	}

	draw() {
		console.log('X: ', this.x + ', Y: ' + this.y);
	}
	getDistance(another: Point) {
	}
}

let point = new Point(1, 2);
point.draw();
```

## Properties

```
class Point {
	constructor(private x?: number, private y?: number) {
	}

	draw() {
		console.log('X: ', this.x + ', Y: ' + this.y);
	}
	getX() {
		return this.x;
	}
	setX( value ) {
		if( value < 0 ) {
			throw new Error('value cannot be less than 0.);
		}

		this.x = value;

	}
}

let point = new Point(1, 2);
let x = point.getX();
point.setX(10);
point.draw();
```

Using properties:

```
class Point {
	constructor(private x?: number, private y?: number) {
	}

	draw() {
		console.log('X: ', this.x + ', Y: ' + this.y);
	}
	get X() {
		return this.x;
	}
	set X( value ) {
		if( value < 0 ) {
			throw new Error('value cannot be less than 0.);
		}
		this.x = value;

	}
}

let point = new Point(1, 2);
let x = point.X;
point.X = 10;
point.draw();
```

## Modules

In typescript we can think of each file as module (roughly). Basic example is below.

point.ts

```
export class Point {
	constructor(private x?: number, private y?: number) {

	}
	draw() {
		console.log('X: ', this.x + ', Y: ' + this.y);
	}

}

```

Note the export keyword

main.ts

```
import { Point } from './point'; // name of our module is point

let point = new Point(1, 2);
point.draw();
```

In typescript we define different modules and export functions, types or classes. Angular modules are little different, they are organization of your code in smaller different areas.

## Extras/Tips

_Constructor short hand_
constructor(public likesCount: number) {
}

_ternary operator_
Traditional:

```
if (this.isSelected) {
	this.likesCount--;
} else {
	this.likesCount++;
}
```

Better:

```
this.likesCount += (this.isSelected) ? -1 : 1;
```

_toggle instead of flag_

```
this.isSelected = !this.isSelected;
```

_varirable in log statement_

```
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`);
```

_execution_

```
tsc *.ts --target ES5 && node main.js
```

--target ES5 because accessors are only available when targeting ECMAScript 5 and higher.

# Effective Transcript

Since TypeScript is a superset of JavaScript, the code in your .js files is already TypeScript. Renaming main.js to main.ts doesn’t change that.

Type inference is a key part of TypeScript. TypeScript’s type system models the runtime behavior of JavaScript.

```typescript
const x = 2 + "3"; // OK, type is string
const y = "2" + 3; // OK, type is string
const a = null + 7; // Evaluates to 7 in JS
// ~~~~ Operator '+' cannot be applied to types ...
const b = [] + 12; // Evaluates to '12' in JS
// ~~~~~~~ Operator '+' cannot be applied to types ...
alert("Hello", "TypeScript"); // alerts "Hello"
// ~~~~~~~~~~~~ Expected 0-1 arguments, but got 2
```

`tsconfig.json` can be created via `tsc --init`

`noImplicitAny` controls whether variables must have known types. Leaving `noImplicitAny` off is only appropriate if you’re transitioning a project from JavaScript to TypeScript.

`strictNullChecks` controls whether null and undefined are permissible values in every type.

```typescript
// example
const x: number = null;
// ~ Type 'null' is not assignable to type 'number'
```

Aim to enable strict to get the most thorough checking that TypeScript can offer.

Introduce a “tag” to explicitly store the type in a way that’s available at runtime:

```typescript
interface Square {
  kind: "square";
  width: number;
}
interface Rectangle {
  kind: "rectangle";
  height: number;
  width: number;
}
type Shape = Square | Rectangle; // Shape type here is an example of a “tagged union.”

function calculateArea(shape: Shape) {
  if (shape.kind === "rectangle") {
    shape; // Type is Rectangle
    return shape.width * shape.height;
  }
}
```

In below code, class Rectangle introduces both a type and a value, whereas interface only introduced a type.

```typescript
class Square {
  constructor(public width: number) {}
}
class Rectangle extends Square {
  constructor(public width: number, public height: number) {
    super(width);
  }
}
type Shape = Square | Rectangle;
```

TypeScript compiler will introduce build time overhead. If the overhead becomes significant, your build tool may have a “transpile only” option to skip the type checking.

Like it or not, your types are “open.”

Use structural typing to facilitate unit testing.

The any type effectively silences the type checker and TypeScript language services.

_In JavaScript typeof null is "object"_

The smallest set is the empty set, which contains no values. It corresponds to the never type in TypeScript

The & operator computes the intersection of two types. type operations apply to the sets of values (the domain of the type), not to the properties in the interface.

```typescript
interface Person {
  name: string;
}
interface Lifespan {
  birth: Date;
  death?: Date;
}
type PersonSpan = Person & Lifespan;

// OR

interface Person {
  name: string;
}
interface PersonSpan extends Person {
  birth: Date;
  death?: Date;
}

// Usage
const ps: PersonSpan = {
  name: "Alan Turing",
  birth: new Date("1912/06/23"),
  death: new Date("1954/06/07")
}; // OK
```

```typescript
// any type whose domain is a subset of string will do
function getKey<K extends string>(val: any, key: K) {
  // ...
}
```

`keyof T`, which returns type for just the keys of an object type.

```typescript
interface Point {
  x: number;
  y: number;
}
type PointKeys = keyof Point; // Type is "x" | "y"
function sortBy<K extends keyof T, T>(vals: T[], key: K): T[] {
  // ...
}
const pts: Point[] = [
  { x: 1, y: 1 },
  { x: 2, y: 0 }
];
sortBy(pts, "x"); // OK, 'x' extends 'x'|'y' (aka keyof T)
```

Be aware that while obj['field'] and obj.field are equivalent in value space, they are not in type space.

`extends` can define a subclass (`class A extends B`) or a subtype (`interface A extends B`) or a constraint on a generic type (`Generic<T extends number>`).

Typing for destructured content

```typescript
function email({ person, subject, body }) {
  // ...
}

// to type
function email({
  person,
  subject,
  body
}: {
  person: Person;
  subject: string;
  body: string;
}) {
  // ...
}
```

```typescript
const alice: Person = { name: "Alice" }; // type declaration and ensures that the value conforms to the type
const bob = { name: "Bob" } as Person; // type assertion i.e. dev knows better of the type
```

Know how to annotate the return type of an arrow function

```typescript
const people: Person[] = ["alice", "bob", "jan"].map(
  (name): Person => ({ name })
);
```

non-null assertion

```typescript
// You should treat ! just like any other assertion: it is erased during compilation
const elNull = document.getElementById("foo"); // Type is HTMLElement | null
const el = document.getElementById("foo")!; // Type is HTMLElement
```

Every type is a subtype of unknown, so assertions involving unknown are always OK. `const el = document.body as unknown as Person; // OK`

if you assign a property to a primitive, it disappears:

```typescript
> x = "hello"
> x.language = 'English'
'English'
> x.language
undefined
```

TypeScript models this distinction by having distinct types for the primitives and their object wrappers:

- string and String
- number and Number
- boolean and Boolean
- symbol and Symbol
- bigint and BigInt

`string` is assignable to `String`, but `String` is not assignable to `string`.
