/**
Throttling is a way/technique to restrict the number of function execution/call

Subtracting (Date.now() - lastRan) from limit gives us the remaining time until the next valid call. For example, if limit is 1000 ms and the last call was made 800 ms ago, the remaining time would be 200 ms, which means we need to wait for 200 ms before making the next call.
*/
const throttle = (func, limit) => {
  let timer;
  let lastRan;
  return (...args) => {
    if (!lastRan) {
      func.apply(this, args);
      lastRan = Date.now();
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};
