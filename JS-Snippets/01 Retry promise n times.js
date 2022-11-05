const wait = ms => new Promise((r) => {
    setTimeout(r, ms);
})

const retryWithDelay = (
  thePromise,
  retries = 3,
  delay = 50,
  finalErr = "Retry failed"
) => {
  return new Promise((resolve, reject) => {
    return thePromise()
      .then(resolve)
      .catch(() => {
        if (retries > 0) {
          return (
            wait(delay)
              //recursively call the same function to retry with max retries - 1
              .then(() => {
                return retryWithDelay(thePromise, retries - 1, delay, finalErr);
              })
              .then(resolve)
              .catch(reject)
          );
        }

        // throw final error
        return reject(finalErr);
      });
  });
}

/** Test */

// Test function
const getTestFunc = () => {
  let callCounter = 0;
  return async () => {
    callCounter += 1;
    // if called less than 5 times
    // throw error
    if (callCounter < 5) {
      throw new Error('Not yet');
    }
  }
}

// Test the code
const test = async () => {
  await retryWithDelay(getTestFunc(), 10);
  console.log('success');
  await retryWithDelay(getTestFunc(), 3);
  console.log('will fail before getting here');
}

// Print the result
test().catch(console.error);