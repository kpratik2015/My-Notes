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

```ts
function log(message) {
  console.log(message);
}

var message = "Hello World";

log(message);
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

```ts
function doSomething() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log("Outside for loop where i is declared:" + i);
}
```

Above code would print: 0 1 2 3 4 5

Whereas the 5 wouldn't be printed if instead of var i we do let i

let's scope is to the nearest block.

### Different types

```ts
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

```ts
let message; // type is any
message = "abc";
let endsWithC = (<string>message).endsWith("c");
// OR
let alternativeWay = (message as string).endsWith("c");
// this does not restructure the object in memory but it allows typescript's intellisense to generate suggestions and errors based on type
```

## Arrow Functions

```ts
// TRADITIONAL:
let log = function (message) {
  console.log(message);
};

// Arrow One:

let doLog = (message) => {
  console.log(message);
};

// If we have only one line of code inside then:

let doLog = (message) => console.log(message); // in C# we call this lambda function

// If no parameters:

let doLog = () => console.log("anything");
```

## Interfaces

```ts
// Inline annotation way:

let drawPoint = (point: { x: number; y: number }) => {
  // ...
};

drawPoint({
  x: 1,
  y: 2,
});

// Interface:
// use skull naming convention while naming interface that is uppercase starting letter.
interface Point {
  x: number;
  y: number;
}

let drawPoint = (point: Point) => {
  // ...
};

drawPoint({
  x: 1,
  y: 2,
});
```

## Classes

Cohesion principle. Class groups properties and functions that are highly related.

### Note: '?' question mark symbol after variable indicates it is optional. Also, parameters to the right of first optional parameter should all be optional. This allows creating an object with no arguements to be passed. Since typescript does not allow multiple constructor type.

```ts
class Point {
  x: number;
  y: number;

  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log("X: ", this.x + ", Y: " + this.y);
  }
  getDistance(another: Point) {}
}

let point = new Point(); // have to allocate memory for object with new keyword
point.draw();
```

## Access Modifiers

public, private and protected. Default: public.

```ts
class Point {
  private x: number;
  private y: number;

  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log("X: ", this.x + ", Y: " + this.y);
  }
  getDistance(another: Point) {}
}

let point = new Point(1, 2); // works
// point.x = 2; // error
point.draw();
```

### Making code smaller

```ts
class Point {
  constructor(private x?: number, private y?: number) {}

  draw() {
    console.log("X: ", this.x + ", Y: " + this.y);
  }
  getDistance(another: Point) {}
}

let point = new Point(1, 2);
point.draw();
```

## Properties

```ts
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

```ts
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

## Namespaces

A namespace is, simply put, an object that contains other code. It provides a wrapper, of sorts, for that code, thus keeping it out of global scope

```ts
namespace MyFirstNamespace {
  export let homeworld = "Jakku";
  export function sayName() {
    alert("Rey");
  }
}
```

You can also export classes and interfaces from a namespace:

```ts
namespace MyFirstNamespace {
  export class Jedi {}
  export interface RebelScum {}
}
```

To get a handle on this, it can be informative to look at the JavaScript code produced from this TypeScript code:

```js
"use strict";
var MyFirstNamespace;
(function (MyFirstNamespace) {
  MyFirstNamespace.homeworld = "Jakku";
  function sayName() {
    alert("Rey");
  }
  MyFirstNamespace.sayName = sayName;
})(MyFirstNamespace || (MyFirstNamespace = {}));
alert(MyFirstNamespace.homeworld);
MyFirstNamespace.sayName();
```

As you can see, TypeScript uses the IIFE (Immediately Invoked Function Expression) pattern to keep the namespace’s contents separate from everything else on the page when the code finally executes, thereby keeping global scope nice and clean (aside from the namespace object itself, obviously).

### Bundling files with different namespaces

```ts
/// <reference path="file1.ts" />
/// <reference path="file2.ts" />
```

TypeScript, at compile time, will take care of bundling those files together. In this case, you only name the output file, not all the files that go into it, and TypeScript will take care of the rest, including that things are in the correct order.

## Modules

A module is defined as any TypeScript source file that contains one or more import or export statements at the top level (meaning not inside a function). Any source file that doesn’t meet that requirement is considered an ordinary script source file, and its contents will be made available in global scope like always.

