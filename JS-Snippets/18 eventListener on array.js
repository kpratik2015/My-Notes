/**
 * For an array, create an event subscribing and publishing mechanism, where an event gets dispatched, when an item is added to an array,
 * For simplicity do not alter the push method, instead create a new pushWithEvent method.
 */

/** Test */

// example
const a = [];
a.addListener("add", (args) => {
  console.log("items were added", args);
});
a.addListener("add", (args) => {
  console.log("items were added again", args);
});
a.pushWithEvent(1, 2, 3, "a", "b");
console.log(a);
a.pushWithEvent("hello");
a.pushWithEvent(55);
setTimeout(() => {
  a.pushWithEvent("delayed");
}, 5000);

/** O/P */

// items were added [ 1, 2, 3, 'a', 'b' ]
// items were added again [ 1, 2, 3, 'a', 'b' ]
// [ 1, 2, 3, 'a', 'b' ]
// items were added [ 'hello' ]
// items were added again [ 'hello' ]
// items were added [ 55 ]
// items were added again [ 55 ]
// items were added [ 'delayed' ]
// items were added again [ 'delayed' ]














Array.prototype.listeners = {};

Array.prototype.addListener = function (eventName, callback) {
  if (!this.listeners?.[eventName]) {
    this.listeners[eventName] = [];
  }
  this.listeners[eventName].push(callback);
};

Array.prototype.triggerEvent = function (eventName, ...args) {
  this.listeners[eventName]?.forEach((callback) => {
    callback(args, this);
  });
};

Array.prototype.pushWithEvent = function (...args) {
  this.push(...args);
  /**
   * If push cannot be used then:
   */
  // const size = this.length;
  // const argsList = Array.prototype.slice.call(arguments);
  // for (let index = 0; index < argsList.length; index++) {
  //   this[size + index] = argsList[index];
  // }
  this.triggerEvent("add", ...args);
};
