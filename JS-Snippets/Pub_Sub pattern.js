/**
2 Actors:
1) Host (Publisher)
2) Observer (Subscriber)
*/

const PubSub = function () {
  this.subscribers = [];
  this.subscribe = (cb) => {
    this.subscribers.push(cb);
  };
  this.unsubscribe = (cb) => {
    this.subscribers = this.subscribers.filter((s) => s !== cb);
  };
  this.fire = (msg, thisObj = globalThis) => {
    this.subscribers.forEach((s) => {
      s.call(thisObj, msg);
    });
  };
};

/** Test */

// 1st observer
const moveHandler = function (item) {
  console.log("fired: " + item);
};

// 2nd observer
const moveHandler2 = function (item) {
  console.log("Moved: " + item);
};

const move = new PubSub();

// subscribe 1st observer
move.subscribe(moveHandler);
move.fire("event #1");

// unsubscribe 1st observer
move.unsubscribe(moveHandler);
move.fire("event #2");

// subscribe 1st & 2nd observer
move.subscribe(moveHandler);
move.subscribe(moveHandler2);
move.fire("event #3");