Modules represent their own scope, which is another way of saying that anything inside the module is not visible to anything outside the module unless explicitly exported. Similar to a namespace, **but remember that a namespace always results in at least the namespace object itself existing in global scope, that’s the big difference.**
In typescript we can think of each file as module (roughly). Basic example is below.

point.ts

```ts
export class Point {
  constructor(private x?: number, private y?: number) {}
  draw() {
    console.log("X: ", this.x + ", Y: " + this.y);
  }
}
```

Note the export keyword

main.ts

```ts
import { Point } from "./point"; // name of our module is point

let point = new Point(1, 2);
point.draw();
```

In typescript we define different modules and export functions, types or classes. Angular modules are little different, they are organization of your code in smaller different areas.

## Decorators

Decorators are an interesting addition to JavaScript that is still in the proposal stage at the time of this writing, but which TypeScript offers as an experimental feature. In order to use them, you have to add the `experimentalDecorators:true` option to your `tsconfig.json` file.

Decorators are essentially metadata that you can add to the definition of a number of code elements.

For example, say we want to provide some logging in the constructor function of a class. Let’s further say that for whatever reason, we don’t want to modify the code within the class (maybe we didn’t write it ourselves and don’t want to mess around with code provided by someone else). For this, you can use a class decorator. You can do that as follows:

```ts
function logConstructor(inConstructor: Function) {
  console.log(inConstructor);
}
@logConstructor
class Spaceship {
  constructor() {
    console.log("constructor");
  }
}
const s = new Spaceship();
```

Here, we have a function, `logConstructor()`, that we decorate the Spaceship class with. The class just has a simple constructor in it. If you run this in the playground and look in the console of your browser’s dev tools, you should see something like this:

```
VM68:9 class Spaceship {
constructor() { console.log("constructor"); }
}
VM68:12 constructor
```

A class decorator like this is always passed just the constructor, but remember that it’s the runtime constructor, which is why we get the entire Spaceship function and not the constructor defined at the source level.

_Note: VM stands for virtual machine and refers to the JavaScript virtual machine, which of course is ultimately the source of the code.This frequently happens when using the JavaScript `eval()` function._

The other types of decorators are the following:

- Method
- Accessor
- Property
- Parameter

## Extras/Tips

_Constructor short hand_

```ts
constructor(public likesCount: number) {
}
```

_ternary operator_
Traditional:

```ts
if (this.isSelected) {
  this.likesCount--;
} else {
  this.likesCount++;
}
```

Better:

```ts
this.likesCount += this.isSelected ? -1 : 1;
```

_toggle instead of flag_

```ts
this.isSelected = !this.isSelected;
```

_varirable in log statement_

```ts
console.log(
  `likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`
);
```

_execution_

```ts
tsc *.ts --target ES5 && node main.js
```

--target ES5 because accessors are only available when targeting ECMAScript 5 and higher.

_TypeScript’s motto is “JavaScript that scales.” A key part of “scales” is the language services, which are a core part of the TypeScript experience._

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

## Multiple Declarations for a Function

```ts
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a, b) {
  return a + b;
}
const three = add(1, 2); // Type is number
const twelve = add("1", "2"); // Type is string
```

The first two declarations of add only provide type information. When TypeScript produces JavaScript output, they are removed, and only the implementation remains.

