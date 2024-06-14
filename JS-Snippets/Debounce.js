/**
It is used to invoke/call/execute function only when things have stopped happening for a given specific time.
*/

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

function saveInput() {
  console.log("Saving data");
}
const processChange = debounce(() => saveInput());

// processChange() can be used

function debounceWithTrailLead(func, timeout = 300, options = { leading: true, trailing: true }) {
  let timer;
  let isLeadingInvoked = false;
  return (...args) => {

    clearTimeout(timer);

    // handle leading
    if (options.leading && !timer) {
      func.apply(this, args);
      isLeadingInvoked = true;
    } else {
      isLeadingInvoked = false;
    }

    timer = setTimeout(() => {
      // handle trailing
      if (options.trailing && !isLeadingInvoked) {
        func.apply(this, args);
      }
    }, timeout);
  };
}