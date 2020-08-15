# Javascript Notes

- [Javascript Notes](#javascript-notes)
  - [Objects](#objects)
  - [Working with Objects and Properties](#working-with-objects-and-properties)
  - [Object()](#object)
  - [Function()](#function)
  - [The Head/Global Object](#the-headglobal-object)
  - [Scope and Closures](#scope-and-closures)
  - [Function Prototype Property](#function-prototype-property)
  - [Array()](#array)
  - [String()](#string)
  - [Number()](#number)
  - [Boolean()](#boolean)
  - [Null](#null)
  - [Undefined](#undefined)
  - [Math Function](#math-function)

## Objects

Objects are really just containers for properties, each of which has a name and a value.

```js
var myString = new String("foo"); // produces a String() object
console.log(myString); // logs foo { 0="f", 1="o", 2="o"}

/* define Person constructor function in order to create custom Person() objects later */
var Person = function (living, age, gender) {
  this.living = living;
  this.age = age;
  this.gender = gender;
  this.getGender = function () {
    return this.gender;
  };
};
/* when the function is called with the new keyword "this" is returned instead of undefined */
```

“A constructor is nothing more than a function,” then I would reply, “You are correct—unless that function is invoked using the new keyword.” [e.g., new String('foo')] - JavaScript treats the function as special by setting the value of this for the function to the new object that is being constructed.

**Native/Built-In Object Constructors**: Number(), String(), Boolean(), Object(), Array(), Function(), Date(), RegExp(), Error()

If you create a constructor function and call it without the use of the new keyword the this value will refer to the “parent” object that contains the function.

Everything in JavaScript can act like an object -> When using literal values for string, number, and boolean, an actual complex object is never created until the value is treated as an object. e.g. `var charactersInFoo = 'foo'.length`

**Primitive Values Are Equal by Value**

```js
var price1 = 10;
var price2 = 10;
var price3 = new Number("10"); // a complex numeric object because new was used
var price4 = price3;
console.log(price1 === price2); // logs true
/* logs false because price3 contains a complex number object and price 1 is
a primitive value */
console.log(price1 === price3);
```

Primitive values are stored by value (does 10 === 10?), while complex values are stored by reference.

It could be said that complex objects have an unknown size in memory because complex objects can contain any value and not a specific known value. Complex objects are “referenced by value” and can contain or encapsulate other values. Objects (a.k.a. complex values) are stored by reference.

Two variables containing identical objects are not equal to each other since they do not actually point at the same object.

A complex object can have as many references as you want, and they will always refer to the same object, even as that object changes.

## Working with Objects and Properties

The delete operator can be used to completely remove properties from an object. Below, we delete the bar property from the foo object

```js
var foo = { bar: "bar" };
delete foo.bar;
console.log("bar" in foo); // logs false, because bar was deleted from foo
```

Delete will not delete properties that are found on the prototype chain. Deleting is the only way to actually remove a property from an object. Setting the property to undefined or null only changes the value of a property. It does not remove the property from the object.

```js
var myArray = [];
console.log(myArray.foo); // logs undefined
/* JS will look at Array.prototype for Array.prototype.foo, but it is not  there.
Then it will look for it at Object.prototype, but it is not there either, so undefined is returned! */
```

**All object instances have a property that is a secret link [a.k.a. __proto__] to the constructor function that created the instance.**

```js
var myArray = ["foo", "bar"];
console.log(myArray.join()); // join() is actually defined at Array.prototype.join
console.log(myArray.hasOwnProperty("join")); // logs false
```

**While the in operator can check for properties of an object, including properties from the prototype chain, the hasOwnProperty method can check an object for a property that is not from the prototype chain.**

**DOM** - the interface for working with HTML documents

## Object()

We can create generic empty objects on the fly

Anything added to Object.prototype will show up in a for in loop and the prototype chain. Thus it's said to be forbidden.

**Object() Object Instance Properties and Methods**
Object() object instances have the following properties and methods:

_Instance Properties (e.g., var myObject = {}; myObject.constructor;)_:

- constructor

_Instance Methods (e.g., var myObject = {}; myObject.toString();)_:

- hasOwnProperty()
- isPrototypeOf()
- propertyIsEnumerable()
- toLocaleString()
- toString()
- valueOf()

## Function()

Many consider eval() to be unnecessary overhead

No closure is created when invoking the Function() constructor directly.

**Function Object Instance Properties and Methods**
Function object instances have the following properties and methods:

_Instance Properties (e.g., var myFunction = function(x, y, z) {}; myFunction.length;)_:

- arguments
- constructor
- length

_Instance Methods (e.g., var myFunction = function(x, y, z) {}; myFunction.toString();)_:

- apply()
- call()
- toString()

_Functions always return a value. If not returned, then undefined is returned_

**Functions Are First-Class Citizens (Not Just Syntax but Values)**
A function can be stored in a variable, array, or object. Also, a function can be passed to, and returned from, a function

Inside the scope/body of all functions, the this and arguments values are available.

The arguments object is an array-like object containing all of the parameters being passed to the function.

```js
var add = function () {
  return arguments[0] + arguments[1];
};
console.log(add(4, 4)); // returns 8

/** The this keyword, passed to all functions, is a reference to the object that contains the function */
var myObject1 = {
  name: "myObject1",
  myMethod: function () {
    console.log(this);
  },
};
myObject1.myMethod(); // logs 'myObject1'
var myObject2 = function () {
  console.log(this);
};
myObject2(); // logs window
```

**The arguments.callee Property**

The arguments object has a property called callee, which is a reference to the function currently executing.

```js
var foo = (function foo() {
  console.log(arguments.callee); // logs foo()
  /* callee could be used to invoke recursively the foo function
(e.g., arguments.callee()) */
})();
```

**The Function Instance length Property and arguments.callee.length**

```js
var myFunction = function (z, s, d) {
  return arguments.callee.length;
};
console.log(myFunction()); /* logs 0 because no parameters were passed
to the function */
```

Functions are invoked using four different scenarios or patterns:

- As a function
- As a method
- As a constructor
- Using apply() or call()

```js
// function pattern
var myFunction = function () {
  return "foo";
};
console.log(myFunction()); // log 'foo'
// method pattern
var myObject = {
  myFunction: function () {
    return "bar";
  },
};
console.log(myObject.myFunction()); // log 'bar'
// constructor pattern
var Cody = function () {
  this.living = true;
  this.age = 33;
  this.gender = "male";
  this.getGender = function () {
    return this.gender;
  };
};
var cody = new Cody(); // invoke via Cody constructor
console.log(cody); // logs cody object and properties
// apply() and call() pattern
var greet = {
  runGreet: function () {
    console.log(this.name, arguments[0], arguments[1]);
  },
};
var cody = { name: "cody" };
var lisa = { name: "lisa" };
// invoke the runGreet function as if it were inside of the cody object
greet.runGreet.call(cody, "foo", "bar"); // logs 'cody foo bar'
// invoke the runGreet function as if it were inside of the lisa object
greet.runGreet.apply(lisa, ["foo", "bar"]); // logs 'lisa foo bar'
/* Notice the difference between call() and apply() in how parameters are sent
to the function being invoked */
```

**Invoking Function Statements Before They Are Defined (Function Hoisting)**

```js
var speak = (function () {
  sayYo(); /* sayYo() has not been defined yet but it can still be invoked,
logs 'yo' */
  function sayYo() {
    console.log("Yo");
  }
})(); // invoke
// Example 2
console.log(sum(2, 2)); /* invoke sum(), which is not defined yet,
but can still be invoked */
function sum(x, y) {
  return x + y;
}
```

This happens because before the code runs, function statements are interpreted and added to the execution stack/context. Make sure you are aware of this as you use function statements.

_NOTE: Functions, defined as “function expressions” are not hoisted — only “function statements” are hoisted._

```js
// function statement
function addStatement(x, y) {
  return x + y;
}
// function expression
var addExpression = function (x, y) {
  return x + y;
};
```

## The Head/Global Object

JavaScript code, itself, must be contained within an object. As an example, when crafting JavaScript code for a web browser environment, JavaScript is contained and executed within the window object. This window object is considered to be the “head object,” or sometimes confusingly referred to as “the global object.”

**Global Functions Contained Within the Head Object**

- decodeURI()
- decodeURIComponent()
- encodeURI()
- encodeURIComponent()
- eval()
- isFinite()
- isNaN()
- parseFloat()
- parseInt()

**Referring to the Head Object**

Two ways: (1) this keyword in global scope, (2) reference the name given to the head object

```js
var foo = "bar";
windowRef1 = window;
windowRef2 = this;
console.log(windowRef1, windowRef2); // logs reference to window object
console.log(windowRef1.foo, windowRef2.foo); // logs 'bar', 'bar'

/** Head object is implied and typically not referenced explicitly */
var foo = {
  // window is implied here, window.foo
  fooMethod: function () {
    alert("foo" + "bar"); // window is implied here, window.alert
    window.alert("foo" + "bar"); /* window is explicitly used,
with the same effect */
  },
};
```

_NOTE: Being explicit [e.g., window.alert() versus alert()] costs a little bit more with regards to performance (how fast the code runs). It’s faster if you rely on the scope chain alone and avoid explicitly referencing the head object even if you know the property you want is contained in the global scope_

**Controlling the Value of this Using call() or apply()**

You can overwrite/control the value of this using apply() or call()to define what object this points to when invoking a function.

```js
var myObject = {};
var myFunction = function (param1, param2) {
  // set via call() 'this' points to myObject when function is invoked
  this.foo = param1;
  this.bar = param2;
  console.log(this); // logs Object {foo = 'foo', bar = 'bar'}
};
myFunction.call(
  myObject,
  "foo",
  "bar"
); /* invoke function, set this value to myObject */

// OR
// myFunction.apply(myObject, ['foo', 'bar']);

console.log(myObject); // logs Object {foo = 'foo', bar = 'bar'}
```

**Using the this Keyword Inside a User-Defined Constructor Function**

```js
var Person = function (name) {
  this.name = name || "john doe"; // this will refer to the instance created
};
var cody = new Person("Cody Lindley"); /* create an instance,
based on Person constructor */
console.log(cody.name); // logs 'Cody Lindley'
```

Again, this refers to the “object that is to be” when the constructor function is invoked using the new keyword. Had we not used the new keyword, the value of this would be the context in which Person is invoked—in this case the head object.

```js
var Person = function (name) {
  this.name = name || "john doe";
};
var cody = Person("Cody Lindley"); // notice we did not use 'new'
console.log(cody.name); // undefined, the value is actually set at window.name
```

## Scope and Closures

Three types of scope:

- global scope
- local scope (or function scope)
- eval scope `eval('var foo = 3; console.log(foo);'); // eval() scope`

**JavaScript Does Not Have Block Scope**

**The Scope Chain (Lexical Scoping)**

```js
var sayHiText = "howdy";
var func1 = (function () {
  var func2 = (function () {
    console.log(sayHiText); /* func2 scope, but it finds sayHiText in
global scope */
  })();
})();
```

JavaScript first looks in the func2 function for a variable named say HiText. Not finding func2 there, it looks up to func2’s parent function, func1. The sayHiText variable is not found in the func1 scope, either, so JavaScript then continues up to the global scope where sayHiText is found, at which point the value of sayHi Text is delivered.

**Scope Is Determined During Function Definition, not Invocation**

The scope chain is decided based on the location of a function during definition, not during invocation. This is also called lexical scoping.

The scope chain is created before you invoke a function. Because of this, we can create closures.

Below, we define a parentFunction that returns an anonymous function, and we call the returned function from the global scope. Because our anonymous function was defined as being contained inside of parentFunction, it still has access to parentFunc tion’s scope when it is invoked. This is called a closure.

```js
var parentFunction = function () {
  var foo = "foo";
  return function () {
    // anonymous function being returned
    console.log(foo); // logs 'foo'
  };
};
// nestedFunction refers to the nested function returned from parentFunction
var nestedFunction = parentFunction();
nestedFunction(); /* logs foo because the returned function accesses foo
via the scope chain */
```

**Closures Are Caused by the Scope Chain**

countUpFromZero - this function actually returns a reference to the child function contained within it. When this child function (nested function) is invoked, it still has access to the parent function’s scope because of the scope chain.

```js
var countUpFromZero = (function () {
  var count = 0;
  return function () {
    /* return nested child function when countUpFromZero is
invoked */
    return ++count; // count is defined up the scope chain, in parent function
  };
})(); // invoke immediately, return nested function
console.log(countUpFromZero()); // logs 1
console.log(countUpFromZero()); // logs 2
```

This technique, facilitated via the scope chain, is an example of a closure.

## Function Prototype Property

Any time an object is created from a constructor function using the new keyword (or when an object wrapper is created for a primitive value), it adds a hidden link between the object instance created and the prototype property of the constructor function used to create it. This link is known inside the instance as `__proto__`

**Last Stop in the prototype Chain is Object.prototype**

The myArray object is examined for the foo property. Being absent, it then looks for the property at Array.prototype, but it is not there, either. So the final place it looks is Object.prototype. Because it is not defined in any of those three objects, the property is undefined

```js
var myArray = [];
console.log(myArray.foo); // logs undefined
/* foo was not found at myArray.foo or Array.prototype.foo or
Object.prototype.foo, so it is undefined. */
```

If you intend to replace the default prototype property (common with some JS OOP patterns) set up by JavaScript, you should wire back together a constructor property that references the constructor function.

```js
var Foo = function Foo() {};
Foo.prototype = { constructor: Foo };
var FooInstance = new Foo();
console.log(FooInstance.constructor === Foo); // logs true
console.log(FooInstance.constructor); // logs Foo()
```

**Instances That Inherit Properties from the Prototype Will Always Get the Latest Values**

```js
var Foo = function Foo() {};
Foo.prototype.x = 1;
var FooInstance = new Foo();
console.log(FooInstance.x); // logs 1
Foo.prototype.x = 2;
console.log(FooInstance.x); // logs 2, the FooInstance was updated
```

**Replacing the prototype Property with a New Object Does Not Update Former Instances**

When you create an instance,that instance will be tied to the prototype that was “minted” at the time of instantiation.

```js
var Foo = function Foo() {};
Foo.prototype.x = 1;
var FooInstance = new Foo();
console.log(FooInstance.x); // logs 1, as you think it would
// now let's replace/override the prototype object with a new Object() object
Foo.prototype = { x: 2 };
console.log(FooInstance.x); /* logs 1, WHAT? Shouldn't it log 2, we just
updated prototype */
/* FooInstance still references the same state of the prototype object that
was there when it was instantiated. */
// create a new instance of Foo()
var NewFooInstance = new Foo();
// the new instance is now tied to the new prototype object value (i.e., {x:2};)
console.log(NewFooInstance.x); // logs 2
```

## Array()

An Array() is just a special type of Object(). That is, Array() instances are basically Object() instances with a couple of extra functions (e.g., .length and a built-in numeric index)

The Array() constructor can take up to 4,294,967,295 parameters.

```js
var myArray = [];
myArray[50] = "blue";
console.log(myArray.length); /* logs 51 (0 is counted) because JS created
values 0 to 50 before "blue"*/
```

## String()

```js
// create string object using the new keyword and the String() constructor
var stringObject = new String("foo");
console.log(stringObject); // logs foo {0 = 'f', 1 = 'o', 2 = 'o'}
console.log(typeof stringObject); // logs 'object'
// create string literal/primitive by directly using the String constructor
var stringObjectWithOutNewKeyword = String("foo"); // without new keyword
console.log(stringObjectWithOutNewKeyword); // logs 'foo'
console.log(typeof stringObjectWithOutNewKeyword); // logs 'string'
// create string literal/primitive (constructor leveraged behind the scene)
var stringLiteral = "foo";
console.log(stringLiteral); // logs foo
console.log(typeof stringLiteral); // logs 'string'
```

## Number()

Numbers in JavaScript are typically written as either integer values or floating point values.

_Properties (e.g., Number.prototype;)_:

- MAX_VALUE
- MIN_VALUE
- NaN
- NEGATIVE_INFINITY
- POSITIVE_INFINITY
- prototype

## Boolean()

Any valid JavaScript value that is not 0, −0, null, false, NaN, undefined, or an empty string(""), will be converted to true

If you need to convert a non-boolean value into a boolean, just use the Boolean() constructor without the new keyword and the value returned will be a primitive value instead of a boolean object.

## Null

You can use null to explicitly indicate that an object property does not contain a value. Typically, if a property is set up to contain a value, but the value is not available for some reason, the value null should be used to indicate that the reference property has an empty value.

_NOTE: Don’t confuse null with undefined. undefined is used by JavaScript to tell you that something is missing. null is provided so you can determine when a value is expected but just not available yet._

**typeof Returns null Values as “object”**

_NOTE: When verifying a null value, always use === because == does not distinguish between null and undefined_

## Undefined

The first way it’s used is to indicate that a declared variable (e.g., var foo) has no assigned value. The second way it’s used is to indicate that an object property you’re trying to access is not defined (i.e., it has not even been named), and is not found in the prototype chain.

## Math Function

_Properties (e.g., Math.PI;)_:

- E
- LN2
- LN10
- LOG2E
- LOG10E
- PI
- SQRT1_2
- SQRT2

_Methods (e.g., Math.random();)_:

- abs()
- acos()
- asin()
- atan()
- atan2()
- ceil()
- cos()
- exp()
- floor()
- log()
- max()
- min()
- pow()
- random()
- round()
- sin()
- sort()
- tan()
