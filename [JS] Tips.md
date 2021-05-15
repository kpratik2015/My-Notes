# Javascript Tips

- [Javascript Tips](#javascript-tips)
  - [Multiple condition checking](#multiple-condition-checking)
  - [String into a number](#string-into-a-number)
  - [Find max and min number in array](#find-max-and-min-number-in-array)
  - [Double NOT bitwise operator](#double-not-bitwise-operator)
  - [Repeat a string multiple time](#repeat-a-string-multiple-time)
  - [Deep clone of multi-level object](#deep-clone-of-multi-level-object)
  - [Immutable array insert](#immutable-array-insert)
  - [Web Performance](#web-performance)
    - [Refresh Rates](#refresh-rates)
    - [Shipping frame to screen](#shipping-frame-to-screen)
    - [RAIL Model by Google](#rail-model-by-google)
    - [Profile Applications](#profile-applications)
    - [Memory](#memory)
    - [Detect Memory Leaks in Node.js](#detect-memory-leaks-in-nodejs)

## Multiple condition checking

```js
//Long version
if (value === 1 || value === "one" || value === 2 || value === "two") {
  //Execute code
}

//Shorthand 1
if ([1, "one", 2, "two"].indexOf(value) >= 0) {
  //Execute code
}
//Shorthand 2
if ([1, "one", 2, "two"].includes(value)) {
  //Execute code
}
```

## String into a number

```js
// Long version
let total = parseInt("45");
let average = parseFloat("421.6");

//Shorthand
let total = +"45";
let average = +"421.6";
```

The unary plus operator precedes its operand and evaluates to its operand but attempts to convert it into a number if it isn't already.

```js
console.log(+true); // 1
console.log(+false); // 0
console.log(+null); // 0
```

What if we want to be more explicit in our code?

```js
Number("42"); // 42
Number("1.3"); // 1.3
Number("tax"); // NaN
```

`parseInt()` takes a String as a first argument and a base to which that String will be converted to.

```js
parseInt("1234", 10); // 1234
parseInt("11 players", 10); // 11
parseInt("player 2", 10); // NaN
parseInt("10.81", 10); // 10
```

`parseInt()` tries to get a number from a string that does not only contain a number, but if the string does not start with a number, you’ll get NaN.

## Find max and min number in array

```js
// Shorthand
const arr = [2, 8, 15, 4];
Math.max(...arr); // 15
Math.min(...arr); // 2
```

## Double NOT bitwise operator

You can use the `~~` instead of `Math.floor()`. Only works for 32-bit numbers, so use it wisely.

```js
//Long version
const floor = Math.floor(4.8); // 4

//Shorthand
const floor = ~~4.8; // 4
```

## Repeat a string multiple time

```js
"Hello ".repeat(5); // Hello Hello Hello Hello Hello
```

## Deep clone of multi-level object

It won't work when you have functions as values.

```js
let obj = { x: 20, y: { z: 30 } };
const cloneObj = JSON.parse(JSON.stringify(obj));
```

## Immutable array insert

```js
const insert = (arr, index, newItem) => [
  ...arr.slice(0, index), // first half of array
  newItem, // new item
  ...arr.slice(index), // rest of array
];

const items = ["S", "L", "C", "E"];

const result = insert(items, 2, "I");

console.log(result); // ["S", "L", "I", "C", "E"]
```

## Web Performance

### Refresh Rates

- Devices refresh screens 60 times a second = 60 fps
- Means each frame should take 16 ms
- In reality, a frame takes ~10ms

### Shipping frame to screen

The pixel pipeline: JS => Style => Layout => Paint => Composite

- **JS** used to handle work that will result in visual changes
  - CSS Animations, Transitions and the Web Animations API are also used here
- **Style** Browser figures out which CSS rules should be applied to elements based on CSS selectors
  - The style is then calculated at each element
- **Layout** The browser calculates how much space each element takes up and where it is on screen.
  - Each element affects other elements in the layout (Web layout model)
- **Paint** The browser paints all the pixels on screen
  - It draws every visual part of an element (text, color, images, and etc.)
- **Composite** The browser draws the elements according to their layer. (If elements overlap each other)
  - Happens on the machine GPU (step is fast)

Reflows

- Reflow might occur whenever a visual change requires a change in the layout of the page
  - Examples: browser resize, DOM manipulation and etc.
- All the flow of the process will run again.

Repaints

- It occurs when a visual change doesn't require recalculation of the whole layout
  - Examples: element visibility change, changes in text color or background colors and etc.
- All the flow of the process except layout will run again

Reflows and Repaints are heavy processes. Try to avoid them. They are the main cause of web performance

Changes without Reflow or Repaint

- JS or CSS changes that don't affect neither layout or paint
- The pixel pipeline will run again without layout and paint

### RAIL Model by Google

- User-centric performance model
  - Response: process events in under 50ms
  - Animation: produce a frame in 10ms
  - Idle: maximize idle time
  - Load: deliver content and become interactive in under 5 seconds

### Profile Applications

DevTools Performance Tab

When your manager says the page load is slow, go in Performance tab and click on reload icon.
Switch to Bottom-Up tab and Sort descending by Self Time.

Then you can analyze your code file that appear in top by clicking on the function call that takes the most time

`console.log()` is costly in production.

**Profiling Process**

_Establish baseline_ i.e. run app in incognito mode so that all extensions are disabled and don't come in between.

Create another branch like profiling goal and then that's the baseline.

_Collect Data_ & _Analyze_ i.e. timeline shows you things for each and every process that ran.

_Tune App_ i.e. trial/error

_Test and Measure_ and commit.

Now suppose we want to profile for a slow process that happens after clicking a button. Start recording profile, perform action once or twice. Stop profiling.

Go to Bottom Up tab and find files that is your code that might be slowing down things.

### Memory

A good case for memory leak is when an application is left idle for say one hour and you return to operate it but the tab dies or application hangs up.

Another case is when a big object is getting cloned on every navigation of user.

Solution: A service that offers such big data i.e. a single source of truth.

**Memory Lifetime**

- Allocation: system allocates some memory for the application.
- Usage: we read or write to memory
- Release: we close the application or function ended then memory is released to a pool of free memory

**Memory**

- can be represented as a connected graph
- the graph starts with a root node.

What about unrefered memory?

**Garbage Collector**

- Looks out for unreachable objects, which are removed from the memory
- Known algorithms:
  - Reference-counting garbage collection
  - Mark-and-sweep

**Reference-counting Garbage Collection**

- An object is said to be garbage, or collectible if there are zero references pointing to it.

**Mark and sweep (SWEEP)**

More recent algorithm in V8. V8 is the JS engine in chrome and in most browsers.

- We declare something as a Garbage Collection root and then we mark all the nodes the root is pointing towards.
- In sweep phase, we'll remove all the nodes that aren't part of GC root's references

Memory leaks is memory that isn't required by an app, but isn't returned to pool of free memory.

**Common JS Memory Leak Pitfalls**

- Accidental global variables. A class with getter setter is better or a service.
- Forgotten timers or callbacks
- Closures
  - Whenever we create a closure and that closure is pointing to some global variable. That might cause memory leak in future. We won't be able to release that closure
- Out of DOM references
  - You still have reference to a dom element in JS but it has been removed

**Profiling for Memory Leaks**

More Tools -> Performance monitor. We can see in a point of time if there has been a memory leak. So for a short timeframe.

When leak starts... JS heap size becomes big and graph is raised but never falls down. It could be a problem.

Another option is to record in performance tab.

In timeline, you can see blue line as memory consumption of application. It will show an increasing trend.

A line for Nodes can also be checked.

Memory tab can also be used for checking memory leak.

Get Heap Snapshot before doing the leaking operation. And one after leak operation. There should be a considerable size difference in heap snapshot.

You can then compare through dropdown.

Allocation timelines can be started and while recording we can perform actions to check for leak. It takes a lot of time.

### Detect Memory Leaks in Node.js

- Using Chrome DevTools
  - Run node in -inspect mode `node --inspect index.js`
  - Use Memory tab
- Using node-memwatch
- Using heapdump
  - Writing snapshot for each request for instance. The snapshot can be loaded in the DevTools

In inspect mode, we can go to chrome's inspect devices. We then have a memory tab for our Node.js application.

`autocannon -c 1 -d 30 http://localhost:3003` - It'll blast server endpoint with a lot of request. Then we can take snapshots of application via Memory tab and see things changing.
