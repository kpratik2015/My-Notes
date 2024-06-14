/** Cache fetch API response for some duration and post that make a fresh API call */

const cachedFetch = cachedAPI(1500);

cachedFetch('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => console.log(a));

setTimeout(() => {
  // from cache
  cachedFetch('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => console.log(a));
}, 700);

setTimeout(() => {
  // fresh call
  cachedFetch('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => console.log(a));
}, 2000);

function cachedAPI(duration) {

  const hashParams = (path, config) => {
    const stringifyKey = Object.keys(config).sort().map(k => `${k}:${config[k]}`).join('-')
    return `${path}${stringifyKey}`
  }

  const apiCall = async (path, config) => {
    try {
      const response = await fetch(path, config);
      return response.json();
    } catch (e) {
      console.error('Something went wrong ', e);
    }
  }

  const cache = {};

  return async (path, config) => {

    const hashedKey = hashParams(path, config);

    const cachedValue = cache[hashedKey];

    if (!cachedValue || Date.now() > cachedValue.expiryTime) {
      console.log("Fresh call");
      const value = await apiCall(path, config);
      cache[hashedKey] = { value, expiryTime: Date.now() + duration };
    } else {
      console.log("From cache");
    }

    return cache[hashedKey].value;

  }
}