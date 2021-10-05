# Javascript Notes

- [Javascript Notes](#javascript-notes)
  - [Objects](#objects)
  - [Working with Objects and Properties](#working-with-objects-and-properties)
  - [Object()](#object)
  - [Function()](#function)
  - [The Head/Global Object](#the-headglobal-object)
  - [Scope](#scope)
    - [Lexical Scope](#lexical-scope)
    - [Function Versus Block Scope](#function-versus-block-scope)
  - [Hoisting](#hoisting)
  - [Scope Closure](#scope-closure)
  - [Lexical this (Arrow Functions) !!](#lexical-this-arrow-functions-)
  - [Scope and Closures in Short](#scope-and-closures-in-short)
  - [Prototypal Inheritance](#prototypal-inheritance)
  - [Function Prototype Property](#function-prototype-property)
  - [Array()](#array)
  - [String()](#string)
  - [Number()](#number)
  - [Boolean()](#boolean)
  - [Null](#null)
  - [Undefined](#undefined)
  - [Math Function](#math-function)
  - [Asynchrony](#asynchrony)
    - [Concurrency](#concurrency)
  - [Callbacks](#callbacks)
  - [Promises](#promises)
    - [Promise Patterns](#promise-patterns)
  - [Generators](#generators)
    - [Generator Delegation](#generator-delegation)
    - [Thunks](#thunks)
  - [ES6](#es6)
    - [Block-Scoped Functions](#block-scoped-functions)
    - [Spread/Rest](#spreadrest)
    - [Default Value Expressions](#default-value-expressions)
    - [Destructuring](#destructuring)
    - [Object Literal Extensions](#object-literal-extensions)
    - [Tagged Template Literals](#tagged-template-literals)
    - [Arrow Functions](#arrow-functions)
    - [Symbols](#symbols)
    - [Iterators](#iterators)
    - [Generators](#generators-1)
    - [Modules](#modules)
    - [Classes](#classes)
    - [Promises](#promises-1)
    - [Collections](#collections)
    - [API Additions](#api-additions)
    - [Function Names](#function-names)
    - [Proxies](#proxies)
  - [Program Performance](#program-performance)
    - [Worker Environment](#worker-environment)
    - [Data Transfer](#data-transfer)
    - [Shared Workers](#shared-workers)
  - [Testing](#testing)
    - [Code coverage](#code-coverage)
  - [Benchmarking](#benchmarking)
  - [Fascinating Parts](#fascinating-parts)
  - [Q&A](#qa)
    - [What is variable hoisting?](#what-is-variable-hoisting)
    - [What is difference between undefined and null?](#what-is-difference-between-undefined-and-null)
    - [What is event bubbling?](#what-is-event-bubbling)
    - [What is event capturing?](#what-is-event-capturing)
    - [What is event delegation?](#what-is-event-delegation)
    - [What is Object?](#what-is-object)
    - [What is ‘this’ keyword?](#what-is-this-keyword)
    - [What is namespace?](#what-is-namespace)
    - [What is prototype in javascript?](#what-is-prototype-in-javascript)
    - [What is Promise?](#what-is-promise)
    - [What is Browser Object Model?](#what-is-browser-object-model)
  - [What is Navigator Object?](#what-is-navigator-object)
    - [What is Document Object?](#what-is-document-object)
    - [What are deferred scripts?](#what-are-deferred-scripts)
    - [What are asynchronous scripts?](#what-are-asynchronous-scripts)
    - [What does NULL mean in Javascript?](#what-does-null-mean-in-javascript)
    - [What is an undefined value in JavaScript?](#what-is-an-undefined-value-in-javascript)
    - [What is void(0) used for?](#what-is-void0-used-for)
    - [What is the ‘Strict’ mode in JavaScript and how can it be enabled?](#what-is-the-strict-mode-in-javascript-and-how-can-it-be-enabled)
    - [Explain closures in JavaScript? When are they used?](#explain-closures-in-javascript-when-are-they-used)
    - [Explain the for-in loop?](#explain-the-for-in-loop)
    - [How can the class of an element be changed?](#how-can-the-class-of-an-element-be-changed)
    - [Describe the properties of an anonymous function in JavaScript?](#describe-the-properties-of-an-anonymous-function-in-javascript)
    - [How can the style of an element be changed?](#how-can-the-style-of-an-element-be-changed)
    - [Explain how can you submit a form using vanilla JavaScript?](#explain-how-can-you-submit-a-form-using-vanilla-javascript)
    - [What is the disadvantage of using innerHTML in JavaScript?](#what-is-the-disadvantage-of-using-innerhtml-in-javascript)
    - [Explain window.onload versus onDocumentReady?](#explain-windowonload-versus-ondocumentready)
    - [What would be the result of 3+2+”7″](#what-would-be-the-result-of-327)
    - [What is the difference between .call() and .apply()?](#what-is-the-difference-between-call-and-apply)
    - [What is prototype property?](#what-is-prototype-property)
    - [How to call other class methods?](#how-to-call-other-class-methods)
    - [How to inherit from a class?](#how-to-inherit-from-a-class)
    - [Emulate the private data using closure?](#emulate-the-private-data-using-closure)
    - [What is DOM ?](#what-is-dom-)
    - [What are the common doctype declarations?](#what-are-the-common-doctype-declarations)
    - [What is local storage?](#what-is-local-storage)
    - [What is HTML5 File API?](#what-is-html5-file-api)
    - [What is Blob object in javascript?](#what-is-blob-object-in-javascript)
    - [What is Web RTC?](#what-is-web-rtc)
    - [List out some of the conditions that are not allowed in strict mode?](#list-out-some-of-the-conditions-that-are-not-allowed-in-strict-mode)
    - [What is the output of 0.1+0.2 produces in the console and why?](#what-is-the-output-of-0102-produces-in-the-console-and-why)
    - [What is the value of Object.[[Prototype]]?](#what-is-the-value-of-objectprototype)
    - [True or False? getElementsByTagName is a JavaScript function.](#true-or-false-getelementsbytagname-is-a-javascript-function)
    - [Give an example of when to use event delegation in JavaScript.](#give-an-example-of-when-to-use-event-delegation-in-javascript)
    - [How are numbers stored in JavaScript?](#how-are-numbers-stored-in-javascript)
    - [True or False? A string can be modified after it is created.](#true-or-false-a-string-can-be-modified-after-it-is-created)
    - [What types of properties show up in for...in loops?](#what-types-of-properties-show-up-in-forin-loops)
    - [True or False? .bind(this) immediately calls the bound function.](#true-or-false-bindthis-immediately-calls-the-bound-function)
    - [True or False? There are a maximum of three parameters in a for loop.](#true-or-false-there-are-a-maximum-of-three-parameters-in-a-for-loop)
    - [Which function executes a specified code block before the browser next repaints the display?](#which-function-executes-a-specified-code-block-before-the-browser-next-repaints-the-display)
    - [Which of the below does Object.seal() do? Select all that apply.](#which-of-the-below-does-objectseal-do-select-all-that-apply)
    - [What is a race condition?](#what-is-a-race-condition)
    - [What is functional programming?](#what-is-functional-programming)
    - [What is a higher order function?](#what-is-a-higher-order-function)
    - [Explain how the prototype chain is used in following code](#explain-how-the-prototype-chain-is-used-in-following-code)
    - [What is Shadow DOM API?](#what-is-shadow-dom-api)
    - [True or False: static variables cannot be modified in non-static methods?](#true-or-false-static-variables-cannot-be-modified-in-non-static-methods)
    - [Async operations are put into what kind of queue?](#async-operations-are-put-into-what-kind-of-queue)
    - [True or False? Setters still work on a frozen object.](#true-or-false-setters-still-work-on-a-frozen-object)
    - [What is the difference in layout time and painting time in a web browser?](#what-is-the-difference-in-layout-time-and-painting-time-in-a-web-browser)
    - [What is currying?](#what-is-currying)
    - [What is a Generator function in JavaScript?](#what-is-a-generator-function-in-javascript)
    - [What is the scope of arrow functions?](#what-is-the-scope-of-arrow-functions)
    - [What is the difference between imperative programming and declarative programming?](#what-is-the-difference-between-imperative-programming-and-declarative-programming)
    - [What property guarantees access to the global object regardless of environment?](#what-property-guarantees-access-to-the-global-object-regardless-of-environment)
    - [What is the Queue in JavaScript Runtime?](#what-is-the-queue-in-javascript-runtime)
    - [What are some limitations of arrow functions?](#what-are-some-limitations-of-arrow-functions)
    - [What is the difference in the default scope of traditional functions and arrow functions?](#what-is-the-difference-in-the-default-scope-of-traditional-functions-and-arrow-functions)
    - [Give an example of using new ES6 syntax for creating a parent/child relationship.](#give-an-example-of-using-new-es6-syntax-for-creating-a-parentchild-relationship)
    - [Error v/s new Error](#error-vs-new-error)
    - [Number() conversion v/s parseInt()](#number-conversion-vs-parseint)
    - [Object.getOwnPropertyNames() vs Object.keys()](#objectgetownpropertynames-vs-objectkeys)
    - [What are disadvantages of closures?](#what-are-disadvantages-of-closures)
    - [Why setTimeout does not execute as per delay?](#why-settimeout-does-not-execute-as-per-delay)
    - [What does it mean when people say don't block your main thread?](#what-does-it-mean-when-people-say-dont-block-your-main-thread)
    - [What is a simple way to block main thread?](#what-is-a-simple-way-to-block-main-thread)
  - [Tricky outputs](#tricky-outputs)
    - [this](#this)
    - [Promise](#promise)
    - [concat string](#concat-string)
    - [strict mode](#strict-mode)
    - [Variable hoisting](#variable-hoisting)
    - [Comma separator](#comma-separator)
    - [valueOf](#valueof)
    - [Static method](#static-method)
    - [Unsigned Right Shift assignment](#unsigned-right-shift-assignment)
    - [Multiple comparisons](#multiple-comparisons)
    - [return statement](#return-statement)
    - [void](#void)
    - [innerHTML](#innerhtml)
    - [Mixed type addition](#mixed-type-addition)
    - [Object assignment](#object-assignment)
    - [for loop](#for-loop)
    - [Promise without asynchronity](#promise-without-asynchronity)
    - [Multiple assignment](#multiple-assignment)
    - [.bind(this)](#bindthis)
    - [setTimeout v/s queueMicrotask](#settimeout-vs-queuemicrotask)
    - [Passing primitive to function](#passing-primitive-to-function)
    - [Comparing objects v/s primitives with ===](#comparing-objects-vs-primitives-with-)
    - [Passing {} to map.set](#passing--to-mapset)
    - [Console output for class](#console-output-for-class)
  - [Compare](#compare)
    - [Event Loop, Call Stack, Event & Job Queue](#event-loop-call-stack-event--job-queue)
    - [var v/s let v/s const](#var-vs-let-vs-const)
    - [Map v/s Object({})](#map-vs-object)
    - [event.target v/s event.currentTarget](#eventtarget-vs-eventcurrenttarget)
    - [Array.splice() vs Array.slice()](#arraysplice-vs-arrayslice)
    - [Object.assign v/s spread](#objectassign-vs-spread)
  - [Credits/Reference](#creditsreference)
  - [Read More](#read-more)

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
- call() : “call” is a method on every function that allows you to invoke the function specifying in what context the function will be invoked.
- toString()

_Functions always return a value. If not returned, then undefined is returned_

**Functions Are First-Class Citizens (Not Just Syntax but Values)**
A function can be stored in a variable, array, or object. Also, a function can be passed to, and returned from, a function

Inside the scope/body of all functions, the this and arguments values are available.

**The arguments object is an array-like object containing all of the parameters being passed to the function.**

```js
// You can convert the arguments object to a real array by slicing it, like so
[].slice.call(arguments, 0);

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

## Scope

Scope is a set of rules for looking up variables by their identifier name.

### Lexical Scope

Scope look-up stops once it finds the first match. The same identifier name can be specified at multiple layers of nested scope, which is called “shadowing” (the inner identifer “shadows” the outer identifier). Regardless of shadowing, scope look-up always starts at the innermost scope being executed at the time, and works its way outward/upward until the first match, and stops.

**Cheating Lexical (Anti-pattern)**

**eval** - The eval(..) function in JavaScript takes a string as an argument and treats the contents of the string as if it had actually been authored code at that point in the program.

```js
function foo(str, a) {
  eval(str); // cheating!
  console.log(a, b);
}
var b = 2;
foo("var b = 3;", 1); // 1, 3
```

**with** - deprecated

### Function Versus Block Scope

**Scope From Functions**

Each function you declare creates a bubble for itself, but no other structures create their own scope bubbles. Function scope encourages the idea that all variables belong to the function, and can be used and reused throughout the entirety of the function (and indeed, accessible even to nested scopes).

_Note: The easiest way to distinguish declaration vs. expression is the position of the word function in the statement (not just a line, but a distinct statement). If function is the very first thing in the statement, then it’s a function declaration. Otherwise, it’s a function expression._

**Anonymous v/s Named**

Anonymous function expressions are quick and easy to type, and many libraries and tools tend to encourage this idiomatic style of code.

```js
setTimeout(function () {
  // anonymous function
  console.log("I waited 1 second!");
}, 1000);
```

However, they have several drawbacks to consider:

- Anonymous functions have no useful name to display in stack traces, which can make debugging more difficult.
- Without a name, if the function needs to refer to itself, for recursion, etc., the deprecated arguments.callee reference is unfortunately required. Another example of needing to self-reference is when an event handler function wants to unbind itself after it fires.
- Anonymous functions omit a name, which is often helpful in providing more readable/understandable code. A descriptive name helps self-document the code in question.

**Blocks as Scopes**

Block scope is a tool to extend the earlier Principle of Least Privilege from hiding information in functions to hiding information in blocks of our code.

Declarations made with let will not hoist to the entire scope of the block they appear in. Such declarations will not observably “exist” in the block until the declaration statement.

```js
{
  console.log(bar); // ReferenceError!
  let bar = 2;
}
```

Another reason block-scoping is useful relates to closures and garbage collection to reclaim memory.

```js
var someReallyBigData = { .. };
process( someReallyBigData );
var btn = document.getElementById( "my_button" );
btn.addEventListener( "click", function click(evt){
console.log("button clicked");
}, /*capturingPhase=*/false );
```

In above scenario, someReallyBigData may not be garbage collected by JS engine since click function has a closure over the entire scope. To fix that:

```js
// anything declared inside this block can go away after!
{
let someReallyBigData = { .. };
process( someReallyBigData );
}
```

## Hoisting

This process of assigning variable declarations a default value of undefined during the creation phase is called Hoisting.

```js
a = 2;
var a;
console.log(a); // 2
```

The JS engine actually will compile your JavaScript code before it interprets it. Part of the compilation phase was to find and associate all declarations with their appropriate scopes.

Only the declarations themselves are hoisted, while any assignments or other executable logic are left in place. If hoisting were to re-arrange the executable logic of our code, that could wreak havoc.

```js
foo();
function foo() {
  console.log(a); // undefined
  var a = 2;
}
```

Function declarations are hoisted, as we just saw. But function expressions are not.

```js
foo(); // not ReferenceError, but TypeError!
var foo = function bar() {
  // ...
};
// The variable identifier foo is hoisted and attached to the enclosing scope (global) of this program, so foo() doesn’t fail as a ReferenceError.
```

**Functions First**

Both function declarations and variable declarations are hoisted. But a subtle detail (that can show up in code with multiple “duplicate” declarations) is that functions are hoisted first, and then variables.

```js
foo(); // 3
function foo() {
  console.log(1);
}
var foo = function () {
  console.log(2);
};
function foo() {
  console.log(3);
}
```

Function declarations that appear inside of normal blocks typically hoist to the enclosing scope, rather than being conditional as this code implies:

```js
foo(); // Uncaught TypeError: foo is not a function
var a = true;
if (a) {
  function foo() {
    console.log("a");
  }
} else {
  function foo() {
    console.log("b");
  }
}
```

## Scope Closure

Closures are not a special opt-in tool that you must learn new syntax
and patterns for. Closures happen as a result of writing code that relies on lexical scope.

Definition: Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.

```js
function foo() {
  var a = 2;
  function bar() {
    console.log(a); // 2
  }
  bar();
}
foo();
```

This concept of a child function “closing” over the variable environment of its parent function is called Closures.
Most accurate way to explain bar() referencing a is via lexical scope look-up rules, and those rules are only (an important!) part of what closure is.
From a purely academic perspective, what is said of the above snippet is that the function bar() has a closure over the scope of foo().

Let us then consider code that brings closure into full light:

```js
function foo() {
  var a = 2;
  function bar() {
    console.log(a);
  }
  return bar;
}
var baz = foo();
baz(); // 2
```

bar() is executed, for sure. But in this case, it’s executed outside of its declared lexical scope.

By virtue of where it was declared, bar() has a lexical scope closure over that inner scope of foo(), which keeps that scope alive for bar() to reference at any later time. bar() still has a reference to that scope, and that reference is called closure.

Of course, any of the various ways that functions can be passed around as values, and indeed invoked in other locations, are all examples of observing/exercising closure.

**Modules**

```js
function CoolModule() {
  var something = "cool";
  var another = [1, 2, 3];
  function doSomething() {
    console.log(something);
  }
  function doAnother() {
    console.log(another.join(" ! "));
  }
  return {
    doSomething: doSomething,
    doAnother: doAnother,
  };
}
var foo = CoolModule();
foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3
```

First, CoolModule() is just a function, but it has to be invoked for there to be a module instance created. Without the execution of the outer function, the creation of the inner scope and the closures would not occur.

To state it more simply, there are two requirements for the module pattern to be exercised:

1. There must be an outer enclosing function, and it must be invoked at least once (each time creates a new module instance).
2. The enclosing function must return back at least one inner function, so that this inner function has closure over the private scope, and can access and/or modify that private state.

A slight variation on this pattern is when you only care to have one instance, a singleton of sorts:

```js
var foo = (function CoolModule() {
  //..
})("foo module"); // name the object you are returning as your public API
foo.doSomething(); // foo module
```

**ES6 adds first-class syntax support for the concept of modules**. When loaded via the module system, ES6 treats a file as a separate module.Each module can both import other modules or specific API members, as well export their own public API members.

```js
// bar.js
function hello(who) {
return "Let me introduce: " + who;
}
export hello;
```

```js
// foo.js
// import only `hello()` from the "bar" module
import hello from "bar";
var hungry = "hippo";
function awesome() {
console.log(
hello( hungry ).toUpperCase()
);
}
export awesome;
```

```js
// baz.js
// import the entire "foo" and "bar" modules
module foo from "foo"; // module imports an entire module API to a bound variable
module bar from "bar";
console.log(
bar.hello( "rhino" )
); // Let me introduce: rhino
foo.awesome(); // LET ME INTRODUCE: HIPPO
```

## Lexical this (Arrow Functions) !!

This code suffers from a problem.

```js
var obj = {
  id: "awesome",
  cool: function coolFn() {
    console.log(this.id);
  },
};
var id = "not awesome";
obj.cool(); // awesome
setTimeout(obj.cool, 100); // not awesome
```

The problem is the loss of this binding on the cool() function. There are various ways to address that problem, but one often-repeated solution is `var self = this;`.

```js
var obj = {
  count: 0,
  cool: function coolFn() {
    var self = this;
    if (self.count < 1) {
      setTimeout(function timer() {
        self.count++;
        console.log("awesome?");
      }, 100);
    }
  },
};
obj.cool(); // awesome?
```

`self` becomes just an identifier that can be resolved via lexical scope and closure, and cares not what happened to the `this` binding along the way.

**The ES6 solution, the arrow function, introduces a behavior called lexical `this`.**

```js
var obj = {
  count: 0,
  cool: function coolFn() {
    if (this.count < 1) {
      setTimeout(() => {
        // arrow-function ftw?
        this.count++;
        console.log("awesome?");
      }, 100);
    }
  },
};
obj.cool(); // awesome?
```

The short explanation is that arrow functions do not behave at all like normal functions when it comes to their `this` binding. They discard all the normal rules for `this` binding, and instead take on the `this` value of their immediate lexical enclosing scope, whatever it is.

So, in that snippet, the arrow function doesn’t get its `this` unbound in some unpredictable way, it just “inherits” the `this` binding of the `cool()` function (which is correct if we invoke it as shown!).

One other detraction from arrow functions is that they are anonymous, not named.

A more appropriate approach, in my perspective, to this “problem,” is to use and embrace the this mechanism correctly.

```js
var obj = {
  count: 0,
  cool: function coolFn() {
    if (this.count < 1) {
      setTimeout(
        function timer() {
          this.count++; // `this` is safe
          // because of `bind(..)`
          console.log("more awesome");
        }.bind(this),
        100
      ); // look, `bind()`!
    }
  },
};
obj.cool(); // more awesome
```

## Scope and Closures in Short

Three types of scope:

- global scope
- local scope (or function scope)
- eval scope `eval('var foo = 3; console.log(foo);'); // eval() scope`

**JavaScript Does Not Have Block Scope**

**The Scope Chain (Lexical Scoping)**

The process of the JavaScript engine going one by one and checking each individual parent Execution Context if a variable doesn’t exist in the local Execution Context is called the Scope Chain.

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

Below, we define a parentFunction that returns an anonymous function, and we call the returned function from the global scope. Because our anonymous function was defined as being contained inside of parentFunction, it still has access to parentFunc tion’s scope when it is invoked. This is called a closure. In other words, a closure gives you access to an outer function's scope from an inner function.

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

## Prototypal Inheritance

In JavaScript, objects have a special hidden property `[[Prototype]]`, that is either `null` or references another object. That object is called “a prototype”.

```js
let animal = {
  walk() {
    alert("Animal walk");
  },
};
let rabbit = {
  __proto__: animal,
};

// walk is taken from the prototype
rabbit.walk(); // Animal walk
```

_Note: `__proto__` is a historical getter/setter for `[[Prototype]]`. `__proto__` is not the same as the internal `[[Prototype]]` property. It’s a getter/setter for `[[Prototype]]`. Modern JS suggests that we should use `Object.getPrototypeOf/Object.setPrototypeOf`_

The prototype is only used for reading properties. Write/delete operations work directly with the object.

```js
// Continue from previous snippet
rabbit.walk = function () {
  alert("Rabbit Walk!");
};
rabbit.walk(); // Rabbit Walk!
```

_Accessor properties are an exception_

```js
let user = {
  name: "John",
  set Name(value) {
    this.name = value;
  },
  get Name() {
    return `${this.name}`;
  },
};
let admin = { __proto__: user };
admin.Name = "Alice"; // setter is triggered
alert(admin.Name); // Alice
alert(user.Name); // John, state of user protected
```

**In a method call, this is always the object before the dot.**

But why does `hasOwnProperty` not appear in the `for..in` loop? it’s not `enumerable`. Just like all other properties of `Object.prototype`, it has `enumerable:false` flag.

Changing a prototype “on-the-fly” with `Object.setPrototypeOf` or `obj.__proto__=` is a very slow operation as it breaks internal optimizations for object property access operations.

_Note: A string can not become a prototype._

We can create an object without a prototype by `Object.create(null)`. Such objects are used as **pure dictionaries**.

```js
let myDict = Object.create(null);
myDict.hello = "Namaste";
```

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

## Asynchrony

The simplest (but definitely not only, or necessarily even best!) way of "waiting" from now until later is to use a function, commonly called a callback function.

`setTimeOut` is function which is provided by the WebAPI(timer.js) which enables developers to run the tasks in asynchronous way. All the asynchronous tasks are queued as they are triggered & are executed in the same order as they were triggered. The order is maintained in a queue called ‘Task Queue’.

```js
console.log("1");
setTimeout(() => console.log("Async"), 0);
console.log("2");
console.log("3");

// OUTPUT:
// 1
// 2
// 3
// undefined
// Async
```

```js
ajax("http://some.url.1", function myCallbackFunction(data) {
  console.log(data); // Yay, I gots me some `data`!
});
```

Any time you wrap a portion of code into a function and specify that it should be executed in response to some event (timer, mouse click, Ajax response, etc.), you are creating a later chunk of your code, and thus introducing asynchrony to your program.

**Async Console** - There is no specification or set of requirements around how the console.\* methods work -- they are not officially part of JavaScript

It's a moving target under what conditions exactly console I/O will be deferred, or even whether it will be observable.

_Note_: If you run into this rare scenario, the best option is to use breakpoints in your JS debugger instead of relying on console output. The next best option would be to force a "snapshot" of the object in question by serializing it to a string, like with `JSON.stringify(..)`

Despite your clearly being able to write asynchronous JS code (like the timeout), up until recently (ES6), JavaScript itself has actually never had any direct notion of asynchrony built into it. It's the surrounding environment (like web browser) that has always scheduled "events" (JS code executions).

It's important to note that setTimeout(..) doesn't put your callback on the event loop queue. What it does is set up a timer; when the timer expires, the environment places your callback into the event loop, such that some future tick will pick it up and execute it.

What if there are already 20 items in the event loop at that moment? Your callback waits. It gets in line behind the others -- there's not normally a path for preempting the queue and skipping ahead in line. This explains why setTimeout(..) timers may not fire with perfect temporal accuracy. You're guaranteed (roughly speaking) that your callback won't fire before the time interval you specify, but it can happen at or after that time, depending on the state of the event queue.

ES6 now specifies how the event loop works, which means technically it's within the purview of the JS engine, rather than just the hosting environment. One main reason for this change is the introduction of
ES6 Promises.

### Concurrency

Concurrency is when two or more "processes" are executing simultaneously over the same period, regardless of whether their individual constituent operations happen in parallel (at the same instant on separate processors or cores) or not.

**Cooperation**

Another expression of concurrency coordination is called "cooperative concurrency." The goal is to take a long-running "process" and break it up into steps or batches so that other concurrent "processes" have a chance to interleave their operations into the event loop queue.

For example, consider an Ajax response handler that needs to run through a long list of results to transform the values.

```js
var res = [];
// `response(..)` receives array of results from the Ajax call
function response(data) {
  // add onto existing `res` array
  res = res.concat(
    // make a new transformed array with all `data` values doubled
    data.map(function (val) {
      return val * 2;
    })
  );
}
// ajax(..) is some arbitrary Ajax function given by a library
ajax("http://some.url.1", response);
ajax("http://some.url.2", response);
```

If entire list is say 10 million records, that can take a while to run (several seconds on a powerful laptop, much longer on a mobile device, etc.).

_While such a "process" is running, nothing else in the page can happen, including no other response(..) calls, no UI updates, not even user events like scrolling, typing, button clicking, and the like. That's pretty painful._

So, to make a more cooperatively concurrent system, one that's friendlier and doesn't hog the event loop queue, you can process these results in asynchronous batches, after each one "yielding" back to the event loop to let other waiting events happen.

Simple approach:

```js
var res = [];
// `response(..)` receives array of results from the Ajax call
function response(data) {
  // let's just do 1000 at a time
  var chunk = data.splice(0, 1000);
  // add onto existing `res` array
  res = res.concat(
    // make a new transformed array with all `chunk` values doubled
    chunk.map(function (val) {
      return val * 2;
    })
  );
  // anything left to process?
  if (data.length > 0) {
    // async schedule next batch
    setTimeout(function () {
      response(data);
    }, 0);
  }
}
// ajax(..) is some arbitrary Ajax function given by a library
ajax("http://some.url.1", response);
ajax("http://some.url.2", response);
```

Of course, we're not interaction-coordinating the ordering of any of these "processes," so the order of results in res won't be predictable. We use the `setTimeout(..0)` (hack) for async scheduling, which basically just means "stick this function at the end of the current event loop queue."

_Note: `setTimeout(..0)` is not technically inserting an item directly onto the event loop queue. The timer will insert the event at its next opportunity. For example, two subsequent `setTimeout(..0)` calls would not be strictly guaranteed to be processed in call order, so it is possible to see various conditions like timer drift where the ordering of such events isn't predictable. In Node.js, a similar approach is `process.nextTick(..)` .Despite how convenient (and usually more performant) it would be, there's not a single direct way (at least yet) across all environments to ensure async event ordering._

**Jobs**

As of ES6, there's a new concept layered on top of the event loop queue, called the "Job queue." The best way to think about this that I've found is that the "Job queue" is a queue hanging off the end of every tick in the event loop queue. Jobs are kind of like the spirit of the `setTimeout(..0)` hack, but implemented in such a way as to have a much more well defined and guaranteed ordering: later, but as soon as possible.

Let's imagine an API for scheduling Jobs (directly, without hacks), and call it `schedule(..)`. Consider:

```js
console.log("A");
setTimeout(function () {
  console.log("B");
}, 0);
// theoretical "Job API"
schedule(function () {
  console.log("C");
  schedule(function () {
    console.log("D");
  });
});
```

You might expect this to print out `A B C D` , but instead it would print out `A C D B` , because the Jobs happen at the end of the current event loop tick, and the timer fires to schedule for the next event loop tick (if available!). We'll see that the asynchronous behavior of Promises is based on Jobs

**Statement Ordering**

The order in which we express statements in our code is not necessarily the same order as the JS engine will execute them.

## Callbacks

The callback is the most fundamental async pattern in the language.

In real async JS programs, there's often a lot more noise cluttering things up, noise that we have to deftly maneuver past in our brains as we jump from one function to the next.

```js
doA(function () {
  doB();
  doC(function () {
    doD();
  });
  doE();
});
doF();
```

The operations will happen in this order:

- doA()
- doF()
- doB()
- doC()
- doE()
- doD()

What if doA(..) or doD(..) aren't actually async, the way we obviously assumed them to be? Uh oh, now the order is different. `A -> C -> D -> F -> E -> B`

## Promises

What if we could uninvert that inversion of control? What if instead of handing the continuation of our program to another party, we could expect it to return us a capability to know when its task finishes, and then our code could decide what to do next?
This paradigm is called Promises.

Promises encapsulate the time-dependent state -- waiting on the fulfillment or rejection of the underlying value -- from the outside, the Promise itself is time-independent, and thus Promises can be composed (combined) in predictable ways regardless of the timing or outcome underneath. Moreover, once a Promise is resolved, it stays that way forever -- it becomes an immutable value at that point -- and can then be observed as many times as necessary.

Because a Promise is externally immutable once resolved, it's now safe to pass that value around to any party and know that it cannot be modified accidentally or maliciously. This is especially true in relation to multiple parties observing the resolution of a Promise. It is not possible for one party to affect another party's ability to observe Promise resolution.

Given that Promises are constructed by the new Promise(..) syntax, you might think that p instanceof Promise would be an acceptable check. But unfortunately, there are a number of reasons that's not totally sufficient.
The general term for "type checks" that make assumptions about a value's "type" based on its shape (what properties are present) is called "duck typing" -- "If it looks like a duck, and quacks like a duck, it must be a duck". So the duck typing check for a thenable would roughly be:

```js
if (
  p !== null &&
  (typeof p === "object" || typeof p === "function") &&
  typeof p.then === "function"
) {
  // assume it's a thenable!
} else {
  // not a thenable
}
```

But what if the Promise itself never gets resolved either way? Even that is a condition that Promises provide an answer for, using a higher level abstraction called a "race":

```js
// a utility for timing out a Promise
function timeoutPromise(delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject("Timeout!");
    }, delay);
  });
}
// setup a timeout for `foo()`
Promise.race([
  foo(), // attempt `foo()`
  timeoutPromise(3000), // give it 3 seconds
]).then(
  function () {
    // `foo(..)` fulfilled in time!
  },
  function (err) {
    // either `foo()` rejected, or it just
    // didn't finish in time, so inspect
    // `err` to know which
  }
);
```

### Promise Patterns

**Promise.all([ .. ])**

In an async sequence (Promise chain), only one async task is being coordinated at any given moment -- step 2 strictly follows step 1, and step 3 strictly follows step 2. But what about doing two or more steps concurrently (aka "in parallel")?
In classic programming terminology, a "gate" is a mechanism that waits on two or more parallel/concurrent tasks to complete before continuing. It doesn't matter what order they finish in, just that all of them have to complete for the gate to open and let the flow control through.
In the Promise API, we call this pattern `all([ .. ])`

`Promise.all([ .. ])` expects a single argument, an array , consisting generally of Promise instances. The promise returned from the `Promise.all([ .. ])` call will receive a fulfillment message ( msgs in this snippet) that is an array of all the fulfillment messages from the passed in promises, in the same order as specified (regardless of fulfillment order).

_Note: Technically, the array of values passed into Promise.all([ .. ]) can include Promises, thenables, or even immediate values. Each value in the list is essentially passed through Promise.resolve(..) to make sure it's a genuine_

The main promise returned from Promise.all([ .. ]) will only be fulfilled if and when all its constituent promises are fulfilled. If any one of those promises instead is rejected, the main Promise.all([ .. ]) promise is immediately rejected, discarding all results from any other promises.

**Promise.race([ .. ])**

While `Promise.all([ .. ])` coordinates multiple Promises concurrently and assumes all are needed for fulfillment, sometimes you only want to respond to the "first Promise to cross the finish line," letting the other Promises fall away.
This pattern is classically called a "latch," but in Promises it's called a "race."

_Don't confuse Promise.race([..]) with "race condition._

`Promise.race([ .. ])` also expects a single array argument, containing one or more Promises, thenables, or immediate values. It doesn't make much practical sense to have a race with immediate values, because the first one listed will obviously win -- like a foot race where one runner starts at the finish line!

Similar to `Promise.all([ .. ])` , `Promise.race([ .. ])` will fulfill if and when any Promise resolution is a fulfillment, and it will reject if and when any Promise resolution is a rejection.

```js
Promise.race([p1, p2])
  .then(function (msg) {
    // either `p1` or `p2` will win the race
    return request("http://some.url.3/?v=" + msg);
  })
  .then(function (msg) {
    console.log(msg);
  });
/** Because only one promise wins, the fulfillment value is a single message, not an array as it was for Promise.all([ .. ]) */
```

_Note: Promises cannot be canceled_

**Variations on all([ .. ]) and race([ .. ])**

While native ES6 Promises come with built-in `Promise.all([ .. ])` and `Promise.race([ .. ])` , there are several other commonly used patterns with variations on those semantics:

- `none([ .. ])` is like `all([ .. ])`, but fulfillments and rejections are transposed. All Promises need to be rejected -- rejections become the fulfillment values and vice versa.
- `any([ .. ])` is like `all([ .. ])`, but it ignores any rejections, so only one needs to fulfill instead of all of them.
- `first([ .. ])` is a like a race with `any([ .. ])`, which is that it ignores any rejections and fulfills as soon as the first Promise fulfills.
- `last([ .. ])` is like `first([ .. ])`, but only the latest fulfillment wins.

**The difference in Promise.any() and Promise.race() is that Promise.race() returns the first settled Promise (fulfilled or rejected), while Promise.any() continues to resolve until a promise is fulfilled, and only rejects if all promises are rejected.**

**Concurrent Iterations**

Sometimes you want to iterate over a list of Promises and perform some task against all of them, much like you can do with synchronous arrays

```js
var p1 = Promise.resolve(21);
var p2 = Promise.resolve(42);
var p3 = Promise.reject("Oops");
// double values in list even if they're in
// Promises
Promise.map([p1, p2, p3], function (pr, done) {
  // make sure the item itself is a Promise
  Promise.resolve(pr).then(
    // extract value as `v`
    function (v) {
      // map fulfillment `v` to new value
      done(v * 2);
    },
    // or, map to promise rejection message
    done
  );
}).then(function (vals) {
  console.log(vals); // [42,84,"Oops"]
});
```

## Generators

Now we turn our attention to expressing async flow control in a sequential, synchronous-looking fashion. The "magic" that makes it possible is ES6 generators.

ES6 introduces a new type of function that does not behave with the _run-to-completion (once a function starts executing, it runs until it completes, and no other code can interrupt and run in between)_ behavior. This new type of function is called a "generator."

In preemptive multithreaded languages, it would essentially be possible for bar() to "interrupt" and run at exactly the right moment between those two statements. But JS is not preemptive, nor is it (currently) multithreaded. And yet, a cooperative form of this "interruption" (concurrency) is possible, if foo() itself could somehow indicate a "pause" at that part in the code.

Here's the ES6 code to accomplish such cooperative concurrency:

```js
var x = 1;
function* foo() {
  // also valid: function *foo()
  x++;
  yield; // pause!
  console.log("x:", x);
}
function bar() {
  x++;
}

/** Now, how can we run the code in that previous snippet such that bar() executes at the point of the yield inside of *foo() ? */

// construct an iterator `it` to control the generator
var it = foo();
// start `foo()` here!
it.next();
x; // 2
bar();
x; // 3
it.next(); // x: 3
```

1. The `it = foo()` operation does not execute the `*foo()` generator yet, but it merely constructs an iterator that will control its execution.
2. The first `it.next()` starts the `*foo()` generator, and runs the `x++` on the first line of `*foo()`.
3. `*foo()` pauses at the yield statement, at which point that first `it.next()` call finishes. At the moment, `*foo()` is still running and active, but it's in a paused state.
4. We inspect the value of `x` , and it's now 2.
5. We call bar() , which increments `x` again with x++.
6. We inspect the value of `x` again, and it's now 3.
7. The final `it.next()` call resumes the `*foo()` generator from where it was paused, and runs the `console.log(..)` statement, which uses the current value of `x` of 3.

Clearly, `foo()` started, but did not run-to-completion -- it paused at the `yield` . We resumed `foo()` later, and let it finish, but that wasn't even required.

So, a generator is a special kind of function that can start and stop one or more times, and doesn't necessarily ever have to finish.

**Input and Output**

```js
function* foo(x, y) {
  return x * y;
}
var it = foo(6, 7);
var res = it.next();
res.value; // 42
```

**Iteration Messaging**

```js
function* foo(x) {
  var y = x * (yield);
  return y;
}
var it = foo(6);
// start `foo(..)`
it.next();
var res = it.next(7);
res.value; // 42
```

Inside `*foo(..)` , the `var y = x ..` statement starts to be processed, but then it runs across a `yield` expression. At that point, it pauses `*foo(..)` (in the middle of the assignment statement!), and essentially requests the calling code to provide a result value for the `yield` expression. Next, we call `it.next( 7 )` , which is passing the `7` value back in to be that result of the paused `yield` expression.

_In general, you're going to have one more `next(..)` call than you have yield statements -- the preceding snippet has one `yield` and two `next(..)` calls._

`yield ..` as an expression can send out messages in response to`next(..)` calls, and `next(..)` can send values to a paused yield expression.

```js
function* foo(x) {
  var y = x * (yield "Hello"); // <-- yield a value!
  return y;
}
var it = foo(6);
var res = it.next(); // first `next()`, don't pass anything
res.value; // "Hello"
res = it.next(7); // pass `7` to waiting `yield`
res.value; // 42
```

**Note:** We don't pass a value to the first `next()` call, and that's on purpose. Only a paused yield could accept such a value passed by a `next(..)` , and at the beginning of the generator when we call the first `next()` , there is no paused yield to accept such a value. The specification and all compliant browsers just silently discard anything passed to the first `next()` . It's still a bad idea to pass a value, as you're just creating silently "failing" code that's confusing. So, always start a generator with an argument-free `next()`.

**Interleaving**

```js
var a = 1;
var b = 2;
function* foo() {
  a++;
  yield;
  b = b * a;
  a = (yield b) + 3;
}
function* bar() {
  b--;
  yield;
  a = (yield 8) + b;
  b = a * (yield 2);
}

// helper function to control an iterator
function step(gen) {
  var it = gen();
  var last;
  return function () {
    // whatever is `yield`ed out, just
    // send it right back in the next time!
    last = it.next(last).value;
  };
}

// make sure to reset `a` and `b`
a = 1;
b = 2;
var s1 = step(foo);
var s2 = step(bar);
// run `*foo()` completely first
s1();
s1();
s1();
// now run `*bar()`
s2();
s2();
s2();
s2();
console.log(a, b); // 11 22
```

**Producers and Iterators**

An _iterator_ is a well-defined interface for stepping through a series of values from a producer. The JS interface for iterators, as it is in most languages, is to call `next()` each time you want the next value from the producer.

```js
// standard iterator interface for number series producer
var something = (function () {
  var nextVal;
  return {
    // needed for `for..of` loops
    [Symbol.iterator]: function () {
      return this;
    },
    // standard iterator interface method
    next: function () {
      if (nextVal === undefined) {
        nextVal = 1;
      } else {
        nextVal = 3 * nextVal + 6;
      }
      return { done: false, value: nextVal };
    },
  };
})();
something.next().value; // 1
something.next().value; // 9
something.next().value; // 33
```

The `[ .. ]` syntax is called a **computed property name**. It's a way in an object literal definition to specify an expression and use the result of that expression as the name for the property. `Symbol.iterator` is one of ES6's predefined special `Symbol` values.

ES6 also adds the for..of loop, which means that a standard iterator can automatically be consumed with native loop syntax:

```js
for (var v of something) {
  console.log(v);
  // don't let the loop run forever!
  if (v > 500) {
    break;
  }
}
// 1 9 33 105 321 969
```

As of ES6, the way to retrieve an _iterator_ from an _iterable_ is that the iterable must have a function on it, with the name being the special ES6 symbol value `Symbol.iterator`. When this function is called, it returns an _iterator_. Though not required, generally each call should return a fresh new _iterator_.

```js
var a = [1, 3, 5, 7, 9];
var it = a[Symbol.iterator]();
it.next().value; // 1
it.next().value; // 3
it.next().value; // 5
// ..
```

**Generator Iterator**

We can implement the something infinite number series producer from earlier with a generator, like this:

```js
function* something() {
  var nextVal;
  while (true) {
    if (nextVal === undefined) {
      nextVal = 1;
    } else {
      nextVal = 3 * nextVal + 6;
    }
    yield nextVal;
  }
}
```

**Note:** In a generator, `while..true` loop is generally totally OK if it has a yield in it, as the generator will pause at each iteration, yielding back to the main program and/or to the event loop queue. To put it glibly, "generators put the while..true back in JS programming!"

And now we can use our shiny new `*something()` generator with a `for..of` loop, and you'll see it works basically identically:

```js
for (var v of something()) {
  console.log(v);
  // don't let the loop run forever!
  if (v > 500) {
    break;
  }
}
// 1 9 33 105 321 969
```

We didn't just reference something as a value like in earlier examples, but instead called the `*something()` generator to get its iterator for the `for..of` loop to use.

**Stopping the Generator**

```js
function* something() {
  try {
    var nextVal;
    while (true) {
      if (nextVal === undefined) {
        nextVal = 1;
      } else {
        nextVal = 3 * nextVal + 6;
      }
      yield nextVal;
    }
  } finally {
    // cleanup clause
    console.log("cleaning up!");
  }
}
var it = something();
for (var v of it) {
  console.log(v);
  // don't let the loop run forever!
  if (v > 500) {
    console.log(
      // complete the generator's iterator
      it.return("Hello World").value
    );
    // no `break` needed here
  }
}
// 1 9 33 105 321 969
// cleaning up!
// Hello World
```

When we call `it.return(..)` , it immediately terminates the generator, which of course runs the finally clause.

**Iterating Generators Asynchronously**

```js
function foo(x, y) {
  ajax("http://some.url.1/?x=" + x + "&y=" + y, function (err, data) {
    if (err) {
      // throw an error into `*main()`
      it.throw(err);
    } else {
      // resume `*main()` with received `data`
      it.next(data);
    }
  });
}
function* main() {
  try {
    var text = yield foo(11, 31); // we're apparently able to get back the text from the Ajax call, even though it's asynchronous
    console.log(text);
  } catch (err) {
    console.error(err);
  }
}
var it = main();
// start it all up!
it.next();
```

`yield` is what allows us to have what appears to be blocking, synchronous code, but it doesn't actually block the whole program; it only pauses/blocks the code in the generator itself.

First the `foo(11,31)` call is made, which returns nothing (aka `undefined` ), so we're making a call to request data, but we're actually then doing yield `undefined`. Look at `foo(..)`. If the Ajax request is successful, we call: `it.next( data )`

In essence, we are abstracting the asynchrony away as an implementation detail, so that we can reason synchronously/sequentially about our flow control: "Make an Ajax request, and when it finishes print out the response." And of course, we just expressed two steps in the flow control, but this same capabililty extends without bounds, to let us express however many steps we need to.

**Synchronous Error Handling**

```js
function* main() {
  var x = yield "Hello World";
  yield x.toLowerCase(); // cause an exception!
}
var it = main();
it.next().value; // Hello World
try {
  it.next(42);
} catch (err) {
  console.error(err); // TypeError
}
```

**Generators + Promises**

The natural way to get the most out of Promises and generators is to yield a Promise, and wire that Promise to control the generator's iterator.

```js
function foo(x, y) {
  return request("http://some.url.1/?x=" + x + "&y=" + y);
}
function* main() {
  try {
    var text = yield foo(11, 31);
    console.log(text);
  } catch (err) {
    console.error(err);
  }
}
var it = main();
var p = it.next().value;
// wait for the `p` promise to resolve
p.then(
  function (text) {
    it.next(text);
  },
  function (err) {
    it.throw(err);
  }
);
```

**ES7: `async` and `await`**

Imagine a scenario where you need to fetch data from two different sources, then combine those responses to make a third request, and finally print out the last response.

```js
function* foo() {
  // make both requests "in parallel"
  var p1 = request("http://some.url.1");
  var p2 = request("http://some.url.2");
  // wait until both promises resolve
  var r1 = yield p1;
  var r2 = yield p2;
  var r3 = yield request("http://some.url.3/?v=" + r1 + "," + r2);
  console.log(r3);
}
// utility to yield until completion
run(foo);
```

`p1` and `p2` are promises for Ajax requests made concurrently (aka "in parallel"). It doesn't matter which one finishes first, because promises will hold onto their resolved state for as long as necessary.

Generator + Promise

```js
function* foo() {
  // make both requests "in parallel," and
  // wait until both promises resolve
  var results = yield Promise.all([
    request("http://some.url.1"),
    request("http://some.url.2"),
  ]);
  var r1 = results[0];
  var r2 = results[1];
  var r3 = yield request("http://some.url.3/?v=" + r1 + "," + r2);
  console.log(r3);
}
// utility to yield until completion
run(foo);
```

### Generator Delegation

The special syntax for yield -delegation is: `yield * __` (notice the extra `*`)

```js
function* foo() {
  console.log("`*foo()` starting");
  yield 3;
  yield 4;
  console.log("`*foo()` finished");
}
function* bar() {
  yield 1;
  yield 2;
  yield* foo(); // `yield`-delegation!
  yield 5;
}
var it = bar();
it.next().value; // 1
it.next().value; // 2
it.next().value; // `*foo()` starting
// 3
it.next().value; // 4
it.next().value; // `*foo()` finished
// 5
```

How does the `yield *foo()` delegation work?

First, calling `foo()` creates an iterator exactly as we've already seen. Then, `yield *` delegates/transfers the iterator instance control (of the present `*bar()` generator) over to this other `*foo()` iterator.

So, the first two `it.next()` calls are controlling `*bar()` , but when we make the third `it.next()` call, now `*foo()` starts up, and now we're controlling `*foo()` instead of `*bar()`. That's why it's called delegation -- `*bar()` delegated its iteration control to `*foo()`.

_**Note:** `yield *` yields iteration control, not generator control; when you invoke the `*foo()` generator, you're now yield - delegating to its iterator. But you can actually yield -delegate to any iterable; `yield *[1,2,3]` would consume the default iterator for the `[1,2,3]` array value._

### Thunks

Thunk - a narrow expression of a thunk in JS is a function that -- without any parameters -- is wired to call another function. You wrap a function definition around function call -- with any parameters it needs -- to defer the execution of that call, and that wrapping function is a thunk.

Async Thunk

```js
function foo(x, y, cb) {
  setTimeout(function () {
    cb(x + y);
  }, 1000);
}
function fooThunk(cb) {
  foo(3, 4, cb);
}
// later
fooThunk(function (sum) {
  console.log(sum); // 7
});

/** You don't want to make thunks manually, though. So, let's invent a utility that does this wrapping for us. */

function thunkify(fn) {
  var args = [].slice.call(arguments, 1);
  return function (cb) {
    args.push(cb);
    return fn.apply(null, args);
  };
}
var fooThunk = thunkify(foo, 3, 4);
// later
fooThunk(function (sum) {
  console.log(sum); // 7
});
```

The preceding formulation of `thunkify(..)` takes both the `foo(..)` function reference, and any parameters it needs, and returns back the thunk itself (`fooThunk(..)`).

Instead of thunkify(..) making the thunk itself, typically -- if not perplexingly -- the thunkify(..) utility would produce a function that produces thunks

```js
function thunkify(fn) {
  return function () {
    var args = [].slice.call(arguments);
    return function (cb) {
      args.push(cb);
      return fn.apply(null, args);
    };
  };
}

// USAGE

var whatIsThis = thunkify(foo);
var fooThunk = whatIsThis(3, 4);
// later
fooThunk(function (sum) {
  console.log(sum); // 7
});
```

**s/promise/thunk/**

Comparing thunks to promises generally: they're not directly interchangable as they're not equivalent in behavior. Promises are vastly more capable and trustable than bare thunks.

But in another sense, they both can be seen as a request for a value, which may be async in its answering.

## ES6

let-block

```js
let (a = 2, b, c) { // explicit block scoping
// ..
}
// Explicit block scoping
```

`let (..) { .. }` form, the most explicit of the options, was not adopted in ES6. That may be revisited post-ES6.
`let` declarations attach to the block scope but are not initialized until they appear in the block. Accessing a let-declared variable earlier than its let ..declaration/initialization causes an error.

A `const` declaration must have an explicit initialization. If you wanted a constant with the undefined value, you’d have to declare `const a = undefined` to get it.

**Constants are not a restriction on the value itself, but on the variable’s assignment of that value**. In other words, the value is not frozen or immutable because of const, _just the assignment of it_.

Note: Assigning an object or array as a constant means that value will not be able to be garbage collected until that constant’s lexical scope goes away, as the reference to the value can never be unset. That may be desirable, but be careful if it’s not your intent!

### Block-Scoped Functions

```js
if (something) {
  function foo() {
    console.log("1");
  }
} else {
  function foo() {
    console.log("2");
  }
}
foo(); // ??
```

In pre-ES6 environments, foo() would print "2" regardless of the value of something, because both function declarations were hoisted out of the blocks, and the second one always wins.
In ES6, that last line throws a `ReferenceError`.

### Spread/Rest

When `...` is used in front of any `iterable`, it acts to "spread" it out into its individual values.

```js
function foo(x, y, z) {
  console.log(x, y, z);
}
foo(...[1, 2, 3]); // 1 2 3
```

In this case `...` acts as simpler syntactic replacement for `apply(..)` like `foo.apply(null, [1,2,3]);`

It can also be used to spread/expand value in other context like `var a = [1,2]; var b = [1, ...a, 5]` where it's repalcing `concat(..)` as it behaves like `[1].concat(a, [5])`

Another common usage is in gathering a set of values together in an array.

```js
function foo(x, y, ...z) {
  console.log(x, y, z);
}
foo(1, 2, 3, 4, 5); // 1 2 [3,4,5]
```

### Default Value Expressions

Function default values can be more than just simple values like 31; they can be any valid expression, even a function call:

```js
function foo(x = y + 3, z = bar(x)) {
  console.log(x, z);
}
function foo(
  x = (function (v) {
    return v + 11;
  })(31)
) {
  console.log(x);
}
foo(); // 42
```

There will probably be cases where that pattern will be quite useful, such as:

```js
function ajax(url, cb = function () {}) {
  // ..
}
```

In early ES5, `Function.prototype` is itself an empty no-op function. So, the declaration could have been `cb = Function.prototype` and saved the inline function expression creation.

In this case, we essentially want to default cb to be a no-op empty function call if not otherwise specified.

### Destructuring

```js
var a, b, c, x, y, z;
[a, b, c] = foo();
({ x, y, z } = bar());
console.log(a, b, c); // 1 2 3
console.log(x, y, z); // 4 5 6
```

You can even solve the traditional “swap two variables” task without a temporary variable:

```js
var x = 10,
  y = 20;
[y, x] = [x, y];
console.log(x, y); // 20 10
```

**Destructuring Parameters**

```js
function f3([x, y, ...z], ...w) {
  console.log(x, y, z, w);
}
f3([]); // undefined undefined [] []
f3([1, 2, 3, 4], 5, 6); // 1 2 [3,4] [5,6]
```

### Object Literal Extensions

Concise properties

```js
var x = 2,
  y = 3,
  o = {
    x,
    y,
  };
```

Concise Methods

```js
var o = {
  x: function () {
    // ..
  },
  y: function () {
    // ..
  },
};

// AS OF ES6

var o = {
  x() {
    // ..
  },
  y() {
    // ..
  },
};
```

**Note**: concise methods have special behaviors that their older counterparts don’t; specifically, the allowance for `super`.

Generators also have a concise method form:

```js
var o = {
  *foo() { .. }
};
```

**Computed Property Names**

```js
var prefix = "user_";
var o = {
  baz: function () {},
  [prefix + "foo"]: function () {},
  [prefix + "bar"]: function () {},
  // ..
};
```

### Tagged Template Literals

```js
function foo(strings, ...values) {
  console.log(strings); // [ "Everything is ", "!"]
  console.log(values); // [ "awesome" ]
}
var desc = "awesome";
foo`Everything is ${desc}!`; // essentially a special kind of function call
```

**Raw Strings**

```js
function showraw(strings, ...values) {
  console.log(strings);
  console.log(strings.raw);
}
showraw`Hello\nWorld`;
// [ "Hello
// World" ]
// [ "Hello\nWorld" ]

// ES6 comes with a built-in function: String.raw(..)
console.log(String.raw`Hello\nWorld`);
// Hello\nWorld
```

Other uses for string literal tags include special processing for internationalization, localization, and more!

### Arrow Functions

Because by definition, arrow functions don't have prototypes. They're designed to be lightweight, without some of the baggage that old-style functions have.

Another likely reason for this is that arrow functions capture the surrounding this rather than having it determined dynamically. So they would serve poorly as constructor functions because the this within them would be referring to the this from the surrounding scope instead of the object being created. (In fact, you can't even use them as constructor functions. JavaScript will throw an error if you try to.)

```js
let Person = () => {};

Person.prototype.city = () => {
  return "New York";
}; // Uncaught TypeError: Cannot set property 'city' of undefined

// Below works:
var Person = function () {};

Person.prototype.city = function () {
  return "New York";
};
```

Consider:

```js
var controller = {
  makeRequest: () => {
    // ..
    this.helper();
  },
  helper: () => {
    // ..
  },
};
controller.makeRequest();
```

The `this.helper` reference fails, because this here doesn’t point to controller as it normally would. Where does it point? It lexically inherits this from the surrounding scope. In this previous snippet, that’s the global scope, where this points to the global object.

In addition to lexical this, arrow functions also have lexical arguments— they don’t have their own arguments array but instead inherit from their parent—as well as lexical `super` and `new.target`.

**When to use arrow function:**

- If you have a short, single-statement inline function expression, where the only statement is a return of some computed value, and that function doesn’t already make a `this` reference inside it, and there’s no self reference (recursion, event binding/unbinding).
- If you have an inner function expression that’s relying on a `var self = this` hack or a `.bind(this)` call on it in the enclosing function to ensure proper this binding.

[**When not to use arrow functions**](https://www.javascripttutorial.net/es6/when-you-should-not-use-arrow-functions/)

### Symbols

A new primitive type has been added to JavaScript: the symbol. Unlike the other primitive types, however, symbols don’t have a literal form.

```js
var sym = Symbol("some optional description");
typeof sym; // "symbol"
```

The main point of a symbol is to create a string-like value that can’t collide with any other value.

```js
const EVT_LOGIN = Symbol("event.login");
// You’d then use EVT_LOGIN in place of a generic string literal like "event.login":
evthub.listen(EVT_LOGIN, function (data) {
  // ..
});
```

The benefit here is that EVT_LOGIN holds a value that cannot be duplicated (accidentally or otherwise) by any other value, so it is impossible for there to be any confusion of which event is being dispatched or handled.

Note: If evthub instead needed to use the symbol value as a real string, it would need to explicitly coerce with String(..) or toString(), as implicit string coercion of symbols is not allowed.

**Symbols as Object Properties**

If a symbol is used as a property/key of an object, it’s stored in a special way so that the property will not show up in a normal enumeration of the object’s properties:

```js
var o = {
  foo: 42,
  [Symbol("bar")]: "hello world",
  baz: true,
};
Object.getOwnPropertyNames(o); // [ "foo","baz" ]
Object.getOwnPropertySymbols(o); // [ Symbol(bar) ]
```

The specification uses the @@ prefix notation to refer to the built-in symbols, the most common ones being: @@iterator, @@toStringTag, @@toPrimitive.

### Iterators

An iterator is a structured pattern for pulling information from a source in one-at-a-time fashion.

```js
var arr = [1, 2, 3];
var it = arr[Symbol.iterator]();
it.next(); // { value: 1, done: false }
it.next(); // { value: 2, done: false }
it.next(); // { value: 3, done: false }
it.next(); // { value: undefined, done: true }
```

### Generators

A generator can pause itself in mid-execution, and can be resumed either right away or at a later time.

```js
// Syntax
function *foo() { //.. }
function* foo() { //.. }
function * foo() { //.. }
function*foo() { //.. }
```

Generators also have a new keyword you can use inside them, to signal the pause point: `yield`.
`yield` is not just a pause point. It’s an expression that sends out a value when pausing the generator.

```js
function* foo() {
  while (true) {
    yield Math.random();
  }
}
```

```js
// yield .. is of the same “expression precedence”
var a, b;
a = 3; // valid
b = 2 + a = 3; // invalid
b = 2 + (a = 3); // valid
yield 3; // valid
a = 2 + yield 3; // invalid
a = 2 + (yield 3); // valid
```

**yield \***

yield delegation - invokes that iterable’s iterator, and delegates its own host generator’s control to that iterator until it’s exhausted.

```js
function* foo() {
  yield* [1, 2, 3];
}
// implies
function* foo() {
  yield 1;
  yield 2;
  yield 3;
}
```

Consider:

```js
function* foo() {
  var x = yield 1;
  var y = yield 2;
  var z = yield 3;
  console.log(x, y, z);
}
var it = foo();
// start up the generator
it.next(); // { value: 1, done: false }
// answer first question
it.next("foo"); // { value: 2, done: false }
// answer second question
it.next("bar"); // { value: 3, done: false }
// answer third question
it.next("baz"); // "foo" "bar" "baz"
// { value: undefined, done: true }
```

While the generator’s inner execution context is paused, the rest of the program continues unblocked, including the ability for asynchronous actions to control when the generator is resumed.

The iterator attached to a generator supports the optional `return(..)` and `throw(..)` methods. Both of them have the effect of aborting a paused generator immediately.

```js
function* foo() {
  yield 1;
  yield 2;
  yield 3;
}
var it = foo();
it.next(); // { value: 1, done: false }
it.return(42); // { value: 42, done: true }
it.next(); // { value: undefined, done: true }
```

The purpose of this capability is to notify the generator if the controlling code is no longer going to iterate over it anymore, so that it can perhaps do any cleanup tasks.

**Generator Uses**

- Producing a series of values
- Queue of tasks to perform serially

### Modules

As of ES6, we no longer need to rely on the enclosing function and closure to provide us with module support. ES6 uses file-based modules, meaning one module per file.

It’s expected that the contemporaneous advent of HTTP/2 will significantly mitigate any such performance concerns, as it operates on a persistent socket connection and thus can very efficiently load many smaller files in parallel and interleaved with one another.

The API of an ES6 module is static. That is, you define statically what all the top-level exports are on your module’s public API, and those cannot be amended later.

ES6 modules are singletons. The properties and methods you expose on a module’s public API are not just normal assignments of values or references. They are actual bindings (almost like pointers) to the identifiers in your inner module definition.

**CommonJS**

There’s a similar, but not fully compatible, module syntax called CommonJS, which is familiar to those in the Node.js ecosystem. For Node.js, that probably means (for now) that the target is CommonJS. For the browser, it’s probably UMD or AMD.

**The New Way**

Anything you don’t label with export stays private inside the scope of the module. That is, although something like `var bar = ..` looks like it’s declaring at the top-level global scope, the top-level scope is actually the module itself; there is no global scope in modules.

Though you can clearly use export multiple times inside a module’s definition, ES6 definitely prefers the approach that a module has a single export, which is known as a default export.

There can only be one default per module definition.

```js
function foo(..) { // Form 1
// ..
}
export default foo;
// v/s
function foo(..) { // Form 2
// ..
}
export { foo as default };
```

Form 1 - exporting a binding to the function expression value at that moment, not to the identifier foo.
_If you later assign foo to a different value inside your module, the module import still reveals the function originally exported, not the new value._

If you never plan to update a default export’s value, `export default ..` is fine. If you do plan to update the value, you must use `export { .. as default }`.

Two-way bindings are not allowed. If you import a foo from a module, and try to change the value of your imported foo variable, an error will be thrown!

```js
import foofn, * as hello from "world";
foofn = 42; // (runtime) TypeError!
```

If the module you’re importing with `* as ..` has a default export, it is named default in the namespace specified.

Declarations that occur as a result of an import are “hoisted”.

```js
foo(); // can run because of hoisting + static resolution
import { foo } from "foo";
```

**Circular Module Dependencya**

A imports B. B imports A.

With modules, you have declarations in entirely different scopes, so ES6 has to do extra work to help make these circular references work.

### Classes

Prior to ES6, JavaScript had no classes. To mimic a class, we often use a constructor function as shown in the following example:

```js
function Animal(type) {
  this.type = type;
}
Animal.prototype.identify = function () {
  console.log(this.type);
};
var cat = new Animal("Cat");
cat.identify(); // Cat
// identify() method is assigned to the prototype so that it can be shared by all instances
```

First, class declarations are not hoisted like function declarations. Second, all the code inside a class automatically executes in the strict mode, and you cannot change this behavior. Third, class methods are non-enumerable. Fourth, calling the class constructor without the new operator will raise `TypeError`.

Similar to functions, classes have expression forms too.

```js
// JavaScript class is a first-class citizen.
let Animal = class {
  constructor(type) {
    this.type = type;
  }
  identify() {
    console.log(this.type);
  }
};
```

Refer [this](https://www.javascripttutorial.net/es6/javascript-inheritance/) for inheritance. And more on [class](https://www.javascripttutorial.net/es6/javascript-class/)

One of the most heralded benefits to the new class and extend design is the ability to subclass the built-in natives, like Array.
**In derived classes, `super()` must be called before you can use `this`.**
In a subclass, we can create our own methods. We can even create a method with the same name as the base class' method. The method of the subclass will override that of the base class.

```js
class MyCoolArray extends Array {
  first() {
    return this[0];
  }
  last() {
    return this[this.length - 1];
  }
}
var a = new MyCoolArray(1, 2, 3);
a.length; // 3
a; // [1,2,3]

class Oops extends Error {
  constructor(...args) {
    super(...args);
    this.oops = args[0];
  }
}
// later:
var ouch = new Oops("I messed up!");
throw ouch;
```

The ouch custom error object in this previous snippet will behave like any other genuine error object, including capturing stack.

**new.target**

new.target is a new “magical” value available in all functions, though in normal functions it will always be undefined.

n any constructor, new.target always points at the constructor that new actually directly invoked, even if the constructor is in a parent class and was delegated to by a `super(..)` call from a child constructor.

If new.target is undefined, you know the function was not called with new. You can then force a new invocation if that’s necessary.

```js
class Foo {
  constructor() {
    console.log("Foo: ", new.target.name);
  }
}
class Bar extends Foo {
  constructor() {
    super();
    console.log("Bar: ", new.target.name);
  }
  baz() {
    console.log("baz: ", new.target);
  }
}
var a = new Foo();
// Foo: Foo
var b = new Bar();
// Foo: Bar <-- respects the `new` call-site
// Bar: Bar
b.baz();
// baz: undefined
```

**static** and **Symbol.species Constructor Getter**

```js
class MyCoolArray extends Array {
  // force `species` to be parent constructor
  static get [Symbol.species]() {
    return Array;
  }
}
var a = new MyCoolArray(1, 2, 3),
  b = a.map(function (v) {
    return v * 2;
  });
b instanceof MyCoolArray; // false
b instanceof Array; // true
```

### Promises

A Promise can only have one of two possible resolution outcomes: fulfilled or rejected, with an optional single value. Thus, once a Promise is resolved, it’s an immutable value that cannot be changed.

**Promise API**

`Promise.resolve(..)` creates a promise resolved to the value passed in.

```js
var p2 = new Promise(function pr(resolve) {
  resolve(42);
});
```

Any value that you are not already certain is a trustable promise—even if it could be an immediate value — can be normalized by passing it to `Promise.resolve(..)`.

`Promise.reject(..)` creates an immediately rejected promise.

```js
var p2 = new Promise(function pr(resolve, reject) {
  reject("Oops");
});
```

`Promise.all([ .. ])` accepts an array of one or more values (e.g., immediate values, promises, thenables). It returns a promise back that will be fulfilled if all the values fulfill, or reject immediately once the first of any of them rejects.

While `Promise.all([ .. ])` waits for all fulfillments (or the first rejection), `Promise.race([ .. ])` waits only for either the first fulfillment or rejection.

_Note: While Promise.all([]) will fulfill right away (with no values), Promise.race([]) will hang orever._

### Collections

**TypedArrays**

Typed arrays are really more about providing structured access to binary data using array-like semantics (indexed access, etc.). The “type” in the name refers to a “view” layered on type of the bucket of bits, which is essentially a mapping of whether the bits should be viewed as an array of 8-bit signed integers, 16-bit signed integers, and so on.

```js
var buf = new ArrayBuffer(32);
buf.byteLength; // 32
var arr = new Uint16Array(buf);
arr.length; // 16
```

`buf` is now a binary buffer that is 32-bytes long (256-bits), that’s preinitialized to all 0s. `arr` is a typed array of 16-bit unsigned integers mapped over the 256-bit `buf` buffer, meaning you get 16 elements.

Several web platform features use or return array buffers, such as `FileReader#readAsArrayBuffer(..)`, `XMLHttpRequest#send(..)`, and `ImageData (canvas data)`.

**Maps**

The major drawback with objects-as-maps is the inability to use a nonstring value as the key.

```js
var m = new Map();
var x = { id: 1 },
  y = { id: 2 };
m.set(x, "foo");
m.set(y, "bar");
m.get(x); // "foo"
m.get(y); // "bar"

// OR
var m = new Map([
  [x, "foo"],
  [y, "bar"],
]);
var vals = [...m.values()]; // ["foo","bar"]
```

The only drawback is that you can’t use the `[ ]` bracket access syntax for setting and retrieving values.

**Sets**

More on [Set](https://www.javascripttutorial.net/es6/javascript-set/)

```js
var s = new Set();
var x = { id: 1 },
  y = { id: 2 };
s.add(x);
s.add(y);
s.size;
s.delete(y);
s.clear();
s.has(x); // false
// Sets have the same iterator methods as maps.
```

**WeakMaps & WeakSets**

WeakMaps take (only) objects as keys. Those objects are held weakly, which means if the object itself is GC’d, the entry in the WeakMap is also removed.

WeakMaps do not have a size property or clear() method, nor do they expose any iterators over their keys, values, or entries. **But they are particularly useful if the object is not one you completely control, such as a DOM element.**

It’s important to note that a WeakMap only holds its keys weakly, not its values.

### API Additions

**Array.of(..)**

`Array.of(..)` replaces `Array(..)` as the preferred function-form constructor for arrays, because `Array.of(..)` does not have that special single-number-argument case.

```js
var b = Array.of(3);
b.length; // 1
b[0]; // 3
var c = Array.of(1, 2, 3);
c.length; // 3
c; // [1,2,3]
```

**Array.from(..)**

```js
// ES5
// array-like object
var arrLike = {
  length: 3,
  0: "foo",
  1: "bar",
};
var arr = Array.prototype.slice.call(arrLike);
// Also when lice(..) is often used is in duplicating a real array:
var arr2 = arr.slice();

// ES6
var arr = Array.from(arrLike);
var arrCopy = Array.from(arr);

// Caveat
var arrLike = {
  length: 4,
  2: "foo",
};
Array.from(arrLike);
// [ undefined, undefined, "foo", undefined ]
// Because positions 0, 1, and 3 didn’t exist on arrLike

// An array initialized to a certain length with actual undefined values in each slot
var c = Array.from({ length: 4 });
// four `undefined` values
```

The second argument, if provided, is a mapping callback.

```js
var arrLike = {
  length: 4,
  2: "foo",
};
Array.from(arrLike, function mapper(val, idx) {
  if (typeof val == "string") {
    return val.toUpperCase();
  } else {
    return idx;
  }
});
// [ 0, 1, "FOO", 3 ]
```

Note: As with other array methods that take callbacks, `Array.from(..)` takes an optional third argument that if set will specify the this binding for the callback passed as the second argument.

**copyWithin(..)**

It copies a portion of an array to another location in the same array, overwriting whatever was there before. The arguments are target (the index to copy to), start (the inclusive index to start the copying from), and optionally end (the exclusive index to stop copying).

```js
[1, 2, 3, 4, 5].copyWithin(3, 0); // [1,2,3,1,2]
[1, 2, 3, 4, 5].copyWithin(3, 0, 1); // [1,2,3,1,5]
[1, 2, 3, 4, 5].copyWithin(0, -2); // [4,5,3,4,5]
[1, 2, 3, 4, 5].copyWithin(0, -2, -1); // [4,2,3,4,5]
// caveat - the copying algorithm reverses direction
[1, 2, 3, 4, 5].copyWithin(2, 1); // [1,2,2,3,4]
```

**fill(..)**

```js
var a = Array(4).fill(undefined);
a;
// [undefined,undefined,undefined,undefined]
var a = [null, null, null, null].fill(42, 1, 3);
a; // [null,42,42,null]
```

**find(..) & findIndex(..)**

The `indexOf(..)` comparison requires a strict === match, so a search for "2" fails to find a value of 2. ES6’s `find(..)` works basically the same as `some(..)`, except that once the callback returns a true/truthy value, the actual array value is returned:

```js
var a = [1, 2, 3, 4, 5];
a.find(function matcher(v) {
  return v == "2";
}); // 2
```

**Object.is(..)**

It makes value comparisons in an even more strict fashion than the === comparison. Two important exceptions:

```js
var x = NaN,
  y = 0,
  z = -0;
x === x; // false
y === z; // true
Object.is(x, x); // true
Object.is(y, z); // false
```

In cases where you’re trying to strictly identify a NaN or -0 value, `Object.is(..)` is now the preferred option.

[**Object.assign(..)**](https://www.javascripttutorial.net/es6/javascript-object-assign/)

Note that the `Object.assign()` only carries a shallow clone, not a deep clone.

```js
/**
 * The Object.assign() copies all enumerable and own properties from the source objects to the target object. It returns the * target object.
 *
 * The Object.assign() invokes the getters on the source objects and setters on the target. It assigns properties only, not copying or defining new properties.
 */
Object.assign(target, ...sources);
```

For each source, its enumerable and own (e.g., not “inherited”) keys, including symbols, are copied as if by plain = assignment.

```js
var target = {},
  o1 = { a: 1 },
  o2 = { b: 2 },
  o3 = { c: 3 },
  o4 = { d: 4 };
// set up read-only property
Object.defineProperty(o3, "e", {
  value: 5,
  enumerable: true,
  writable: false,
  configurable: false,
});
// set up non-enumerable property
Object.defineProperty(o3, "f", {
  value: 6,
  enumerable: false,
});
o3[Symbol("g")] = 7;
// set up non-enumerable symbol
Object.defineProperty(o3, Symbol("h"), {
  value: 8,
  enumerable: false,
});
Object.setPrototypeOf(o3, o4);
// Only the properties a, b, c, e, and Symbol("g") will be copied to target:
Object.assign(target, o1, o2, o3);
target.a; // 1
target.b; // 2
target.c; // 3
Object.getOwnPropertyDescriptor(target, "e");
// { value: 5, writable: true, enumerable: true,
// configurable: true }
Object.getOwnPropertySymbols(target);
// [Symbol("g")]
```

### Function Names

As of ES6, there are now inference rules that can determine a sensible name property value to assign a function even if that function doesn’t have a lexical name to use.

```js
var abc = function () {
  // ..
};
abc.name; // "abc"
class Awesome {
  constructor() {} // name: Awesome
  funny() {} // name: funny
}
export default function () {} // name: default
var y = new Function(); // name: anonymous
```

Note: If a function has a name value assigned, that’s typically the name used in stack traces in developer tools.

The name property is not writable by default, but it is configurable, meaning you can use Object.defineProperty(..) to manually change it if so
desired.

### Proxies

A proxy is a special kind of object you create that “wraps”—or sits in front of —another normal object. You can register special handlers (aka traps) on the proxy object, which are called when various operations are performed against the proxy. These handlers have the opportunity to perform extra logic in addition to forwarding the operations on to the original target/wrapped object.

```js
var obj = { a: 1 },
  handlers = {
    get(target, key, context) {
      // note: target === obj,
      // context === pobj
      console.log("accessing: ", key);
      return Reflect.get(target, key, context);
    },
  },
  pobj = new Proxy(obj, handlers);
obj.a;
// 1
pobj.a;
// accessing: a
// 1
```

Each proxy handler has a default definition that automatically calls the corresponding Reflect utility. You will almost certainly use both Proxy and Reflect in tandem.

## Program Performance

If you have processing-intensive tasks but you don't want them to run on the main thread (which may slow down the browser/UI), you might have wished that JavaScript could operate in a multithreaded manner.

Web Workers - feature of the browser (aka host environment) and actually has almost nothing to do with the JS language itself. That is, JavaScript does not currently have any features that support threaded execution. But an environment like your browser can easily provide multiple instances of the JavaScript engine, each on its own thread, and let you run a different program in each thread. Each of those separate threaded pieces of your program is called a "(Web) Worker." This type of parallelism is called "task parallelism," as the emphasis is on splitting up chunks of your program to run in parallel.

From your main JS program (or another Worker), you instantiate a Worker like so:

```js
var w1 = new Worker("http://some.url.1/mycoolworker.js");
```

The URL should point to the location of a JS file (not an HTML page!) which is intended to be loaded into a Worker. The browser will then spin up a separate thread and let that file run as an independent program in that thread.

Note: The kind of Worker created with such a URL is called a "Dedicated Worker." But instead of providing a URL to an external file, you can also create an "Inline Worker" by providing a Blob URL (another HTML5 feature); essentially it's an inline file stored in a single (binary) value.

Workers do not share any scope or resources with each other or the main program but instead have a basic event messaging mechanism connecting them.

The `w1` Worker object is an event listener and trigger, which lets you subscribe to events sent by the Worker as well as send events to the Worker.

Here's how to listen for events (actually, the fixed "message" event):

```js
w1.addEventListener("message", function (evt) {
  // evt.data
});
```

And you can send the "message" event to the Worker:

```js
w1.postMessage("something cool to say");
```

Inside the Worker, the messaging is totally symmetrical:

```js
addEventListener("message", function (evt) {
  // evt.data
});
postMessage("a really cool reply");
```

Notice that a dedicated Worker is in a one-to-one relationship with the program that created it. That is, the "message" event doesn't need any disambiguation here, because we're sure that it could only have come from this one-to-one relationship -- either it came from the Worker or the main page.

Usually the main page application creates the Workers, but a Worker can instantiate its own child Worker(s) -- known as subworkers -- as necessary. Sometimes this is useful to delegate such details to a sort of "master" Worker that spawns other Workers to process parts of a task.

To kill a Worker immediately from the program that created it, call `terminate()` on the Worker object. Abruptly terminating a Worker thread does not give it any chance to finish up its work or clean up any resources. It's akin to you closing a browser tab to kill a page.

If you have two or more pages (or multiple tabs with the same page!) in the browser that try to create a Worker from the same file URL, those will actually end up as completely separate Workers.

### Worker Environment

Inside the Worker, you do not have access to any of the main program's resources. That means you cannot access any of its global variables, nor can you access the page's DOM or other resources. Remember: it's a totally separate thread.

You can, however, perform network operations (Ajax, WebSockets) and set timers. Also, the Worker has access to its own copy of several important global variables/features, including navigator , location , JSON , and applicationCache .

You can also load extra JS scripts into your Worker, using `importScripts(..)`: `importScripts( "foo.js", "bar.js" );`

These scripts are loaded synchronously, which means the importScripts(..) call will block the rest of the Worker's execution until the file(s) are finished loading and executing.

**What are some common uses for Web Workers?**

- Processing intensive math calculations
- Sorting large data sets
- Data operations (compression, audio analysis, image pixel manipulations, etc.)
- High-traffic network communications

### Data Transfer

If you pass an object, a so-called ["Structured Cloning Algorithm"](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/The_structured_clone_algorithm) is used to copy/duplicate the object on the other side.

An even better option, especially for larger data sets, is ["Transferable Objects"](http://updates.html5rocks.com/2011/12/Transferable-Objects-Lightning-Fast). What happens is that the object's "ownership" is transferred, but the data itself is not moved. Once you transfer away an object to a Worker, it's empty or inaccessible in the the originating location.

Any data structure that implements the [Transferable interface](https://developer.mozilla.org/en-US/docs/Web/API/Transferable) will automatically be transferred this way (support Firefox & Chrome).

For example, typed arrays like Uint8Array are "Transferables."

```js
// `foo` is a `Uint8Array` for instance
postMessage(foo.buffer, [foo.buffer]);
```

Browsers that don't support Transferable Objects simply degrade to structured cloning, which means performance reduction rather than outright feature breakage.

### Shared Workers

If your site or app allows for loading multiple tabs of the same page (a common feature), you may very well want to reduce the resource usage of their system by preventing duplicate dedicated Workers

```js
var w1 = new SharedWorker("http://some.url.1/mycoolworker.js");
```

Because a shared Worker can be connected to or from more than one program instance or page on your site, the Worker needs a way to know which program a message comes from. This unique identification is called a "port" -- think network socket ports. So the calling program must use the port object of the Worker for communication:

```js
w1.port.addEventListener("message", handleMessages);
// ..
w1.port.postMessage("something cool");
```

Also, the port connection must be initialized, as:

```js
w1.port.start();
```

Inside the shared Worker, an extra event must be handled: "connect".

```js
// inside the shared Worker
addEventListener("connect", function (evt) {
  // the assigned port for this connection
  var port = evt.ports[0];
  port.addEventListener("message", function (evt) {
    // ..
    port.postMessage();
    // ..
  });
  // initialize the port connection
  port.start();
});
```

**Note:** Shared Workers survive the termination of a port connection if other port connections are still alive, whereas dedicated Workers are terminated whenever the connection to their initiating program is terminated.

## Testing

![By Kent C. Dodds](https://testingjavascript.com/static/trophyWithLabels@2x-4d0c19a94d88ac607cc5cbeaa8f8708d.png)

- **Unit test**: Specify and test one point of the contract of single method of a class. This should have a very narrow and well defined scope. Complex dependencies and interactions to the outside world are stubbed or mocked.
- **Integration test**: Test the correct inter-operation of multiple subsystems. There is whole spectrum there, from testing integration between two classes, to testing integration with the production environment.
- **Smoke test (aka sanity check)**: A simple integration test where we just check that when the system under test is invoked it returns normally and does not blow up. It’s important to maintain a suite of automated functional tests that act like smoke tests for your newly deployed releases.
- **Regression test**: A test that was written when a bug was fixed. It ensures that this specific bug will not occur again.

Most apps will require both unit tests and functional tests, and many complex apps will also require integration tests.

- **Unit tests** ensure that individual components of the app work as expected. Assertions test the component API.
- **Integration tests** ensure that component collaborations work as expected. Assertions may test component API, UI, or side-effects (such as database I/O, logging, etc…)
- **Functional tests** ensure that the app works as expected from the user’s perspective. Assertions primarily test the user interface.

Unit tests should be:

- Dead simple.
- Lightning fast. i.e. no network calls
- A good bug report. i.e. a fail test should tell you: which component is at test, expected behavior, actual result, expected result and behaviour reproduced.

Why Use TDD?

Every component lacking unit tests has legacy code that becomes difficult to maintain. We could add unit tests after we create the production code. However, we may run the risk of overlooking some scenarios that should have been tested. By creating tests first, we have a higher chance of covering every logic scenario in our component, which would make it easy to refactor and maintain.

### Code coverage

It's almost impossible to imagine all the paths our code can take and so arises the need for a tool that helps to uncover these blind spots. That tool is code coverage.

## Benchmarking

Just use [Benchmark.js](http://benchmarkjs.com/)

```js
// Quick illustration
function foo() {
  // operation(s) to test
}
var bench = new Benchmark(
  "foo test", // test name
  foo, // function to test (just contents)
  {
    // .. // optional extra options (see docs)
  }
);
bench.hz; // number of operations per second
bench.stats.moe; // margin of error
bench.stats.variance; // variance across samples
```

(jsPerf)[http://jsperf.com/] - run statistically accurate and reliable tests, and makes the test on an openly available URL that you can pass around to others.

```js
// Case 1
var x = ["John", "Albert", "Sue", "Frank", "Bob"];
x.sort();
// Case 2
var x = ["John", "Albert", "Sue", "Frank", "Bob"];
x.sort(function mySort(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});
```

The second case is not only testing a custom user JS function, but it's also testing creating a new function expression for each iteration. The inline function expression creation can be from 2% to 20% slower.

_Note: a different outcome between two test cases almost certainly invalidates the entire test!_

## Fascinating Parts

In JavaScript every function call is a vararg call.

```js
function max(a, b) {
  if (a > b) return a;
  return b;
}
console.log(max(4, 7, 13)); // Works but wrong result
```

## Q&A

### What is variable hoisting?

In Javascript regardless of where the actual declaration has been made, all variable declarations that are using var, are hoisted/lifted to the top of their functional/local scope (if declared inside a function) or to the top of their global scope (if declared outside of a function).
This lifting of scopes is called hoisting.

```js
bla = 2;
var bla;
// ...is implicitly understood as:
var bla;
bla = 2;
```

### What is difference between undefined and null?

The undefined means a variable has been declared but has no value has yet been assigned.
On the other hand, null is basically a value which has been assigned.
Also, undefined is a type itself (undefined) while null is an object.
Unassigned variables are initialized with a default value of undefined by JavaScript or undefined can be assigned to variable through code.
Whereas JavaScript never sets a value to null.

### What is event bubbling?

When an event happens on an element, it first runs the handlers on that particular element, after that handlers on its parent runs, this happens all the way up on all other ancestors.
This bubbling of events from child to parent is called event bubbling.

_To stop event bubbling we can use `event.stopPropagation()`_

### What is event capturing?

Capturing phase is invisible to use but what in it, outer-most ancestor (<html>) is checked for onclick event handler. If present, it's run and checking moves on to inner elements.

### What is event delegation?

Event delegation concept relies on the fact that if you want some code to run when you click on any one of a large number of grouped child elements, you can set the event listener on their parent and have events that happen on them bubble up to their parent, instead of having to set the event listener on every child individually.

### What is Object?

The object is collection of properties and methods.
Object in Javascript are variables as well. Object can have properties any data types (String, Number, Boolean etc.).

### What is ‘this’ keyword?

The this keyword refers to the object it belongs to.
In a function, this refers to the Global object (Windows object).
In strict mode, when used in a function, this is undefined.
In HTML event handlers, this refers to the element in html that received
the event.

### What is namespace?

In JavaScript, namespace is a single global object which will contain all our functions, methods, variables.
Javascript don’t provide default namespace you have to create it, so all functions, variables and object in Javascript are by default global.

Example:

```js
var myProjectNameSpace = {
  projectfunctionone: function () {},
  projectfunctiontwo: function () {},
};
myProjectNameSpace.Projectfunctionone();
```

### What is prototype in javascript?

All objects in Javascript have property called as prototype, the prototype is an object which has a constructor properties by default.

The prototype object is associated with every functions and objects by default in JavaScript, where function's prototype property is accessible and modifiable and object's prototype property is not visible.

The prototype property allows you to add properties and methods to any object.

### What is Promise?

The Promise object represents the eventual completion (or failure) of an asynchronous operation along with its resulting value.
A Promise is a proxy for a value which may or may not be known when the promise is created.

### What is Browser Object Model?

The browser object model (BOM) is a hierarchy of browser objects that are used to manipulate methods and properties associated with the Web browser itself.
The default object of browser is window means you can invoke all the functions of window by specifying window or directly
Objects that make up the BOM include the window object, navigator object, screen object, location object, history, and the document object.

## What is Navigator Object?

The navigator object is used to get browser information like name, version, type, language. It has methods like javaEnabled() and taintEnabled().
`navigator.appVersion` is used to find operating system of client device.

### What is Document Object?

The Document object represents HTML document that is displayed in window. Document object has properties which allows access and modification of document content.

The way document is accessed and modified is called Document Object Model or DOM.
Document object provides methods like open(), close(), write(), getElementById(), getElementByName(), getElementByTagName().

### What are deferred scripts?

The defer attribute tells browser to only execute the script file once the HTML document has been fully parsed.

```html
<script defer src=”myscript.js”>
```

This reduces loading time of web page and web page is displayed faster.

### What are asynchronous scripts?

The async attribute is used to indicate browser that script file can be executed asynchronously.

```html
<script async src=”somescript.js”>
```

The HTML parser does not have pause at the point it reaches the script tag to fetch and execute, the execution can occur whenever the script becomes ready after being fetched in parallel with document parsing.

### What does NULL mean in Javascript?

The NULL value is used to represent no value or no object. A variable that is null indicates that it points to nothing. In APIs, null is often retrieved in a place where an object can be expected but no object is relevant.

### What is an undefined value in JavaScript?

Undefined is one of JavaScript's primitive types. A variable that has not been assigned a value is of type undefined. A method or statement can also be undefined if it tries to use a variable that is undefined. Finally, a function returns undefined if a value was not returned.

### What is void(0) used for?

The void operator evaluates the given expression and then returns undefined. `void(0)` is used to prevent the page from refreshing. The parameter “zero” is passed while calling it.

### What is the ‘Strict’ mode in JavaScript and how can it be enabled?

ECMAScript 5's strict mode is a way to opt in to a restricted variant of JavaScript. Strict mode is intentionally different from normal JavaScript code.
Strict mode makes several changes to normal JavaScript semantics. First, strict mode forces some JavaScript silent errors by changing them to throw errors. Second, strict mode enables JavaScript engines to perform certain optimizations that were previously not possible. Third, strict mode prohibits syntax likely to be defined in future versions of ECMAScript.

### Explain closures in JavaScript? When are they used?

Think of closures as a kind of regional scope: broader than local but not as broad as global.
A closure is an inner function that has access to the enclosing function’s variables. The closure has access to its own scope (variables defined between its curly brackets), access to the outer function’s variables, and also it has access to the global variables.

### Explain the for-in loop?

The for-in loop is used to loop through the properties of an object. The loop is continued till all the properties of the object are depleted.

```js
for (let i in [1, 2]) {
  console.log(i);
} // 0 1
```

### How can the class of an element be changed?

```js
document.getElementById("MyElement").classList.add("MyClass");
document.getElementById("MyElement").classList.remove("MyClass");
```

### Describe the properties of an anonymous function in JavaScript?

A function that is declared without a name is known as an anonymous function. Functions stored in variables do not need function names. They are instead called using the variable name.

### How can the style of an element be changed?

```js
document.getElementById("p2").style.color = "blue";
```

### Explain how can you submit a form using vanilla JavaScript?

```js
document.form[0].submit();
```

### What is the disadvantage of using innerHTML in JavaScript?

Improper handling of the innerHTML property can enable script-injection. Setting innerHTML will destroy existing HTML elements that have event handlers attached to them, potentially creating a memory leak on some browsers. InnerHTML content is refreshed every time and thus is slower.

### Explain window.onload versus onDocumentReady?

`load` is called when all assets are done loading, including images. At this point, all of the objects in the document are in the DOM.
`ready` is fired when the DOM is ready for interaction and its elements can be manipulated by your code.This means it will run a little faster than waiting for `load`.

### What would be the result of 3+2+”7″

Since 3 and 2 are integers, they will be added numerically. And since 7 is a string, its concatenation will be done. So the result would be **57**.

### What is the difference between .call() and .apply()?

`apply()` lets you invoke the function with arguments as an array; `call()` requires the parameters be listed explicitly.In other words, you use `apply()` when you don’t know the number of parameters.

### What is prototype property?

By Using Prototype we can add new members to an existing object. Every JavaScript object has this property internally. Initially it is an empty object.

### How to call other class methods?

Using `call()` and `apply()` method we can use methods from different context to the current context. It is really helpful in reusability of code and context binding.

```js
var MyNumber = {
  getTypeOfNumber: function (number) {
    var type = number % 2 === 0 ? "Even" : "Odd";
    return type;
  },
  getTypeOfAllNumber: function () {
    var result = [],
      i = 0;
    for (; i < arguments.length; i++) {
      var type = MyNumber.getTypeOfNumber.call(null, arguments[i]);
      result.push(type);
    }
    return result;
  },
};
var typeOfNumber = MyNumber.getTypeOfNumber.call(null, 21); // "Odd"
console.log(typeOfNumber);
var typeOfAllNumber = MyNumber.getTypeOfAllNumber.apply(
  null,
  [2, 4, 5, 78, 21]
);
console.log(typeOfAllNumber); //  ["Even", "Even", "Odd", "Even", "Odd"]
```

### How to inherit from a class?

Inheritance can be achieved in JavaScript using prototype property.
We need to follow 2 steps to create an inheritance.
Step1:
Child class prototype should point to parent class object.
`<ChildClassName>.prototype = new <ParentClass>();`
Step2:
Reset the child class prototype constructor to point self.
`<ChildClassName>.prototype.constructor=<ChildClassName>`

```js
// Also
function Dog(name) {
  this.name = name;
}
const buddy = new Dog("buddy");
const rover = Object.create(buddy);
```

### Emulate the private data using closure?

```js
function Student(name) {
  var _name = name;
  this.getName = function () {
    return _name;
  };
}
var student1 = new Student("Sandeep");
student1._name = "John";
console.log(student1.getName()); // Sandeep
```

### What is DOM ?

Document Object Model (DOM) is a programming API for HTML and XML document. JavaScript is most widely used language to access these DOM API properties and methods.

From the MDN Web Docs: The DOM is "A tree-like structure of connected nodes that represents the different elements and strings of text appearing in a markup document"

### What are the common doctype declarations?

There are 8 different type of doctype declaration and are listed below.

- HTML 5: `<!DOCTYPE html>`
- HTML 4.01 Strict: Does NOT INCLUDE presentational or deprecated elements (like font). Framesets are not allowed. `<!DOCTYPE HTML PUBLIC “-//W3C//DTD HTML 4.01//EN” “http://www.w3.org/TR/html4/strict.dtd”>`
- HTML 4.01 Transitional: This DTD contains all HTML elements and attributes, INCLUDING presentational and deprecated elements (like font). Framesets are not allowed. `<!DOCTYPE HTML PUBLIC “-//W3C//DTD HTML 4.01 Transitional//EN” “http://www.w3.org/TR/html4/loose.dtd”>`
- HTML 4.01 Frameset: his DTD is equal to HTML 4.01 Transitional, but allows the use of frameset content.
- XHTML 1.0 Strict
- XHTML 1.0 Transitional
- XHTML 1.0 Frameset
- XHTML 1.1

### What is local storage?

HTML5 provides a feature to store data locally in end user’s browser. Data is stored in the browser as key-value pair. Unlike cookie it has average space of 5 MB. This storage comes in 2 different type sessionStorage and localStorage.
_localStorage_ : it stores data with no expiration date. _sessionStorage_ : it stores data with an expiration date.

### What is HTML5 File API?

HTML5 provides new API to work with files inside a browser. This API provides File, FileList and Blob data type to work with files. It provides FileReader interface to read files asynchronously.

### What is Blob object in javascript?

A blob object refers to a sequence of bytes representing data. A blob object can be created using new keyword with Blob constructor. A Blob constructor takes the following parameters:

- Blob part sequence: This can be either ArrayBuffer, ArrayBufferView, Blob and DOMString
- Blob property bag: It takes one parameter representing type of the ASCII-encoded string in lower case representing the media type of the Blob.

```js
var a = new Blob();
var b = new Blob(["foobarbazetcetc" + "birdiebirdieboo"], {
  type: "text/plain;charset=UTF-8",
});
```

A Blob must have a readability state, which is one of OPENED or CLOSED.

### What is Web RTC?

Web RTC provides the capability to browsers for real time communication without any additional plugin installed. It involves audio, video and other type of data streaming among the browser with their native capability.

### List out some of the conditions that are not allowed in strict mode?

- Using a variable without declaring is not allowed. Deleting a variable, a function, or an argument is not allowed.
- Defining a property more than once is not allowed. Duplicating a parameter name is not allowed.
- Octal numeric literals and escape characters are not allowed.
- Writing to a read-only property is not allowed. Deleting an undeletable property is not allowed.
- Future reserved keywords are not allowed.

### What is the output of 0.1+0.2 produces in the console and why?

JavaScript math library follows IEEE 754 standards for math. IEEE 754 standards use 64 bit representation for a floating point number. This causes a problem while evaluating the 0.1 + 0.2 expression.

JavaScript internally converts the 0.1 to 16 precision which becomes 0.1000000000000000 and then 0.2 gets added and becomes 0.30000000000000004.

This issue can be resolved by using to `toFixed(1)` method to this expression.

### What is the value of Object.[[Prototype]]?

Answer: null

While Object is at the top of the prototype chain, when the browser is seeking the value of an accessed property, it will traverse the prototype chain until the value is found or until there are no more prototypes to traverse.
_While null is the value of Object.[[Prototype]], undefined is the returned value._

### True or False? getElementsByTagName is a JavaScript function.

Answer: False
getElementsByTagName is actually Web API function. It is available like a normal JS function, but is accessible regardless of language being used.

### Give an example of when to use event delegation in JavaScript.

One example: Use event delegation if an element that you want to listen for events on may not exist at page load. Instead, put event handler on a parent element and look at event.target.
Modern frameworks and libraries such as React make this less necessary.

### How are numbers stored in JavaScript?

- Double precision
- 64-bit
- Floating point numbers

### True or False? A string can be modified after it is created.

Answer: False
Strings are immutable in JavaScript. However, the variable pointing to a string can of course be reassigned to another string.

### What types of properties show up in for...in loops?

Answer: Enumerable Properties

### True or False? .bind(this) immediately calls the bound function.

Answer: False
Unlike the `call()` and `apply()` methods, the `bind()` method doesn’t immediately execute the function. It just returns the function.

### True or False? There are a maximum of three parameters in a for loop.

Answer: False

```js
for (var i = 0, j = 0; i <= 10; i++, j++) {
  // this is valid
}
```

### Which function executes a specified code block before the browser next repaints the display?

A) requestAnimationFrame()
B) setTimeout()
C) requestRepaintDelay()

Answer: A

### Which of the below does Object.seal() do? Select all that apply.

A) prevents new properties from being added
B) marks all existing properties as non-configurable
C) prevents values of existing properties from being changed

Answer: A, B. A similar but more rigorous function is `Object.freeze()`

`Object.freeze()` does the following:

- prevents new properties from being added
- prevents existing properties from being removed
- prevents changing the enumerability of properties
- prevents changing the configurability of properties
- prevents changing the writability of properties
- prevents changing the values of properties
- prevents changing the prototype of the object

### What is a race condition?

A race condition is when two threads or async processes must complete in the proper order and update some shared state, otherwise there will be a bug or unwanted outcome.

### What is functional programming?

A coding paradigm utilizing declarative code and pure functions. In computer science, functional programming is a programming paradigm … that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data. It is a declarative programming paradigm, which means programming is done with expressions or declarations instead of statements.

One well-known and widely used declarative language is SQL. With SQL, each SELECT statement specifies what data to return, and the database’s query optimizer and execution engine interpret the SQL statement to figure out how to return it.

### What is a higher order function?

A function that can take a function as an argument, or that returns another
function.

### Explain how the prototype chain is used in following code

```js
class Person {
  firstName: string;
  lastName: string;
}
const myPerson = new Person();
console.log(myPerson.a);
```

The browser checks `myPerson.[[Prototype]]` and does not see a property named a. Then the browser checks `myPerson.[[Prototype]].[[Prototype]]` (which is the Object prototype) and does not see a property named a. Then
the browser checks `myPerson.[[Prototype]].[[Prototype]].[[ Prototype]]`,
which is null, so the browser returns undefined.

### What is Shadow DOM API?

The Shadow DOM API provides a way to attach a hidden separate DOM to an element not accessible through the usual JS DOM manipulation API. Shadow DOM provides for encapsulation of Web Components. Hidden DOM trees attach to elements in the regular DOM tree.

### True or False: static variables cannot be modified in non-static methods?

A non-static method can reference and modify a static variable with Class.Static syntax, like below.

```js
class Test {
  static MAX = 10;
  getMax() {
    Test.MAX = 12;
    console.log(Test.MAX);
  }
}
```

### Async operations are put into what kind of queue?

Event queue

### True or False? Setters still work on a frozen object.

Answer: False. The setters still exist and can be called. They give the appearance of working, but they do not actually change values.

### What is the difference in layout time and painting time in a web browser?

The layout time is the time it takes to calculate the positioning of each object that will be painted. The layout is a 3d construct. Paint time is the time it actually takes to paint the points on the screen. Painting is a 2d construct.

### What is currying?

Converting a single function with multiple arguments into a function called multiple times with a single argument.

### What is a Generator function in JavaScript?

Generators are functions that can be exited and re-entered later. For example, a while loop in a generator functio can be paused.

### What is the scope of arrow functions?

The scope in which they were defined.

### What is the difference between imperative programming and declarative programming?

Imperative programming focuses on how to do things, declarative programming focuses on what to do. Declarative programming may take advantage of built-in APIs to accomplish things, while imperative programming explicitly controls the path of the code execution.

### What property guarantees access to the global object regardless of environment?

`globalThis`

### What is the Queue in JavaScript Runtime?

The Queue is list of messages to be processed, and each message has an associated function to call.
Different than the stack because stack is a list of dependent functions, where the more recent must be executed in order to execute the older properly. The Queue is First In, First Out, meaning oldest messages are processed first.

### What are some limitations of arrow functions?

- Arrow functions should not be used as methods
- Arrow functions do not have arguments, super, or new.target keywords
- Arrow functions cannot use yield keyword in it's body
- Arrow functions cannot be used as constructors

### What is the difference in the default scope of traditional functions and arrow functions?

Traditional functions default this to the window scope. Arrow functions execute in the scope in which they are created.

### Give an example of using new ES6 syntax for creating a parent/child relationship.

```js
let dog = { name: "buddy", legs: 4 };
let animal = { type: "mammal" };
Object.setPrototypeOf(dog, animal);
console.log(Object.getPrototypeOf(dog));
```

### Error v/s new Error

In React, `throw new Error("The application could not authenticate.");` logs into the console and shows an error screen while in development mode. Whereas the following code only logs into the console: `throw "The application could not authenticate.";`

In JS:

- `throw "My error"`: this creates an Error object and returns the primitive data extracted from the constructor "this" object. And if you try checking the typeof in the catch block, it tells you its a primitive typeof "string"
- `throw new Error("My error")`: this returns you an object where you can access the error value from the message property. What simply happens here is that the "new keyword" constructs a "this" object and assign "{name:"Error",message:"..."}" to it and returns it. And when you try to check the typeof from the catch block, you will see a typeof "object".

In general:
`throw new Error('problem')` captures a number of properties of the place where the error happened.
`throw 'problem'` does not.

Exceptions you plan to catch can be simple: throw 'problem'. Exceptions you don't plan to catch should use new Error('problem'). Let's say the local datastore is corrupted, you might be in a situation where you don't want to handle it, but you do want to flag it. In this case it's a good time to use the Error object so you have that stack snapshot.

### Number() conversion v/s parseInt()

`Number()` converts the type whereas parseInt parses the value of input.

```js
parseInt("32px"); // 32
parseInt("5e1"); // 5
Number("32px"); // NaN
Number("5e1"); // 50
```

`parseInt` will parse up to the first non-digit character. On the other hand, `Number` will try to convert the entire string.

`parseInt` accepts two parameters. The second parameter is used to indicate the radix number. If the value starts with `0x` or `0X`, then the radix is 16 (hexadecimal). In other cases, the radix is 10 (decimal). Since the method could be implemented differently in different versions of JavaScript and browsers, it's recommended to pass the radix number.

```js
parseInt("0101", 10); // 101
parseInt("0101", 2); // 5
```

They return different results when we passing special values such as `undefined` or `null`

```js
parseInt(); // NaN
parseInt(null); // NaN
parseInt(true); // NaN
parseInt(""); // NaN
Number(); // 0
Number(null); // 0
Number(true); // 1
Number(""); // 0
```

Space can create issue:

```js
parseInt("   5   "); // 5
parseInt("12 345"); // 12, not 12345
```

### Object.getOwnPropertyNames() vs Object.keys()

[Reference](https://thisthat.dev/object-get-own-property-names-vs-object-keys/)

### What are disadvantages of closures?

Overconsumption of memory because everytime a closure is formed, it consumes a lot of memory. And those closed over variables are not garbage collected till the program is over.

If not handled properly, it can lead to memory leak.

### Why setTimeout does not execute as per delay?

```js
// Start of JS program, a Global Execution Context (GEC) is created and pushed onto Call Stack
console.log("Start");

// On encountering setTimeout, the function passed is send to Web APIs and a timer is started
setTimeout(function cb() {
  console.log("Callback");
}, 5000);

// ... some million lines of code or a main thread blocking code taking 10 seconds and keeping the call stack busy
let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

// After 5th second mark, the CB is pushed into Callback Queue and it waits for 10 seconds
// as it'll wait for GEC to be pushed out of Call Stack
console.log("While expires");

// Note: Callback will be printed last
```

### What does it mean when people say don't block your main thread?

What that means is - don't block the call stack. If the call stack is not empty then it can't process any other event

### What is a simple way to block main thread?

```js
let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}
```

## Tricky outputs

### this

```js
var name = "outsideK";
var k = {
  name: "insideK",
  getName: function () {
    // this here points to k
    return function () {
      // this here points to window
      return this.name;
    };
  },
};

console.log(k.getName()()); // outsideK

var k = {
  name: "insideK",
  getName: function () {
    return () => {
      return this.name;
    };
  },
};
console.log(k.getName()()); // insideK
```

### Promise

```js
function pTest() {
  return new Promise(function (resolveFunction, rj) {
    resolveFunction(pTest); // ok
  });
}

pTest().then(() => console.log("Fulfilled")); // Fulfilled
```

The invocation of `resolutionFunc` includes a value parameter. The value is passed back to the tethered `promiseObj`. The `promiseObj` (asynchronously) invokes any `.then()` associated with it.

```js
new Promise((r, rj) => rj())
  .then(() => console.log("ok"))
  .catch(() => console.log("catch"))
  .then(() => console.log("last ok")); // catch last ok
```

### concat string

What does the below code output to the console and why?

```js
let str = new String("aaa");
str.concat("bbb").concat("ccc");
console.log(str); // aaa
```

returns a new string, the original string is not affected.

### strict mode

What will the code below output to the console and why?

```js
z = 10;
console.log(z);
```

If strict mode is not enabled, z is a global variable initialized as 10, so the answer is 10. If strict mode is on, it will not allow z to be initialized without the var, let, or const keyword, so the answer will be Compile time error

### Variable hoisting

```js
console.log(x);
x = 5;
if (x) {
  var x = 10;
  console.log(x);
}
// undefined, 10
```

Remember var is function scoped and not block scoped. It will throw lint errors in an IDE environment.

```js
var x = 10;
console.log(x);
var x;
console.log(x);
// 10, 10
```

```js
var x = 12;
function f() {
  let x = 13;
  console.log(x); // 13
}
f();
console.log(x); // 12

function fizz() {
  var y = 99;
  if ((y = 100)) {
    var y;
    console.log(y); // 100
  }
  console.log(y); // 100
}
fizz();
console.log(y); // not defined error
```

```js
let s = "out";
if (true) {
  let s = "in";
  console.log(s); // in
}
console.log(s); // out

var varS = "out";
if (true) {
  var varS = "in";
  console.log(varS); // in
}
console.log(varS); // in
```

### Comma separator

```js
let x = (1, 2, 3);
console.log(x); // 3
```

The comma separator returns the final value.

### valueOf

What is the value of str after the code executes?

```js
const str = " this".concat("that ").substring(3).trim().valueOf(2); // histhat
```

`valueOf` simply returns the value of whatever string it’s called on.

### Static method

What does the code print?

```js
class MyClass {
  static staticMethod() {
    return this.name;
  }
  constructor() {
    this.name = "Jon";
  }
}
const me = new MyClass();
console.log(MyClass.staticMethod()); // MyClass
```

The this keyword in staticMethod is not scoped to the instance level.

### Unsigned Right Shift assignment

```js
let a = 8;
a >>>= 3;
console.log(a); // 1
```

In this case, 8 (1000 in binary) has its bits moved right by three (0001).

### Multiple comparisons

What does 3 > 2 > 1 return?

Answer: False. 3 > 2 evaluates to true. Then true > 1 evaluates to false.

### return statement

True or False? The below code compiles and prints 3?

```js
const test = () => {
return
1 + 2;
} console.log(test());
```

Answer: False. return statements automatically have a semicolon placed after them by the compiler if the semicolon was left off. It is a good idea to use parenthesis if you ever need to wrap lines in a return statement.

### void

What is the difference in the output bewteen the two following functions?

```js
void function voidExample() { // works
console.log("No Error!");
}();
function noVoidExample() { // throws an error
console.log("No Error!");
}();
```

The void keyword allows for the execution of functions that may not otherwise execute.

### innerHTML

```js
document.getElementById("app").innerHTML = `
<div>
hewo
    hewo2
</div>`;
```

Answer: hewo hewo2

### Mixed type addition

```js
console.log(3 + "2"); // 32
```

3 will be coerced into a string

### Object assignment

What will the code below output to the console?

```js
const a = { x: 1 };
const b = { ...a };
const c = {};
Object.assign(c, a);
a.x = 2;
console.log(a.x); // 2
console.log(b.x); // 1
console.log(c.x); // 1
```

### for loop

What will the code below output to the console and why?

```js
let i = 10;
for (; i < 12; ) {
  console.log(++i);
}
// 11, 12
```

Evaluate the code below. What are the first and last outputs of the loop?

```js
for (let i = 0; i <= 10; ++i) {
  console.log(i);
}
```

Answer: 0, 10. Interestingly, i prints out with a value of zero in the initial iteration despite ++i.

### Promise without asynchronity

```js
function resolveQuickly(x) {
  return new Promise((resolve) => {
    console.log(x);
  });
}
async function asyncTest() {
  var x = resolveQuickly(10);
  console.log(5);
}
asyncTest(); // 10, 5
```

The function has nothing asynchronous in the Promise, so the Promise resolves synchronously.

### Multiple assignment

```js
(function () {
  var a = (b = 3);
})();
console.log(typeof a); // undefined
console.log(typeof b); // number
/**
Reason is, it's compiled to following:
(function() {
  this.b = 3;
  var a = b;
})();
*/
```

### .bind(this)

```js
x = 9;
var module = {
  x: 81,
  getX: function () {
    return this.x;
  },
};

module.getX(); // 81

var getX = module.getX;
getX(); // 9, because in this case, "this" refers to the global object

// create a new function with 'this' bound to module
var boundGetX = getX.bind(module);
boundGetX(); // 81

// Example showing binding some parameters
var sum = function (a, b) {
  return a + b;
};

var add5 = sum.bind(null, 5);
console.log(add5(10)); // 15
```

`bind` allows to:

- set the value of "this" to an specific object.
- reuse methods
- curry a function

### setTimeout v/s queueMicrotask

Which of the following prints first?

```js
setTimeout(() => {
  console.log("setTimeout wins");
}, 0);
queueMicrotask(() => {
  console.log("queueMicrotask wins");
});
```

Answer is queueMicrotask wins. Tasks from queueMicrotask are called after the callstack is empty and before the event loop is called. Tasks from setTimeout are part of the eventQueue.

JavaScript promises and the Mutation Observer API both use the microtask queue to run their callbacks, but there are other times when the ability to defer work until the current event loop pass is wrapping up.

### Passing primitive to function

What will the code below output to the console and why?

```js
let x = 10;
const byValue = (y) => {
  y = 20;
};
byValue(x);
console.log(x); // 10
```

Unlike objects, when primitives are passed to a function only their value is passed, not the reference to the memory location.

### Comparing objects v/s primitives with ===

Consider the following code. What does each line output?

```js
console.log(new String("yes") === new String("yes")); // false because two objects compared which are unique
console.log("yes" === "yes"); // true because two string primitives compared
```

### Passing {} to map.set

What will the code below output to the console and why?

```js
const map = new Map();
map.set({}, 1);
console.log(map.get({})); // undefined
```

`map.get({})` is valid syntax, but the Object in the set and in the get are two different empty objects in memory.

### Console output for class

What will the code below output to the console and why?

```js
class Person {
  name: string;
  DOB: string;
}
console.log(typeof Person); // function
```

This is a reminder that classes are simply syntactic sugar that make JavaScript feel more object oriented.

## Compare

### Event Loop, Call Stack, Event & Job Queue

**Stack**: This is where all your javascript code gets pushed and executed one by one as the interpreter reads your program, and gets popped out once the execution is done.

**Heap**: This is where all the memory allocation happens for your variables, that you have defined in your program.

**Callback Queue**: This is where your asynchronous code gets pushed to, and waits for the execution.

**Event Loop**: Then comes the Event Loop, which keeps running continuously and checks the Main stack, if it has any frames to execute, if not then it checks Callback queue, if Callback queue has codes to execute then it pops the message from it to the Main Stack for the execution.

**Job Queue**: Apart from Callback Queue, browsers have introduced one more queue which is “Job Queue”, reserved only for new Promise() functionality. So when you use promises in your code, you add .then() method, which is a callback method. These `thenable` methods are added to Job Queue once the promise has returned/resolved, and then gets executed.

### var v/s let v/s const

All declarations (`function`, `var`, `let`, `const` and `class`) are hoisted in JavaScript, while the `var` declarations are initialized with `undefined`, but `let` and `const` declarations remain uninitialized.

```
---------------------------------------------------------------------------
Keyword | Scope          | Hoisting | Can Be Reassigned | Can Be Redeclared
---------------------------------------------------------------------------
var     | Function scope | Yes      | Yes               | Yes
let     | Block scope    | Yes       | Yes               | No
const   | Block scope    | Yes       | No                | No
```

- `var` declarations are globally scoped or function scoped while `let` and `const` are block scoped.
- `var` variables can be updated and re-declared within its scope; `let` variables can be updated but not re-declared; `const` variables can neither be updated nor re-declared.
  ```js
  let greeting = "say Hi";
  let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared
  ```
  However, if the same variable is defined in different scopes, there will be no error:
  ```js
  let greeting = "say Hi";
  if (true) {
    let greeting = "say Hello instead";
    console.log(greeting); // "say Hello instead"
  }
  console.log(greeting); // "say Hi"
  ```
- They are all hoisted to the top of their scope. But while `var` variables are initialized with `undefined`, `let` and `const` variables are not initialized. So if you try to use a `let` variable before declaration, you'll get a `Reference Error`.
- While `var` and `let` can be declared without being initialized, `const` must be initialized during declaration.

**Problem with var**

```js
var greeter = "hey hi";
var times = 4;

if (times > 3) {
  var greeter = "say Hello instead";
}

console.log(greeter); // "say Hello instead"
```

If you have used greeter in other parts of your code, you might be surprised at the output you might get.

**Caveat with const**

While a `const` object cannot be updated, the properties of this objects can be updated.

```js
const greeting = {
  message: "say Hi",
  times: 4,
};
greeting.message = "say Hello instead"; // OK
```

### Map v/s Object({})

More on [Map](https://www.javascripttutorial.net/es6/javascript-map/)

```js
var map = new Map([
  [1, 2],
  [3, 4],
]);
console.log(map instanceof Object); //true
var obj = new Object();
console.log(obj instanceof Map); //false
```

Creating plain Object and accessing Object’s property with a specific key is much faster than creating a Map. Also, in scenarios where there is a need to apply separate logic to individual property/element(s), then Object is definitely the choice `var obj = { print: function(){ //.. } }`.
_Map tends to perform better in storing large set of data, especially when keys are unknown until run time, and when all keys are the same type and all values are the same type._
If I do `obj[123] = true` and then `Object.keys(obj)` then I will get `["123"]` rather than `[123]`. A Map would preserve the type of the key and return `[123]` which is great.

**Key field**: in Object, it follows the rule of normal dictionary. The keys MUST be simple types — either integer or string or symbols. Nothing more. But in Map it can be any data type (an object, an array, etc…).
**Element order**: in Map, original order of elements (pairs) is preserved, while in Object, it isn’t.
**get**: `map.get(1)` v/s `obj['id']`
**Checking if key exists**: `map.has(1)` v/s `'id' in obj`
**set/add**: `map.set(4,5)` v/s `obj['gender'] = 'female'`
**delete**: `map.delete(1) or map.clear()` v/s `delete object['id']`
**size**: `map.size` v/s `Object.keys(obj).length`
**iteration**:
Map is built-in iterable.

```js
console.log(typeof map[Symbol.iterator]); // function
//For map: { 2=>3, 4=>5}
for (const item of map) {
  console.log(item);
}
//Or
for (const [key, value] of map) {
  console.log(`key: ${key}, value: ${value}`);
}
```

But with Object,

```js
// For: {id: 1, name: "test"}
for (var key in obj) {
  console.log(`key: ${key}, value: ${obj[key]}`);
}
```

### event.target v/s event.currentTarget

- event.currentTarget returns the element the triggered listener was attached to.
- event.target returns the most granular element the event was triggered on

### Array.splice() vs Array.slice()

- The `splice()` method returns the removed item(s) in an array and `slice()` method returns the selected element(s) in an array, as a new array object.
- The `splice()` method changes the original array and `slice()` method doesn’t change the original array.
- The `splice()` method can take `n` number of arguments.

```js
var array2 = [6, 7, 8, 9, 0];
console.log(array2.splice(2, 1));
// shows [8]
console.log(array2.splice(2, 0));
//shows [] , as no item(s) removed.

var array3 = [11, 12, 13, 14, 15];
console.log(array3.splice(2, 1, "Hello", "World"));
// shows [13]

console.log(array3);
// shows [11, 12, "Hello", "World", 14, 15]

// If Argument(2) is less than 0 or equal to NaN, it is treated as if it were 0.
var array6 = [26, 27, 28, 29, 30];
console.log(array6.splice(2, -5, "Hello"));
// shows []

console.log(array6);
// shows [26,27,"Hello",28,29,30]
```

- The `slice()` method can take 2 arguments.

```js
var array = [1, 2, 3, 4, 5];
console.log(array.slice(2));
// shows [3, 4, 5], returned selected element(s).
console.log(array.slice(-2));
// shows [4, 5], returned selected element(s).
console.log(array);
// shows [1, 2, 3, 4, 5], original array remains intact.
var array2 = [6, 7, 8, 9, 0];
console.log(array2.slice(2, 4));
// shows [8, 9]
console.log(array2.slice(-3, -1));
// shows [8, 9]
```

### Object.assign v/s spread

The key difference is that spread defines properties, whilst Object.assign() sets them.This means Object.assign() triggers setters.

```js
// First, Object.assign() triggers setters, spread doesn’t:

Object.defineProperty(Object.prototype, 'foo', {
    set(value) {
        console.log('SET', value);
    },
});
const obj = {foo: 123};
// The previous piece of code installs a setter foo that is inherited by all normal objects.
// If we clone obj via Object.assign(), the inherited setter is triggered:

Object.assign({}, obj)
// SET 123
// {}

// With spread, it isn’t:
{ ...obj }
// { foo: 123 }

// Object.assign() also triggers own setters during copying, it does not overwrite them.
```

## Credits/Reference

1. Cody Lindley - JavaScript Enlightenment
2. Kyle Simpson - You Dont Know JS
3. Internet

## Read More

1. [The Ultimate Guide to Hoisting, Scopes, and Closures in JavaScript](https://ui.dev/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript/)
2. [Understanding the "this" keyword, call, apply, and bind in JavaScript](https://ui.dev/this-keyword-call-apply-bind-javascript/)
