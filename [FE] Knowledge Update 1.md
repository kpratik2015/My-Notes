# Knowledge Update 1

- [Knowledge Update 1](#knowledge-update-1)
  - [General](#general)
  - [Javascript](#javascript)
    - [Zero delay is in fact not zero (in a browser)](#zero-delay-is-in-fact-not-zero-in-a-browser)
    - [Proper Tail Call](#proper-tail-call)
    - [Differences between arguments object and rest parameter](#differences-between-arguments-object-and-rest-parameter)
    - [Bullet points](#bullet-points)
  - [React](#react)
    - [Bullet Points](#bullet-points-1)

## General

- For webpages, the DOCTYPE declaration is required. It is used to tell user agents what version of the HTML specifications your document respects. Once a user agent has recognized a correct DOCTYPE, it will trigger the _no-quirks mode_ matching this DOCTYPE for reading the document.
  - Quirks Mode defines quirks in CSS and Selectors that are necessary to support for Web browsers for compatibility with the Web.
- Multi-lingual HTML via
  - `<html lang="en">...</html>`
  - `<link rel="alternate" hreflang="de" href="http://de.example.com/page.html" />`
- `async` for independent script like analytics and can execute as soon as available.
- `defer` respects defer scripts ordering and executes after page finished parsing. It should not contain `document.write`

## Javascript

### Zero delay is in fact not zero (in a browser)

In the browser, there’s a limitation of how often nested timers can run. “After five nested timers, the interval is forced to be at least 4 milliseconds.”. This limitation comes from ancient times and many scripts rely on it, so it exists for historical reasons.

For server-side JavaScript, that limitation does not exist, and there exist other ways to schedule an immediate asynchronous job, like setImmediate for Node.js.

Example, `setTimeout(func, 0)` will run with no delay for first 4 calls but after that there will be approx. 4ms delay

### Proper Tail Call

First, we should know about tail call before talking about "Proper Tail Call". A tail call is a subroutine or function call performed as the final action of a calling function. Whereas Proper tail call(PTC) is a technique where the program or code will not create additional stack frames for a recursion when the function call is a tail call.

For example, the below classic or head recursion of factorial function relies on stack for each step. Each step need to be processed upto n \* factorial(n - 1)

```js
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5)); //120
```

But if you use Tail recursion functions, they keep passing all the necessary data it needs down the recursion without relying on the stack.

```js
function factorial(n, acc = 1) {
  if (n === 0) {
    return acc;
  }
  return factorial(n - 1, n * acc);
}
console.log(factorial(5)); //120
```

The above pattern returns the same output as the first one. But the accumulator keeps track of total as an argument without using stack memory on recursive calls.

### Differences between arguments object and rest parameter

- The arguments object is an array-like but not an array. Whereas the rest parameters are array instances.
- The arguments object does not support methods such as sort, map, forEach, or pop. Whereas these methods can be used in rest parameters.
- The rest parameters are only the ones that haven’t been given a separate name, while the arguments object contains all arguments passed to the function

### Bullet points

- Nested `setTimeout` calls are a more flexible alternative to `setInterval`, allowing us to set the time between executions more precisely. [Ref](https://javascript.info/settimeout-setinterval)
- Using recursive `setTimeout` guarantees that until our method gets fully executed it will never be sent for another execution.
- `requestAnimationFrame` is better because: (a) browser can optimize it so animations are smoother, (b) animations in inactive tab will stop, (c) more battery-friendly
- `.bind()` will do is return us a new function, that can be invoked later, instead of invoking the original function which `call` and `apply` do.
- It's worth noting that the `{ __proto__: ... }` syntax is different from the `obj.__proto__` accessor: the former is standard and not deprecated.
- Defining `Array.prototype.myMethod = function () {...}` and then using `myMethod` on all array instances is a misfeature called _monkey patching_ Risk is forward compatibility
- If you want to encode characters such as `/ ? : @ & = + $ #` then you need to use `encodeURIComponent()` otherwise `encodeURI()`
- `document` is direct child of `window` object.
- Global variables are those that are available throughout the length of the code without any scope. The var keyword is used to declare a local variable but if you omit it then it will become global variable. `msg = "Hello"; // var is missing, it becomes global variable`
- Getting query string values `new URLSearchParams(window.location.search).get("someQueryParam")`
- Convert `arguments` to array `Array.prototype.slice.call(arguments)`
- You can use `function.length` syntax to find the number of parameters expected by a function.
- Random integer in a range `const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min`
- Remember freezing is only applied to the top-level properties in objects but not for nested objects.
- If you use get the property will be defined on the prototype of the object whereas using Object.defineProperty() the property will be defined on the instance it is applied to.
- The `Object.isExtensible()` method is used to determine if an object is extendable or not. i.e, Whether it can have new properties added to it or not.
- The `Object.preventExtensions()` method is used to prevent new properties from ever being added to an object.
- A thunk is just a function which delays the evaluation of the value. `const add = (x, y) => x + y; const thunk = () => add(2, 3); thunk();`
- A repaint occurs when changes are made which affect the visibility of an element, but not its layout.
- Short multi-dimensional array flat: `const flattenMultiArray = (arr) => { const flattened = [].concat(...arr); return flattened.some((item) => Array.isArray(item)) ? flattenMultiArray(flattened) : flattened; }`
- To disable right click on webpage: `<body oncontextmenu="return false;"></body>`
- Minimum timeout throttling. Browsers: 4ms delay after some x successive calls. NodeJS 1ms delay.
- Identifying value is primitive or not: `const isPrimitive = (val) => Object(val) !== val`. If the value is a primitive data type, the Object constructor creates a new wrapper object for the value. But If the value is a non-primitive data type (an object), the Object constructor will give the same object.
- The function declarations are hoisted but not class declarations
- In some JS environments, Promises swallow errors
- By default, plain objects are not iterable. But you can make the object iterable by defining a `Symbol.iterator` property on it.
- To check if value is promise or not: `const isPromise = (object) => Promise.resolve(object) == object` or `const isPromise = (value) => Boolean(value && typeof value.then === "function")`
- It's possible to use expression in switch cases by assinging true value for switch condition. `switch (true) { ... }`
- `setImmediate(..)` happens after end of current event loop. `process.nextTick()` will resolve before event loop continues.
- `console.log([1, 2] + [3, 4]);` => `1,23,4`
- `Symbol.for()` function creates a symbol in a global symbol registry list. But it doesn't necessarily create a new symbol on every call, it checks first if a symbol with the given key is already present in the registry and returns the symbol if it is found. Otherwise a new symbol created in the registry.
- `ReferenceError`
  ```js
  function outer(f = inner()) {
    function inner() {
      return "Inner";
    }
  }
  outer();
  ```
- `const obj = { key: "value" }; const array = [...obj];` TypeError, obj is not iterable
- `toFixed` rounds w.r.t 2nd decimal digit. For instance `4.94.toFixed(1)` => `'4.9'`, `4.95.toFixed(1)` => `'5.0'`


## React

### Bullet Points

- In useEffect, React will first run the cleanup function (if you provided it) with the old values, and then run your setup function with the new values.
- `useTransition()` wraps the state updating code, whilst `useDeferredValue()` wraps a value that's affected by the state update. You don't need to (and shouldn't) use both together, since they achieve the same goal in the end. Instead, it makes sense to prefer `useTransition()`, if you have some state update that should be treated with a lower priority and you have access to the state updating code. If you don't have that access, use `useDeferredValue()`
- values you pass to `useDeferredValue` should either be primitive values (like strings and numbers) or objects created outside of rendering
- Unlike debouncing or throttling, `useDeferredValue` doesn’t require choosing any fixed delay. If the user’s device is fast (e.g. powerful laptop), the deferred re-render would happen almost immediately and wouldn’t be noticeable
- Hooks can be made conditional by moving them out in separate component and conditionally rendering the component
- When you update a component during rendering, React throws away the returned JSX and immediately retries rendering
  - ```jsx
      function List({ items }) {
      const [isReverse, setIsReverse] = useState(false);
      const [selection, setSelection] = useState(null);

      // 🔴 Avoid: Adjusting state on prop change in an Effect
      useEffect(() => {
        setSelection(null);
      }, [items]);
      // ...

      // Instead:

      const [isReverse, setIsReverse] = useState(false);
      const [selection, setSelection] = useState(null);

      // Better: Adjust the state while rendering
      const [prevItems, setPrevItems] = useState(items);
      if (items !== prevItems) {
        setPrevItems(items);
        setSelection(null);
      }
    }

    ```
- update the state of both components (parent and child) within the same event handler - React will batch updates. Whenever you try to keep two different state variables synchronized, try lifting state up instead!
- [Fetching data](https://react.dev/learn/you-might-not-need-an-effect#fetching-data) use cleanup.
- Each Effect should represent an independent synchronization process