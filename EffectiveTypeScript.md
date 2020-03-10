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