## Think of Types as Sets of Values

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
```

Thinking of types as sets of values, what does **extends mean**? Just like “assignable to,” you can read it as “subset of.” _Every value in PersonSpan must have a name property which is a string_. And every value must also have a birth property, so it’s a **proper subset**.

```ts
// Usage
const ps: PersonSpan = {
  name: "Alan Turing",
  birth: new Date("1912/06/23"),
  death: new Date("1954/06/07"),
}; // OK
```

```typescript
// any type whose domain is a subset of string will do
function getKey<K extends string>(val: any, key: K) {
  // ...
}
```

**Things to Remember**

- TypeScript types form intersecting sets (a Venn diagram) rather than a strict hierarchy. Two types can overlap without either being a subtype of the other.
- Remember that an object can still belong to a type even if it has additional properties that were not mentioned in the type declaration.
- Think of “extends,” “assignable to,” and “subtype of ” as synonyms for “subset of.”
- extends can define a subclass (class A extends B) or a subtype (interface A extends B) or a constraint on a generic type (Generic<T extends number>).

## Prefer Type Declarations to Type Assertions

```ts
interface Person {
  name: string;
}
let bob = { name: "Bob" } as Person; // performs a type assertion
bob = {
  name: "Bob",
  occupation: "JavaScript developer",
} as Person; // No error
```

This tells TypeScript that, despite the type it inferred, you know better and would like the type to be Person.

You may also see code that looks like `const bob = <Person>{}`. This was the original syntax for assertions and is equivalent to `{} as Person`. It is less common now because `<Person>` is interpreted as a start tag in .tsx files (TypeScript + React).

So when should you use a type assertion? Type assertions make the most sense when you truly do know more about a type than TypeScript does, typically from context that isn’t available to the type checker. **For instance, you may know the type of a DOM element more precisely than TypeScript does**

## Know the Differences Between type and interface

An interface can extend a type (with some caveats), and a type can extend an interface:

```ts
interface IStateWithPop extends TState {
  population: number;
}
type TStateWithPop = IState & { population: number };
```

The caveat is that an interface cannot extend a complex type like a union type. If you want to do that, you’ll need to use type and &.

There are union types but no union interfaces:

```ts
type AorB = "a" | "b";
```

A type is, in general, more capable than an interface. It can be a union, and it can also take advantage of more advanced features like mapped or conditional types.

It can also more easily express tuple and array types:

```ts
type Pair = [number, number];
type StringList = string[];
type NamedNums = [string, ...number[]];
```

You can express something like a tuple using interface:

```ts
interface Tuple {
  0: number;
  1: number;
  length: 2;
}
const t: Tuple = [10, 20]; // OK
// But this is awkward and drops all the tuple methods like concat. Better to use a type.
```

An interface does have some abilities that a type doesn’t, however. One of these is that an **interface can be augmented**.

```ts
interface IState {
  name: string;
  capital: string;
}
interface IState {
  population: number;
}
const wyoming: IState = {
  name: "Wyoming",
  capital: "Cheyenne",
  population: 500_000,
}; // OK
```

**This is known as “declaration merging”** This is primarily used with type declaration files. The idea is that there may be gaps in your type declarations that users need to fill, and this is how they do it.

TypeScript uses merging to get different types for the different versions of JavaScript’s standard library. The Array interface, for example, is defined in `lib.es5.d.ts`. By default this is all you get. But if you add `ES2015` to the lib entry of your `tsconfig.json`, Type‐Script will also include lib.`es2015.d.ts`. This includes another Array interface with additional methods like find that were added in ES2015.

_If it’s essential that no one ever augment your type, then use type._

For projects without an established style, you should think about augmentation. Are you publishing type declarations for an API? Then it might be helpful for your users to be able to be able to merge in new fields via an interface when the API changes. So use interface. But for a type that’s used internally in your project, declaration merging is likely to be a mistake. So prefer type.

## Use Type Operations and Generics to Avoid Repeating Yourself

```ts
interface State {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
  pageContents: string;
}
// you’d like to define TopNav State as a subset of the fields in State.
type TopNavState = {
  [k in "userId" | "pageTitle" | "recentFiles"]: State[k];
}; // this is mapped type
```

Mapped types are the type system equivalent of looping over the fields in an array.
This particular pattern is so common that it’s part of the standard library, where it’s called Pick:

```ts
type Pick<T, K> = { [k in K]: T[k] };
// you use it like this:
type TopNavState = Pick<State, "userId" | "pageTitle" | "recentFiles">;
```

Pick is an example of a **generic type**. Using Pick is the equivalent of calling a function.

```ts
interface Options {
  width: number;
  height: number;
  color: string;
  label: string;
}
type OptionsUpdate = { [k in keyof Options]?: Options[k] };
// keyof takes a type and gives you a union of the types of its keys
type OptionsKeys = keyof Options;
// Type is "width" | "height" | "color" | "label"
// The mapped type ([k in keyof Options]) iterates over these and looks up the corresponding value type in Options.
// The ? makes each property optional.
```

This pattern is also extremely common and is enshrined in the standard library as **Partial**:

```ts
update(options: Partial<Options>) { /* ... */ }
```

Similarly, you may want to create a named type for the inferred return value of a function or method:

```ts
function getUserInfo(userId: string) {
  // ...
  return {
    userId,
    name,
    age,
    height,
    weight,
    favoriteColor,
  };
}
// Return type inferred as { userId: string; name: string; age: number, ... }
```

In this case the ReturnType generic does exactly what you want:

```ts
type UserInfo = ReturnType<typeof getUserInfo>;
```

Generic types are the equivalent of functions for types.

```ts
// You can declare that any generic parameter extends a type.
interface Name {
  first: string;
  last: string;
}
type DancingDuo<T extends Name> = [T, T];
const couple1: DancingDuo<Name> = [
  { first: "Fred", last: "Astaire" },
  { first: "Ginger", last: "Rogers" },
]; // OK
const couple2: DancingDuo<{ first: string }> = [
  // ~~~~~~~~~~~~~~~
  // Property 'last' is missing in type
  // '{ first: string; }' but required in type 'Name'
  { first: "Sonny" },
  { first: "Cher" },
];
const dancingDuo = <T extends Name>(x: DancingDuo<T>) => x;
const couple1 = dancingDuo([
  { first: "Fred", last: "Astaire" },
  { first: "Ginger", last: "Rogers" },
]);
```

You can use extends to complete the definition of `Pick` from earlier. If you run the original version through the type checker, you get an error:

```ts
type Pick<T, K> = {
  [k in K]: T[k];
  // ~ Type 'K' is not assignable to type 'string | number | symbol'
};
```

K should really be some subset of the keys of T, namely, keyof T

```ts
type Pick<T, K extends keyof T> = {
  [k in K]: T[k];
}; // OK
// it helps to read “extends” as “subset of ” here.
```

## Use Index Signatures for Dynamic Data

In most browsers and JavaScript engines, for-in loops over arrays are several orders of magnitude slower than for-of or a C-style for loop.

If you truly want to accept tuples of any length or any array-like construct, TypeScript has an ArrayLike type you can use:

```ts
function checkedAccess<T>(xs: ArrayLike<T>, i: number): T {
  if (i < xs.length) {
    return xs[i];
  }
  throw new Error(`Attempt to access ${i} which is past end of array.`);
}
// Remember that the keys are still really strings!
const tupleLike: ArrayLike<string> = {
  "0": "A",
  "1": "B",
  length: 2,
}; // OK
```

**Understand that arrays are objects, so their keys are strings, not numbers**. Number as an index signature is a purely TypeScript construct which is designed to help catch bugs.

## Use readonly to Avoid Errors Associated with Mutation

```ts
function arraySum(arr: readonly number[]) {
  let sum = 0,
    num;
  while ((num = arr.pop()) !== undefined) {
    // ~~~ 'pop' does not exist on type 'readonly number[]'
    sum += num;
  }
  return sum;
}
```

`readonly number[]` is a type, and it is distinct from `number[]` in a few ways:

- You can read from its elements, but you can’t write to them.
- You can read its length, but you can’t set it (which would mutate the array).
- You can’t call pop or other methods that mutate the array.

`readonly` tends to be contagious: once you mark one function with `readonly`, you’ll also need to mark all the functions that it calls.

**Unlike push, concat returns a new array, leaving the original unmodified.**

If you have a readonly array of objects, the objects themselves are not readonly:

```ts
const dates: readonly Date[] = [new Date()];
dates.push(new Date());
// ~~~~ Property 'push' does not exist on type 'readonly Date[]'
dates[0].setFullYear(2037); // OK
```

## Misc

It’s easy to forget that an error response with fetch does not result in a rejected Promise.

```ts
const checkedFetch: typeof fetch = async (input, init) => {
  const response = await fetch(input, init);
  if (!response.ok) {
    throw new Error("Request failed: " + response.status);
  }
  return response;
};
```

You can tell TypeScript to expect additional properties using an index signature:

```ts
interface Options {
  darkMode?: boolean;
  [otherOptions: string]: unknown;
}
const o: Options = { darkmode: true }; // OK
```

**Be aware of the limits of excess property checking: introducing an intermediate variable will remove these checks.**

```ts
interface Room {
  numDoors: number;
  ceilingHeightFt: number;
}
const obj = {
  numDoors: 1,
  ceilingHeightFt: 10,
  elephant: "present",
};
const r: Room = obj; // OK
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
  { x: 2, y: 0 },
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
  body,
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
