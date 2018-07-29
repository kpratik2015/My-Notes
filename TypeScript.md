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


