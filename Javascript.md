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
  - [Asynchrony](#asynchrony)
    - [Concurrency](#concurrency)
  - [Callbacks](#callbacks)
  - [Promises](#promises)
    - [Promise Patterns](#promise-patterns)
  - [Generators](#generators)
    - [Generator Delegation](#generator-delegation)
    - [Thunks](#thunks)
  - [Program Performance](#program-performance)
    - [Worker Environment](#worker-environment)
    - [Data Transfer](#data-transfer)
    - [Shared Workers](#shared-workers)
  - [Benchmarking](#benchmarking)
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
  - [Credits/Reference](#creditsreference)

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

## Credits/Reference

1. Cody Lindley - JavaScript Enlightenment
2. Kyle Simpson - You Dont Know JS
